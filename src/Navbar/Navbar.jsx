import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg rounded-xl px-6 mb-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <Link to='/'>
        Home
        </Link>
        <Link className="ml-6" to='/about'>
        About
        </Link>
      <Link className="ml-6" to='/blog'>
        Blog
        </Link>
        <Link className="ml-6" to='/contact'>
        Contact
        </Link>
        <Link className="ml-6" to='/knots'>
        Knots
        </Link>
        <Link className="ml-6" to='/license'>
        Fishing License
        </Link>
        <Link className="ml-6" to='/aquariumFish'>
        Aquarium Fish
        </Link>
        <Link className="ml-6" to='/farming'>
        Fish Farming
        </Link>
      </ul>
    </div>
    <img className="w-20" src="https://i.ibb.co/n80LRJM/fish-Hunted-logo.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
    <Link to='/'>
        Home
        </Link>
        <Link className="ml-6" to='/about'>
        About
        </Link>
      <Link className="ml-6" to='/blog'>
        Blog
        </Link>
        <Link className="ml-6" to='/contact'>
        Contact
        </Link>
        <Link className="ml-6" to='/knots'>
        Knots
        </Link>
        <Link className="ml-6" to='/license'>
        Fishing License
        </Link>
        <Link className="ml-6" to='/aquariumFish'>
        Aquarium Fish
        </Link>
        <Link className="ml-6" to='/farming'>
        Fish Farming
        </Link>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;