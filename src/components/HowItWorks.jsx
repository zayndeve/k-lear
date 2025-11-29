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
          <p className="text-sm font-semibold text-gray-500 mb-1">
            1-qadam
          </p>
          <h3 className="font-bold mb-2">Bepul intervyu</h3>
          <p className="text-sm text-gray-600">
            Qisqa suhbat orqali darajangizni aniqlaymiz va maqsadlaringizni
            tinglaymiz.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
          <p className="text-sm font-semibold text-gray-500 mb-1">
            2-qadam
          </p>
          <h3 className="font-bold mb-2">To'g'ri guruh</h3>
          <p className="text-sm text-gray-600">
            Sizni daraja va maqsadga mos TOPIK yoki speaking guruhiga
            joylashtiramiz.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
          <p className="text-sm font-semibold text-gray-500 mb-1">
            3-qadam
          </p>
          <h3 className="font-bold mb-2">Tizimli darslar</h3>
          <p className="text-sm text-gray-600">
            Haftalik reja, uy vazifalar va muntazam feedback orqali
            natijaga ishlaymiz.
          </p>
        </div>
      </div>
    </section>
  );
}
