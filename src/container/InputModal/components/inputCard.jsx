import Paper from '@mui/material/Paper';
import React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { commonStyle, InputCardStyle } from '../styles';

export default class InputCard extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            staticInput : false,
            staticValue : '',
            countStart : 0
        }
        
    }

    staticHandler= (evt) =>{
        this.setState({staticInput : evt.target.checked})
    }

    
    formInputHandler= (event)=>{
        let staticValue = this.state.staticValue
        let countStart = this.state.countStart
        let staticInput = this.state.staticInput
        switch(event.target.id){
            case 'staticInput' :
                this.setState({
                    staticValue:event.target.value
                });
                staticValue = event.target.value
                break ;
            case 'countStart' : 
                this.setState({
                    countStart : eval(event.target.value)
                });
                countStart = eval(event.target.value)
                break;
            case 'checkboxInput' : 
                this.setState({
                    staticInput : Boolean(event.target.checked)
                });
                staticInput = Boolean(event.target.checked)
                break;

            default:
                break;        
        }
        this.props.callback({staticValue,staticInput, countStart} , this.props.label)
        
    }

    
    render(){
        return(
            <Paper 
                style={InputCardStyle}
                elevation={3}
            >
                <FormControl fullWidth sx={{ m: 0}} variant="standard">
                    <TextField id="staticInput" label={`${this.props && this.props.label}`} variant="outlined" onChange={this.formInputHandler} />
                </FormControl>
                <FormControlLabel control={<Checkbox id="checkboxInput" />} label="Static"  onClick={this.formInputHandler}  style={commonStyle}/>
                <FormControl fullWidth sx={{ m: 0 }} variant="standard">
                    <TextField id="countStart" label="Count Start" type="number" variant="outlined" style={commonStyle} onChange={this.formInputHandler} disabled={this.state.staticInput}/>
                </FormControl>
            </Paper>
        )
    }
} 