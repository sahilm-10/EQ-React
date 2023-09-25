import React, { useState, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {ToggleButton} from '@mui/material';
import axios from 'axios';  
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


const TableGridCell = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [filterId, setFilterId] = useState("");
    const [rowData, setRowData] = useState([]);
    // const[filteredrowdata,setFilteredrowdata] = useState([]);
    const gridApiRef = useRef(null);
    const columnDefs = [
        { field: 'postId', checkboxSelection: true, headerCheckboxSelection: true  },
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

            <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        
      </IconButton>
    </Box>

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
