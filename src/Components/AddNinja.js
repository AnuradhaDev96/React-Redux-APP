import React, { Component } from 'react';

//Container Component | Statefull
class AddNinja extends Component {
    //state type names should be similar to the input id name. (To match the e.target.id)
    state = {
        myName: null,
        age: null
    }

    handleOnChange = (e) => {
        // console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault(); //this will not clear the default nature of form values (does not clear input values)
        // console.log(this.state);
        this.props.addNewNinja(this.state); //function as props (pass a ninja type object. So set this.state as arguement)
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor='myName'>Enter name:</label>
                    <input type='text' id='myName' onChange={this.handleOnChange} />

                    <label htmlFor='age'>Enter name:</label>
                    <input type='text' id='age' onChange={this.handleOnChange} />

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddNinja;
