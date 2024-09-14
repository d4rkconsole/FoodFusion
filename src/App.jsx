import Header from "./components/header"
import Footer from "./components/footer"
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

export default App;
