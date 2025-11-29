# K-Learn Project - Complete Source Code

## Configuration Files

### postcss.config.js

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        skyBlue: "#6AA6FF",
        warmYellow: "#FFCC66",
        softPink: "#FF8A8A",
      },
    },
  },
  plugins: [],
};
```

### vite.config.js

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

### package.json

```json
{
  "name": "k-learn",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/postcss": "^4.1.17",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.9.6"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.22",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.17",
    "vite": "^7.2.4"
  }
}
```

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <title>Zayn Korean - TOPIK 1–2 Online Courses</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## CSS Files

### src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    background-color: #fafafa;
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 800;
    color: #111827;
  }

  * {
    transition: all 0.2s ease-in-out;
  }
}

@layer components {
  .section-container {
    max-width: 64rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .light-gradient {
    background: linear-gradient(
      to bottom right,
      rgba(106, 166, 255, 0.1),
      rgba(255, 138, 138, 0.1),
      rgba(255, 204, 102, 0.1)
    );
  }
}
```

### src/styles/App.css

```css
@layer components {
  .btn-primary {
    padding: 0.75rem 1.75rem;
    border-radius: 0.75rem;
    background-color: #6aa6ff;
    color: white;
    font-weight: 600;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease-in-out;
  }

  .btn-primary:hover {
    background-color: #3b82f6;
  }

  .btn-outline {
    padding: 0.75rem 1.75rem;
    border-radius: 0.75rem;
    border: 1px solid #d1d5db;
    color: #1f2937;
    font-weight: 600;
    background-color: white;
    transition: all 0.2s ease-in-out;
  }

  .btn-outline:hover {
    border-color: #6aa6ff;
    color: #6aa6ff;
  }

  .card {
    background-color: white;
    border-radius: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #f3f4f6;
    padding: 1.5rem;
  }

  .card-colored {
    border-radius: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }

  .section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media (min-width: 768px) {
    .section {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }

  .label {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #6aa6ff;
    margin-bottom: 0.5rem;
  }
}
```

## React Source Files

### src/main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Pricing from "./pages/Pricing.jsx";
import Interview from "./pages/Interview.jsx";
import Contact from "./pages/Contact.jsx";

import "./index.css";
import "./styles/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
```

### src/App.jsx

```jsx
export default function App() {
  return null;
}
```

### src/pages/Home.jsx

```jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BenefitsSection from "../components/BenefitsSection";
import CoursesPreview from "../components/CoursesPreview";
import HowItWorks from "../components/HowItWorks";
import Testimonial from "../components/Testimonial";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <BenefitsSection />
        <CoursesPreview />
        <HowItWorks />
        <Testimonial />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
