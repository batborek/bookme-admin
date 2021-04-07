import './App.css';
import Route from './pages/route';
import CoreContextProvider from "./core/context"

function App() {
  return (
    <>
    <CoreContextProvider>
    <div className="App">
      <Route />
    </div>
    </CoreContextProvider>
    </>
  );
}

export default App;
