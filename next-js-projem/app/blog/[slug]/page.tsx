// app/blog/[slug]/page.tsx
import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation'; // Özel 404 sayfası için (Bonus)

type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  date: string;
};

interface BlogDetailPageProps {
  params: {
    slug: string; // URL'den gelen dinamik parametre
  };
}

// Next.js statik site üretimi için (isteğe bağlı)
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const posts: Post[] = JSON.parse(fileContents);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}


export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = params; // Dinamik parametreyi al

  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const posts: Post[] = JSON.parse(fileContents);

  const post = posts.find(p => p.slug === slug);

  // Gönderi bulunamazsa 404 sayfasını göster (Bonus)
  if (!post) {
    notFound();
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6 border-b pb-4">{post.date}</p>
      <div className="text-lg leading-relaxed">
        <p>{post.content}</p>
        {/* Gerçek bir blogda markdown veya HTML içeriği burada gösterilirdi */}
      </div>
    </div>
  );
}