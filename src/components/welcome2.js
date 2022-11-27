// DEPENDENCIAS ---> IMPORTS
import React from 'react';

// LOGICA
function formatName(user){
     return user.firstName + ' ' + user.lastName;
}

const user = {
     firstName: 'Matias',
     lastName: 'Perez'
};

const element = (
    <h1> 
        Hello, {formatName(user)}!
    </h1>
);

// RENDER
function Saludo(){
     return (
        <div>
            <p>Hola, desde Welcome {element}</p>
        </div>
     )
}

// EXPORT/SALIDA
export default Saludo;