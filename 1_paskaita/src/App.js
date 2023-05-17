// importai virsuje
import FuncButton from "./components/FuncButton";
import FuncDiv from "./components/FuncDiv";
import ClassButton from "./components/ClassButton";
import ClassDiv from "./components/ClassDiv";
import "./App.css";
import Greeting from "./components/Greeting";

// apibrezia komponento pavadinima, visada didzioji raide
// failo pavadinimas keip ir komponento
function App() {
  const getText = () => {
    return "How was your day?";
  };
  return (
    <div>
      <div>
        <h1>Hey</h1>
        <h2>{getText()}</h2>
        <FuncButton title="Mygtuko tekstas1" />
        <FuncDiv />
      </div>
      <div>
        <ClassButton name="Class mygtukas1" />
        <ClassDiv />
      </div>
      <Greeting name="Tomas" />
      <Greeting />
    </div>
  );
}

// exportuojame kad galetume importuoti kitame faile
export default App;
