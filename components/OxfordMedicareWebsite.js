export default function OxfordMedicareWebsite() {
  return (
    <div className="bg-[#0A0F3C] text-white" style={{ fontFamily: 'Palatino Linotype, serif' }}>
      {/* Hero Section */}
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

      {/* Market Gap */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#A5CC50] mb-4">The Market Gap</h2>
        <p className="text-white mb-4">
          Around the world, underserved communities continue to face systemic barriers to healthcare access — even as global consult-deliver firms offer high-end solutions. But too often, these firms are disconnected from the realities on the ground.
        </p>
        <p className="text-white">
          Oxford Medicare was founded to bridge this divide. We combine global best practices with locally grounded delivery — building trust, reducing cost, and ensuring every project is mission-aligned, community-informed, and scalable.
        </p>
      </section>

      {/* Engagement Model */}
      <section className="bg-[#10194a] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-[#0A0F3C]">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Co-Production Model</h3>
            <p>We don’t just deliver projects — we build them together. Our co-production model ensures every service is co-created with the people it’s meant to serve.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Social License to Operate</h3>
            <p>From the ground up, we earn and maintain a social license to operate by listening, adapting, and staying accountable to community needs.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Global Partnerships</h3>
            <p>We co-deliver with industry leaders—pairing global standards with grassroots trust.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
