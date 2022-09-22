import { Box, Container, Stack, HStack } from '@chakra-ui/react'
import { 
  TbBrandGithub,
  TbBrandGmail,
  TbBrandInstagram
} from 'react-icons/tb'

const Footer = () => {
  return (
    <Container maxW="container.sm">
      <Box align="center">
        <HStack spacing='24px' justify='center'>
          <a href="https://github.com/thisiswoo" target="_blank">
            <TbBrandGithub cursor="pointer"/>
          </a>
          <a href="mailto:thisiswoo0594@gmail.com" target="_blank">
            <TbBrandGmail cursor="pointer"/>
          </a>
          <a href="https://instagram.com/samgyeopsalislove" target="_blank">
            <TbBrandInstagram cursor="pointer"/>
          </a>
        </HStack>
      </Box>
      <Box align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} This website is built based on the <a href='https://www.craftz.dog/'>Takuya Matsuyama&apos;s website</a>.
        <br/> As a big fan of yours living in Korea, I feel grateful to you.
      </Box>
    </Container>
  )
}

export default Footer
