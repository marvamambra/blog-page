import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Robot from './robot';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/robot')
  }
  const user = useSelector((state) => state.user.user);



  return (
    <div>
      <div style={{backgroundColor:'darkblue',color:'white',height:'30px',padding:'40px' ,justifyContent:'space-between',display:'flex'}}>
        
        <h1 style={{alignContent:'center',fontSize:'50px',alignItems:'center'}}>TechEase</h1>

        <div style={{ justifyContent:'flex-end',display:'flex',gap:'60px'}}>
      
           <button style={{borderRadius:'10px',width:'100px'}}>Home</button>
           <button style={{borderRadius:'10px',width:'100px'}} >Login</button>
           <button style={{borderRadius:'10px',width:'100px'}}>News</button>
           <button style={{borderRadius:'10px',width:'100px'}}>Blog</button>
           <button style={{borderRadius:'10px',width:'100px'}}>About</button>

           </div>
           

      </div>

   
    <div style={{backgroundImage:`url(/fig2.jpg)`,backgroundSize:'cover',height:'1000px',width:'1500PX',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'10px'}}>
   
      {/* <button onClick={logout} style={{backgroundColor:'green'}}>LOGOUT</button> */}
    </div>
    <div style={{justifyContent:'space-around',display:'flex',backgroundColor:'skyblue',height:'320px'}}>
    <a href='#'>
        <h4>HARDWARE AND GADGETS</h4>
        <img src='gadget.jpg' style={{height:'200px',width:'250px'}}></img>
      </a>
      <a href='#'>
        <h4>ARTIFICIAL INTELLIGENCE</h4>
        <img src='ai.jpg' style={{height:'200px',width:'250px'}}></img>
      </a>
      <a href='#' onClick={logout}>
        <h4>ROBOTICS</h4>
        <img src='robotics.jpg' style={{height:'200px',width:'250px'}}></img>
      </a>
      
      <a href='#'>
        <h4>CLOUD COMPUTING</h4>
        <img src='cloud.jpg' style={{height:'200px',width:'250px'}}></img>
      </a>
      <a href='#'>
        <h4>CYBER SECURITY</h4>
        <img src='cyber.png' style={{height:'200px',width:'250px'}}></img>
      </a>
      

    </div>
    </div>
  );
};

export default Home;
