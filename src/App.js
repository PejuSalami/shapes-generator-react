import './App.css';
import Shapes from './shapes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Shapes/>
      <ToastContainer />
    </div>
  );
}

export default App;
