import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (

      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Lee Geon-woo's homepage" />
          <meta name="author" content="Lee Geon-woo" />
          <meta property="og:site_name" content="Lee Geon-woo" />
          <meta name="og:title" content="Lee Geon-Woo" />
          <title>Lee Geon-woo - Homepage</title>
        </Head>

        <NavBar path={router.asPath} />

        <Container maxW="container.md" pt={14}>
          <LazyVoxelDog />

          {children}

          <Footer />
        </Container>
      </Box>

  )
}

export default Main
