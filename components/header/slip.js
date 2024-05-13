import { useLocation } from 'react-router-dom';
import './slip.css';

const Slip = () => {
 const location = useLocation();
 const newAppointment = location.state ? location.state.newAppointment : null;

 if (!newAppointment) {
    return <div>Loading...</div>; // Or some other placeholder
 }

 return (
    <div className='Slipcontent'>
    <div className="titleContainer">
        <h2>Appointment</h2>
    </div>
        <p>For: <span className="underline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{newAppointment.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
        <div className="infoContainer">
        <p>Date: <span className="underline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{newAppointment.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
        <p>Time: <span className="underline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{newAppointment.time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
        </div>
      <p>Purpose: <span className="underline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{newAppointment.purpose}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
      <h3>Note: Please Bring atleast 1 VALID ID</h3>
      <p className='note'>We are excited to serve you.</p>
    </div>
 );
};

export default Slip;