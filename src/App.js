import "./style.css";
import Pagethree from "./components/Pagethree";
import Header from "./components/Header";
import Pagetwo from "./components/Pagetwo";
import Pagefour from "./components/Pagefour";
import Pagefive from "./components/Pagefive";
import Pagesix from "./components/Pagesix";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Pagetwo />
      <Pagethree />
      <Pagefour />
      <Pagefive />
      <Pagesix />
      <Footer />
    </div>
  );
}

export default App;
