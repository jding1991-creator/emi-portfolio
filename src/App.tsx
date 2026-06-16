import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Home from "@/pages/Home";
import Works from "@/pages/Works";
import Resume from "@/pages/Resume";
import ProjectDetail from "@/pages/ProjectDetail";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<ProjectDetail />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}
