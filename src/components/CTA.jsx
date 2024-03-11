const CTA = () => {
  return (
    <section className="bg-indigo-600">
      <div className="p-4 md:p-12 lg:px-16 lg:py-24 text-white">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Hubungi Kami Sekarang
          </h2>

          <p className="hidden sm:mt-4 sm:block">
            Buat janji dan lakukan konsultasi dengan tim Funvita Indonesia untuk
            layanan training online ataupun offline.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl flex justify-center">
          <button
            type="submit"
            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-white hover:bg-indigo-50 px-5 py-3 text-indigo-600 transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
          >
            <span className="text-sm font-medium">
              <a href="https://wa.me/6285815042056">Hubungi Kami</a>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
