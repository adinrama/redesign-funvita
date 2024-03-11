const Profile = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt=""
              src="images/logo-funvita-blue.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>
                Funvita Indonesia adalah Perusahaan Rintisan yang bergerak
                dibidang Training dan Development. Perusahaan ini berdiri sejak
                tahun 2020 dimana disaat itu pandemi COVID-19 melanda Indonesia.
              </p>

              <p>
                Tidak hanya itu, kami juga memberikan Training untuk skema
                Digital Marketing dan juga skema keuangan bisnis untuk
                perusahaan. Lebih dari 100 perusahaan telah kami kembangkan dan
                telah bekerjasama dengan kami.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
