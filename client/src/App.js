import logo from './logo.svg';
import './App.css';
import { AddUser } from './componets/AddUser';
import axios from "axios";
import { Login } from './componets/Login';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import { Home } from './componets/Home';

function App() {
  const [showLogin, setshowLogin] = useState(false);
  const [user, setuser] = useState([]);
  
  
/*
  const fetchuser = ()=>{
    axios.get("/api/list").then(res => console.log(res.data));
  };*/
  const deleteuser = () => {

    axios.delete("/api/user/" + user.name)
      .then(res => {
        alert("User Deleted")
        setuser({})
      });
  }
  return (
    <Router>
    <div className="App">
      {/*<AddUser />*/}
      {!user._id ? <Login onAdd={() => setshowLogin(!showLogin)} 
        showAdd={setshowLogin} setLogin={setuser}   />:<Home user={user} deleteuser={deleteuser} />}
      {!user._id && showLogin && <AddUser/>}

      
      {/*<button onClick={fetchuser} className="btn btn-primary">Fetch User</button>*/}
     
    </div>
    </Router>
  );
}

export default App;
