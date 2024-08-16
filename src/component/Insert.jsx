import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Insert() {
    const { id } = useParams(); // Extracts the user ID from route params
    const [user, setUser] = useState({ name: '', mobile: '', email: '' });
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    useEffect(() => {
        if (id) {
            // Fetch user data if ID exists (indicating update mode)
            axios.get(`http://localhost:3000/users/${id}`)
                .then(response => {
                    setUser(response.data);
                    setIsUpdateMode(true);
                })
                .catch(error => {
                    console.error('Error fetching user data: ', error);
                });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isUpdateMode) {
            // Update existing user
            axios.put(`http://localhost:3000/users/${id}`, user)
                .then(response => {
                    console.log('User updated successfully: ', response);
                    // Optionally perform any actions after update
                    window.location.href = '/'; // Redirect to home page after update
                })
                .catch(error => {
                    console.error('Error updating user: ', error);
                });
        } else {
            // Create new user
            axios.post('http://localhost:3000/users', user)
                .then(response => {
                    console.log('User created successfully: ', response);
                    // Optionally perform any actions after creation
                    window.location.href = '/'; // Redirect to home page after creation
                })
                .catch(error => {
                    console.error('Error creating user: ', error);
                });
        }
    };

    return (
        <div className="container">
            <h2 className="title">{isUpdateMode ? 'Update User' : 'Create User'}</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        placeholder='Please enter name'
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile:</label>
                    <input
                        type="number"
                        id="mobile"
                        value={user.mobile}
                        onChange={(e) => setUser({ ...user, mobile: e.target.value })}
                        placeholder='Please enter mobile'
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder='Please enter email'
                        required
                        className="input-field"
                    />
                </div>
                <button type='submit' className="submit-btn">
                    {isUpdateMode ? 'Update' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

export default Insert;
