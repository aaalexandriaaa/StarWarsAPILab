import React from 'react'


function StarshipPage(props) {

    return (
        <div id="starship">
            {
                props.location.starshipState.starship.name ?
                    <>
                        <h3>{props.location.starshipState.starship.name}</h3>
                        <h4>{props.location.starshipState.starship.model}</h4>
                        <a href="/">Return!</a>
                    </>
                    :
                    <>
                        <p>Loading starship details...</p>
                    </>
            }
        </div>
    );
}



export default StarshipPage;





