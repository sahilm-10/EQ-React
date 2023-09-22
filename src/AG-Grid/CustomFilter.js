import React, { useState, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ToggleButtonGroup } from '@mui/material';
import {ToggleButton} from '@mui/material';
import axios from 'axios';  

const TableGridCell = () => {
    const [filterId, setFilterId] = useState("");
    const [rowData, setRowData] = useState([]);
    // const[filteredrowdata,setFilteredrowdata] = useState([]);
    const gridApiRef = useRef(null);
    const columnDefs = [
        { field: 'postId', checkboxSelection: true, headerCheckboxSelection: true },
        {
            field: 'id',
            cellStyle: (params) =>
                (params.value < 200 ? { backgroundColor: '#c27272' } : { backgroundColor: '#89c272' })
        },
        { field: 'name' },
        { field: 'email' },
        { field: 'body', floatingFilter: false },
    ];

    const defaultColDefs = {
        flex: 1,
        filter: true,
        editable: true,
        sortable: true,
        floatingFilter: true,
    };

    useEffect(() => {
        if (filterId && gridApiRef.current) {
            console.log(`Api Called for Specific Id:${filterId}`);
            axios.get(`https://jsonplaceholder.typicode.com/comments/${filterId}`)
            .then(response => gridApiRef.current.api.setRowData([response.data]))
            .catch(error => console.log(error))

        } else if (gridApiRef.current) {

            gridApiRef.current.api.setRowData(rowData);
        }
    }, [filterId, rowData]);

    const gridReady = (params) => {

        gridApiRef.current = params;
        console.log("All Data Recieved!");
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => setRowData(res.data))
            .catch(error => console.log(error));
    };

    return (
        <div className="ag-theme-alpine" style={{ height: 500, width: '100%' }}>
            <h2>Custom Filter</h2>
            <div>
                <input
                    type="number"
                    placeholder="Enter Id"
                    value={filterId}
                    onChange={(e) => setFilterId(e.target.value)}
                    style={{ marginBottom: '30px' }}
                />
            </div>

            <ToggleButtonGroup
                color="primary"
                // value={alignment}
                exclusive
                // onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="light">Light</ToggleButton>
                <ToggleButton value="dark">Dark</ToggleButton>
                
            </ToggleButtonGroup>

            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDefs}
                pagination={true}
                paginationPageSize={10}
                onGridReady={gridReady}
            >
            </AgGridReact>
        </div>
    );
};

export default TableGridCell;
