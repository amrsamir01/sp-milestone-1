import React, { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table'

export default function Dashboard() { //return <div>DASHBOARD</div>;

    const [accounts, viewAccounts] = useState([]);
  
    useEffect(async () => {
      console.log("Mounting!");
      const user = JSON.parse(localStorage.getItem("user")).accountid;
      const response = await apiService.get(`http://localhost:5000/accounts/${user}`)
      viewAccounts(response.data)
    }, []);
  
  return (
    <div>
      
      <Table striped bordered hover>
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Status</th>
            <th scope="col">Transactions</th>
          </tr>
        </thead>
        <tbody>{
          accounts.map((account, key) => (
            <tr>
              <><td>{key}</td>
                <td>{account.status}</td>
                <button onClick={() => {
                  localStorage.setItem("accountid", account.accountid),
                    window.location.replace("http://localhost:3000/transactions")
                }}>View Details</button>
              </>

            </tr>))}
        </tbody>
      </Table>
    </div>
  );

}


