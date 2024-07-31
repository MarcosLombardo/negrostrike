// Estilos y componentes
import "../../app/globals.css";

//------------------

const NavBar = () => {
    return (
        <nav className="w-full bg-main flex justify-between p-2">
            <div className="w-1/3 flex justify-normal pl-1">
                <h1 className="font-counter-strike text-4xl">Negro - Strike</h1>
            </div>

            <div className="w-1/3 flex justify-center items-center">
                <ul className="flex gap-4">
                    <li>Home</li>
                    <li>Personajes</li>
                    <li>Mapas</li>
                    <li>Tabla</li>
                    <li>Info</li>
                </ul>
            </div>

            <div className="w-1/3 flex justify-end items-center pr-1">
                <h3>Login</h3>
            </div>
        </nav>
    );
};

export default NavBar;
