const Clients = () => {
  return (
    <div className="lg:py-24 hidden sm:block bg-indigo-50">
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Klien <span className="text-blue-600">Funvita</span>
        </h2>
      </div>

      <article className="flex justify-center">
        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src="images/client1.png"
            className="aspect-square w-32 object-cover"
          />
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src="images/client2.png"
            className="aspect-square w-32 object-cover"
          />
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src="images/client3.png"
            className="aspect-square w-32 object-cover"
          />
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src="images/client4.png"
            className="aspect-square w-32 object-cover"
          />
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src="images/client5.png"
            className="aspect-square w-32 object-cover"
          />
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src="images/client6.png"
            className="aspect-square w-32 object-cover"
          />
        </div>
      </article>
    </div>
  );
};

export default Clients;
