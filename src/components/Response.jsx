import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import '../css files/Response.css'

function Response(){
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return(
        <div id='response-wrapper'>
            <h1 id='response-h1'>Thank you for Contacting Us!</h1>
            <h3 id='response-h3'>Your request has been successfully submitted and we will get in touch with you in next 24-hours</h3>
            <Button variant="contained" color="primary" id='response-btn'><Link to='/' id='response-link'>Back to Home Page</Link></Button><br/>
            <p id='response-question'>Do you want to receive the information via email?</p><br/>
            <form>
                <TextField id="response-textfield" label="abc@abc.com" variant="outlined" type='email'/>
                <Button variant="contained" id='response-form-btn'>SUBMIT</Button>
            </form>
            <form>
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}  onChange={handleChange}/>
            </form>
        </div>
    )
}

export default Response