import React from 'react';
import healthData from '../../Data/healthData.js';  
function HealthStatus() {
  return (
    <div className="health-status">
      {healthData.map(item => (
        <div key={item.name} className="status-card">
          <h4>{item.name}</h4>
          <div className="bar">
            <div style={{ width: item.value + '%', backgroundColor: item.color }}></div>
          </div>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}
export default HealthStatus;