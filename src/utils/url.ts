export const isExternalUrl = (url: string) => !url.includes(process.env.NEXT_PUBLIC_SITE_URL) && url.startsWith('http');
