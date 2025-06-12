import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-[#13072E] text-white flex justify-center">
      <div className="container">
        <Header />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
