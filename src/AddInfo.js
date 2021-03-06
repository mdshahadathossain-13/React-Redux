import React, { Component } from 'react';

class AddInfo extends Component{
        state = {
            name: null,
            age: null,
            dis: null
        }
        handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            })
        } 
        handleSubmit = (e) => {
            e.preventDefault();
            this.props.addInfo(this.state);
        }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="name">Dis:</label>
                    <input type="text" id="dis" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                    
            </div>
        )
    }
}
export default AddInfo