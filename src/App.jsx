import { useEffect, useState } from "react";

function App() {
  const [time,setTime] = useState(0);
  const [running,setRunning] = useState(false);

  useEffect (() => {
    let interval ;
    if (running) {
      interval = setInterval (() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval (interval);
    }
    return () => clearInterval(interval);
  },[running]);

  return (
    <div className="mx-50 my-50">

        <h1 className="text-red-500 " >01-Stopwatch</h1>

          <div className="">
             <spn>{("0" + Math.floor ((time/60000) % 60)).slice(-2)}</spn>
             <spn>{("0" + Math.floor ((time/1000) % 60)).slice(-2)}</spn>
             <spn>{("0" + ((time/100) % 100)).slice(-2)}</spn>
          </div>

          <div>
                {running ? (<button onClick={()=> { setRunning(false) }}>Stop</button>):(
                <button onClick={()=> { setRunning(true) }}>Start</button> )}
                <button onClick={()=> { setTime(0) }}>Reset</button>
     
           </div>

    </div>

  );
}
export default App;