import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Table, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


function Read() {
  const [dataFromAPI, setDataFromAPI] = useState([])
  

  useEffect(() => {
    axios.get('https://63263278ba4a9c4753243e32.mockapi.io/crude')
      .then((getData) => { 
        setDataFromAPI(getData.data)      
      }, [])
    

  })

  const setData = (id, firstName, lastName) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
  }

  const getData = () => {
    axios.get('https://63263278ba4a9c4753243e32.mockapi.io/crude')
      .then((getData) => {
        setDataFromAPI(getData.data);
      });
  }
      

  // const setID = (id) => {
  //   console.log(id)
  //   localStorage.setItem('ID', id)
  // }


  const onDelete = (id) => {
    axios.delete(`https://63263278ba4a9c4753243e32.mockapi.io/crude/${id}`)
    .then(() =>{
      getData();
    })

  }
    
  




  return (
    <Table celled>
    <Table.Header>
      <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
          
      </Table.Row>
    </Table.Header>

      <Table.Body>
        { dataFromAPI.map((data) => {
          return (
            <Table.Row>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{ data.lastName }</Table.Cell>
              <Table.Cell>
                <Link to='/update'>
                  <Button color='green' onClick={()=>setData(data.id, data.firstName, data.lastName)}>Update</Button>                  
                </Link>                
              </Table.Cell> 
              <Table.Cell>                
                  <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>              
              </Table.Cell>               
            </Table.Row> 
          )
                   
        })}
      

    </Table.Body>
  </Table>
  )
}

export default Read