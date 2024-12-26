import './App.css';
import {Route, Routes} from "react-router-dom"
import IndexCon from './Containers/IndexCon';
import LoginCon from './Containers/LoginCon';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexCon />}></Route>
        <Route path="/login" element={<LoginCon />}></Route>
      </Routes>
    </>
  );
}

export default App;
