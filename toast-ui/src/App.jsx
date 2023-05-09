import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToastEditor from "./components/ToastEditor";
import View from "./components/View";
import Toolbar from "./components/toolbar";

function App() {
  return (
    <BrowserRouter>
      <Toolbar />
      <Routes>
        <Route path="/home" element={<ToastEditor />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
