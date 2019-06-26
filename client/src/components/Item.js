import React from 'react';

class Item extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        const {aisle, addItem} = this.props;
        addItem(aisle);
    }

    render () {
        const {aisle: {aisleId, name}} = this.props;
        return (
            <button value={aisleId} onClick={this.handleClick}>
                {name}
            </button>
        )
    }
}

export default Item;