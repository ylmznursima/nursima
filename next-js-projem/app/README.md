# Kişisel Site ve Mini Blog (Next.js App Router Ödevi)

Bu proje, Next.js App Router yapısı kullanılarak geliştirilmiş basit bir kişisel web sitesi ve mini blog uygulamasıdır.

## Proje Gereksinimleri

* **App Router** kullanılmıştır.
* 3 temel sayfa yapısı: Ana Sayfa (`/`), Blog (`/blog`), İletişim (`/iletisim`).
* Ana sayfada `next/image` ve `next/link` kullanımı mevcuttur.
* Blog sayfasında **`/data/posts.json`** verisi okunmakta ve listelenmektedir.
* Blog detay sayfası **dinamik route** (`/blog/[slug]`) ile çalışmaktadır.
* İletişim sayfasında **Client-Side doğrulama** içeren bir form bulunmaktadır.

## Kurulum ve Kullanım Adımları

**1. Projeyi Klonlayın**

```bash
git clone [GITHUB_REPO_ADRESİNİZ]
cd kisisel-blog