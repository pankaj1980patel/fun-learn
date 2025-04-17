import "./App.css";
import Gopal from "./components/Gopal";
import Rahul from "./components/Rahul";

function App() {
  console.log("hello world");

  const A = [1, 2, 3];

  // For lop
  // For each
  // for of
  // for in
  // while
  // map
  // reduce

  return (
    <>
      <div className="grid grid-cols-2">
        <Rahul />
        <Gopal />
      </div>
    </>
  );
}

export default App;
