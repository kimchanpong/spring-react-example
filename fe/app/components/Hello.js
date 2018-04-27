import React from 'react'

class Hello extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
           <div>
               <h1>Hello1234! {this.props.name}</h1>
           </div>
        )
    }
}

export default Hello;