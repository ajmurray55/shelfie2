import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            price: "",
            image_url: ""
        }
        this.baseState = this.state
    }

        resetForm = () => {
            this.setState(this.baseState)
        }
        handleChange = e => {
            let {value, name} = e.target;
            this.setState({
                [name]: value
            });
        };

    render(){
        return(
            <div>Form
                {/* <input>name</input>
                <input>price</input>
                <input>image_url</input> */}
                <h3>Image URL:</h3>
                <input 
                // placeholder="Image URL"
                type='text'
                name='image_url'
                value={this.state.image_url}
                onChange={this.handleChange}/>

                <h3>Product Name:</h3>
                <input 
                // placeholder="Product Name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}/>

                <h3>Price:</h3>
                <input 
                // placeholder="Price"
                type='text'
                name='price'
                value={this.state.price}
                onChange={this.handleChange}/>

                
                <button 
                onClick={this.resetForm}
                type="button">Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form