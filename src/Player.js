const Player = (props) => {
 let  t=props.p;
 console.log(t);
 console.log(props)
  
 function add(){
   
 t.number=t.number+1;
  t.steps+=1; 
  if(t.number==100)
  win()
  else
 props.change(t);
 
}
function sub(){

  
   t.number=t.number-1;
   t.steps+=1; 
     if(t.number==100)
   win()
   else
   props.change(t);
  
}
function mul(){
  
   
   t.number=t.number*2
   t.steps+=1 
   if(t.number==100)
   win()
   else
   props.change(t);
   
}
function div(){ 
  
   
   t.number=t.number/2;
   t.steps+=1 
   if(t.number==100)
   win()
   else
   props.change(t);
  
}
function exit(){
  t=null;
 props.change(t);
}
function startAgain(){
  let y=Math.floor(Math.random()*50)+1;
  t.number=y;
  t.steps=0; 
  t.win=false;
  t.isDis=false;
  props.change(t)
}
function win(){
  t.score=t.score+" "+t.steps
  t.steps=0
  t.win=true;

  props.change(t)

}

    return ( 
        <>
          <h1>gamer:{t.name}</h1>
          <h1>number: {t.number}</h1>
          <h1> steps: {t.steps}</h1>
          {t.win==1&& <div><input type="button" value="start game" onClick={startAgain}/>
        <input type="button" value="quit" onClick={exit}/></div>}
        {t.win==0&&<div>
          <input type="button" value="+1" onClick={add} disabled={!t.isDis}/>
        <input type="button" value="-1" onClick={sub} disabled={!t.isDis}/>
        <input type="button" value="*2" onClick={mul} disabled={!t.isDis}/>
        <input type="button" value="/2" onClick={div} disabled={!t.isDis}/></div>}
        <h1> {t.name} scores: {t.score}</h1>
        <hr></hr>
        </>

     );
}
 
export default Player;