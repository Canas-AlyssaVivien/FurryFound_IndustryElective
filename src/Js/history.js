import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Css/submissions.css';
import logo from '../Images/logo.png';
import pet_icon from '../Images/pet_icon.png';

function History() {
    const [remarksFilter, setRemarksFilter] = useState("SHOW ALL");

    const handleFilterChange = (event) => {
        setRemarksFilter(event.target.value);
    };

    return (
        <div>
             <body>
            <header>
                <div className="logo-container">
                <img src={logo} className="App-logo" alt="logo" />
                    <span>FURRYFOUND</span>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/dashboard" id="current">Dashboard</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/logout" id="logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
           
            <main>
                <div id="dashboard">
                    <nav className="left-nav">
                        <ul>
                             <h1>Pet Management</h1>
                            <li><Link to="/pets" >Listings</Link></li>
                            <li><Link to="/archive" >Archive</Link></li>
                            <h1>Applications</h1>
                            <li><Link to="/submissions" >Submissions</Link></li>
                            <li><Link to="/approved-applications">Approved</Link></li>
                            <li><Link to="/history" id="left-nav-current">History</Link></li>
                        </ul>
                    </nav>
                    <div className="mainpage">
                        <section id="top-section">
                       
                            <input type="text" id="search-bar" placeholder="Search..." />
                        </section>
                        <section id="below-section">
                            <section id="topbelow-section">
                                <table id="History-table-top">
                                    <thead>
                                    <tr>
                                    <th>DATE APPLIED</th>
                                    <th>ADOPTER NAME</th>
                                    <th>ADDRESS</th>
                                    <th>PET NAME</th>
                                    <th>REMARKS
                                        <select id="remarks-filter">
                                            <option value="SHOW_ALL">SHOW ALL</option>
                                            <option value="APPROVED">APPROVED</option>
                                            <option value="DISAPPROVED">DISAPPROVED</option>
                                            <option value="CANCELLED">CANCELLED</option>
                                            
                                        </select>
                                    </th>
                                </tr>
                                    </thead>
                                </table>
                            </section>
                            <section id="belowbelow-section">
                                <table id="History-table-below">
                                    <tbody id="table-body-below">
                                    </tbody>
                                </table>
                            </section>
                        </section>
                    </div>
                </div>
            </main>
            </body>
        </div>
    );
}
export default History;
