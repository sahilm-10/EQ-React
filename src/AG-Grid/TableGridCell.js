import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const TableGridCell = () => {
    const checkDetails = (params) =>{
        console.log(params);
        alert( `Make:${params.data.make} & Price:${params.data.price} for Model:${params.data.model}`)
    }
    const rowData =[
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000},
        
    ];
    
    const columnDefs = [
        { field: 'make' },
        { field: 'model' },
        { field: 'price' , 
        cellStyle:(params)=>
        (params.value < 40000 ? {backgroundColor:'red'}:{backgroundColor:'green'}) },
        
        {headerName:'Action' , 
        cellRenderer:(params)=><div>
      <button onClick={()=>checkDetails(params)}>Click me</button>
    </div>
        }
    ];
    const defaultColDefs = {
        flex:1
    }

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: '100%'}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDefs}>
            </AgGridReact>
        </div>
    );
};
export default TableGridCell;