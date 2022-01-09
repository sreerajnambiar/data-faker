import React  from "react";
import { connect } from 'react-redux';
import {addRow} from '../../redux/rowInput/rowInputSlice';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Datagrid.scss'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import NoData from "../../components/nodata/nodata";
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport,
    gridClasses,
  } from '@mui/x-data-grid';


class Datagrid extends React.Component{
    constructor(props){
        super(props)
        this.state={
            columns :[],
            mydata :[],
            tabValue : "one"
        }
    }

    generateColumns(){
        let columns = []
        columns.push({
            field : 'id',
            headerName :'id',
            width:150,
            editable:true
        })
        this.props.rows.forEach((element) =>{
            columns.push(
                {
                    field : element.fieldName,
                    headerName : element.fieldName ,
                    width:150,
                    editable:true
                }
            )
        })
        return columns

    }

    generateRows(){
        let mydata = []
        let numrows=this.props.count
        while(mydata.length < numrows)
        {
            let data = {}
            this.props.rows.forEach(item =>{             
                let param1 = String(item.staticData1 ? item.staticData1.staticInput? item.staticData1.staticValue?item.staticData1.staticValue:"" :item.staticData1.staticValue?item.staticData1.staticValue:""+String(item.staticData1.countStart + mydata.length):"") 
                let param2 = String(item.staticData2 ? item.staticData2.staticInput? item.staticData1.staticValue?item.staticData1.staticValue:"" :item.staticData1.staticValue?item.staticData1.staticValue:""+String(item.staticData2.countStart + mydata.length):"")
                let param3 = String(item.staticDate3 ? item.staticData3.staticInput? item.staticData1.staticValue?item.staticData1.staticValue:"" :item.staticData1.staticValue?item.staticData1.staticValue:""+String(item.staticData3.countStart + mydata.length):"")
                data[item.fieldName] = param1 + param2 + param3;
            })
            data["id"] =mydata.length 
            mydata.push(data)
        }
        return mydata
    }

    handleTabChange(event , newValue){
        this.setState({
            tabValue : newValue 
        })
    }

    CustomToolbar() {
        return (
          <GridToolbarContainer className={gridClasses.toolbarContainer}>
            <GridToolbarExport />
          </GridToolbarContainer>
        );
      }

    render(){
        return(
            <Grid  xs={12} className="" >
                <div>
                    <Paper elevation={2} className="container-dataGrid">
                    <Box sx={{ width: '100%' }}>
                        <Tabs
                            value={this.state.tabValue}
                            onChange={this.handleTabChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >
                            <Tab value="one" label="Data Gen" />

                        </Tabs>
                    </Box>
                        {
                            Object.keys(this.props.rows).length > 0 ? <DataGrid
                            className="dataGrid"
                            rows={this.generateRows()}
                            columns={this.generateColumns()}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            checkboxSelection
                            disableSelectionOnClick
                            components={{
                                Toolbar: this.CustomToolbar,
                              }}
                        /> : <NoData />
                        }
                        
                    </Paper>
                </div>
            </Grid>
        );
    }
}

function mapStateToProps(state){
    return(
        {   
            rows:state.rowInput.rows,
            count : state.rowCount.count
        }
      )

}
function mapDispatchToProps(dispatch , ownProps){
    return({
        addRow : (payload ) => dispatch(addRow(payload))
    })

}

export default connect(mapStateToProps,mapDispatchToProps) (Datagrid);