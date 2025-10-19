// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-6">Merhaba, ben Nursima Yılmaz!</h1>

      {/* Profil görseli (next/image) ve statik dosyalar */}
      <div className="mx-auto mb-8 w-40 h-40 relative rounded-full overflow-hidden">
         {/* public klasöründeki profile.jpg dosyasını kullanın */}
        <Image
          src="/pp.jpg"
          alt="Profil Resmi"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 640px) 100vw, 50vw" 
          priority
        />
      </div>

      <p className="text-xl mb-8">
        Next.js ve App Router ile kişisel sitemi ve mini blogumu geliştiriyorum.
      </p>

      <div className="space-x-4">
        {/* Sayfa linkleri */}
        <Link href="/blog" className="text-blue-600 hover:underline text-lg">
          Blog Yazılarıma Göz At
        </Link>
        <Link href="/iletisim" className="text-blue-600 hover:underline text-lg">
          Bana Ulaşın
        </Link>
      </div>
    </div>
  );
}