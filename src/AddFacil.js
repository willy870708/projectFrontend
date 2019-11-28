import {Table,Container,InputGroup,FormControl,Form,Button} from 'react-bootstrap'
import React,{useState, useEffect} from 'react';
const AddFacil=()=>{
return(
    <Container>
        <Table responsive striped bordered hover size="sm" variant="dark" borderless  style={{color:"white",marginTop:"7.5%",marginLeft:"15%",width:"50rem"}}>
  <thead>
    <tr>
      <td colSpan="3" align="center"><InputGroup size="sm" className="mb-3" style={{width:"300px"}}>
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">名稱:</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{background:"#353a40"}}/>
  </InputGroup>
  </td>
    </tr>
    <tr>
    <td colSpan="3" align="center">
    <InputGroup size="sm" className="mb-3" style={{width:"300px"}}>
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">人數上限:</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{background:"#353a40"}}/>
  </InputGroup>
    </td>
    </tr>
    <tr>
    <td colSpan="3" align="center">
    <InputGroup size="sm" className="mb-3" style={{width:"300px"}}>
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">IP位置:</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{background:"#353a40"}}/>
  </InputGroup>
    </td>
    </tr>
    <tr>
    <td colSpan="3" align="center">
        <Button style={{color:"white",background:"#00AAAA"}}>submit</Button>
    </td>
    </tr>
    </thead>
    </Table>
    </Container>
)
}
export default AddFacil;