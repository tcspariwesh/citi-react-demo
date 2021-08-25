import axios from "axios";
import { useState } from "react";


export function Userform() {
    const [userform, setUserform] = useState({ firstname: "Pariwesh" });
    const [users, setUsers] = useState([]);
    function getAllUser() {
        if (!users.length)
            axios.get("http://localhost:3000/users")
                .then(function (response) {
                    console.log(response.data);
                    setUsers(response.data)
                })
    }
    getAllUser();
    const handleEvent = function (event) {
    console.log(event.target.value);
        setUserform({
           ...userform,  [event.target.name]: event.target.value //spread operator
        })
    }
    const saveUser = function () {
        axios.post("http://localhost:3000/users", userform)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                alert(error);
            });
        console.log('clicked...');
    }
    return (//JSX
        <div>userform
            <input value={userform.firstname} name='firstname' onChange={handleEvent}></input>
            <input value={userform.age}  name='age' onChange={handleEvent}></input>

            <button onClick={saveUser}> Save</button>
            {users.map(function (user, index) {
                return <div>{user.firstname}, {user.age}</div>
            })}
        </div>
    );
}