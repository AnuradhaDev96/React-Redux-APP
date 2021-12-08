import React, { Component } from 'react';

//UI Component | Stateless
//can use functional component style
class NinjaList extends Component {
    render() {
        const { ninjas, deleteNinja } = this.props;
        //ternary operation for conditional output
        const ninjaList = ninjas.map(ninja => {
            return ninja.age > 25 ? (
                <div className='ninja' key={ninja.id}>
                    <div>id: {ninja.id}</div>
                    <div>Name: {ninja.myName}</div>
                    <div>Age: {ninja.age}</div>
                    <button onClick={() => { deleteNinja(ninja.id) }}>Delete this Ninja</button> {/* to avoid auto fiering the delete method use anonymous function */}
                </div>
            ) : null;
        });
        return (
            <div className='ninja-list'>
                {ninjaList}
            </div>
        )
    }
}

export default NinjaList;
