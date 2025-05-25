import React from 'react';
import appointments from './../../Data/appointments'; // Assuming appointments.json is in the same directory
function Calendar() {
  return (
    <div className="calendar">
      <h4>October 2021</h4>
      <div className="days">
        {appointments.map(day => (
          <div key={day.date} className="day">
            <p>{day.date}</p>
            {day.slots.map((slot, i) => (
              <div key={i} className="slot">{slot}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Calendar;