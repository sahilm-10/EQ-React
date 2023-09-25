import React, { useState, useRef, useCallback,useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';  
import 'ag-grid-enterprise';

const UserCharts = () => {
    const gridRef = useRef();
    const[rowData,setRowData] = useState([]);
    const columnDefs = [
        { field: 'athlete', minWidth: 150 , chartDataType:'category'},
        { field: 'age', maxWidth: 90, chartDataType:'category' },
        { field: 'country', minWidth: 150, chartDataType:'category' },
        { field: 'year', maxWidth: 90 },
        { field: 'date', minWidth: 150, chartDataType:'excluded' },
        { field: 'sport', minWidth: 150 },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
        { field: 'total' },
    ];

    const defaultColDefs = {
        flex: 1,
        filter: 'agSetColumnFilter',
        editable: true,
        sortable: true,
        floatingFilter: true,
    };
    const chartToolPanelsDef = useMemo(() => {
        return {
          panels: [],
        };
      }, []);
    const popupParent = useMemo(() => {
        return document.body;
      }, []);
    // const onChart1 = useCallback(() => {
    //     var params = {
    //       cellRange: {
    //         rowStartIndex: 0,
    //         rowEndIndex: 4,
    //         columns: ['country', 'gold', 'silver'],
    //       },
    //       chartType: 'groupedColumn',
    //       chartContainer : eContainer1,
    //       chartThemeName: 'ag-vivid',
    //       chartThemeOverrides: {
    //         common: {
    //           title: {
    //             enabled: true,
    //             text: 'Top 5 Medal Winners',
    //           },
    //         },
    //       },
    //     };
    //     gridRef.current.api.createRangeChart(params);
    //   }, []);
    
    //   const onChart2 = useCallback(() => {
    //     var params = {
    //       cellRange: {
    //         columns: ['country', 'bronze'],
    //       },
    //       chartType: 'groupedColumn',
    //       chartThemeName: 'ag-pastel',
    //       chartThemeOverrides: {
    //         common: {
    //           title: {
    //             enabled: true,
    //             text: 'Bronze Medal by Country',
    //           },
    //         },
    //       },
    //       unlinkChart: true,
    //     };
    //     gridRef.current.api.createRangeChart(params);
    //   }, []);


    const onFirstDataRendered = useCallback((event) => {
        var eContainer1 = document.querySelector('#chart1');
        var params1 = {
          cellRange: {
            rowStartIndex: 0,
            rowEndIndex: 100,
            columns: ['country', 'gold', 'silver'],
          },
          chartType: 'groupedColumn',
          chartContainer: eContainer1,
        };
        event.api.createRangeChart(params1);
        var eContainer2 = document.querySelector('#chart2');
        var params2 = {
          chartType:'pie',
          cellRange: {
            rowStartIndex: 0,
            rowEndIndex: 10,
            columns: ['country', 'gold'],
          },
          aggFunc: 'sum',
          chartContainer: eContainer2,
          aggFunc: 'sum',
          chartThemeOverrides: {
            common: {
              padding: {
                top: 20,
                left: 10,
                bottom: 30,
                right: 10,
              },
              legend: {
                position: 'right',
              },
            },
          },
        };
        event.api.createCrossFilterChart(params2);
        
      }, []);
      
    const gridReady = (params) => {

       gridRef.current = params;
        console.log("All Data Recieved!");
        axios.get('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then(res => setRowData(res.data))
            .catch(error => console.log(error));
    };

    const chartToolPanelsDefs = useMemo(() => {
        return {
          defaultToolPanel: 'settings',
          dataPanel: {
            groups: [
              { type: 'seriesChartType', isOpen: true },
              { type: 'series', isOpen: false },
            ],
          },
        };
      }, []);
      const getChartToolbarItems = useCallback(() => {
        return ['chartDownload'];
      }, []);
    return (
        <div className="ag-theme-alpine" style={{ height: 800, width: '100%' }}>
            <div>
            {/* <button onClick={onChart1}>Top 5 Medal Winners</button>
          <button onClick={onChart2}>Bronze Medals by Country</button> */}
            </div>
            <div
          id="chart1"
          style={{ flex: '1 1 auto', overflow: 'hidden', height: '30%' }}
        ></div>
        <h2 style={{textAlign:'center'}}>Countries with Gold Medals</h2>
        <div
          style={{
            display: 'flex',
            flex: '1 1 auto',
            overflow: 'hidden',
            height: '30%',
          }}
        >
          <div
            id="chart2"
            style={{ flex: '1 1 auto', overflow: 'hidden', width: '50%' }}
          ></div>
          
          </div>
            <AgGridReact
            // enableCharts={enalbleCharts}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDefs}
                pagination={true}
                paginationPageSize={80}
                onGridReady={gridReady}
                enableRangeSelection={true}
                enableCharts={true}
                popupParent={popupParent}
                chartToolPanelsDef={chartToolPanelsDefs}
                onFirstDataRendered={onFirstDataRendered}
               getChartToolbarItems={getChartToolbarItems}
            >
            </AgGridReact>
           
        </div>
        
    );
};

export default UserCharts;