```

### src/components/Navbar.jsx

```jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-5 px-10 bg-white shadow-md">
      <h1 className="text-3xl font-extrabold text-skyBlue">Zayn Korean</h1>

      <div className="flex gap-8 text-gray-700 font-semibold text-lg">
        <Link to="/" className="hover:text-skyBlue transition">
          Asosiy
        </Link>
        <Link to="/courses" className="hover:text-skyBlue transition">
          Kurslar
        </Link>
        <Link to="/pricing" className="hover:text-skyBlue transition">
          Narxlar
        </Link>
        <Link to="/interview" className="hover:text-skyBlue transition">
          Intervyu
        </Link>
        <Link to="/contact" className="hover:text-skyBlue transition">
          Aloqa
        </Link>
      </div>
    </nav>
  );
}
```

### src/components/Hero.jsx

```jsx
export default function Hero() {
  return (
    <section className="py-16 md:py-20 flex flex-col md:flex-row items-center gap-12">
      {/* Left side */}
      <div className="flex-1">
        <p className="text-sm font-semibold text-skyBlue uppercase tracking-wide mb-3">
          Zayn Korean · TOPIK 1–2
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Koreys tilini <span className="text-skyBlue">oson va tizimli</span>{" "}
          o'rganing.
        </h1>

        <p className="mt-5 text-gray-600 text-lg">
          Uzbek talabalar uchun maxsus yaratilgan TOPIK 1–2 kurslari. Bepul
          intervyu orqali darajangizni aniqlab, sizga mos guruhni tanlab
          beraman.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="/interview"
            className="px-7 py-3 rounded-xl bg-skyBlue text-white font-semibold shadow hover:bg-blue-500 transition text-center"
          >
            Bepul intervyu bron qilish
          </a>
          <a
            href="/courses"
            className="px-7 py-3 rounded-xl border border-gray-300 text-gray-800 font-semibold bg-white hover:border-skyBlue hover:text-skyBlue transition text-center"
          >
            Kurslarni ko'rish
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          🇺🇿 Uzbekcha tushuntirish · 🇰🇷 TOPIK 6 darajadagi o'qituvchi
        </p>
      </div>

      {/* Right side */}
      <div className="flex-1 flex justify-center">
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-skyBlue/20 via-softPink/20 to-warmYellow/20 flex items-center justify-center shadow">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <p className="text-sm font-semibold text-gray-500 mb-2">
              Bugun ro'yxatdan o'ting
            </p>
            <p className="text-2xl font-bold text-gray-900">
              TOPIK 1–2 <span className="text-skyBlue">online darslar</span>
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Haftasiga 2–3 marta, Zoom orqali jonli darslar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### src/components/BenefitsSection.jsx

```jsx
export default function BenefitsSection() {
  return (
    <section className="py-12">
      <p className="text-sm font-semibold text-skyBlue uppercase tracking-wide mb-3">
        Nega Zayn Korean?
      </p>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Uzbek talabalar uchun moslashtirilgan koreys tili darslari.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-skyBlue/10">
          <h3 className="font-semibold text-gray-900 mb-2">
            TOPIK 6 darajadagi o'qituvchi
          </h3>
          <p className="text-sm text-gray-600">
            Grammatikani Uzbekcha mantiq bilan tushuntiraman, keraksiz nazariya
            emas, amaliy gaplar.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-softPink/10">
          <h3 className="font-semibold text-gray-900 mb-2">
            Intervyu asosida guruhlar
          </h3>
          <p className="text-sm text-gray-600">
            Har bir o'quvchi bilan qisqa suhbat qilib, darajaga mos guruhga
            joylashtiraman.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-warmYellow/10">
          <h3 className="font-semibold text-gray-900 mb-2">
            Real hayotga mos darslar
          </h3>
          <p className="text-sm text-gray-600">
            Universitet, ish, konveniens store, bank, shifoxona — haqiqiy
            vaziyatlarga tayyorlovchi darslar.
          </p>
        </div>
      </div>
    </section>
  );
}
```

### src/components/CoursesPreview.jsx

```jsx
export default function CoursesPreview() {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Asosiy kurslar</h2>
        <a
          href="/courses"
          className="text-sm font-semibold text-skyBlue hover:underline"
        >
          Barcha kurslarni ko'rish →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* TOPIK 1 */}
        <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
          <p className="text-xs font-semibold text-skyBlue mb-1">
            Boshlang'ich
          </p>
          <h3 className="font-bold text-lg mb-2">TOPIK 1</h3>
          <p className="text-sm text-gray-600 mb-3">
            Alifbo, asosiy grammatikalar va kundalik hayot uchun sodda jumlalar.
          </p>
          <p className="text-xs text-gray-500">⏳ 8 haftalik kurs</p>
        </div>

        {/* TOPIK 2 */}
        <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
          <p className="text-xs font-semibold text-softPink mb-1">
            Boshlang'ich → O'rta
          </p>
          <h3 className="font-bold text-lg mb-2">TOPIK 2</h3>
          <p className="text-sm text-gray-600 mb-3">
            Matn o'qish, tinglab tushunish, imtihon formatida mashqlar.
          </p>
          <p className="text-xs text-gray-500">⏳ 10 haftalik kurs</p>
        </div>

        {/* Speaking */}
        <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
          <p className="text-xs font-semibold text-warmYellow mb-1">Suhbat</p>
          <h3 className="font-bold text-lg mb-2">Speaking Class</h3>
          <p className="text-sm text-gray-600 mb-3">
            Universitet, ishxona, telefon, bank, konveniens store muloqotlari.
          </p>
          <p className="text-xs text-gray-500">🎤 Haftasiga 2 marta</p>
        </div>
      </div>
    </section>
  );
}
```

### src/components/HowItWorks.jsx

```jsx
export default function HowItWorks() {
  return (
    <section className="py-12">
      <p className="text-sm font-semibold text-skyBlue uppercase tracking-wide mb-3">
        Qanday ishlaydi?
      </p>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        3 qadamda darslarga qo'shilasiz.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
          <p className="text-sm font-semibold text-gray-500 mb-1">1-qadam</p>
          <h3 className="font-bold mb-2">Bepul intervyu</h3>
          <p className="text-sm text-gray-600">
            Qisqa suhbat orqali darajangizni aniqlaymiz va maqsadlaringizni
            tinglaymiz.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
          <p className="text-sm font-semibold text-gray-500 mb-1">2-qadam</p>
          <h3 className="font-bold mb-2">To'g'ri guruh</h3>
          <p className="text-sm text-gray-600">
            Sizni daraja va maqsadga mos TOPIK yoki speaking guruhiga
            joylashtiramiz.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
          <p className="text-sm font-semibold text-gray-500 mb-1">3-qadam</p>
          <h3 className="font-bold mb-2">Tizimli darslar</h3>
          <p className="text-sm text-gray-600">
            Haftalik reja, uy vazifalar va muntazam feedback orqali natijaga
            ishlaymiz.
          </p>
        </div>
      </div>
    </section>
  );
}
```

### src/components/Testimonial.jsx

```jsx
export default function Testimonial() {
  return (
    <section className="py-12">
      <div className="rounded-3xl bg-skyBlue/5 p-8 border border-skyBlue/20">
        <p className="text-sm font-semibold text-skyBlue mb-2">
          O'quvchi fikri
        </p>
        <p className="text-lg text-gray-800 mb-4">
          "Darslar juda tushunarli, Uzbekcha izohlar bilan grammatikani tezroq
          tushunib oldim. TOPIK 1 imtihonidan birinchi urinishda o'tdim."
        </p>
        <p className="text-sm font-semibold text-gray-700">
          — G. Islom, GKS talaba, Koreya
        </p>
      </div>
    </section>
  );
}
```

### src/components/FinalCTA.jsx

```jsx
export default function FinalCTA() {
  return (
    <section className="py-16">
      <div className="rounded-3xl bg-gradient-to-r from-skyBlue to-softPink text-white px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold mb-3">
            Keling, koreys tilini birga yengib olaylik.
          </h2>
          <p className="text-sm md:text-base text-white/90">
            Qisqa bepul intervyuga yoziling, darajangizni aniqlaymiz va sizga
            eng mos kursni tanlab beraman.
          </p>
        </div>

        <a
          href="/interview"
          className="px-8 py-3 rounded-xl bg-white text-skyBlue font-bold shadow hover:bg-slate-100 transition text-center"
        >
          Bepul intervyu bron qilish
        </a>
      </div>
    </section>
  );
}
```

### src/components/Footer.jsx

```jsx
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Zayn Korean. Barcha huquqlar
          himoyalangan.
        </p>
        <p>Koreyada o'qiydigan va ishlaydigan Uzbek talabalar uchun.</p>
      </div>
    </footer>
  );
}
```

---

## Project Structure

```
k-learn/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── styles/
│   │   └── App.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── Pricing.jsx
│   │   ├── Interview.jsx
│   │   └── Contact.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── BenefitsSection.jsx
│   │   ├── CoursesPreview.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Testimonial.jsx
│   │   ├── FinalCTA.jsx
│   │   └── Footer.jsx
│   └── assets/
└── public/
```

---

## Color Palette

- **Sky Blue**: `#6AA6FF` (Primary color)
- **Soft Pink**: `#FF8A8A` (Accent color)
- **Warm Yellow**: `#FFCC66` (Accent color)

## Typography

- **Font Family**: Inter (300, 400, 500, 600, 700, 800 weights)
- **Heading**: font-weight 800, color #111827
- **Body**: font-family Inter, background #fafafa
