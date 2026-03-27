import { getPost } from '@/lib/cms';
import { BlockRenderer } from '@/components/blocks/render/BlockRenderer';

export const revalidate = 60;

export default async function Home() {
  const post = await getPost('home');

  if (!post || !post.content) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0d0d0d' }}>
        <p style={{ color: 'rgba(245,230,211,0.5)' }}>Coming soon.</p>
      </div>
    );
  }

  return <BlockRenderer content={post.content} />;
}
