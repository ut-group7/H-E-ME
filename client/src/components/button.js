import React from 'react';



//THIS BUTTON IS AN EXAMPLE FOR MAKING A CALL TO OUR API SERVER WITHIN THE CLIENT
//DELETE WHEN NO LONGER NEEDED

class Button extends React.Component {
    handleClick() {
        fetch ('/api/whatever')
        .then(function(res){
            return res.json();
        })
        .then(function(finaldata) {
            alert(finaldata[0].name + ", " + finaldata[1].name + ", " + finaldata[2].name + ", " + finaldata[3].name)
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