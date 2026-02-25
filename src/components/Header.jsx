import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className='bg-gray-800 text-white p-4 flex justify-between items-center'>
      <Link to='/' className='text-xl font-bold'>Leoshi Blog</Link>
      <Link to='/' className='text-sm'>Home</Link>
    </header>
  )
}
