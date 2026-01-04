import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // Validate email
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            );
        }

        // Send notification email via Resend
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'ESInnov <noreply@esinnov.com>',
                to: 'aidinvm@esinnov.com',
                subject: `[ESInnov] New Newsletter Subscriber`,
                html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a2e; }
        .container { max-width: 500px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8B5CF6 0%, #0066FF 100%); color: white; padding: 24px; border-radius: 12px 12px 0 0; }
        .content { background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; }
        .email-box { background: white; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 18px; font-weight: 600; }
        .footer { text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 20px;">📬 New Newsletter Subscriber</h1>
        </div>
        <div class="content">
            <p style="margin: 0 0 16px 0; color: #64748b;">Someone subscribed to research updates:</p>
            <div class="email-box">
                <a href="mailto:${email}">${email}</a>
            </div>
        </div>
        <div class="footer">
            <p>From ESInnov Research page</p>
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
                { error: 'Failed to subscribe', details: data.message || data.error },
                { status: 500 }
            );
        }

        console.log('Newsletter subscription notification sent:', data.id);
        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
