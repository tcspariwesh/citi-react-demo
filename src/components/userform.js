import { useState } from "react";


export function Userform() {
    const [userform, setUserform] = useState({firstname:"Pariwesh"});
    const handleEvent = function(event){
        console.log(event.target.value);
        setUserform({
            firstname:event.target.value
        })
    }
    return (//JSX
        <div>userform
            <input value={userform.firstname} onChange={handleEvent}></input>

        </div>
    );
}