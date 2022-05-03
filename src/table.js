import React from 'react'
import { useState, useEffect } from 'react'
import { useTable,useSortBy } from 'react-table'
import './table.css'
function MyTable() {
    const [fetchData, setFetchData] = useState([])
    useEffect(() => {
        let cors = "https://hunter-cors.herokuapp.com/"
        let src = cors + "https://cloud.culture.tw/frontsite/trans/emapOpenDataAction.do?method=exportEmapJson&typeId=H"
        let headers = {
            "Accept": "application/json"
        }
        fetch(src, {
            headers: headers
        })
            .then(function (response) {
                console.log("res", response)
                return response.json()
            })
            .then(function (data) {
                console.log("data", data)
                let tableData = data.map(i => {
                    return {
                        name: i.name,
                        phone: i.phone,
                        cityName:i.cityName,
                        address:i.address,
                        type:i.type
                    }
                })
                console.log('tableData', tableData)
                setFetchData(tableData)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, [])
    const data = React.useMemo(
        () => fetchData,
        [fetchData]
    )
    const columns = React.useMemo(
        () => [
            {
                Header: '博物館名稱',
                accessor: 'name', // accessor is the "key" in the data
                disableSortBy:true
            },
            {
                Header:'類別(點擊排序)',
                accessor:'type',
            },
            {
                Header:'縣市',
                accessor:'cityName',
                disableSortBy:true
            },
            {
                Header: '電話',
                accessor: 'phone',
                disableSortBy:true
            },
            {
                Header:'地址(點擊排序)',
                accessor:'address'
            },
        ],
        []
    )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data },useSortBy)
    return (
        <table className='table'{...getTableProps()}>
            <thead className='thtr'>
                {headerGroups.map(headerGroup => (
                    <tr  {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th className='thead'
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                            >
                                {column.render('Header')}
                                <span>
                                    {column.isSorted
                                    ? column.isSortedDesc
                                        ? ' ↓'
                                        : ' ↑'
                                    : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className='tbody'{...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr className='tr' {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        className='td'
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default MyTable;