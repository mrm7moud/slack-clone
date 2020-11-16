import "./App.css";
import Header from "./Header";
import Siderbar from "./Siderbar"

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <div className="app__body">
        {/* Sidebar */}
        <Siderbar />
        {/*React-Router -> Chat screen */}
      </div>
    </div>
  );
}

export default App;
