import React from 'react';
// import './Form1.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {                                //state
          username: 'abc',                            //props -- username / roll_no are assigned as name of the name text box 
          roll_no: null,
          errormessage: ''
        };
	  }
	
    myChangeHandler = (event) => {                  //on text change event hendler for the text box
      let fieldName = event.target.name; 
      let fieldValue = event.target.value;
      let err = '';
      if (fieldName === "roll_no") {                //validation check for roll_no field
        if (fieldValue !=="" && !Number(fieldValue)) {
          err = <strong>Your roll_no must be a number</strong>;
        }
      }
      this.setState({errormessage: err});           //displays error message
     
      this.setState({[fieldName]:fieldValue});      //set value of the <h1> = name entered in the text box via databinding
    }                                               //[] as fieldName is a placeholder replaced with actual field name 'username/roll_no'
    
    submitHandler =(event) =>{                     //on form submission event handler
      event.preventDefault();                      //prevents default form data submission to the server
    //   alert(${this.state.username} has been successfully registered having rollno : ${this.state.roll_no})
    }
	
    render() {
      return (
        <form className="hat" onSubmit={(e) => {this.submitHandler(e)}}>
            <h1>Hello {this.state.username} </h1>
            <p>Register your name:</p>
            <input
              type='text'
              name='username'
              placeholder='Enter Username'
              onChange={(event) => {this.myChangeHandler(event)}}
            />

            <p>Enter your roll_no:</p>
            <input
              type='text'
              name='roll_no'
              placeholder='Enter your rollno'
              onChange={(event) => {this.myChangeHandler(event)}}
            />
            <br/><br/><br />
            <input type="submit" value="Submit"/> <br/><br/>
            {this.state.errormessage} <br/>
            {this.state.roll_no}
        </form>
      );
    }
  }
  
 export default Form;