import React from 'react';



//THIS BUTTON IS AN EXAMPLE FOR MAKING A CALL TO OUR API SERVER WITHIN THE CLIENT
//DELETE WHEN NO LONGER NEEDED

class Button extends React.Component {
    handleClick() {
        fetch ('/api/test/whatever')
        .then(function(res){
            alert('hey you have data ' + res)
            console.log (res); //literally logging the 'response' object is not receiving the data being passed in the api?
        }
            );
    }

    render() {
        return (
            <button onClick={(e) => 
            this.handleClick(e)}>
                Go To /api/test/whatever route
            </button>
        );
    }
}
export default Button;