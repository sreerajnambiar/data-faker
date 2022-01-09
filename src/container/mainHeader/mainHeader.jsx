import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './mainHeader.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {connect} from 'react-redux'
import { addCount } from '../../redux/rowCount/rowCountSlice';
import { makecsv } from './jsontocsv';

class MainHeader extends React.Component{
    constructor(props){
        super(props)
            this.state={

            }
        }
        
        inputChangehandler = (evt) =>{
            switch(evt.target.id){
                case 'outlined-number rowCount':
                    console.log(evt.target.value)
                    addCount(this.props.addCount(evt.target.value))
                    break;
                case 'download-button':
                    makecsv(this.props.count , this.props.rows)
                    break;
                default:
                    break;
            }
        }

        render(){
            return(               
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Paper elevation={3} className="main-header">
                                <div className='input-header'>
                                    <TextField
                                        className="input-rows"
                                        id="outlined-number rowCount"
                                        label="Rows"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.inputChangehandler}
                                    />
                                    <Button variant="outlined" id="download-button" onClick={this.inputChangehandler}>Download CSV</Button>
                                </div>
                            
                            </Paper>
                        
                        </Grid>
                    </Grid> 
                        
            
            )
        }
}

function mapDispatchToProps(dispatch){
    return(
        {
            addCount : (payload) => dispatch(addCount(payload))
        }
    )
    
}

function mapStateToProps(state){
    return({
        rows :state.rowInput.rows,
        count : state.rowCount.count
    })
}

export default connect(mapStateToProps , mapDispatchToProps)(MainHeader);