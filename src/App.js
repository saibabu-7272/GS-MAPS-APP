import {Routes,Route,BrowserRouter} from 'react-router-dom'

import './App.css';
import MapView from './components/MapView'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import ProtectedRouter from './components/ProtectedRouter'


const App = () => (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginPage  />} />
      <Route exact path="/" element={<ProtectedRouter element={<Home />} />} />
      <Route exact path="/map" element={<ProtectedRouter element={<MapView />} />} />
    </Routes>
    </BrowserRouter>
  ) 


export default App;
