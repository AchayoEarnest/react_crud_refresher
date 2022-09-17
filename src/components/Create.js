import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(firstName);
  console.log(lastName);

  const sendDataToAPI = () => {
    axios.post('https://63263278ba4a9c4753243e32.mockapi.io/crude', {
      firstName,
      lastName
    })
}

  return (
    <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' name='fname' onChange={(e)=>setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' name='lname' onChange={(e)=>setLastName(e.target.value)} />
    </Form.Field>
    <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
  </Form>
  )
}

export default Create