import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// 1. Veri Yapısı Tanımlaması (TypeScript için)
interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
  date: string;
}

// 2. Veri Okuma Fonksiyonu (Daha önceki hatayı hesaba katarak try/catch eklendi)
// Next.js'in Build sürecinde çalışır (Server Component)
async function getPosts(): Promise<Post[]> {
  // process.cwd(), projenin kök dizinini döndürür.
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents) as Post[];
  } catch (error) {
    // Dosya bulunamazsa veya JSON hatası olursa boş dizi döndür
    console.error('Veri okuma hatası. data/posts.json dosyasını kontrol edin.', error);
    return [];
  }
}

// 3. Statik Yollar Oluşturma (generateStaticParams)
// Next.js'e hangi slug'ların build sırasında oluşturulacağını bildirir.
export async function generateStaticParams() {
  const posts = await getPosts();
  
  // Her post için bir { slug: 'post-slug-ismi' } nesnesi döndürülür
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 4. Dinamik Detay Sayfası (TypeScript hatası bu kısım düzeltilerek giderildi)
// Next.js build hatasını gidermek için prop'ları anonim tip olarak tanımlıyoruz.
export default async function BlogDetailPage({ 
  params, 
}: { 
  params: { slug: string }; 
}) {
  const { slug } = params;
  const posts = await getPosts();
  
  // URL'deki slug'a uyan post'u bul
  const post = posts.find(p => p.slug === slug);

  // Eğer post bulunamazsa (veya generateStaticParams'te olmayan bir yoldan gelirse)
  if (!post) {
    // not-found.tsx dosyasını tetikler (Bonus Gereksinim)
    notFound(); 
  }

  return (
    <main className="container mx-auto p-4 max-w-2xl">
      {/* Blog detay içeriği */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">Yayınlanma Tarihi: {post.date}</p>
      
      {/* İçeriği basitçe gösteriyoruz, markdown desteği için ek paket gerekebilir */}
      <div className="prose lg:prose-lg mt-8">
        <p>{post.content}</p>
      </div>
      
      {/* İsteğe bağlı olarak Ana Sayfa veya Blog Listesi Linki eklenebilir */}
      <div className="mt-8">
        <a href="/blog" className="text-blue-500 hover:underline">
          &larr; Tüm Yazılara Geri Dön
        </a>
      </div>
    </main>
  );
}