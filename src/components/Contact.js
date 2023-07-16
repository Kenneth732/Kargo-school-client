import React, { useState } from "react";

export default function Contact(){
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState([]);
    return(
        <div className="Header-Contact">
            <h1>CONTACT US</h1>
        </div>
    )
}