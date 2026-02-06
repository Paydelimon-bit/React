
interface HeadingProps{
    name:string;
    age:number;
}


function Heading({name,age}:HeadingProps){
    return(
        <nav>
            <h1>Hola {name}, tu edad es {age}</h1>
        </nav>
    );


}

export {Heading};