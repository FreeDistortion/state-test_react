import logo from './logo.svg';
import './App.css';

function App() {
  let mynum=1;
  const add = () => {
    mynum++;
    console.log(mynum);
  }
  return (
    <div>
<h1>number: {mynum}</h1>
<button onClick={add}>UPUPUPUPUP</button>
    </div>
  );
}

export default App;
