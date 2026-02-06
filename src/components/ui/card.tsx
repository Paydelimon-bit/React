
import {cn} from "@/lib/utils";

interface CardProps{
    children?: React.ReactNode;
    className?:string;
}

function Card({children,className}:CardProps){
    return (

    <div className={cn(" flex flex-col border-2 border-black m-4 gap-2.5 text-center"
    )}>
        <p>Esta es una tarjeta</p>
        {children}
    </div>
    );
    
    
}

export { Card };