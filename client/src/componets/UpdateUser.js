import axios from 'axios'
import { useState } from 'react'

export const UpdateUser = ({onAdd,userdata}) => {

    const [password, setpass] = useState(userdata.password)
    const [name, setname] = useState(userdata.name)
    const [age, setage] = useState(userdata.age)



    const user =
    {
        password: password,
        name: name,
        age: age
    }


    const onSubmit = async (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please UserName')
            return
        }

        axios.put("/api/updateuser", user).then((res) => console.log(res.data));

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
            <input type="submit" value='Update' className="btn btn-primary" />

        </form>
    )
}
