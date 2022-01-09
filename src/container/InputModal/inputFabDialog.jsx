import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './inputFab.scss'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import {commonStyle } from './styles'
import InputCard from './components/inputCard';
import { connect } from 'react-redux';
import {addRow} from '../../redux/rowInput/rowInputSlice';

 class InputFabDialog extends React.Component {
   constructor(props){
     super(props)
     this.state ={
        open:false, 
        fullWidth:true,
        staticData1:null,
        staticData2:null,
        staticData3:null,
        rows:{},
        fieldName:''
     }
   } 
  

   handleClickOpen = () => {
    this.setState(
      {open:true}
    )
  };

   handleClose = () => {
    this.setState(
      {open:false,
        staticData1:null,
        staticData2:null,
        staticData3:null
      }
    )
  };

  inputCardCallback = (value , label) =>{   
    switch(label){
     
      case "First Static":
        this.setState(
          {staticData1 : value}
        )
        break;

        case "Second Static":
          this.setState(
            {staticData2 : value}
          )
          break;
          
      case "Third Static":
        this.setState(
          {staticData3 : value}
        )
        break;

        default:
          break;
    }
    
  }

  fieldNameChangehandler = (event) =>{
    this.setState(
      {
        fieldName : event.target.value
      }
    )
  }

  handleAdd = () => 
{
   this.props.addRow(
     {
       fieldName : this.state.fieldName,
       staticData1:this.state.staticData1,
       staticData2:this.state.staticData2,
       staticData3:this.state.staticData3,
     }
  )
  this.handleClose()
}

  render(){
  return(
        <div>
        <div className='fab-container'>
          <Box xl={{ '& > :not(style)': { m: 1 } }} >
              <Fab color="primary" aria-label="add" onClick={this.handleClickOpen} >
                  <AddIcon />
              </Fab>
          </Box>
        </div>
        <div>
          <Dialog 
            open={this.state.open} 
            onClose={this.handleClose}
            maxWidth={'md'}
            fullWidth={this.state.fullWidth}
          >
            <DialogTitle>Enter a Column</DialogTitle>
            <DialogContent>
              <DialogContentText>
                  To add Column add valid details in the form add it 
              </DialogContentText>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off" 
                >
                <FormControl fullWidth sx={{ m: 0}} variant="standard">
                    <TextField id="outlined-basic" label="Field Name" variant="outlined" style={commonStyle} onChange={this.fieldNameChangehandler}/>
                </FormControl>                
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    style={commonStyle}
                >
                  <InputCard label="First Static" callback = {this.inputCardCallback}/>
                  <InputCard label="Second Static" callback = {this.inputCardCallback}/>
                  <InputCard label="Third Static" callback = {this.inputCardCallback}/>

                </Stack>
                </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose}>Cancel</Button>
              <Button onClick={this.handleAdd}>Add</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>     
    )
 
  }
}

function mapStateToProps(state){


  return(
    {rows:state.rowInput.rows}
  )
}

function mapDispatchToProps(dispatch , ownProps){
  return(
    {
      addRow : (payload ) => dispatch(addRow(payload))
    }
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(InputFabDialog);