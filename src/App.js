import Login from "./pages/login";
import { HashRouter, Routes, Route, } from "react-router-dom";
import Dashboard from "./pages/board";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}


export default App;