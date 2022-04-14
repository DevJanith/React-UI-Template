import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/list";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import UnderContraction from "./pages/underContraction/UnderContraction";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import { userInput } from "./formSource";

function App() {

  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users" >
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInput} title={"Add New User"} />} />
            </Route>
            <Route path="products" >
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="orders" >
              <Route index element={<List />} />
              <Route path=":ordersId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="delivery" >
              <Route index element={<List />} />
              <Route path=":deliveryId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
          <Route path="/under-construction*" >
            <Route index element={<UnderContraction />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
