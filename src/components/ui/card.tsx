import React from "react";
interface CardProps{
    h2?:React.ReactNode;
    h3?:React.React
}


function Card({h2,h3}:CardProps){
    return (
    <>
    <div className={" flex flex-col border-2 border-black m-4 gap-2.5 text-center"}>
        <h2>{h2}</h2>
        <h3></h3>
        
    </div>
    </>
    );
    
    
    
}

export default Card ;