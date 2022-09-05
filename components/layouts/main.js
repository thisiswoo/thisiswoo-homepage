import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
// import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (

    <I18nextProvider i18n={i18n}> 

      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Lee Geon-woo's homepage" />
          <meta name="author" content="Lee Geon-woo" />
          <meta name="author" content="thisiswoo" />
          // <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          // <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta property="og:site_name" content="Lee Geon-woo" />
          <meta name="og:title" content="Takuya Matsuyama" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.craftz.dog/card.png" />
          <title>Lee Geon-woo - Homepage</title>
        </Head>

        <NavBar path={router.asPath} />

        <Container maxW="container.md" pt={14}>
          <LazyVoxelDog />

          {children}

        </Container>
      </Box>

    </I18nextProvider>

  )
}

export default Main
