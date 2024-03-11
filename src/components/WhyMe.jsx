const WhyMe = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <img
              alt=""
              src="images/why-image.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Mengapa Memilih <span className="text-blue-600">Funvita</span>
            </h2>

            <p className="mt-4 text-gray-600">
              Sejak pandemi melanda banyak perusahaan yang terdampak, mulai dari
              bagaimana cara beradaptasi hingga cara untuk mempertahankan agar
              sebuah perusahaan dapat tetap bisa melakukan scale up. PT. Funvita
              Indonesia Investama dapat mengubah habit perusahaan yang lama
              dengan mengikuti perkembangan zaman saat ini dan kedepannya dengan
              cara memberikan pendampingan bisnis untuk membantu meningkatkan
              skill kapasitas dari owner maupun tim dari perusahaan itu sendiri.
            </p>

            <a
              href="/services"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Lihat Layanan Funvita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
