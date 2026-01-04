import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

// Security: Define allowed origins/referrers
const ALLOWED_ORIGINS = [
    'localhost:3000',
    'localhost:3001',
    'esinnov.com',
    'www.esinnov.com',
];

// Error page HTML for blocked requests
const BLOCKED_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Access Denied | Zone IQ™</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', system-ui, sans-serif;
            background: #06080c;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #e8eaed;
        }
        .container {
            text-align: center;
            padding: 2rem;
        }
        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #ff4757;
        }
        p {
            color: #9aa0a6;
            margin-bottom: 1.5rem;
        }
        a {
            color: #00ffc8;
            text-decoration: none;
            padding: 0.75rem 1.5rem;
            border: 1px solid #00ffc8;
            border-radius: 8px;
            display: inline-block;
            transition: all 0.2s;
        }
        a:hover {
            background: rgba(0, 255, 200, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔒 Access Denied</h1>
        <p>This demo is only available on the ESInnov website.</p>
        <a href="https://esinnov.com">Visit ESInnov.com</a>
    </div>
</body>
</html>
`;

export async function GET(request: NextRequest) {
    // Get referrer, origin, and fetch destination headers
    const referer = request.headers.get('referer') || '';
    const origin = request.headers.get('origin') || '';
    const secFetchDest = request.headers.get('sec-fetch-dest') || '';

    // Check if request is from an allowed origin
    const isAllowedReferer = ALLOWED_ORIGINS.some(allowed =>
        referer.includes(allowed) || origin.includes(allowed)
    );

    // Check if this is an iframe request (not direct navigation)
    // sec-fetch-dest: iframe = embedded in iframe (allowed)
    // sec-fetch-dest: document = direct navigation in browser (blocked)
    const isIframeRequest = secFetchDest === 'iframe';
    const isDirectNavigation = secFetchDest === 'document';

    // Block if:
    // 1. Direct navigation to the URL (even from allowed origins)
    // 2. Request from non-allowed origin
    if (isDirectNavigation || !isAllowedReferer) {
        return new NextResponse(BLOCKED_HTML, {
            status: 403,
            headers: {
                'Content-Type': 'text/html',
                'X-Frame-Options': 'DENY',
            },
        });
    }

    // Read the demo HTML content
    try {
        const demoPath = join(process.cwd(), 'src', 'app', 'api', 'demo', 'demo-content.html');
        const htmlContent = readFileSync(demoPath, 'utf-8');

        return new NextResponse(htmlContent, {
            status: 200,
            headers: {
                'Content-Type': 'text/html',
                // Only allow embedding from same origin
                'X-Frame-Options': 'SAMEORIGIN',
                // Modern CSP for frame embedding
                'Content-Security-Policy': "frame-ancestors 'self' https://esinnov.com https://www.esinnov.com",
                // Prevent MIME type sniffing
                'X-Content-Type-Options': 'nosniff',
                // Cache for 1 hour
                'Cache-Control': 'public, max-age=3600',
            },
        });
    } catch (error) {
        console.error('Error reading demo content:', error);
        return new NextResponse('Demo content not found', {
            status: 500,
            headers: { 'Content-Type': 'text/plain' },
        });
    }
}
