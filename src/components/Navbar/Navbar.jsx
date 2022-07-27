import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="flex w-full h-[64px] bg-[#2196f3] font-roboto text-white">
            <Link className="pl-[62px] py-[23px]" to={"/"}>
                Cats
            </Link>
            <Link className="pl-[62px] py-[23px]" to="/favourites">
                Favourites
            </Link>
        </nav>
    );
};