import React, {Component} from 'react';

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
            price: "",
            image_url: ""
        }
    }

    render(){
        return(
            <div>
                Dashboard
            </div>
        )
    }

}

export default Dashboard