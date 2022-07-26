import type { GetServerSideProps, NextPage } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import { useSession, signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { trpc } from '~/utils/trpc'
import { authOptions } from './api/auth/[...nextauth]'

const Home: NextPage = () => {
  const { data } = useSession()

  // const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }])

  return (
    <>
      <Head>
        <title>T3Chat</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='min-h-screen flex items-center justify-center'>
        <button onClick={() => signOut()} className='btn btn-primary'>
          Sign out {data?.user?.name}
        </button>
      </div>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  // * get the session
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )

  if (!session) {
    // * redirect to signin page
    return {
      props: {},
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
