import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Signup from '../components/Signup';

const Connexion = () => {
    const [name, setName] = useState("");
    const [cookies, setCookies, removeCookie] = useCookies();
    const navigate = useNavigate();



    return (
        <div>

            {cookies.name == undefined && (
                <Signup />

            )}
            {cookies.name != undefined && (
                <div className='center'>
                    <h1>Bonjour, {cookies.firstname}</h1>
                    <div>
                        <button className='espace' onClick={(e) => {
                            removeCookie("name");
                            removeCookie("firstname")
                        }}>Changer de nom</button>
                        <button onClick={(e) => {
                            navigate("site.htm");
                            window.location.reload(true);
                        }}>Continuer</button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Connexion;