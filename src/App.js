import "./styles.css";
import InputDate from "./components/inputdate";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Header />

      <InputDate />
      <Footer />
    </div>
  );
}
