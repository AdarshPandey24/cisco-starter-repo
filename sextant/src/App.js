import './App.css';
import  Banner  from "./components/banner.jsx";
import Exibit from './components/exibit.jsx';
function App() {
  return (
    <div className="App">
      <Banner/>
      <Exibit title="Exhibit Title">
                <p>This is an example exhibit component.</p> 
              </Exibit>
    </div>
  );
}

export default App;
