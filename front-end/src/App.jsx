import "./App.css";
import { Navbar } from "./components/molecules/landingpage/nav-bar";
import { Introduction } from "./components/molecules/landingpage/introduction";
function App() {
  return (
    <>
      <div className="">
        <Introduction />
        <Navbar />
      </div>
    </>
  );
}

export default App;
