// importai virsuje
import FuncButton from "./components/FuncButton";
import "./App.css";

// apibrezia komponento pavadinima, visada didzioji raide
// failo pavadinimas keip ir komponento
function App() {
  const name = "Tomas";

  function getName() {
    return "Tadas";
  }

  const getNameV2 = () => {
    return "Tadukas";
  };

  const nameV2 = getNameV2();

  return (
    <div>
      <h1>Tomas</h1>
      <h2>{name}</h2>
      <h2>{getName()}</h2>
      <h2>{getNameV2()}</h2>
      <h2>{nameV2}</h2>
      <FuncButton title="Click me" />

      <FuncButton title="Spausk Mane" />

      <FuncButton title="Nespausk Manes" />
    </div>
  );
}

// exportuojame kad galetume importuoti kitame faile
export default App;
