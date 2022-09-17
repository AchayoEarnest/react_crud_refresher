import React, {useState, useEffect} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState(null)

  console.log(firstName);
  console.log(lastName);

  const sendDataToAPI = () => {
    axios.put(`https://63263278ba4a9c4753243e32.mockapi.io/crude/${ID}`, {
      firstName,
      lastName
    })
  }
  
  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"))
    setLastName(localStorage.getItem("lastName"))
    setID(localStorage.getItem("ID"))
  }, [])

  return (
    <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' name='fname' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' name='lname' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
    </Form.Field>
    <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
  </Form>
  )
}

export default Update