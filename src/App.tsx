import { StateContext } from "./context/StateContext";
import { Navbar, ProductSection } from "./components";
const App = () => {
  return (
    <StateContext>
      <Navbar />
      <ProductSection />
      <div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </StateContext>
  );
};

export default App;
