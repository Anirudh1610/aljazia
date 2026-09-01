import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Divisions from "./pages/Divisions";
import Manpower from "./pages/Manpower";
import Partners from "./pages/Partners";
import About from "./pages/About";
import Contact from "./pages/Contact";

const PAGES = [
  { path: "", element: <Home /> },
  { path: "divisions", element: <Divisions /> },
  { path: "manpower", element: <Manpower /> },
  { path: "partners", element: <Partners /> },
  { path: "about", element: <About /> },
  { path: "contact", element: <Contact /> },
];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {PAGES.map((p) => (
          <Route key={"en-" + p.path} index={p.path === ""} path={p.path || undefined} element={p.element} />
        ))}
      </Route>
      <Route path="ar" element={<Layout />}>
        {PAGES.map((p) => (
          <Route key={"ar-" + p.path} index={p.path === ""} path={p.path || undefined} element={p.element} />
        ))}
      </Route>
    </Routes>
  );
}
