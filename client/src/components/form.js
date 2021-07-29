import React from "react";
import axios from "axios"
import { withRouter } from 'react-router-dom';
class Form extends React.Component{

    constructor(props){
        super(props);        
        this.state={
            fullName : "",
            email : "",
            phoneNumber : "",
            age : "",
        } 
    }


    handleOnChange=(event)=>{
         this.setState({
        [ event.target.id ]: event.target.value
        })
    }

    handleOnClick=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:8800",this.state)
        .then(res => console.log(res))
        .catch(e => console.log(e))
        this.setState({
            fullName : "",
            email : "",
            phoneNumber : "",
            age : "",
        })
        this.props.history.push('/form/formData');
    
    }

    render(){
        
        return(
            <div className="formWrapper">
                <form ref={this.formRef} onSubmit={this.handleOnClick}>
                    <label htmlFor = "fullName">Full Name</label>
                    <input
                        id = "fullName"
                        type = "text"
                        value= {this.state.fullName}
                        onChange = {this.handleOnChange}  
                        required  
                    /><br/>
                    <label htmlFor = "email">Email</label>
                    <input
                        id = "email"
                        type = "text"
                        value = {this.state.email}
                        onChange={this.handleOnChange}
                        required
                    /><br/>
                    <label htmlFor = "phoneNumber">Phone Number</label>
                    <input
                        id = "phoneNumber"
                        type = "text"
                        value = {this.state.phoneNumber}
                        onChange = {this.handleOnChange}
                        required
                    /><br/>
                    <label htmlFor = "age">Age</label>
                    <input
                        id = "age"
                        type = "number"
                        value = {this.state.age}
                        onChange = {this.handleOnChange}
                        required
                    /><br/>
                    <button type = "sumbit">Submit</button> 
                </form>
            </div>
        )
    };
    }

    export default withRouter(Form);