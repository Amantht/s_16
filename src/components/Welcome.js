import React from "react";

//const Welcome = () => <h1> This is using JSX</h1>

function Welcome(){
    return React.createElement('div', {
        id: 'wel',
        className : 'jsxclass'
    }, React.createElement('h1', null, "This is without  using JSX"));

}

export default Welcome;