// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h2 className="text-6xl font-bold text-red-600">404</h2>
      <p className="text-2xl mt-4 mb-6">Sayfa Bulunamadı</p>
      <p className="text-gray-600 mb-8">Aradığınız sayfa mevcut değil.</p>
      <Link 
        href="/" 
        className="text-white bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-lg font-medium transition"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}