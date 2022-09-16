import { Box } from '@chakra-ui/react'

{/*
import { 
  TbBrandGithub,
  TbBrandGmail,
  TbBrandInstagram
} from 'react-icons/tb'
*/}

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} This website is built based on the <a href='https://www.craftz.dog/' target='_blank' rel="noreferrer">Takuya Matsuyama&apos;s website</a>.
      <br/> As a big fan of yours living in Korea, I feel grateful to you.
      {/*<TbBrandGithub /><TbBrandGmail /><TbBrandInstagram />*/}
    </Box>
  )
}

export default Footer
