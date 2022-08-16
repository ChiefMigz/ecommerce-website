import "./mission.css"

 const Mission = ({purpose= ""}) =>{
  
return (
    <> 

    <div id="Mission-div-title">
        <h1 id="mission-title"> Toronto cupcakes <span id="mission-word"> {purpose} </span> </h1>
       <div> 
        <strong>{purpose} 1 </strong>
        <p>lorem ipsum text copy, lorem ipsum generator, lorem ipsum paragraph, dummy text gene</p>
        </div>
        <div> 
        <strong>{purpose} 2 </strong>
        <p> lorem ipsum text copy, lorem ipsum generator, lorem ipsum paragraph, dummy text gene</p>
        </div>
        <div> 
        <strong>{purpose} 3 </strong>
        <p> lorem ipsum text copy, lorem ipsum generator, lorem ipsum paragraph, dummy text gene</p>
        </div>
        <div> 
        <strong>{purpose} 4 </strong>
        <p> lorem ipsum text copy, lorem ipsum generator, lorem ipsum paragraph, dummy text gene</p>
        </div>

    </div>
    </>
)
}


export default Mission;