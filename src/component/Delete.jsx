import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Delete() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:3000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(response => {
                console.log('User deleted successfully:', response);
                fetchUsers(); // Refresh the user list after deletion
            })
            .catch(error => {
                console.error('Error deleting user: ', error);
            });
    };

    return (
        <div className="user-list-container">
            <h2>Delete User</h2>
            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id} className="user-item">

                        <table width="100%" border="1" className="user-table">
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                                <td><button onClick={() => handleDelete(user.id)}>Delete</button></td>
                            </tr>
                        </table>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Delete;
