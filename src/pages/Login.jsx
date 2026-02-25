import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signIn({ email, password })
    if (!error) {
      navigate('/')
    }
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form onSubmit={handleLogin} className='space-y-4 w-96'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
          />
        </div>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>Login</button>
      </form>
    </div>
  )
}
