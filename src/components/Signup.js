import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const Signup = () => {
    const [cookies, setCookies] = useCookies()
    const [name, setName] = useState("")
    const [firstname, setFirstName] = useState("")

    const handle = () => {
        setCookies("name", name,)
        setCookies("firstname", firstname)
    };

    return (
        <div>

            <h2>Connexion</h2>
            <ul>
                <li>Nom</li>
                <input type="text" name='Nom' id="Name" onChange={(e) => setName(e.target.value)} />
                <li>Prénom</li>
                <input type="text" name='Prénom' id="FirstName" onChange={(e) => setFirstName(e.target.value)} />
                <button onClick={(e) => {

                    if (name != "" && firstname != "") {
                        handle()
                    }
                }}>Connexion</button>
            </ul>

        </div>
    );
};

export default Signup;