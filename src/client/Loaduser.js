"use client"
import React, { useEffect, useState } from 'react';

const Loaduser = () => {

    const [users, setUsers] = useState();
    useEffect(() => { 
        const users = fetch("http://localhost:8000/api/v1/users/users").then(res => res.json()).then(data => setUsers(data))
     },[])
    return users;
};

export default Loaduser;