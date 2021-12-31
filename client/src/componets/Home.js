
import axios from "axios";
import { useState } from "react";
import { UpdateUser } from "./UpdateUser";


export const Home = ({user,deleteuser}) => {

    const [showLogin, setshowLogin] = useState(false);    
    const [name, setname] = useState('')
    const [userdata, setuserdata] = useState({
        username : "",
        name:"",
        age:""
    })

    const onSubmit = async (e) => {
        e.preventDefault()



        if (!name) {
            alert('Please Name')
            return
        }

        axios.get("/api/user/"+name)
                .then(res => {
                    setuserdata(res.data.data)
                    if (!res.data.data._id) {
                        alert("No User Data Found")
                    }
                    
                });
    }

   
    return (
        <div>
            <h1>Welcom Home {user.name}</h1>

            <button class="btn btn-danger" onClick={deleteuser}>Delete Account</button>

            <button type="button" onClick={() => setshowLogin(!showLogin)} className="btn btn-primary ms-2">Update Account</button>

            {showLogin && <UpdateUser userdata={user} />}
            
            <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-md-4"></div>

                <div className="col-md-4 mt-5">
                    <div className='mb-3'>
                        <input type='text' className='form-control'
                            id="name"
                            placeholder="name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
            <input type="submit" value='Search' className="btn btn-success" />
        </form>

        {userdata._id ?
        <table className="table table-bordered">
            <tr>
                <td>UserName</td>
                <td>{userdata.username}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>{userdata.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{userdata.age}</td>
            </tr>
        </table>:""}
        </div>
    )
}
