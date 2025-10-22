// app/layout.tsx
import './globals.css';
import Header from './components/Header'; // components klasörünü varsayarak

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main className="container mx-auto p-4 min-h-[calc(100vh-100px)]">
          {children}
        </main>
        {/* Basit bir footer ekleyebilirsiniz (Bonus) */}
        <footer className="bg-gray-800 p-4 text-white text-center">
            © {new Date().getFullYear()} Kişisel Sitem
        </footer>
      </body>
    </html>
  );
}