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
            Grammatikani Uzbekcha mantiq bilan tushuntiraman, keraksiz
            nazariya emas, amaliy gaplar.
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
