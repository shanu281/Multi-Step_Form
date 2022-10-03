import React from "react";
import "./style.css"
class Step1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ""
        }
    }

    handleInput = ({ target }) => {
        let { name, value } = target;
        this.setState({
            [name]: value
        })
    }
        handleNext = () => {
            console.log("Email adress : " +" "+ this.state.email)
            alert("Email adress :" + " " + this.state.email +"  "+ "is submitted")
        }


    render() {
        
        return (
            <>
                <h1>Multi Step Form</h1>
                <p>Step 1</p>
                <form >
                    <label htmlFor="email">Email Adress</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter email "
                        value={this.state.email}
                        onChange={this.handleInput}
                    />
                    <div>
                        <button onClick={this.handleNext}>Next</button>
                    </div>
                </form>
            </>
        )
    }
}
export default Step1;