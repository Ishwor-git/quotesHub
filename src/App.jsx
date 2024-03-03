import "./App.css";
import Landing from "./pages/landing";
import Quotes from "./pages/quotesPage";

function App() {
  return (
    <>
      <div className=" overflow-x-hidden">
        <Landing />
        <Quotes />
      </div>
    </>
  );
}

export default App;
