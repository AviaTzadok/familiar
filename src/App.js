import SingIn from "./components/SignIn/SignIn";
import HomePage from "./components/homePage/HomePage";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Level1 from "./components/levels/level1/Level1";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SingIn />} />
          <Route exact path="/Home" element={<HomePage />} />
          <Route exact path="/Level1" element={<Level1 />} />
        </Routes>
      </Router>
    </div>
  );
}
//
export default App;
