const VisiMisi = () => {
  return (
    <div className="space-y-4 md:p-20 mb-8">
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Visi & Misi <span className="text-blue-600">Funvita</span>
        </h2>
      </div>

      <details
        className="group [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-medium">Visi</h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700">
          Menjadi salah satu perusahaan terbaik dalam pengembangan sumber daya
          manusia dan teknologi untuk umkm di Indonesia
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-medium">Misi</h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700">
          - Menyediakan pelatihan dan pengembangan kompetensi yang unggul dengan
          modul yang up to date dan fasilitator yang berkualitas. <br />
          - Menyediakan jasa konsultasi kompetensi, informasi dan teknologi
          untuk membangun daya saing pelanggan yang berkelanjutan dengan
          menjunjung profesionalisme. <br />- Menyelenggarakan event-event
          kolaboratif dengan pelanggandan stakeholder dalam menyebarluaskan
          kompetensi, informasi dan teknologi untuk Indonesia dan dunia yang
          lebih maju.
        </p>
      </details>
    </div>
  );
};

export default VisiMisi;
