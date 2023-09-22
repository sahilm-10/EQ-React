import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import CustomLoadingOverlay from '../AG-Grid/customLoadingOverlay'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import CustomTooltip from '../AG-Grid/customTooltip';
import CustomStatsToolPanel from '../AG-Grid/customStatsToolPanel';
import axios from 'axios';

const TableGridCell = () => {
    const [filterId, setFilterId] = useState("");
    const [comments, setComments] = useState([])
    const gridRef = useRef();
    const [gridApi, setGridApi] = useState(null);
    const checkDetails = (params) => {
        console.log(params);
        alert(`Name:${params.data.email} & Mail:${params.data.email} for PostID:${params.data.postId}`)
    }
    const rowData = [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },

    ];

    const columnDefs = [
        { field: 'postId', checkboxSelection: true, headerCheckboxSelection: true },
        {
            field: 'id', tooltipField: 'name', cellStyle: (params) =>  // for class use cellClass and write css in css file using className(.)
                (params.value < 200 ? { backgroundColor: '#c27272' } : { backgroundColor: '#89c272' })
        },
        {
            field: 'name',
        },
        { field: 'email', tooltipField: 'postId', tooltipComponentParams: { color: '#ececec' } },
        { field: 'body', floatingFilter: false },
        {
            headerName: 'Action',
            cellRenderer: (params) => <div>
                <button onClick={() => checkDetails(params)}>Click me</button>
            </div>
            , floatingFilter: false
        }
    ];
    const defaultColDefs = {
        flex: 1,
        filter: true,
        editable: true,
        sortable: true,
        floatingFilter: true,
        resizable: true,
        tooltipComponent: CustomTooltip
    }
    const loadingOverlayComponent = useMemo(() => {
        return CustomLoadingOverlay;
    }, []);
    const loadingOverlayComponentParams = useMemo(() => {
        return {
            loadingMessage: 'One moment please...',
        };
    }, []);
    const onBtShowLoading = useCallback(() => {
        gridRef.current.api.showLoadingOverlay();
    }, []);

    const OnBtHide = useCallback(() => {
        gridRef.current.api.hideOverlay();
    })

    //   ToolPanel
    const icons = useMemo(() => {
        return {
            'custom-stats': '<span class="ag-icon ag-icon-custom-stats"></span>',
        };
    }, []);
    const sideBar = useMemo(() => {

        return {
            toolPanels: [
                {
                    id: 'customStats',
                    labelDefault: 'Custom Stats',
                    labelKey: 'customStats',
                    iconKey: 'custom-stats',
                    toolPanel: CustomStatsToolPanel,
                },
            ],
            defaultToolPanel: 'customStats',
        };
    }, []);

    const gridReady = (params) => {
        setGridApi(params);
        // console.log(params);
        console.log("GridReady Function");
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.data)
            // .then(res =>
            //     params.api.applyTransaction({ add: res }))
        // params.api.paginationGoToPage(25)
    }
    const rowSelection = 'single';
    const onSelectionChanged = (event) => {
        console.log(event.api.getSelectedRows());
    }
    const onPaginationChange = (pageSize) => {
        gridApi.api.paginationSetPageSize(pageSize)
    }

    // const onFilterTextChange = (e) =>{
    //     // console.log(e.target.value);
    //     gridApi.setQuickFilter(e.target.value);
    // }
    const getFilterId = () =>{
        // setGridApi();
        
        axios.get(`https://jsonplaceholder.typicode.com/comments/${filterId}`)
        .then(res => setComments(res.data))
        .then(res => 
            gridApi.api.applyTransaction({add:res}))
        .catch(error => console.log(error))
    }
    useEffect(()=>{
        console.log(gridApi);
        getFilterId();
    },[filterId])

    // const gridReadyById = (params) => {
    //     setGridApi(params);
    //     console.log(params);
    //     console.log("GridReady Function");
    //     axios.get(`https://jsonplaceholder.typicode.com/comments/${filterId}`)
    //         .then(res => res.data)
    //         .then(res =>
    //             params.api.applyTransaction({ add: res }))
    // }
    return (
        <div className="ag-theme-alpine" style={{ height: 500, width: '100%' }}>
            <select onChange={(e) => onPaginationChange(e.target.value)}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
            <button onClick={onBtShowLoading}>Show overlay</button>
            <button onClick={OnBtHide}>Hide overlay</button>

            {/* <div>
                <input type='search' onChange={onFilterTextChange} placeholder='Search here' />
            </div> */}

            {/* custom filter */}
            <br></br>
            <h3>Custom Filter</h3>
            <div>
                <input type='number' placeholder='Enter Id' value={filterId} onChange={(e) => setFilterId(e.target.value)} />
            </div>

            <h3>{comments.name}</h3>

            
                    <AgGridReact
                        // rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDefs}
                        // enableBrowserTooltips={true}
                        icons={icons}
                        sideBar={sideBar}
                        ref={gridRef}
                        tooltipShowDelay={0}
                        tooltipHideDelay={2000}
                        pagination={true}
                        paginationPageSize={10}
                        loadingOverlayComponent={loadingOverlayComponent}
                        loadingOverlayComponentParams={loadingOverlayComponentParams}
                        onGridReady={gridReady}
                    // paginationAutoPageSize={true}
                    // rowMultiSelectWithClick={true}
                    >
                    </AgGridReact>
               
               
            




        </div >
    );
};
export default TableGridCell;