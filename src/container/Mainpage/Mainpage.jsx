import React ,{ Component } from "react";
import InputFabDialog from '../InputModal/inputFabDialog'
import Datagrid from "../Datagrid/Datagrid";
import MainHeader from "../mainHeader/mainHeader";
import './Mainpage.scss'

class Mainpage extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render()
    {
        return(
            <section className="mainSection">
                <InputFabDialog/>
                <MainHeader />
                <Datagrid />
            </section>
        )
    }
}
export default Mainpage;