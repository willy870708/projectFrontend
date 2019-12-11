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
  const [vid,setVid] = useState(id);
  useEffect( ()=> { async function fetchData(){
    let url = '/api/users/'+id.toString();
    let temp;
    await fetch(url,{ mode: 'cors' })
        .then(res => res.json())
        // .then(json => json.forEach( (todo) => users.push(todo)))
        .then(json => temp = json)
        setUser(temp);
        setAreas(temp.areas);
        };
      fetchData();
      
    } ,[]);  
  return(
        <Container>
          <h1 style={{color:"white", marginTop:"1%",marginLeft:"45%"}}>{user && user.name}</h1>
          {user ? 
            <Vid style={{marginTop:"5%"}} Vid={user&&user.areas[0].video_id}/>
            : <h1 style={{color:"white", marginLeft:"10%",marginTop:"5%"}}>賭你看不到我打什麼這麼長一段時間那麼短你怎麼可能看得完</h1>
                  } 
          <InfoTable setter={setVid}  users = {user} areas={areas}/>
       </Container>
    )
}

const Vid =({Vid}) =>{
  var url = "http://localhost:5000/api/video/"+Vid;
  // console.log(url);
    return(
            <div className="embed-responsive embed-responsive-16by9" style={{marginTop:"1%",marginLeft:"10%",width:"920px",height:"670px"}}>
                <iframe title="Embeds Page" className="embed-responsive-item" src={url}
                allowfullscreen></iframe>
            </div>
    )
}

const InfoTable =({users=[], areas=[],setter}) =>{
  // console.log(typeof(users))
  var path = "/AddFacil/";
  const handleClick =(e,vid) =>{
    // e.preventDefault();
    // console.log(vid);
    // setter(vid);
  }
  return(
    <div>
      <Table responsive striped bordered hover size="sm" variant="dark" borderless  style={{color:"white",marginTop:"2%",marginLeft:"15%",width:"50rem"}}>
      <thead>
        <tr>
          <td colSpan="4" align="center"><img src={purple} style={{height:"1rem"}} alt="purple"/>紫燈 (75%-100%)<img src={red} style={{height:"1rem"}} alt="red"/>紅燈 (50%-74%)<img src={yellow} style={{height:"1rem"}}alt="yellow"/>黃燈 (25%-49%)<img src={green} style={{height:"1rem"}} alt="green"/>綠燈 (0%-24%)<img src={black} style={{height:"1rem"}}alt="balck"/>灰燈 (尚未開放) </td>
        </tr>
        <tr>
          <td colSpan="4" align="left"><Link to ={{pathname:path+users.id}} style={{color:"#FF8C00"}}>+新增一筆資料</Link></td>
        </tr>
        <tr align="center" style={{fontSize:"15pt"}}>    
          <th>區域</th>
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
        }
      </tbody>
    </Table>
    </div>
    )
}
const light =(status)=>{
  if(status==="grey"){
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