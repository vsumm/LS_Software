import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const dateFilterParams = {
  comparator: function (filterLocalDateAtMidnight, cellValue) {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split('-');
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  },
  browserDatePicker: true,
};

function Tabledata() {
  const [gridApi, setGridApi] = useState()
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const rowData = [
    { company: "Fraction",   Floor: "Floor1", group: "group1", date: "28-04-2022" },
    { company: "Fraction",   Floor: "Floor2", group: "group2", date: "26-04-2022" },
    { company: "Fraction",   Floor: "Floor3", group: "group3", date: "24-04-2022" },
    { company: "Fraction",   Floor: "Floor4", group: "group5", date: "25-04-2022" },
    { company: "Fraction",   Floor: "Floor5", group: "group5", date: "27-04-2022" },
    { company: "Fraction",   Floor: "Floor1", group: "group6", date: "18-04-2022" },
    { company: "Fraction",   Floor: "Floor2", group: "group7", date: "16-04-2022" },
    { company: "Fraction",   Floor: "Floor3", group: "group8", date: "24-04-2022" },
    { company: "Fraction",   Floor: "Floor4", group: "group9", date: "25-04-2022" },
    { company: "Fraction",   Floor: "Floor5", group: "group10", date: "27-04-2022" },
  ];

  const columns = [
    { headerName: "company", field: "company" },
    { headerName: "group",   field: "group"   },
    { headerName: "Floor",   field: "Floor"   },
    {
      headerName: "Date",
      field: "date",
      filter: "agDateColumnFilter",
      filterParams: dateFilterParams,
    },
  ];
  const defColumnDefs = { flex: 1, }

  const onGridReady = (params) => {
    setGridApi(params)
  }
  const getFilterType = () => {
    if (startDate !== '' && endDate !== '') return 'inRange';
    else if (startDate !== '') return 'greaterThan'
    else if (endDate !== '') return 'lessThan'
  };
  useEffect(() => {
    if (gridApi) {
      if (startDate !== '' && endDate !== '' && startDate > endDate) {
        alert("Start Date should be before End Date")
        setEndDate('')
      } else {
        var dateFilterComponent = gridApi.api.getFilterInstance('date');
        dateFilterComponent.setModel({
          type: getFilterType(),
          dateFrom: startDate ? startDate : endDate,
          dateTo: endDate,
        });
        gridApi.api.onFilterChanged();
      }

    }

  }, [startDate, endDate])
  return (
    <div className="App">
      <h2 align="center">Fraction Analytics Dashboard</h2>
      <p align="center">Date Range Filtering </p>
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        From : <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        To : <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
        <AgGridReact
          rowData={rowData}
          columnDefs={columns}
          defaultColDef={defColumnDefs}
          onGridReady={onGridReady} />
      </div>
    </div>
  );
}

export default Tabledata;
