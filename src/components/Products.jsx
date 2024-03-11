const Products = () => {
  return (
    <div className="mt-8">
      <div className="lg:py-5 lg:pb-20 grid justify-items-center text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Layanan <span className="text-blue-600">Funvita Indonesia</span>
        </h2>

        <p className="mt-4 text-gray-600">
          PT. Funvita Indonesia menyediakan Training dengan Manajemen, Keuangan
          & Digital Marketing untuk membangun daya saing pelanggan yang
          berkelanjutan dengan menjunjung profesionalisme dan kami siap
          berkolaborasi dengan stakeholder untuk penyelenggaraan event event
          untuk memperluas kompetensi informasi dan teknologi.
        </p>
      </div>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
              <img
                alt=""
                src="images/product1.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Konsultan</h2>

              <p className="mt-4 text-gray-600">
                Konsultan dan Branding Produk UMKM percayakan Branding dan
                desain produk kamu dengan Funvita Indonesia.
              </p>

              <div className="mt-5">
                <a
                  class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="#"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
              <img
                alt=""
                src="images/product2.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24 md:lg:order-first">
              <h2 className="text-3xl font-bold sm:text-4xl">Pelatihan</h2>

              <p className="mt-4 text-gray-600">
                Pelatihan yang kami bawakan sesuai dengan standar kompetensi
                BNSP dan dikemas dengan Fun sehingga akan lebih mudah diterima
                oleh peserta.
              </p>

              <div className="mt-5">
                <a
                  class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="#"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
              <img
                alt=""
                src="images/product3.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Pembuatan APK dan Sistem
              </h2>

              <p className="mt-4 text-gray-600">
                Development Perusahaan kami siap membuatkan aplikasi dan sistem
                untuk perusahaan anda sehingga dapat berkembang dan lebih
                kompetitif.
              </p>

              <div className="mt-5">
                <a
                  class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="#"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
              <img
                alt=""
                src="images/product4.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24 md:lg:order-first">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Penyelenggara Event
              </h2>

              <p className="mt-4 text-gray-600">
                Funvita Indonesia siap untuk menyelenggarakan event-event
                kolaboratif dengan pelanggandan stakeholder dalam
                menyebarluaskan kompetensi, informasi dan teknologi untuk
                Indonesia dan dunia yang lebih maju.
              </p>

              <div className="mt-5">
                <a
                  class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="#"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
