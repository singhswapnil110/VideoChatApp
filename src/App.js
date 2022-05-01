import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Preview } from "./components/Preview";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/join-room/:roomID" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
