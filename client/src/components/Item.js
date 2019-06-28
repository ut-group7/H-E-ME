import React from 'react';
class Item extends React.Component {

    state = {
        aisleNumber: [],
        loading: false
    }


    // handleClick = (e) => {
    //     e.preventDefault();
    //     const {aisle, addItem} = this.props;
    //     addItem(aisle);
    //     const aisleId = aisle.aisleId;
    //     console.log(aisleId);
    //     this.setState({loading: true});
    //     this.getAisle(aisleId)
    //     .then(res => res.json())
    //     .then(returnedAisle => this.setState({ aisleNumber: returnedAisle}));
    // }

    handleChange = (e) => {
        // e.preventDefault();
        const {aisle, addItem} = this.props;
        addItem(aisle);
        const aisleId = aisle.aisleId;
        console.log(aisleId);
        this.setState({loading: true});
        this.getAisle(aisleId)
        .then(res => res.json())
        .then(returnedAisle => this.setState({ aisleNumber: returnedAisle, loading: false}));
    }


    getAisle = (aisleId) => {
        return fetch(`http://localhost:3001/api/aisleNums/${aisleId}` || `/api/aisleNums/${aisleId}`)
       }

    render () {
        const {aisle: {aisleId, name}} = this.props;
        const {aisleNumber} = this.state;
        return (
            <div>
            {/* <button value={aisleId} onClick={this.handleClick}>
                {name}
            </button>
            <p>{aisleNumber.name}</p> */}
            <div style={{display: "inline-flex"}}>
                   <input type="checkbox" value={aisleId} onChange={this.handleChange} defaultUnchecked />&nbsp;{name} 
                  
               </div>
               <p>Aisle: {aisleNumber.name}</p> 
            </div>
        )
    }
}

export default Item;