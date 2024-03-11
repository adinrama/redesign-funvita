const Services = () => {
  return (
    <section id="service">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Layanan Utama <span className="text-blue-600">Funvita</span>
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="block rounded-xl border border-slate-800 p-8 shadow-xl transition hover:bg-indigo-600 hover:text-white hover:border-pink-500/10 hover:shadow-pink-500/10"
            href=""
          >
            <h2 className="mt-2 text-xl font-bold underline underline-offset-4">
              Konsultasi Bisnis
            </h2>

            <p className="mt-3 text-sm">
              Kami membantu para klien untuk membantu meningkatkan, menumbuhkan,
              dan/atau mempertahankan bisnis dari berbagai aspek.
            </p>
          </div>

          <div
            className="block rounded-xl border border-slate-800 p-8 shadow-xl transition hover:bg-indigo-600 hover:text-white hover:border-pink-500/10 hover:shadow-pink-500/10"
            href=""
          >
            <h2 className="mt-2 text-xl font-bold underline underline-offset-4">
              Training Digital Marketing
            </h2>

            <p className="mt-3 text-sm">
              Kami membantu para klien untuk mengoptimalkan bisnisnya melalui
              strategi pemasaran dan promosi melalui segala jenis media digital.
            </p>
          </div>

          <div
            className="block rounded-xl border border-slate-800 p-8 shadow-xl transition hover:bg-indigo-600 hover:text-white hover:border-pink-500/10 hover:shadow-pink-500/10"
            href=""
          >
            <h2 className="mt-2 text-xl font-bold underline underline-offset-4">
              Training Digital Literasi Keuangan
            </h2>

            <p className="mt-3 text-sm">
              Kami membantu klien bagaimana cara menggunakan layanan keuangan
              berbasis teknologi digital untuk membantu mempermudah proses
              pengorganisasian.
            </p>
          </div>

          <div
            className="block rounded-xl border border-slate-800 p-8 shadow-xl transition hover:bg-indigo-600 hover:text-white hover:border-pink-500/10 hover:shadow-pink-500/10"
            href=""
          >
            <h2 className="mt-2 text-xl font-bold underline underline-offset-4">
              Training Branding Produk
            </h2>

            <p className="mt-3 text-sm">
              Kami membantu para klien untuk dapat menciptakan, mengembangkan,
              dan memelihara identitas dan citra produk yang unik, menarik, dan
              berbeda dari produk pesaing.
            </p>
          </div>

          <div
            className="block rounded-xl border border-slate-800 p-8 shadow-xl transition hover:bg-indigo-600 hover:text-white hover:border-pink-500/10 hover:shadow-pink-500/10"
            href=""
          >
            <h2 className="mt-2 text-xl font-bold underline underline-offset-4">
              Public Speaking
            </h2>

            <p className="mt-3 text-sm">
              Kami membantu para klien agar memiliki kemampuan komunikasi di
              depan umum serta tips untuk membangun kepercayaan diri.
            </p>
          </div>

          <div
            className="block rounded-xl border border-slate-800 p-8 shadow-xl transition hover:bg-indigo-600 hover:text-white hover:border-pink-500/10 hover:shadow-pink-500/10"
            href=""
          >
            <h2 className="mt-2 text-xl font-bold underline underline-offset-4">
              Collaboration
            </h2>

            <p className="mt-3 text-sm">
              Kami membantu klien dalam hal kerjasama baik secara online maupun
              offline dalam bentuk komunikasi, berbagi informasi, atau
              menciptakan konten bersama.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Lihat Layanan Funvita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
