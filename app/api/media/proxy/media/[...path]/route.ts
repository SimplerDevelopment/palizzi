import { NextRequest } from 'next/server';

const CMS_API_URL = process.env.CMS_API_URL || 'https://simplerdevelopment.com';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const upstream = `${CMS_API_URL}/api/media/proxy/media/${path.join('/')}`;

  const res = await fetch(upstream, { next: { revalidate: 3600 } });
  if (!res.ok) {
    return new Response('Not Found', { status: 404 });
  }

  const contentType = res.headers.get('content-type') || 'application/octet-stream';
  const body = await res.arrayBuffer();

  return new Response(body, {
    headers: {
      'content-type': contentType,
      'cache-control': 'public, max-age=31536000, immutable',
    },
  });
}
