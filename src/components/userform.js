import { useState } from "react";

export function Userform() {//This is the Controller/Component here
    //Model objects - we can define here
    const [userForm, setUserForm] = useState({ firstname: "Balaji O S M", age: 33 });

    const handleEvent = function (event) {
        console.log(event.target.value);
        setUserForm({
            ...userForm, [event.target.name]: event.target.value //spread operator
        })
    }

    return (//JSX - Extensible Java Script - HTML+JS - This is the VIEW part here-onChange is used here for two way data binding
        //basically React uses events for handling two way data binding
        <div>
            User Form <br />
            <input value={userForm.firstname} name='firstname' onChange={handleEvent}></input>
            <input value={userForm.age} name='age' onChange={handleEvent}></input>
        </div>
    );
}