# Where to Watch

A movie and TV show discovery platform built with Next.js and the TMDB API. Browse trending content, explore popular titles, find where to stream, and discover award-winning films.

### [Live Demo](https://where-to-watch-blakfy.netlify.app/)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Movie & TV Show Search** — Search across millions of titles with instant results
- **Category Browsing** — Popular, Now Playing, Upcoming, Top Rated, Airing Today
- **Where to Watch** — See which streaming platforms offer each title (powered by JustWatch)
- **Awards** — Academy Awards (2016-2025) with winners and nominees
- **Reviews** — User reviews from TMDB community
- **People** — Browse popular actors, directors, and crew
- **Dark / Light Mode** — Toggle between themes
- **Multi-language** — English, Turkish, German, Spanish, French, Portuguese, Russian
- **Responsive Design** — Works on desktop, tablet, and mobile

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI library |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS |
| [Redux Toolkit](https://redux-toolkit.js.org/) | State management (theme) |
| [i18next](https://www.i18next.com/) | Internationalization |
| [Axios](https://axios-http.com/) | HTTP client |
| [TMDB API](https://developer.themoviedb.org/) | Movie & TV data |

## Getting Started

### Prerequisites

- **Node.js 20.9.0** or higher
- **TMDB API Read Access Token** ([Get one here](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/tarktunc/Where-to-Watch.git
cd Where-to-Watch
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then edit `.env` and add your TMDB Read Access Token:

```
NEXT_PUBLIC_API_KEY=your_tmdb_read_access_token_here
```

> **Note:** This is the **Read Access Token** (long JWT string starting with `eyJhb...`), NOT the short API Key. You can find it at [TMDB API Settings](https://www.themoviedb.org/settings/api) under "API Read Access Token".

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Where-to-Watch/
├── app/                    # Next.js App Router pages
│   ├── movie/              # Movie listing & detail pages
│   ├── tvshow/             # TV show listing & detail pages
│   ├── people/             # People listing & detail pages
│   ├── search/             # Search page
│   ├── awards/             # Awards pages (list, detail, upcoming)
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   └── discussions/        # Discussions page
├── Components/             # Reusable React components
│   ├── MovieProfile/       # Detail page components
│   ├── HomeSection/        # Homepage sections
│   ├── FilteredList/       # Filtered list with sidebar
│   ├── WhereToWatch/       # Streaming provider display
│   └── common/             # Navbar, Footer, Error
├── data/                   # Static data (awards)
├── hooks/                  # Custom hooks (useTranslation)
├── locales/                # i18n translation files (7 languages)
├── utils/                  # API service utilities
└── store/                  # Redux store & slices
```

## Deployment (Netlify)

1. Connect your GitHub repository to Netlify
2. Set the build command: `npm run build`
3. Set the publish directory: `.next`
4. Add environment variable: `NEXT_PUBLIC_API_KEY` = your TMDB Read Access Token
5. Deploy

## API Attribution

This product uses the [TMDB API](https://www.themoviedb.org/) but is not endorsed or certified by TMDB. Streaming availability data is powered by [JustWatch](https://www.justwatch.com/).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

---

# Where to Watch (Turkce)

TMDB API kullanarak film ve dizi kesfetme platformu. Trend icerikleri kesfet, populer yapimlar ara, nerede izleyecegini ogren ve odul kazanan filmleri incele.

## Ozellikler

- **Film ve Dizi Arama** — Milyonlarca yapim arasinda aninda arama
- **Kategori Gezintisi** — Populer, Vizyondakiler, Yakinda, En Iyi Puanlilar
- **Nerede Izlenir** — Her yapimin hangi platformlarda oldugunu gor (JustWatch destekli)
- **Oduller** — Oscar Odulleri (2016-2025) kazananlar ve adaylarla birlikte
- **Yorumlar** — TMDB toplulugundan kullanici yorumlari
- **Karanlik / Aydinlik Mod** — Tema degistirme
- **Coklu Dil** — Ingilizce, Turkce, Almanca, Ispanyolca, Fransizca, Portekizce, Rusca

## Kurulum

1. Repoyu klonla: `git clone https://github.com/tarktunc/Where-to-Watch.git`
2. Bagimliliklari yukle: `npm install`
3. `.env.example` dosyasini `.env` olarak kopyala ve `NEXT_PUBLIC_API_KEY` degerini ekle
4. Calistir: `npm run dev`

> **Not:** `NEXT_PUBLIC_API_KEY` icin TMDB'nin **Read Access Token** (uzun JWT) degerini kullan. [TMDB API Ayarlari](https://www.themoviedb.org/settings/api) sayfasindan alabilirsin.
