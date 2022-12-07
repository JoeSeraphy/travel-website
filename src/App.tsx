import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";

function App() {
  return (
    <>
      <div className="bg-[url('./background.png')] bg-no-repeat bg-cover h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
