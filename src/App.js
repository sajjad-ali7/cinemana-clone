import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Aside from "./common/aside";
import AsideModal from "./modal";
import routes from "./routes";
import { MetaDecorator } from "./helper";

function App() {
  const [showElements, setShowElements] = useState(true);
  let { increaseSize } = useSelector((state) => state.aside.value);

  return (
    <div className={`App ${increaseSize ? "increase" : "decrease"}`}>
      <MetaDecorator title={"Cinemana"} />
      <Router>
        <AsideModal />
        {showElements ? <Aside /> : ""}
          <Routes>
            {routes(setShowElements).map((route) => (
              <Route {...route} />
            ))}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
