import SingIn from "./components/SignIn/SignIn";
import HomePage from "./components/homePage/HomePage";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SingIn />} />
          <Route exact path="/Home" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}
//
export default App;
