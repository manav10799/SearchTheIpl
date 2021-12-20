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
        // <div>
        //     <Ipl></Ipl>
        // <div className="table_ipl">
        // <h3>2020 IPL Point Table</h3>
        // <div className="ag-theme-alpine" style={ { height: 390, width: 457 } }>
        //     <AgGridReact
        //         rowData={rowData}>
        //         <AgGridColumn field="team"></AgGridColumn>
        //         <AgGridColumn field="NET_RR"></AgGridColumn>
        //         <AgGridColumn field="PTS"></AgGridColumn>
        //     </AgGridReact>
        // </div>
        // </div>
        // <div className="ipl_winner">
        // <h3>2020 IPL Winner</h3>
        // <iframe width="457" height="390" src="https://www.youtube.com/embed/uIK3ETuP8ro" frameborder="0" allowfullscreen></iframe>
        // </div>
        // </div>
        <div id="job-widget" class="row no-gutters"><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6764" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="External Recruiter's job">External Recruiter's job</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="6 years">6 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6576" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Don't stop me now">Don't stop me now</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6574" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Genesis">Genesis</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="5 years">5 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6573" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Window Cleaner">Window Cleaner</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="2 years">2 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6311" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="hh">hh</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6310" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Deep Learning Engineer">Deep Learning Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="6+dw">6+dw </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6308" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="jj">jj</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6293" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Analyst-(USSSSSSS)">Analyst-(USSSSSSS)</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="2 years">2 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6292" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Super Recrutier Job">Super Recrutier Job</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="5 years">5 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6291" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="BDE">BDE</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="5 years">5 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6283" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Future Functionality Orchestrator">Future Functionality Orchestrator</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6273" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software QA Engineer">Software QA Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6271" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="bb">bb</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="2 years">2 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6269" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="js">js</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6268" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Legacy Accounts Officer">Legacy Accounts Officer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="3 years">3 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6267" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="CS">CS</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6266" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Drummerrrr">Drummerrrr</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="5 years">5 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6089" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Analyst-US">Analyst-US</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="10 years">10 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/6087" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="BDE">BDE</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="34 years">34 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5649" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer">Software Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="8 years">8 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Jalandhar, Punjab, India</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5645" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="hh">hh</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5641" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="popop">popop</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5640" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="QA Lead">QA Lead</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5633" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Machine Learning Engineer">Machine Learning Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5632" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer">Software Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="9 years">9 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5631" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="jj">jj</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5630" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="CS">CS</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5623" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="heyheyhey">heyheyhey</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">GURUGRAM</span>
                                                                                  <span class="header-4 text-nowrap">, +9 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5620" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Tool">Tool</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bolangir</span>
                                                                                  <span class="header-4 text-nowrap">, +9 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5615" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer">Software Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Jalandhar, Punjab, India</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5603" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Engineer">Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="3 years">3 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5602" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Administrative Officer">Administrative Officer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="9 years">9 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5600" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Superstore">Superstore</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="2 years">2 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Kolkata</span>
                                                                                  <span class="header-4 text-nowrap">, +9 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5597" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Executive Secretary">Executive Secretary</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="8 years">8 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5596" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="nn">nn</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5595" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="pop">pop</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5591" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Regression testing">Regression testing</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  <span class="header-4 text-nowrap">, +3 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5586" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Testing">Testing</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5585" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="QA Lead">QA Lead</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5584" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer">Software Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5580" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="d">d</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5579" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Executive Secretary">Executive Secretary</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="22 years">22 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5578" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="SFCC Architect">SFCC Architect</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="11 years">11 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5571" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="vtyui">vtyui</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Chandigarh</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5570" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="vdvf">vdvf</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="12 years">12 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5569" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Memories of Murder">Memories of Murder</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="2 years">2 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5568" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="abcd">abcd</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="2 years">2 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5565" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="House of cards">House of cards</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5564" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="QA Lead">QA Lead</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="12 years">12 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5558" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer">Software Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="7 years">7 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5557" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Breaking Bad">Breaking Bad</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5556" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Game of thrones">Game of thrones</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5555" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Rick and Morty">Rick and Morty</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bolangir</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5554" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="VP- FINANCE">VP- FINANCE</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="5 years">5 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5551" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="vdvf">vdvf</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="3 years">3 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5550" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Don't touch this Shruthi &amp; Aunkit">Don't touch this Shruthi &amp; Aunkit</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="5 years">5 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5549" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software QA Engineer">Software QA Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="5 years">5 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5547" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Recruiting Manager">Recruiting Manager</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="2 years">2 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  <span class="header-4 text-nowrap">, +2 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5546" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer referral">Software Developer referral</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="3 years">3 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5545" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Analyst-US">Analyst-US</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="5 years">5 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5544" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Enterprise Advisory Committee">Enterprise Advisory Committee</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="6 years">6 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5537" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Lead Engineer">Lead Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="7 years">7 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Jalandhar, Punjab, India</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5536" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Direct Accountability Architect">Direct Accountability Architect</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="23 years">23 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5535" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Business Development Executive- Delhiiiiiiii">Business Development Executive- Delhiiiiiiii</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="23 years">23 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5534" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="hrtty">hrtty</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="4 years">4 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  <span class="header-4 text-nowrap">, +2 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5533" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Engineer">Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="7 years">7 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5532" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Regression Testing">Regression Testing</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="6 years">6 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5531" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="abcdefghi">abcdefghi</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="12 years">12 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/5442" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Lead - Frontend Developer">Lead - Frontend Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/4737" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software QA Engineer">Software QA Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="667 years">667 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/4734" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Administrative Officer">Administrative Officer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="7 years">7 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/3856" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="UX Designer">UX Designer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="0 years">0 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/978" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Administrative Officer">Administrative Officer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="55 years">55 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/977" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software QA Engineer">Software QA Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="5 years">5 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/975" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="SERT">SERT</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="4.5+ years">4.5+ years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/800" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Engineer">Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/799" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="inside Sales">inside Sales</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="5 yrs">5 yrs </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Jalandhar, Punjab, India</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/798" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Engineer">Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/797" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="dummy">dummy</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="12 years">12 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/795" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Product Manager-- MSBI. https://ashutosh.mdev.kekad.com/#/jobs/manage/edit/795/3df1d288-75ec-45f6-ad15-6b124f9f240a">Product Manager-- MSBI. https://ashutosh.mdev.kekad.com/#/jobs/manage/edit/795/3df1d288-75ec-45f6-ad15-6b124f9f240a</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="3.5+ years of experience in development and 3+ years of experience in project management">3.5+ years of experience in development and 3+ years of experience in project management </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/794" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Job with Experience">Job with Experience</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="10 years">10 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/792" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Talent Acquisition">Talent Acquisition</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="4+ yrs">4+ yrs </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/791" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="This position is project-based, rather than task-oriented Should Should conduct Operational data analysis related to services and analyzing the operational efficiency to improve further.">This position is project-based, rather than task-oriented Should Should conduct Operational data analysis related to services and analyzing the operational efficiency to improve further.</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Jalandhar, Punjab, India</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/790" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Relationship Manager">Relationship Manager</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="4 years of experience in marketing">4 years of experience in marketing </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  <span class="header-4 text-nowrap">, +5 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/789" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Senior Analyst">Senior Analyst</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="3 years">3 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/787" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="IT Coordinator">IT Coordinator</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/783" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="ds">ds</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Jalandhar, Punjab, India</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/782" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="yturie">yturie</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/781" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="CS">CS</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/780" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="ASN">ASN</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/778" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="New Job">New Job</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/777" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Engineer">Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/774" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Ashutosh Don't Touch This">Ashutosh Don't Touch This</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            <span class="icon-job header-5 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize mr-3 text-truncate-1" title="5 years">5 years </span>
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Chandigarh</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/772" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="dds">dds</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/771" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="seoifhs">seoifhs</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/770" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="sss">sss</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/769" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="UX Designer">UX Designer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  <span class="header-4 text-nowrap">, +2 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/768" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="UX Designer">UX Designer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  <span class="header-4 text-nowrap">, +2 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/767" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Brand Ambassador">Brand Ambassador</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Noida</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/766" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software QA Engineer">Software QA Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/763" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Free Lancing">Free Lancing</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/762" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Engineer">Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/761" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="New Job">New Job</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/756" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Lead - Frontend Developer">Lead - Frontend Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/754" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Senior Software Engineer">Senior Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Pune</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/753" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Cloud HR Advisor">Cloud HR Advisor</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/752" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="QA Lead">QA Lead</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/749" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer">Software Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/748" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Associate Product Manager">Associate Product Manager</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/747" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Insdie Sales Executive">Insdie Sales Executive</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/746" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="jj">jj</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Pune</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/745" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="check job without location">check job without location</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  <span class="header-4 text-nowrap">, +2 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/743" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer">Software Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/742" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Business Development Executive- Mumbai">Business Development Executive- Mumbai</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">GURUGRAM</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/741" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Engineer">Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/740" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Engineer">Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/737" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Imporant Draft Job">Imporant Draft Job</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/736" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Cloud HR Advisor">Cloud HR Advisor</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/735" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="VP- FINANCE">VP- FINANCE</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/734" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="BDE">BDE</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">GURUGRAM</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/733" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Business Development Executive- Mumbai">Business Development Executive- Mumbai</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/732" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="QA Engineer">QA Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Redmond</span>
                                                                                  <span class="header-4 text-nowrap">, +2 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/730" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software QA Engineer">Software QA Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/727" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="BDE">BDE</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Jalandhar, Punjab, India</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/723" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer">Software Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Jalandhar, Punjab, India</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/722" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Sr. User Experience Lead">Sr. User Experience Lead</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/720" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="QA Lead">QA Lead</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/717" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Title Free lancing">Title Free lancing</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/716" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="~~~~~~~~~~~~~~~~~~~~~">~~~~~~~~~~~~~~~~~~~~~</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/714" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Engineer">Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/713" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="New Title created through requisition">New Title created through requisition</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/712" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Senior Soft">Senior Soft</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Jalandhar, Punjab, India</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/711" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="US IT RECRUITER">US IT RECRUITER</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  <span class="header-4 text-nowrap">, +9 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/710" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="QA Lead">QA Lead</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Chandigarh</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/707" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Test Exp">Test Exp</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/706" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer">Software Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/704" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Regression">Regression</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/702" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Check score card">Check score card</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/700" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Test Video">Test Video</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  <span class="header-4 text-nowrap">, +1 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/696" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software QA Engineer">Software QA Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/688" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="BDE">BDE</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/685" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer">Software Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/681" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Engineer">Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/680" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Graphic Designer">Graphic Designer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  <span class="header-4 text-nowrap">, +5 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/677" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Video test">Video test</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/676" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Multiple Job Location">Multiple Job Location</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  <span class="header-4 text-nowrap">, +4 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/673" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="QA Lead">QA Lead</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/672" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Material inputs">Material inputs</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/668" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="fb">fb</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/645" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="121212">121212</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/642" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="bb">bb</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/638" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer">Software Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Bengaluru</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/623" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Product Manager">Product Manager</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/622" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="ser">ser</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/619" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="patch test">patch test</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/604" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer">Software Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/599" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="f">f</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/581" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Engineer">Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/562" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="BDE">BDE</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/561" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Recruitment Manager">Recruitment Manager</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/560" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="f">f</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/559" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software QA Engineer">Software QA Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/558" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Test calls">Test calls</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/557" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="mm">mm</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/556" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="m">m</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/555" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Engineer">Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Delhi</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/553" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="test archive">test archive</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/552" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="QA Lead">QA Lead</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/551" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Engineer">Software Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/550" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="CS">CS</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/549" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software Developer">Software Developer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/548" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software QA Engineer">Software QA Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/546" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Software QA Engineer">Software QA Engineer</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/530" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Business Development Executive">Business Development Executive</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/529" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="e">e</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/528" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="wd">wd</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/527" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Final Test">Final Test</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/525" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="re">re</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/524" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="team">team</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/521" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Final Test">Final Test</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/520" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="test">test</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/515" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Job test by Ashutosh">Job test by Ashutosh</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/513" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Product Analyst">Product Analyst</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/512" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Test new Job">Test new Job</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/511" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="test">test</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/508" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="test">test</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Seattle</span>
                                                                                  <span class="header-4 text-nowrap">, +2 more</span>
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div><div class="col-default-4">
                                            <a class="card job-card" href="https://ashutosh.careers.kekad.com/jobdetails/427" target="_blank">
                                                <div class="card-body d-flex flex-column text-link">
                                                    <h1 class="h1 font-weight-bold text-truncate-2" title="Team Lead- UI/UX">Team Lead- UI/UX</h1>
                                                    <div class="d-flex align-items-center justify-content-between mt-auto">
                                                        <div class="d-flex align-items-center">
                                                            
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                                <span class="icon-location header-3 mr-2"></span>
                                                                                  <span class="header-4 text-capitalize">Hyderabad</span>
                                                                                  
                                            
                                                            <span class="icon-arrow-forward ml-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </a>
                                        </div></div>

    )
}
        

export default Home;

    