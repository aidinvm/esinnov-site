import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/zone-iq-demo'],
        },
        sitemap: 'https://esinnov.com/sitemap.xml',
    }
}
