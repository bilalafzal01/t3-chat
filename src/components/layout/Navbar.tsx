import { useTheme } from 'next-themes'
import React from 'react'

const Navbar = () => {
  const { setTheme } = useTheme()

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <a>
              Theme
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
              </svg>
            </a>
            <ul className='menu menu-compact bg-base-500'>
              {THEMES.map((item) => (
                <li key={item}>
                  <button
                    className='w-full flex'
                    onClick={() => setTheme(item)}
                  >
                    <span className='text-sm capitalize'>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className='navbar-center'>
        <a className='btn btn-ghost normal-case text-xl'>t3-chat</a>
      </div>
      <div className='navbar-end'>
        <button className='btn btn-ghost btn-circle'>
          <div className='indicator'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>
            <span className='badge badge-xs badge-primary indicator-item'></span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Navbar

const THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
]
