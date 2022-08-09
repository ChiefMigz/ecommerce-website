import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {DataProvider} from './GlobalState';
import Header from './components/headers/Header';
import Home from './components/mainpages/Pages';


function App() {
  return (
   <DataProvider>
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          
        </div>
      </Router>
   </DataProvider>
  );
}

export default App;
