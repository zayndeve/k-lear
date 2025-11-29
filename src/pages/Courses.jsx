import Navbar from "../components/Navbar";

export default function Courses() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
          Kurslar 💙
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* TOPIK 1 */}
          <div className="p-8 rounded-3xl shadow-md bg-skyBlue/10 hover:shadow-xl transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4206/4206277.png"
              className="w-20 mb-4"
            />

            <h2 className="text-2xl font-bold text-skyBlue mb-3">
              TOPIK 1 (Boshlang'ich)
            </h2>

            <p className="text-gray-700 mb-4">
              Alifbodan boshlab, asosiy grammatikalar va kundalik hayot uchun
              sodda jumlalar. Koreyada yangi bo‘lgan talabalar uchun ideal.
            </p>

            <p className="font-semibold text-gray-800">
              ⏳ 8 haftalik kurs
            </p>
          </div>

          {/* TOPIK 2 */}
          <div className="p-8 rounded-3xl shadow-md bg-softPink/10 hover:shadow-xl transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4206/4206277.png"
              className="w-20 mb-4"
            />

            <h2 className="text-2xl font-bold text-softPink mb-3">
              TOPIK 2 (Boshlang'ich→O'rta)
            </h2>

            <p className="text-gray-700 mb-4">
              O‘qish, tinglab tushunish, murakkabroq grammatikalar va
              imtihon formatidagi mashqlar.
            </p>

            <p className="font-semibold text-gray-800">
              ⏳ 10 haftalik kurs
            </p>
          </div>

          {/* SPEAKING CLASS */}
          <div className="p-8 rounded-3xl shadow-md bg-warmYellow/10 hover:shadow-xl transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4206/4206277.png"
              className="w-20 mb-4"
            />

            <h2 className="text-2xl font-bold text-warmYellow mb-3">
              Speaking (Suhbat)
            </h2>

            <p className="text-gray-700 mb-4">
              Universitet, ishxona, telefon qo‘ng‘iroqlari,
              konveniens store va real hayot muloqotlari uchun maxsus darslar.
            </p>

            <p className="font-semibold text-gray-800">
              🎤 Har hafta 2 marta
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
