import React, { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table'

export default function Dashboard() { //return <div>DASHBOARD</div>;
    
  
  //backend is working but couldnt connect it with the front end
  
  
  const accounts=[
        {id:1, balance:2000,statuss:"active"},
        {id:2, balance:50000,statuss:"active"},
        {id:3, balance:22000,statuss:"active"},
        {id:4, balance:0,statuss:"inactive"},
        {id:5, balance:10000,statuss:"active"},
        {id:6, balance:0,statuss:"inactive"},
        {id:7, balance:24000,statuss:"active"},

    ]
    const renderAccount =(account,index)=>{
      return(
        <tr key={index}>
          <td>{account.id}</td>
          <td>{account.balance}</td>
          <td>{account.statuss}</td>
          </tr>
      )
    }

  
  return (
    <div> DASHBOARD
      
      <Table striped bordered hover>
        <thead className="Dash">
          <tr>
            <th scope="col">id</th>
            <th scope="col">balance</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(renderAccount)}


        </tbody>
      </Table>
    </div>
  );

}


