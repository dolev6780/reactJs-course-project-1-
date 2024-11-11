import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        {/* {user ? <Navigate to="/" /> : <Navigate to="/signin" />} */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
