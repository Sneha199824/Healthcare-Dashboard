import React from 'react';
function Activity() {
  return (
    <div className="activity">
      <h4>Activity</h4>
      <p>3 appointments this week</p>
      <div className="graph">
        {/* Placeholder for bar chart */}
        {[...Array(7)].map((_, i) => (
          <div key={i} className="bar-group">
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Activity;