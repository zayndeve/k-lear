export default function FinalCTA() {
  return (
    <section className="py-16">
      <div className="rounded-3xl bg-gradient-to-r from-skyBlue to-softPink text-white px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold mb-3">
            Keling, koreys tilini birga yengib olaylik.
          </h2>
          <p className="text-sm md:text-base text-white/90">
            Qisqa bepul intervyuga yoziling, darajangizni aniqlaymiz va
            sizga eng mos kursni tanlab beraman.
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
