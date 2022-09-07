import Excel from 'exceljs';
import { spinner } from '@mes/mes-ui-react';


class ExcelExport {

  constructor(fileName, tables = []) {
    const workbook = new Excel.Workbook();
    tables.forEach(({ sheetName, dataGrid, table, headerSpan }) => {
      const worksheet = workbook.addWorksheet(sheetName);

      this.setHeader(worksheet, { dataGrid, table, headerSpan });
      this.setRowData(worksheet, { dataGrid, table });
      this.setCellStyle(worksheet, { dataGrid, table });

    });

    /*export */
    workbook.xlsx.writeBuffer()
      .then(buffer => {
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
          
        a.download = fileName;
        a.click();
        a.remove();

        spinner.open(true, true);
        setTimeout(() => spinner.close(true), 800);
      });

  }

  setHeader(worksheet, { dataGrid, table, headerSpan }) {
    const headerNameList = [];
    
    if (dataGrid) {
      const widthBalance = 6;
      const worksheetColumns = [];
      
      const columnDefs =  dataGrid.dataGridColumnApi.columnController.columnDefs;
      const allColumns = dataGrid.dataGridColumnApi.getAllColumns();
      const columnRowCount = dataGrid.dataGridColumnApi.columnController.gridHeaderRowCount;

      /* set columnDefs */
      allColumns.forEach(column => {
        worksheetColumns.push({
          header: (column.colId || '').replace('<br />', '\n '),
          key: column.colId,
          width: column.actualWidth / widthBalance,
        });
      });
      worksheet.columns = worksheetColumns;
    
      if (columnRowCount > 1) {
        const getChild = (headerName, col) => {
          const childrenList = [...headerName, col.headerName];
          if (col.children) {
            col.children.forEach((e) => getChild([...childrenList], e));
          } else {
            if (columnRowCount !== childrenList.length) {
              const andarr = [...Array(columnRowCount - childrenList.length)].map(() => col.headerName);
              childrenList.push(...andarr);
            }
            headerNameList.push(childrenList);
          }
        };
  
        columnDefs.forEach((column) => {
          if (column.children) {
            column.children.forEach((col) => getChild([column.headerName], col));
          } else {
            const childrenList = [...Array(columnRowCount)].map(() => column.headerName);
            headerNameList.push(childrenList);
          }
        });
      }
      

    } else if (table) {
      worksheet.columns = table.header.map(e => {
        headerNameList.push(e.header);
        return {
          key: e.key,
          header: e.header[e.header.length - 1],
          width: e.width || 40,
        }; });
    
      
    }

    /* header span */
    headerNameList.forEach((v, i) => { worksheet.columns[i].values = v; });
    if (headerSpan) {
      [...(headerSpan.rowSpan || []), ...(headerSpan.colSpan || [])]
        .forEach((v) => {
          if (v) {
            if (typeof v === 'string') {
              worksheet.mergeCells(v);
            } else {
              worksheet.mergeCells(...v);
            }
          }
        });
    }

  }

