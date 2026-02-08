
interface CardRandomvalor{
    valor:number;


}



function CardRandom({valor}:CardRandomvalor){
    
    return(
        <>
        <div className="card"> 
            <h2>El numero es {valor}</h2>
            <h2>El numero es {valor >= 5 ?"Alto":"Bajo"}</h2>
        </div>
        </>
    );
}


export default CardRandom;