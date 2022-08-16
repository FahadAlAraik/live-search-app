import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { searchAction } from './searchReducer';
import axios from 'axios';


function SearchInput() {

    const [input,updateInput] = useState(''); // input stores the current value the user in writting 
    const dispatch = useDispatch();// dispatch updates the Input in the store {it will be used to fetch data from server}
    const [searchBy,updateSearchBy] = useState('Name');// user choice to search by either {id,name,major,gpa,gender} default is name
    const [columnNames, updateColumnNames] = useState([]);

    axios.get("http://localhost:3001/columns") // <-- change depending on your api destination
        .then( res => updateColumnNames(res.data))
        .catch(err => console.log(err))
    
    


    function handleChange(event) {
        updateInput(event.target.value)
        
    }

    function handleClick(event) {
        updateSearchBy(event.target.id)
        
    }

    dispatch(searchAction(input)) // to update the state to latest
    return (
    
        <Form>
        <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Label className = "d-block text-center" >Search By {searchBy}</Form.Label>
           <br />
            <Form.Control onChange = {handleChange} value = {input} type= "text" placeholder= {`Enter Student ${searchBy}`}  style ={{width:"70%", margin:"auto"}} />
           <br />
            <div className='text-center'>
                {columnNames.map(obj => <Form.Check inline id={obj.COLUMN_NAME} label={obj.COLUMN_NAME} name="searchBy" type='radio' onClick = {handleClick}  />  )}
                <Form.Check inline id="searchByHidden" type='hidden' value = {searchBy}  /> {/* this is hidden because there is no need to create a newState or update the store for the search catagorie */}
            </div>
                
            <Form.Text className="d-block text-muted text-center m-3">
            Live search using [React - Redux - Nodejs - MySQL].
            </Form.Text>
        </Form.Group>
        </Form>
    );
    
}
export default SearchInput;
