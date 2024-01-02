import { Nav } from "./components/Nav";
import { Hero } from "./components/hero";

const App = () => {
  return (
    <>
      <Nav />
      <section
        className="flex justify-center items-center 
        min-h-screen"
      >
        <Hero />
      </section>
    </>
  );
};

export default App;
