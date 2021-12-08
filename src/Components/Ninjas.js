import React from 'react';

//UI Component | Stateless
// aka functional component
const Ninjas = (props) => {
    // render() {
        // console.log(this.props);
        const { myName, age } = this.props;
        return (
            <div className='ninja'>
                <div>Name: { myName }</div>
                <div>Age: { age }</div>
            </div>
        );
    // }
}
// {this.props.myName}

export default Ninjas;