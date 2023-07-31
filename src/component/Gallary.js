import React from 'react'

export function Gallary(props){
    return (
        <div>
            <img src={props.ulr} width={100} />
        </div>
    );
}

export function Profile(){
    return (
        <div>
            <p>This logo belong to WOrkout tracker Website</p>
        </div>
    );
}
