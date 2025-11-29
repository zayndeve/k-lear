export default function CoursesPreview() {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Asosiy kurslar
        </h2>
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
            Alifbo, asosiy grammatikalar va kundalik hayot uchun
            sodda jumlalar.
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
          <p className="text-xs font-semibold text-warmYellow mb-1">
            Suhbat
          </p>
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
