import "./App.css";
import { react, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

function App() {
  const [question, setQuestion] = useState(1);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [turnover, setTurnover] = useState("");
  const [email, setEmail] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name,
      type,
      turnover,
      email,
    };
    console.log(data);
    setQuestion(5);
    setMsg(`Welcome onboard ${name}`);
    setShowMsg(true);
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
              {name.length > 0 && (
                <div className="next-button-container">
                  <MdOutlineNavigateNext
                    onClick={() => setQuestion(2)}
                    type="button"
                    className="next-button"
                  />
                </div>
              )}
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
              {type.length > 0 && (
                <div className="next-button-container">
                  <MdOutlineNavigateNext
                    onClick={() => setQuestion(3)}
                    type="button"
                    className="next-button"
                  />
                </div>
              )}
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
              {turnover.length > 0 && (
                <div className="next-button-container">
                  <MdOutlineNavigateNext
                    onClick={() => setQuestion(4)}
                    type="button"
                    className="next-button"
                  />
                </div>
              )}
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
                : question === 4
                ? "box show"
                : "box end"
            }
          >
            <div className="input-container" required>
              <input
                type="email"
                placeholder="Enter your business email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              {email.length > 0 && (
                <div className="next-button-container">
                  <MdOutlineNavigateNext
                    onClick={submitHandler}
                    className="next-button"
                  />
                </div>
              )}
            </div>
          </form>

          {/* here  */}

          <form
            className={
              question === 1
                ? "box start"
                : question === 2
                ? "box start"
                : question === 3
                ? "box start"
                : question === 4
                ? "box start"
                : "box show"
            }
          >
            <p className="msg">{msg}</p>
          </form>

          {/* here */}
        </div>
        <div className="question-container">
          <div
            className={question === 1 ? "circle circle-active" : "circle"}
            onClick={() => setQuestion(1)}
          ></div>
          <div
            className={question === 2 ? "circle circle-active" : "circle"}
            onClick={() => setQuestion(2)}
          ></div>
          <div
            className={question === 3 ? "circle circle-active" : "circle"}
            onClick={() => setQuestion(3)}
          ></div>
          <div
            className={question === 4 ? "circle circle-active" : "circle"}
            onClick={() => setQuestion(4)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
