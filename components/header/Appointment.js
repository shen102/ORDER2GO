import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Appointment.css';

const AppointmentTab = () => {
 const [name, setName] = useState('');
 const [date, setDate] = useState('');
 const [time, setTime] = useState('');
 const [purpose, setPurpose] = useState('');

 const navigate = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();
    if (purpose === '') {
      // Purpose field is empty, prevent form submission
      return;
    }
    const newAppointment = { name, date, time, purpose };
    // Save the new appointment to the backend or perform any necessary actions
    // ...

    // Redirect to the new page and pass the form data
    navigate('/slip', { state: { newAppointment } });

    // Reset form fields
    setName('');
    setDate('');
    setTime('');
    setPurpose('');
 };


 return (
    <div className="Appointment">
      <>
       <h2>Appointment Tab</h2>
       <h3>Please fill out the appointment form</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <br />
          <label>
            Time:
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </label>
          <br />
          <label>
            Purpose:
            <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
              <option value="">Select Items</option>
              <option value="COFFE">Coffee</option>
              <option value="MILKTEA">Milk Tea</option>
              <option value="FRUITTEA">Fruit Tea</option>
              <option value="FRAPPE">Frappe</option>
              <option value="ICECOFFEE">Ice Coffe</option>
              
             
            </select>
          </label>
          <br />
          <button type="submit" disabled={purpose === ''}>Submit</button>
        </form>
      </>
    </div>
 );
};

export default AppointmentTab;