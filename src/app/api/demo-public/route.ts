import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
    try {
        // Read the demo HTML file
        const filePath = path.join(process.cwd(), 'public', 'zoneiq_demo_public.html');
        const htmlContent = await readFile(filePath, 'utf-8');

        // Return the HTML content
        return new NextResponse(htmlContent, {
            status: 200,
            headers: {
                'Content-Type': 'text/html',
                'X-Frame-Options': 'SAMEORIGIN',
                'Content-Security-Policy': "frame-ancestors 'self'",
            },
        });
    } catch (error) {
        console.error('Error serving demo:', error);
        return new NextResponse('Demo not available', { status: 500 });
    }
}
