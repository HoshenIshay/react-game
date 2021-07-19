const GetTo100 = (props) => {
    return ( 
        <>
        <h1>Get to 100!!!</h1>
        <input type="button" value="addGame" onClick={props.addGamer}/>
        <input type="button" value="start game" onClick={props.start}/>
        </>

     );
}
 
export default GetTo100;