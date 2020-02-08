import React, { Component } from 'react'

class Header extends Component {
    constructor(){
        super()

        this.state ={
            name: "",
            price: "",
            image_url: ""
        }
    }

    render(){
        return(
            <div>
                Header
            </div>
        )
    }
}

export default Header