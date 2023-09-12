import "./App.css";
import { react, useState } from "react";

function App() {
  const [question, setQuestion] = useState(1);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [turnover, setTurnover] = useState("");
  const [website, setWebsite] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name,
      type,
      turnover,
      website,
    };
    console.log(data);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="boxes">
          <form className={question === 1 ? "box show" : "box end"}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter your business name"
                required
                onChange={(e) => setName(e.target.value)}
              />
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
              <select
                name="business-type"
                required
                id="business-type"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" disabled selected>
                  Select your business type
                </option>
                <option value="sole-trader">Sole Trader</option>
                <option value="partnership">Partnership</option>
                <option value="company">Company</option>
                <option value="trust">Trust</option>
                <option value="other">Other</option>
              </select>
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
              <select
                name="business-turnover"
                required
                id="business-turnover"
                onChange={(e) => setTurnover(e.target.value)}
              >
                <option value="" disabled selected>
                  Select your turnover
                </option>
                <option value="Under $100,000">Under $100,000</option>
                <option value="$100,000 - $500,000">$100,000 - $500,000</option>
                <option value="$500,000 - $1 million">
                  $500,000 - $1 million
                </option>
                <option value="$1 million - $5 million">
                  $1 million - $5 million
                </option>
                <option value="Over $5 million">Over $5 million</option>
              </select>
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
            <div className="input-container" required>
              <input
                type="text"
                placeholder="Enter your business website"
                required
                onChange={(e) => setWebsite(e.target.value)}
              />
              <button onClick={submitHandler}>Next</button>
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
