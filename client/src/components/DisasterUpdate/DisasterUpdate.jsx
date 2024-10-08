import React from 'react';
import './DisasterUpdate.css';
//import ImageCarousel from './ImageCarousel';
const DisasterUpdate = () => {
  return (
    <div className='updatePage'>
    <div className="container2">
        <h1>Disaster Update</h1>
        <form className="form">
            <label htmlaFor="disaster_id">Disaster ID</label>
            <input type="text" placeholder="Enter ID" name="disaster_id"/>

            <label htmlFor="disaster_type">Disaster Type</label>
            <select name="disaster_type" id="disaster">
                <option value="flood">Flood</option>
                <option value="landslide">Landslide</option>
                <option value="tsunami">Tsunami</option>         
            </select>

            <label htmlFor="disaster_loc">Disaster ID</label>
            <input type="text" placeholder="place of incident" name="disaster_loc"/>

            <label htmlFor="incident_date">Date of Incident</label>
            <input type="date" placeholder="Select Date" name="incident_date"/>

            <label htmlFor="losses">Losses</label>
            <input type="number" placeholder="0.00" name="losses" step="0.01" required/>

            <label htmlFor="area_coverage">Area of Coverage</label>
            <input type="number" placeholder="0.00" name="area_coverage" step="0.01" required/>

            <button type="button">Reset</button>
            <button type="button">Update</button>
        </form>
    </div>
    </div>

    
    );
};

export default DisasterUpdate;