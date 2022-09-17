import Main from "./Components/Main";
import ArcanaContextProvider from "./context/ArcanaContextProvider";

function App() {
  return (

    <div className="App">
     <ArcanaContextProvider>
      <Main/>
     </ArcanaContextProvider>
    </div>
  );
}

export default App;
