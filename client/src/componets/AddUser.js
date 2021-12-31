import axios from 'axios'
import {useState} from 'react'

export const AddUser = () => {

    const [username,setusername] = useState('')
    const [password, setpass] = useState('')
    const [name, setname] = useState('')
    const [age, setage] = useState('')



    const user = 
    { 
        username:username,
        password:password,
        name:name,
        age:age 
    }

    
    const onSubmit = async (e) => {
        e.preventDefault()

        if (!username) {
            alert('Please UserName')
            return
        }

        /*const res = await fetch("/api/registration",{
            method:"POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })

        
        const data = await res.json()*/

        axios.post("/api/registration",user).then((res)=> console.log(res.data));

        setusername('')
        setpass('')
        setname('')
        setage('')
    }



    return (
        
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
                <input type="text" className='form-control' placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
            </div>

            <div className='mb-3'>
                <input type="text" className='form-control' id="age" placeholder="Age" value={age} onChange={(e) => setage(e.target.value)} />
            </div>

            <div className='mb-3'>
                <input type="password" className='form-control' placeholder="Password" value={password} onChange={(e) => setpass(e.target.value)} />
            </div>
            </div>
                <div className="col-md-4"></div>
            </div>
            <input type="submit" value='Add User' className="btn btn-primary" />
            
        </form>
    )
}
