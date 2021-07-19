import GetTo100 from "./GetTo100";
import {useEffect, useState} from 'react';
import Player from "./Player";

function BoardGame(){
    let [gamers,setGamers]=useState([]);
    // let able=false
    
    let [flag,setFlag]=useState(0);
 
    // useEffect(()=>{
    //    },[flag])
    function addGamer(){
      let x=prompt("enterName");
      let y=Math.floor(Math.random()*50)+1;
      let o=gamers;
      o.push({name:x,win:false,isDis:false,number:y,steps:0,score:""})
      setGamers(o)
      console.log(o)
      console.log(gamers)
     setFlag(1-flag);
    }
    
 function update(g,index){
  
     setGamers(g);
     setFlag(1-flag);
     isAble(index)
 }
 function remove(g){
   let y=gamers;
//delete y[g];
y.splice(g,1)
console.log(y)
setGamers(y)
setFlag(1-flag);
 }
   
 function start(){
  //  let ind=0;
  //  let able=true;
  let l=gamers.length-1;
  setFlag(1-flag);
  isAble(l)
  //  while (gamers!=null)
  //  {
   //  <Player p={gamers[0]} able={able}/> 
    //  if(ind==gamers.length)
    //  ind=0;
    //  else
    //  ind++;

  //  }
  
 }
    function isAble(index) {
      console.log(gamers)
      let r=gamers;
      r[index].isDis=false;
      if(index==gamers.length-1)
      r[0].isDis=true;
       else
       r[index+1].isDis=true;
      //  r[(index+1)%(r.length-1)]
      setGamers(r)
    }   
      return ( 
        <>
          
          <GetTo100 addGamer={addGamer} start={start}/>
          <hr></hr>
        {gamers.map((item,index)=>(
             <Player p={item} key={index}  change={(t)=>{
               if (t!=null)
             { let g=gamers;
               g[index]=t;
          update(g,index) }
          else
          remove(index)
             }}/>
            
             ) )}
               
         

        </>
     );
      
         }

export default BoardGame;
        