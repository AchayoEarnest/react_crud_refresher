import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Table, Button } from 'semantic-ui-react'


function Read() {
  const [dataFromAPI, setDataFromAPI] = useState([])
  

  useEffect(() => {
    axios.get('https://63263278ba4a9c4753243e32.mockapi.io/crude')
      .then((getData) => { 
        setDataFromAPI(getData.data)      
    }, [])
    
  })

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
                <Button color='green'>Update</Button>
              </Table.Cell> 
              <Table.Cell>
                <Button color="red">Delete</Button>
              </Table.Cell>               
            </Table.Row> 
          )
                   
        })}
      

    </Table.Body>
  </Table>
  )
}

export default Read