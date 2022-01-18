import Header from "../Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Main from "../Main";
import About from "../About";
import Conenction from "../Conenction";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/conect" element={<Conenction />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
