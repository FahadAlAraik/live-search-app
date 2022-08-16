import { useSelector } from "react-redux";
import axios from 'axios';
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';


// it detects automatically your column names and add table based on your column names
// the code depends on your table column name if it is {NAME} then it will display the table header as {NAME}
// as well as the tubles it is taken directly from the db and displayed


function Result() {
  
    const searchedItem = useSelector((state) => state);
    const [dataFromServer,updateData] = useState([]);
    const searchBy = (def = 'name') => document.getElementById("searchByHidden").value == null ? def  : document.getElementById("searchByHidden").value ;
    const [columnNames, updateColumnNames] = useState([]);
    

    useEffect(() => {
      
//first api call is for column names
        axios.get("http://localhost:3001/columns") // <-- change depending on your api destination
        .then( res => updateColumnNames(res.data))
        .catch(err => console.log(err))


// second api call is for result

        axios.get(`http://localhost:3001/api/${searchBy()}/${searchedItem}`) // <-- change dpeending on your api destination
        .then(res => {
            updateData(res.data)
        })
        .catch(err => console.log(err))

    })


    console.log()
    return (
        <Table striped bordered hover>
      <thead>
        <tr>
          {columnNames.map((col) => <th style = {{textAlign:'center'}}>{col.COLUMN_NAME}</th>)}
        </tr>
      </thead>
      <tbody>
        
        {dataFromServer.map((data) => {
            
            return (
                <tr >
                      {Object.keys(data).map((key) => <td >{data[key]}</td>)}
                </tr>
            )
        } )}
      </tbody>
    </Table>
    )



}

export default Result;