"use client"
import React, { useEffect, useState } from 'react';

const Loaduser = () => {

    const [users, setUsers] = useState();
    useEffect(() => { 
        const users = fetch("https://shadamon.up.railway.app/api/v1/users").then(res => res.json()).then(data => setUsers(data))
     },[])
    return users;
};

export default Loaduser;