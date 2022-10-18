import "./App.css";

function App() {
  return (
    <div className="App flex flex-col space-y-5 justify-center items-center h-screen bg-gray-800 text-white">
      <a href="https://www.instagram.com/iamwaleed_7">
        <h1 className="font-bold text-5xl">Waleed Rauf 😄</h1>
      </a>
      <div className="">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <a className="font-bold" href="https://github.com/iamwaleed07">
        <p className="">Follow me on GitHub 🐈</p>
      </a>
    </div>
  );
}

export default App;
