export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Zayn Korean. Barcha huquqlar himoyalangan.</p>
        <p>Koreyada o'qiydigan va ishlaydigan Uzbek talabalar uchun.</p>
      </div>
    </footer>
  );
}
