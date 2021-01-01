import React, { useState } from 'react'
import "./Home.css"
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Ipl from '../ipl/Ipl';

const Home = () => {

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([{
        team: "MI",
        NET_RR: "+1.107",
        PTS: 18
    }, {
        team: "DC",
        NET_RR: "-0.109",
        PTS: 16
    }, {
        team: "SRH",
        NET_RR: "+0.608",
        PTS: 16
    }, {
        team: "RCB",
        NET_RR: "-0.172",
        PTS: 14
    }, {
        team: "KKR",
        NET_RR: "-0.214",
        PTS: 14
    }, {
        team: "KXIP",
        NET_RR: "-0.162",
        PTS: 12
    }, {
        team: "CSK",
        NET_RR: "-0.455	",
        PTS: 12
    }, {
        team: "RR",
        NET_RR: "-0.569",
        PTS: 12
    }]);

    return (
        <div>
            <Ipl></Ipl>
        <div className="table_ipl">
        <h3>2020 IPL Point Table</h3>
        <div className="ag-theme-alpine" style={ { height: 390, width: 457 } }>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="team"></AgGridColumn>
                <AgGridColumn field="NET_RR"></AgGridColumn>
                <AgGridColumn field="PTS"></AgGridColumn>
            </AgGridReact>
        </div>
        </div>
        <div className="ipl_winner">
        <h3>2020 IPL Winner</h3>
        <iframe width="457" height="390" src="https://www.youtube.com/embed/uIK3ETuP8ro" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>
    )
}
        

export default Home;

    