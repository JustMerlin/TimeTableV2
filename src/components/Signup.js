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
        <div className='signup'>
            <div className="text">
                <h2>Connexion</h2>
            </div>

            <form>
                <div className="form-group">
                    <input placeholder='Etienne' type="text" className="form-control" name='Nom' id="Name" onChange={(e) => setName(e.target.value)} />
                    <label className='form-label'>Nom</label>
                </div>

                <div className="form-group">
                    <input placeholder='Martin' type="text" className="form-control" name='Prénom' id="FirstName" onChange={(e) => setFirstName(e.target.value)} />
                    <label className='form-label'>Prénom</label>
                </div>


            </form>






            <button onClick={(e) => {

                if (name != "" && firstname != "") {
                    handle()
                }
            }}>Connexion</button>

        </div >
    );
};

export default Signup;