import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

function Navbar() {
  const {user, logout} = UserAuth()

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await logout();
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to='/'>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
        </Link>
        {user?.email ? (
          <div>
          <Link to='/account'>
            <button className="text-white pr-4">Account</button>
            </Link>
            
            <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Log Out</button>
            
        </div>
        ) : (
        <div>
          <Link to='/signin'>
            <button className="text-white pr-4">sign in</button>
            </Link>
            <Link to='/signup'>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">sign up</button>
            </Link>
        </div>)}
    </div>
  )
}

export default Navbar