import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/form-data/', formData)
            .then(response => {
                console.log('Data submitted:', response.data);
            })
            .catch(error => {
                console.error('Error submitting data:', error);
            });
    };

    return (
        <>
        
        <div className='container d-flex align-items-center p-5 justify-content-center'>
        
        <form onSubmit={handleSubmit}>
        <h3 style={{color:'#c770f0',fontFamily:'fantasy'}}>Few moments to get in touch</h3>
            <input
                type="text"
                name="name"
                className='form-control p-3 m-2'
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
               className='form-control p-3 m-2'
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <textarea
                name="message"
                cols={12}
                rows={6}
            className='form-control p-3 m-2'
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
            />
            <button className='btn btn-light m-2' type="submit" >Submit</button>
            
        </form>
        </div>
        </>
    );
};

export default Form;
