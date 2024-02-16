import styles from "./App.module.css";
import { About } from "./components/about/about";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
