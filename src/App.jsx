import './App.css'
import ArcanaContextProvider from './context/ArcanaContextProvider';
import Main from './components/Main';
function App() {

  return (
    <div className="App">
      <ArcanaContextProvider>
        <Main/>
      </ArcanaContextProvider>
    </div>
  )
}

export default App
