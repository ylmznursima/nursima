// app/blog/page.tsx
import Link from 'next/link';
import { promises as fs } from 'fs'; // Dosya sistemini okumak için
import path from 'path';

// Blog yazı tipi tanımı (isteğe bağlı ama önerilir)
type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  date: string;
};

// Sunucu bileşeni içinde veriyi oku (statik veri okuma ve gösterim)
async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const posts: Post[] = JSON.parse(fileContents);

  // Bonus: Blog sıralama (tarihe göre tersten sıralayalım)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8 border-b pb-2">Mini Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-500 text-sm mt-1">{post.date}</p>
            <p className="mt-2 text-gray-700 line-clamp-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}