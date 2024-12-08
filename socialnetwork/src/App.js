import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";
import {ThemeProvider, useTheme} from './context/ThemeContext';
function App() {
  const data = "data";
 
  return (
    <ThemeProvider>
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
