import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <About />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
