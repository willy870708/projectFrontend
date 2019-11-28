import React ,{useState, useEffect} from 'react'
import {Row,Col,Table,Card,Button, Image} from 'react-bootstrap'
import BodyInfo from "./BodyInfo"
import BodyContent from "./BodyContent"
import mall from "./assets/mall.jpg"
import {Link, } from 'react-router-dom'
import Detail from "./Detail"
import {Route, Switch} from 'react-router-dom'

const TotalInfo = ({users}) =>{
  return(
    <div>
      <Link to ="/AddArea"><p style={{color:"#FF8C00",marginTop:"2%"}}>+新增一筆場域資料</p></Link>
      <div style={{marginTop:"7.5%"}}>
                  <Row>                   
                    {
                     <BigButt datas = {users}></BigButt>
                    }
                    {/* <Col align="center"><BodyInfo/></Col>
                    <Col align="center"><BodyContent/></Col>  */}
                  </Row>
       </div> 
    </div>
  )
}
const BigButt=({datas = []}) =>{ 
  var path = "/Detail/";
  return(
    
    datas.map( (data) =>
    <Col xs='12' sm='4' md ='4'>
      <Link to ={{pathname:path+data.id}}>
        <Image src={mall} style={{marginLeft:"10%",height:"250px",width:"250px"}} roundedCircle thumbnail/>
      </Link>
    </Col>)
  )
}
export default TotalInfo;