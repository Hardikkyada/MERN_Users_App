import axios from 'axios'
import { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";



export const Login = ({ onAdd, setLogin}) => {

    const navigate = useNavigate();
    const [username, setusername] = useState('')
    const [password, setpass] = useState('')

    const user =
    {
        username: username,
        password: password
    }


    const onSubmit = async (e) => {
        e.preventDefault()

        if (!username) {
            alert('Please UserName')
            return
        }

     
        axios.post("/api/login", user)
        .then(res => { setLogin(res.data.data)
            
        if (!res.data.data._id)
        {
            alert("Wornge id And Password")
        }
        });
    

        setusername('')
        setpass('')
    }



    return (
<div>
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-md-4"></div>

                <div className="col-md-4 mt-5">
                    <div className='mb-3'>
                        <input type='text' className='form-control'
                            id="username"
                            placeholder="UserName"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <input type="password" className='form-control' placeholder="Password" value={password} onChange={(e) => setpass(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
            <input type="submit" value='Login' className="btn btn-success" /> 
            {/*<NavLink to="/add"><input type="submit" value='Registration' className="btn btn-primary ms-2" /></NavLink>*/}
            <button type="button" onClick={onAdd}  className="btn btn-primary ms-2">Registration</button>
        </form>
    </div>
       
    )
}
