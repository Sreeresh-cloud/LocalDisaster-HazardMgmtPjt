import React from 'react';
import './homepage.css';
import ImageCarousel from './ImageCarousel';
const HomePage = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li>Disaster Update</li>
          <li>Disaster Mapping</li>
          <li>Disaster Report</li>
          <li>Help</li>
        </ul>
      </div>

      <div className="container">
        <div className="sidebar left">
          <h2>Alerts</h2>
            <ul>
              <li>A severe thunderstorm is approaching. Expect heavy rain, strong winds, and potential flash flooding. Seek shelter indoors and avoid travel.</li>
              <li>A tsunami warning has been issued following an underwater earthquake. Move to higher ground immediately and stay away from the coast.</li>
              <li>Heavy rainfall has led to rising water levels. Flooding is possible in low-lying areas.Avoid driving through flooded roads</li>
              <li>A hurricane is projected to make landfall in the next 48 hours.Prepare emergency supplies and follow evacuation orders if issued.</li>
              
            </ul>        
        
        </div>
        <div className="main-content">
          <ImageCarousel/>
        </div>
        <div className="sidebar right">
        <h2>Profile</h2>
        <ul>
          <li>Broadcast warnings</li>
          <li>Authenticate Reports</li>
          <li>Inform higher authorities</li>
          <li>Contact Rescue force</li>
        </ul>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
