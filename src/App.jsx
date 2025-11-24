import Features from "./components/features";
import Hero from "./components/hero";
import Footer from "./components/shared/footer";
import Header from "./components/shared/header";

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
};

export default App;
