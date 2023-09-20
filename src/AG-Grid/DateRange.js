import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const DateRange = () => {
    const [gridApi,setGridApi] = useState();
    const rowData = [
        {make: "Toyota", model: "Celica", price: 35000, date:"09-09-2023"},
        {make: "Ford", model: "Mondeo", price: 32000,date:"10-09-2023"},
        {make: "Porsche", model: "Boxster", price: 72000,date:"11-09-2023"}
    ];
    
    const columnDefs = [
        { field: 'make' },
        { field: 'model' },
        { field: 'price' },
        {field:'date'}
    ];
    const defaultColDefs = {
        flex:1
    }
    const gridReady = (params) =>{
        setGridApi(params);
    }
    return (
        <div className="ag-theme-alpine" style={{height: 400, width: '100%'}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef = {defaultColDefs}
                onGridReady={gridReady}
            >
            </AgGridReact>
        </div>
    );
};
export default DateRange;