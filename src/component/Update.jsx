import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Update() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div className="user-list-container">
            <h2>Update User List</h2>
            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id} className="user-item">
                        <table width="100%" border="1" className="user-table">
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                                <td><Link to={`/insert/${user.id}`}>Edit</Link></td>
                            </tr>
                        </table>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Update;
