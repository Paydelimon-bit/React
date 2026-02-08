import { Button } from "./button";

function Nav(){
    return (
        <ul className="flex flex-row justify-around w-full mt-3">
            <Button>Inicio</Button>
            <Button>Contaco</Button>
            <Button>Mas informacion</Button>
            <Button>Sobre nosotros</Button>
        </ul>

    );
};

export default Nav;