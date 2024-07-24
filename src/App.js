import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Cryproc from "./Components/Cryproc/Cryproc";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cryproc />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
