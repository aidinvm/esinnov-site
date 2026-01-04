import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, email, company, service, useCase, captchaToken } = await request.json();

        // Validate required fields
        if (!name || !email || !service || !useCase) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Verify hCaptcha token
        if (!captchaToken) {
            return NextResponse.json(
                { error: 'Please complete the human verification' },
                { status: 400 }
            );
        }

        const captchaResponse = await fetch('https://api.hcaptcha.com/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret: process.env.HCAPTCHA_SECRET || '',
                response: captchaToken
            })
        });

        const captchaData = await captchaResponse.json();

        if (!captchaData.success) {
            console.error('hCaptcha verification failed:', captchaData);
            return NextResponse.json(
                { error: 'Human verification failed. Please try again.' },
                { status: 400 }
            );
        }

        // Map service ID to readable name
        const serviceNames: Record<string, string> = {
            feasibility: 'Feasibility Study',
            pilot: 'Agent Pilot',
            deployment: 'Production Deployment'
        };

        const serviceName = serviceNames[service] || service;

        // Send email via Resend REST API directly
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'ESInnov <noreply@esinnov.com>',
                to: 'aidinvm@esinnov.com',
                reply_to: email,
                subject: `[ESInnov Lead] ${serviceName} - ${name}`,
                html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a2e; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0066FF 0%, #8B5CF6 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
        .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; }
        .field { margin-bottom: 20px; }
        .label { font-size: 12px; text-transform: uppercase; color: #64748b; font-weight: 600; margin-bottom: 4px; }
        .value { font-size: 16px; color: #1a1a2e; }
        .badge { display: inline-block; background: #0066FF; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .usecase { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; white-space: pre-wrap; }
        .footer { text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 24px;">New Lead Received</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">ESInnov Website Contact Form</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Service Interest</div>
                <span class="badge">${serviceName}</span>
            </div>
            <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
            </div>
            <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${company ? `
            <div class="field">
                <div class="label">Company</div>
                <div class="value">${company}</div>
            </div>
            ` : ''}
            <div class="field">
                <div class="label">Use Case Description</div>
                <div class="usecase">${useCase}</div>
            </div>
        </div>
        <div class="footer">
            <p>Submitted via esinnov.com contact form</p>
        </div>
    </div>
</body>
</html>
                `
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Resend API error:', JSON.stringify(data, null, 2));
            return NextResponse.json(
                { error: 'Failed to send email', details: data.message || data.error || 'Unknown error' },
                { status: 500 }
            );
        }

        console.log('Email sent successfully:', data.id);
        return NextResponse.json({ success: true, id: data.id });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: String(error) },
            { status: 500 }
        );
    }
}
