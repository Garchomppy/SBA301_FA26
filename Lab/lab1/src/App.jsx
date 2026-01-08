import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListofOrchid from "./components/ListofOrchid";
function App() {
  return (
    <>
      <Header />
      <ListofOrchid />
      <Footer images="/pic.jpg" name="NCP" email="chontem123@gmail.com" />
    </>
  );
}

export default App;
