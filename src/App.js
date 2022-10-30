import { Routes, Route } from "react-router-dom";
import "./App.styles.scss";
import Category from "./components/category/Category";
import Home from "./components/routes/home/Home";
import Navigation from "./components/routes/navigation/navigation";
import SignIn from "./components/routes/sign-in/signIn";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
