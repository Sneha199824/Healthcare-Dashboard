import React from 'react';
import Anatomy from './dashboard/Anatomy';
import HealthStatus from './dashboard/HealthStatus';
import Calendar from './dashboard/Calendar';
import UpcomingAppointments from './dashboard/UpcomingAppointments';
import Activity from './dashboard/Activity';
import Header from './Header.jsx';

function Dashboard() {
  return (
    <div className="dashboard">
          <Header />
      <h2>Dashboard</h2>
      <div className="dashboard-content">
        <Anatomy />
        <HealthStatus />
        <Calendar />
       
        <Activity />
        <UpcomingAppointments />
      </div>
    </div>
  );
}

export default Dashboard;