import "./App.css";
import { react, useState } from "react";

function App() {
  const [question, setQuestion] = useState(1);
  return (
    <div className="App">
      <div className="container">
        <div className="boxes">
          <form className={question === 1 ? "box show" : "box end"}>
            <div className="input-container">
              <input type="text" placeholder="Enter your business name" />
              <button onClick={() => setQuestion(2)} type="button">
                Next
              </button>
            </div>
          </form>
          <form
            className={
              question === 1
                ? "box start"
                : question === 2
                ? "box show"
                : "box end"
            }
          >
            <div className="input-container">
              <input type="text" placeholder="Enter your business type" />
              <button onClick={() => setQuestion(3)} type="button">
                Next
              </button>
            </div>
          </form>
          <form
            className={
              question === 1
                ? "box start"
                : question === 2
                ? "box start"
                : question === 3
                ? "box show"
                : "box end"
            }
          >
            <div className="input-container">
              <input type="text" placeholder="Enter your business turnover" />
              <button onClick={() => setQuestion(4)} type="button">
                Next
              </button>
            </div>
          </form>
          <form
            className={
              question === 1
                ? "box start"
                : question === 2
                ? "box start"
                : question === 3
                ? "box start"
                : "box show"
            }
          >
            <div className="input-container">
              <input type="text" placeholder="Enter your business website" />
            </div>
          </form>
        </div>
        <div className="question-container">
          <div className="circle" onClick={() => setQuestion(1)}></div>
          <div className="circle" onClick={() => setQuestion(2)}></div>
          <div className="circle" onClick={() => setQuestion(3)}></div>
          <div className="circle" onClick={() => setQuestion(4)}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
