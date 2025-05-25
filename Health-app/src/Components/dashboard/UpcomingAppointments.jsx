import React from 'react';
import upcoming from '../../data/upcoming';
function UpcomingAppointments() {
  return (
    <div className="upcoming">
      <h4>Upcoming Schedule</h4>
      {upcoming.map(item => (
        <div key={item.day} className="up-item">
          <h5>{item.day}</h5>
          {item.tasks.map((task, i) => (
            <div key={i} className="task">
              <span>{task.title}</span> <span>{task.time}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default UpcomingAppointments;