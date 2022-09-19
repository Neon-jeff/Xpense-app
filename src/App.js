import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Welcome from './components/welcome/welcome';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
