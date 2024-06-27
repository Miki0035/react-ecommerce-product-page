import { StateContext } from "./context/StateContext";
import { Navbar, ProductSection } from "./components";
const App = () => {
  return (
    <StateContext>
      <Navbar />
      <main>
        <ProductSection />
      </main>
      <div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.linkedin.com/in/mikiyas-kebede-b661aa225/"
            target="_blank"
          >
            Mikiyas Kebede
          </a>
          .
        </div>
      </div>
    </StateContext>
  );
};

export default App;
