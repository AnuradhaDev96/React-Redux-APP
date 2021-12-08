import React, { Component } from 'react';

//UI Component | Stateless
//can use functional component style
class NinjaList extends Component {
    render() {
        const { ninjas } = this.props;
        //ternary operation for conditional output
        const ninjaList = ninjas.map(ninja => {
            return ninja.age > 25 ?(
                <div className='ninja' key={ninja.id}>
                    <div>id: {ninja.id}</div>
                    <div>Name: {ninja.myName}</div>
                    <div>Age: {ninja.age}</div>
                </div>
            ): null;
        });
        return (
            <div className='ninja-list'>
                {ninjaList}
            </div>
        )
    }
}

export default NinjaList;
