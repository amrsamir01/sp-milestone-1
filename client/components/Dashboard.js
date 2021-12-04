import React, { useEffect, useState } from 'react';
import apiService from "../services/apiService";

export default function Dashboard() {
  const [accounts, viewAccounts] = useState([]);

  useEffect(async () => {
    console.log("Mounting!");
    const user = JSON.parse(localStorage.getItem("user")).userid;
    const response = await apiService.get(`http://localhost:5000/accounts/${user}`)
    viewAccounts(response.data)
  }, []);
}
