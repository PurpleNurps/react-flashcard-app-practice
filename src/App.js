import logo from "./logo.svg";
import data from "./data.json";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <img src={logo} width="100px" alt="Logo" />
      <h1 className="title">React Flashcards</h1>
      <p>🧠 Expand Your React Knowledge, One Flashcard at a Time 🐌</p>
    </>
  );
}

function Main() {
  return (
    <section className="main">
<Form />
      <Flashcards/>
    </section>
  )
}

function Form() {
  return (
    <form>
      <label for="question">Question: </label>
      <input type="text" />
      <label for="answer">Answer: </label>
      <input type="text" />
      <button>Add</button>
    </form>
  );
}
 
function Flashcards() {
  return <Flashcard />
}

function Flashcard() {
  return (
    <section className="flashcard-container">
      {data.map((id) => {
        return (
          <div className="flashcard" key={id}>
            <p>🤔</p>
            <p>{id.question}</p>
          </div>
        );
      })}
    </section>
  );
}

function Footer() {
return (<section className="footer">
  <p>Built with React</p>
  <img src={logo} width="25px" alt="Logo" />
  </section>
)
}
export default App;
