import axios from "axios";
import { useState } from "react";
import { Counter } from "./Counter";

const BASE_URL = "http://localhost:3001/users/";
export function Userform() {
    const [userform, setUserform] = useState({ firstname: "Pariwesh" });
    const [users, setUsers] = useState([]);
    function getAllUser() {
        if (!users.length)
            axios.get(BASE_URL)
                .then(function (response) {
                    console.log(response.data);
                    setUsers(response.data)
                })
    }
    getAllUser();
    const handleEvent = function (event) {
        console.log(event.target.value);
        setUserform({
            ...userform, [event.target.name]: event.target.value //spread operator
        })
    }
    function validate(){//returns false if data is invalid
       return ( userform.firstname ||userform.firstname.trim() !=='')
    }
    const saveUser = function () {
        if(!validate()){
            alert('input data is wrong');
            return ;
        }
        axios.post(BASE_URL, userform)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                alert(error);
            });
        console.log('clicked...');
    }
    function deleteUser(event) {
        if (!window.confirm("Are you sure?"))
            return;
        axios.delete(BASE_URL + event.target.id)
        .then(function (response) {
            getAllUser();
        })
    }
    return (//JSX
        <div>userform
            <input value={userform.firstname} name='firstname' onChange={handleEvent}></input>
            <input value={userform.age} name='age' onChange={handleEvent}></input>
            <input value={userform.gender} name='gender' onChange={handleEvent} type='radio' value='Female'/>Female
            <input value={userform.gender} name='gender' onChange={handleEvent} type='radio' value='Male'/>Male

            <button onClick={saveUser}> Save</button>
            {users.map(function (user, index) {
                return <div>{user.firstname}, {user.age}
                    <button id={user.id} onClick={deleteUser} >Delete</button>
                </div>
            })}
            <Counter count={users.length} user={userform}></Counter>
        </div>
    );
}