import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import { Debts, Home, Transactional, Login,PageNotFound } from "./pages/index";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme="dark" position="top-left"

/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/debts" element={<Debts />} />
          <Route path="/transactional" element={<Transactional />} />
        </Route>
      </Routes>
      <Routes path="*" element={<PageNotFound/>}/>
    </BrowserRouter>
  );
}

export default App;
