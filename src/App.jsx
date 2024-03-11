import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import WhyMe from "./components/WhyMe";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Clients />
      <WhyMe />
      <Services />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
