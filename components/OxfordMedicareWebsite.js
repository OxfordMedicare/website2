export default function OxfordMedicareWebsite() {
  return (
    <div className="bg-[#0A0F3C] text-white min-h-screen" style={{ fontFamily: 'Palatino Linotype, serif' }}>
      <section className="py-20 px-6 sm:px-8 text-center bg-cover bg-center" style={{ backgroundImage: 'url(/IMG_1410.jpg)' }}>
        <div className="mb-6">
          <img src="/IMG_0997.jpg" alt="Oxford Medicare Logo" className="mx-auto h-20 mb-6" />
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#A5CC50]">Oxford Medicare</h1>
        </div>
        <p className="text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto mb-6 text-white px-4 sm:px-0">
          We bridge global expertise with local commitment to bring equitable healthcare and related services where it’s needed most.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center flex-wrap">
          <button className="bg-[#74121D] text-white text-xl px-8 py-4 rounded-2xl shadow font-bold tracking-wide uppercase">
            ECOSYSTEM OF EXPERTS
          </button>
          <button className="bg-[#A5CC50] text-[#0A0F3C] px-6 py-2 rounded-2xl shadow font-semibold">
            Partner with Us
          </button>
        </div>
      </section>
    </div>
  )
}
