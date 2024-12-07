import './App.css'
import Login from './Screens/User/Login'
import Register from './Screens/User/Register'
import Resetpass from './Screens/User/Resertpass'
import SetAccount from './Screens/Accountsetup/Setaccount'
import MainSellScreen from './Screens/MainScreen/Mainscreen'
import Customers from './Screens/MainScreen/Customers'
import SellCustomer from './Screens/MainScreen/Sellcustomer'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {

 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />     
        <Route path="/reset-pass" element={<Resetpass/>} />        
        <Route path="/setup-account" element={<SetAccount/>} />  
        <Route path="/main" element={<MainSellScreen/>} />               
        <Route path="/main/customers" element={<Customers/>} />               
        <Route path="/main/sell-customers" element={<SellCustomer/>} />               
      </Routes>

    </Router>
  )
}

export default App
