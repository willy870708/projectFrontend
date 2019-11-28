import React,{useState, useEffect} from 'react';
import {Table} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import red from './assets/r.png'
import green from './assets/g.png'
import yellow from './assets/y.png'
import black from './assets/b.png'
import purple from './assets/p.png'
const Detail = ({users=[]}) =>{
  let {id} = useParams();
  const [user,setUser] = useState();
  const [areas,setAreas] = useState([]);
  useEffect( ()=> { async function fetchData(){
    let url = 'http://192.168.0.2:5000/api/users/'+id.toString();
    let temp;
    await fetch(url,{ mode: 'cors' })
        .then(res => res.json())
        // .then(json => json.forEach( (todo) => users.push(todo)))
        .then(json => temp = json)
        setUser(temp);
        setAreas(temp.areas);
        };
      fetchData();
    } ,[] );  
    
  return(
        <Container>
          <h1 style={{color:"white", marginTop:"1%",marginLeft:"45%"}}>結帳台1</h1>
            <Vid/>
            <InfoTable  users = {user} areas={areas}/>
        </Container>
    )
}

const Vid =() =>{
    return(
            <div className="embed-responsive embed-responsive-16by9" style={{marginTop:"1%",marginLeft:"25%",width:"600px",height:"350px"}}>
                <iframe title="Embeds Page" className="embed-responsive-item" src="http://192.168.0.2:5000/api/video/1"
                allowfullscreen></iframe>
            </div>
    )
}

const InfoTable =({users, areas}) =>{
  // console.log(typeof(users))
  return(
    <div>
      <Table responsive striped bordered hover size="sm" variant="dark" borderless  style={{color:"white",marginTop:"2%",marginLeft:"15%",width:"50rem"}}>
      <thead>
        <tr>
          <td colSpan="4" align="center"><img src={purple} style={{height:"1rem"}} alt="purple"/>紫燈 (75%-100%)<img src={red} style={{height:"1rem"}} alt="red"/>紅燈 (50%-74%)<img src={yellow} style={{height:"1rem"}}alt="yellow"/>黃燈 (25%-49%)<img src={green} style={{height:"1rem"}} alt="green"/>綠燈 (0%-24%)<img src={black} style={{height:"1rem"}}alt="balck"/>灰燈 (尚未開放) </td>
        </tr>
        <tr>
          <td colSpan="4" align="left"><Link to ="/AddFacil" style={{color:"#FF8C00"}}>+新增一筆資料</Link></td>
        </tr>
        <tr align="center" style={{fontSize:"15pt"}}>    
          <th>收銀台</th>
          <th>人數</th>
          <th>擁擠程度</th>
        </tr>
      </thead>
      <tbody>
        {
          areas.map( (area) => {
            return(
              <tr align='center'>
                <td>{area.name}</td>
                <td>{area.number}</td>
                <td><img src={light(area.status)} style={{height:"1.5rem"}}/></td>
              </tr>
            )
          })
          // <tr align="center">
          //     <td>{users && users.areas.name}</td>
          //     <td>{users && users.id}</td>
          //   </tr>
          // users && users.areas.forEach( (area)=>
          //   <tr align="center">
          //     <td>{area && area.name}</td>
          //     <td>{area && area.number}</td>
          //     <td><img src={light(area && area.status)} style={{height:"1.5rem"}}/></td>
          //   </tr>)
        }
      </tbody>
    </Table>
    </div>
    )
}
const light =(status)=>{
  if(status==="gray"){
    return black;
  }
  else if(status==="green"){
    return green;
  }
  else if(status==="yellow"){
    return yellow;
  }
  else if(status==="red"){
    return red;
  }
  else if(status==="purple"){
    return purple;
  }
};
export default Detail;