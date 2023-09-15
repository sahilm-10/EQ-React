import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const TableGridCell = () => {
    const[gridApi,setGridApi] = useState();
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
        { field: 'postId', checkboxSelection:true ,headerCheckboxSelection:true},
        { field: 'id', tooltipField:'name', cellStyle:(params)=>  // for class use cellClass and write css in css file using className(.)
        (params.value < 200 ? {backgroundColor:'red'}:{backgroundColor:'green'}),  },
        { field: 'name' , 
         },
        {field:'email'},
        {field:'body'},
        {headerName:'Action' , 
        cellRenderer:(params)=><div>
      <button onClick={()=>checkDetails(params)}>Click me</button>
    </div>
        }
    ];
    const defaultColDefs = {
        flex:1
    }
    const gridReady =(params)=>{
        setGridApi(params);
        console.log("GridReady Function");
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(res => 
            params.api.applyTransaction({add:res}))
            params.api.paginationGoToPage(25)
    }
    const rowSelection = 'single';
    const onSelectionChanged = (event) =>{
        console.log(event.api.getSelectedRows());
    }
    const onPaginationChange = (pageSize) =>{
        gridApi.api.paginationSetPageSize(pageSize)
    }
    return (
        <div className="ag-theme-alpine" style={{height: 500, width: '100%'}}>
            <select onChange={(e)=>onPaginationChange(e.target.value)}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
            <AgGridReact
                // rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDefs}
                enableBrowserTooltips={true}
                tooltipShowDelay={{tooltipShowDelay:2}}
                onGridReady={gridReady}
                // rowSelection={rowSelection}
                // onSelectionChanged={onSelectionChanged}
                pagination={true}
                paginationPageSize={10}
                // paginationAutoPageSize={true}
                // rowMultiSelectWithClick={true}
                >
            </AgGridReact>
        </div>
    );
};
export default TableGridCell;