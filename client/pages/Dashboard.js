import React from "react";
import ReactTable from "react-table";

export default function Dashboard() { //return <div>DASHBOARD</div>;
 
  return (
    <div>
       <ReactTable
          
           defaultPageSize = {2}
           pageSizeOptions = {[2,4, 6]}
        />
    </div>
);

}