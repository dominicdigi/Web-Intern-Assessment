import Image from "next/image";
import NavLink from "./NavLink";

const Header = () => {

    return (
        <div className="flex w-full justify-center sticky top-0 bg-black z-50 border-b-2 border-gray-600">
            <a className="md:absolute top-0 left-0 md:mt-8 md:ml-4 md:p-0 p-8" href='/'>
                <Image
                    src='/logo.png'
                    width={100}
                    height={100}
                    alt="Lift Card Logo"
                    priority={true}
                />
            </a>
            <div className="md:flex hidden">
                <NavLink text="Home" url="/" />
            </div>
            <NavLink text="Sign Up" url="/register" />
            <NavLink text="Login" url="/login" />
        </div>
    )
}

export default Header