export default function Hero() {
  return (
    <section className="py-16 md:py-20 flex flex-col md:flex-row items-center gap-12">
      {/* Left side */}
      <div className="flex-1">
        <p className="text-sm font-semibold text-skyBlue uppercase tracking-wide mb-3">
          Zayn Korean · TOPIK 1–2
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Koreys tilini{" "}
          <span className="text-skyBlue">oson va tizimli</span>{" "}
          o'rganing.
        </h1>

        <p className="mt-5 text-gray-600 text-lg">
          Uzbek talabalar uchun maxsus yaratilgan TOPIK 1–2 kurslari.
          Bepul intervyu orqali darajangizni aniqlab, sizga mos guruhni
          tanlab beraman.
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
          🇺🇿 Uzbekcha tushuntirish · 🇰�� TOPIK 6 darajadagi o'qituvchi
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
