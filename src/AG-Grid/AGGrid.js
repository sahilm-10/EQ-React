import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AGGrid = () => {
    const rowData = [
        {name:'A' ,age:20},
        {name:'B' ,age:21},
        {name:'C' ,age:22},
        {name:'D' ,age:23}
        
    ]
    const columnDefs = [
        {headerName:'Name' , field:'name',checkboxSelection:true },
        {headerName:'Age(Years)' , field:'age'}
    ]
    const defaultColDefs = {
        sortable:true , filter:true, editable:true, floatingFilter:true , flex:1
    }
    return (
        <div className="ag-theme-alpine" style={{height: 500, width: '100%'}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDefs}>
            </AgGridReact>
        </div>
    );
};

export default AGGrid;