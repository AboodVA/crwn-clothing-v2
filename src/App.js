import { Routes, Route } from "react-router-dom";
import "./App.styles.scss";
import Category from "./components/category/Category";
import Home from "./components/routes/home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
