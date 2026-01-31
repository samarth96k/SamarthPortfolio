import React from "react";
import PrintIcon from '@mui/icons-material/Print';
function Tab(props){
    return (
        <div >
            <button style={{backgroundColor:"#000000ff"}} > {props.name} </button>
        </div>  
    );
}

export default Tab;