import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/pets.css';
import logo from '../Images/logo.png';
import pet_icon from '../Images/pet_icon.png';

function Pets() {
    const [remarksFilter, setRemarksFilter] = useState("SHOW ALL");

    const handleFilterChange = (event) => {
        setRemarksFilter(event.target.value);
    };

    return (
        <div>
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
                            <li><Link to="/pets" id="left-nav-current">Listings</Link></li>
                            <li><Link to="/archive">Archive</Link></li>
                            <h1>Applications</h1>
                            <li><Link to="/submissions">Submissions</Link></li>
                            <li><Link to="/approved-applications">Approved</Link></li>
                            <li><Link to="/history">History</Link></li>
                        </ul>
                    </nav>
                    <div className="mainpage">
                        <section id="top-section">
                            <Link to="/add-pet">
                                <button id="add-pet-button">
                                    <img src={pet_icon} className="App-logo" alt="pet_icon" />
                                    <br />
                                    Add Pet For Adoption
                                </button>
                            </Link>
                            <input type="text" id="search-bar" placeholder="Search..." />
                        </section>
                        <section id="below-section">
                            <section id="topbelow-section">
                                <table id="pets-table-top">
                                    <thead>
                                        <tr>
                                            <th>DATE ADDED</th>
                                            <th>NAME</th>
                                            <th>TYPE</th>
                                            <th>BREED</th>
                                            <th>STATUS
                                                <select id="remarks-filter" value={remarksFilter} onChange={handleFilterChange}>
                                                    <option value="SHOW ALL">SHOW ALL</option>
                                                    <option value="IN SHELTER">IN SHELTER</option>
                                                    <option value="ADOPTED">ADOPTED</option>
                                                </select>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </section>
                            <section id="belowbelow-section">
                                <table id="pets-table-below">
                                    <tbody id="table-body-below">
                                    </tbody>
                                </table>
                            </section>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Pets;