  setRowData(worksheet, { dataGrid, table }) {
    let rowData = [];
    const columnRowLength = worksheet._rows.length;
    let top = columnRowLength + 1;
    const mergeCellsList = [];
    if (dataGrid) {
      const columnDefs = dataGrid.dataGridColumnApi.getAllGridColumns();
      const pinnedTopRows = dataGrid.dataGridApi.pinnedRowModel.pinnedTopRows;
      const pinnedBottomRows = dataGrid.dataGridApi.pinnedRowModel.pinnedBottomRows;
    
      /*set rowData */
      pinnedTopRows.forEach(({ data }) =>  {
        worksheet.addRow(data);
        top += 1;
      });
      
      rowData = dataGrid.dataGridApi.getModel().rowsToDisplay.map(({ data }) => {
        worksheet.addRow(data);
        return data;
      } );
      pinnedBottomRows.forEach(({ data }) => {
        worksheet.addRow(data);
      });
    
      /* rowSpan */
      columnDefs.forEach((e, i) => {
        if (e.colDef.rowSpan && !e.colDef.exportCellrowSpan) {
          const index = i + 1;
          rowData.forEach((row, j) => {
            const index2 = top + j;
            const nextRow = rowData[j + 1] || {};
            if (nextRow[e.colId] !== row[e.colId]) {
              const l = mergeCellsList[mergeCellsList.length - 1] || [];
              const top2 = l[2] && l[1] === index ?  l[2] + 1 : top;
              mergeCellsList.push([ top2, index,  index2, index]);
            }
          });
        }
      });
                 mergeCellsList.forEach(e => worksheet.mergeCells(...e) );

    } else if (table) {
      rowData = table.rowData;
      /*set rowData */
      rowData.forEach(data => worksheet.addRow({ ...data }));

      /* rowSpan */
      table.header.forEach(({ key, rowDataRowSpan }, i) => {
        if (rowDataRowSpan) {
          const index = i + 1;
          rowData.forEach((row, j) => {
            const index2 = top + j;
            const nextRow = rowData[j + 1] || {};
            if (nextRow[key] !== row[key]) {
              const  l = mergeCellsList[mergeCellsList.length - 1] || [];
              const top2 = l[2] && l[1] === index ?  l[2] + 1 : top;
              mergeCellsList.push([ top2, index,  index2, index]);
            }
          });
        }
      });
      mergeCellsList.forEach(e => worksheet.mergeCells(...e) );
    }
  }

  setCellStyle(worksheet, { dataGrid, table } ) {

    let columnRowCount = 1;
    if (dataGrid) {
      columnRowCount = dataGrid.dataGridColumnApi.columnController.gridHeaderRowCount;

    } else if (table) {
      table.header.forEach(e => columnRowCount = columnRowCount <= e.header.length ? e.header.length : columnRowCount);
    }

    worksheet.eachRow({ includeEmpty: true },
      (row, i) => {
        row._cells.forEach((cell) => {
          if (i <= columnRowCount) {
            /*header style */
            cell.font = { name: 'Calibri', size: 10, bold: true };
            cell.fill = {
              type: 'pattern',
              pattern: 'darkTrellis',
              fgColor: { argb: 'E4E4E4' },
              bgColor: { argb: 'E4E4E4' },
            };

          } else {
            
            if (dataGrid) {
              const index = i - columnRowCount - 1;
              const column = dataGrid.dataGridColumnApi.getColumn(cell._column._key).colDef;
              if (column.cellStyle) {
                const cellStyle = column.cellStyle(dataGrid.dataGridApi.getRowNode(index)) || {};
                if (cellStyle.color) {
                  cell.font = { color: { argb: cellStyle.color.replace('#', '') }};
                }
              }
             
            }
            cell.font = {
              ...cell.font,
              family: 1,
              bold: false,
              size: 10,
            };

          }
          cell.alignment = { vertical: 'middle', horizontal: 'center' };
          cell.border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' },
          };
        });
      });

    if (dataGrid) {

      /* pinnedTopRow & pinnedBottom style*/
      const pinnedTopRows = dataGrid.dataGridApi.pinnedRowModel.pinnedTopRows;
      const pinnedBottomRows = dataGrid.dataGridApi.pinnedRowModel.pinnedBottomRows;
      const pinnedFill = {
        type: 'pattern',
        pattern: 'darkTrellis',
        fgColor: { argb: 'ecede7' },
        bgColor: { argb: 'ecede7' },
      };
      pinnedTopRows.forEach((e, i) => {
        worksheet._rows[i + columnRowCount]._cells.forEach(setStyleCell => setStyleCell.fill = pinnedFill);
      });
      pinnedBottomRows.forEach((e, i) => {
        worksheet._rows[worksheet._rows.length - 1  - i]._cells.forEach(setStyleCell => setStyleCell.fill = pinnedFill);
      });
    }
  
  }
}

/**
 * @fileName 엑셀파일명
 * @sheetTables table정보 {sheetName, dataGrid, table, sheetName}
*/
export default function (fileName, sheetTables) {
  return new ExcelExport(fileName, sheetTables);
}
