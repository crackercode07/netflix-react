import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login} = UserAuth()
  const [error, setError] = useState()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }

  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://tse4.explicit.bing.net/th?id=OIP.3p7yAFrYlsJKmcrrrgPP9QHaEK&pid=Api&P=0" alt="/" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Signin</h1>
            {error ? <p>{error}</p> : null}
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Eamil'/>
              <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' />
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p><input type="checkbox" className='mr-2' />Remember Me</p>
                <p>Need Help?</p>
              </div>
              <p className='py-8p'><span className='text-gray-600'>new to Netflix?</span>{' '}<Link to='/signup'>Sign Up</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login