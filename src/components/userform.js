import axios from "axios";
import { useState } from "react";


export function Userform() {
    const [userform, setUserform] = useState({ firstname: "Pariwesh" });
    const [users, setUsers] = useState([{ firstname: 'ram' }]);
    function getAllUser(){
        axios.get("http://localhost:3000/users")
        .then(function(response){
            console.log(response.data);
            setUsers(response.data)
        })
    }
    getAllUser();
    const handleEvent = function (event) {
        console.log(event.target.value);
        setUserform({
            firstname: event.target.value
        })
    }
    const saveUser = function () {
        axios.post("http://localhost:3000/users", userform)
            .then(function (response) {
                console.log(response.data);
            });
        console.log('clicked...');
    }
    return (//JSX
        <div>userform
            <input value={userform.firstname} onChange={handleEvent}></input>
            <button onClick={saveUser}> Save</button>
            {users.map(function (user, index) {
                return <div>{user.firstname}</div>
            })}
        </div>
    );
}