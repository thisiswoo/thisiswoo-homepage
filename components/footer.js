import { Box, Container, HStack } from '@chakra-ui/react'
import { 
  FaGithub,
  FaMailBulk,
  FaInstagram,
  FaBlog 
} from "react-icons/fa"

const Footer = () => {
  return (
    <Container maxW="container.sm">
      <Box align="center">
        <HStack spacing='24px' justify='center'>
          <a href="https://github.com/thisiswoo" >
            <FaGithub cursor="pointer"/>
          </a>
          <a href="mailto:thisiswoo0594@gmail.com" >
            <FaMailBulk cursor="pointer"/>
          </a>
          <a href="https://instagram.com/samgyeopsalislove" >
            <FaInstagram cursor="pointer"/>
          </a>
          <a href="https://thisiswoo.github.io/" >
            <FaBlog cursor="pointer" />
          </a>
        </HStack>
        <br />
      </Box>
      <Box align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} This website is built based on the <a href='https://www.craftz.dog/'>Takuya Matsuyama&apos;s website</a>.
        <br/> As a big fan of yours living in Korea, I feel grateful to you.
      </Box>
    </Container>
  )
}

export default Footer
