import React from 'react'

export class Box extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            isVerrivied : false,
            verriviedText: ''
        }
        this.verify = this.verify.bind(this)
        this.unVerify = this.unVerify.bind(this)

    }

    verify(){
        this.setState( {
            isVerrivied : true,
            verriviedText: "Account is verrified"
        })
    }
    unVerify(){
        this.setState( {
            isVerrivied : false,
            verriviedText: ""
        })
    }

    render() {
        return (
            <div>
                <div className='box'>
                    <h3>Person</h3>
                    <p>Name : {this.props.name}</p>
                    <p>Age : {this.props.age} </p>
                    <button onClick={this.verify} >Verify</button>
                    <button onClick={this.unVerify} >Unverify</button>
                    <p>{this.state.verriviedText}</p>
                </div>
            </div>
        )
    }

}

// export function Box2(props) {
//     return (
//         <div>
//             <div className='box'>
//                 <h3>Person</h3>
//                 <p>Name : {props.name}</p>
//                 <p>Age : {props.age} </p>
//                 <p>{props.children}</p>
//             </div>
//         </div>
//     )
// }