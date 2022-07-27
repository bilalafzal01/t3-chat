const Footer = () => {
  return (
    <footer className='footer footer-center p-8  md:p-10 bg-base-200 text-base-content rounded'>
      <div>
        <p className='flex items-center justify-center space-x-1'>
          <span>Made with</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 text-primary'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
              clipRule='evenodd'
            />
          </svg>
          <span>by</span>
          <a
            target={'_blank'}
            href='https://github.com/bilalafzal01'
            className='text-primary'
            rel='noreferrer'
          >
            Bilal Afzal
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
