import './App.css';

function App() {
  const styledText = {
    color: "red",
    fontSize: "25px",
    textAlign: "center",
    margin: "40px",
    border: "1px solid red",
    backgroundColor: "blue"
  }

  return (
    <div style={styledText}>
      <p>Hello World</p>
    </div>
  );
}

export default App;
