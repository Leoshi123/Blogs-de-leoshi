import { useState } from 'react'

export default function PostForm ({ post, onSave }) {
  const [title, setTitle] = useState(post?.title || '')
  const [content, setContent] = useState(post?.content || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ title, content })
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label htmlFor='title' className='block text-sm font-medium text-gray-700'>Title</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
        />
      </div>
      <div>
        <label htmlFor='content' className='block text-sm font-medium text-gray-700'>Content</label>
        <textarea
          id='content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows='10'
          className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
        />
      </div>
      <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>Save</button>
    </form>
  )
}
