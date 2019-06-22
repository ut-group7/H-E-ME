import React from 'react';



//THIS BUTTON IS AN EXAMPLE FOR MAKING A CALL TO OUR API SERVER WITHIN THE CLIENT
//DELETE WHEN NO LONGER NEEDED

class Button extends React.Component {
    handleClick() {
        fetch ('/api/test/whatever')
        .then(function(res){
            return res.json();
        })
        .then(function(finaldata) {
            alert('hey you have data ' + finaldata.data)
            console.log (finaldata);
        })
        .catch(function(err) {
            console.error(err);
        })
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