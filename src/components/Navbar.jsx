import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 left-0 right-0 bg-indigo-600 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to={"/"}>
            <li className="my-4 py-4 border-b border-slate-800 hover:border-slate-800 hover:rounded">
              Beranda
            </li>
          </Link>
          <Link spy={true} smooth={true} to={"/company-profile"}>
            <li className="my-4 py-4 border-b border-slate-800 hover:border-slate-800 hover:rounded">
              Profil Perusahaan
            </li>
          </Link>
          <Link spy={true} smooth={true} to={"/services"}>
            <li className="my-4 py-4 border-b border-slate-800 hover:border-slate-800 hover:rounded">
              Layanan
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <div>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <img
                  src="images/logo-funvita-blue.png"
                  alt="Funvita Logo"
                  className="w-28"
                />
              </a>
            </div>

            <div className="nav-links md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="list flex items-center gap-6 text-sm">
                  <li className="items">
                    <a
                      className="text-slate-700 transition hover:underline hover:underline-offset-4 hover:text-slate-600/75"
                      href="/"
                    >
                      {" "}
                      Beranda{" "}
                    </a>
                  </li>

                  <li className="items">
                    <a
                      className="text-slate-700 transition hover:underline hover:underline-offset-4 hover:text-slate-600/75"
                      href="/company-profile"
                    >
                      {" "}
                      Profil Perusahaan{" "}
                    </a>
                  </li>

                  <li className="items">
                    <a
                      className="text-slate-700 transition hover:underline hover:underline-offset-4 hover:text-slate-600/75"
                      href="/services"
                    >
                      {" "}
                      Layanan{" "}
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm hover:bg-indigo-700 font-medium text-white shadow"
                    href="https://wa.me/6285815042056"
                  >
                    Kontak Kami
                  </a>
                </div>

                <div className="block md:hidden">
                  {/* <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button> */}

                  <div>{click && content}</div>

                  <button onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-indigo-600 px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
          The Best Training Platform in Indonesia | Free Online Consultation
        </p>
      </div>
    </div>
  );
};

export default Navbar;
