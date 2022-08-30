import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box 
          borderRadius="lg"
  				bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3} 
          mb={6} 
          align="center">
          삼겹살을 사랑하는 개발자
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Lee Geon-Woo
            </Heading>
            <p> 회사원...( Web Developer )</p>
          </Box> 
				  <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image borderColor="whiteAlpha.800" 
              borderWidth={2} 
              borderStyle="solid" 
              maxWidth="100px" 
              display="inline-block" 
              borderRadius="full" 
              src="/images/geonwoo-hp.jpg"
              alt="Profile Image"
              />
          </Box>
        </Box>

  			<Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Java를 기반으로 개발을 하고 있는 1년차 주니어{' '}
            <NextLink href="/works/" passHref scroll={false}>
              <Link>Back-End </Link>
            </NextLink>
            개발자 입니다.
            취미로{' '} 
            <NextLink href="/projects/" passHref scroll={false}>
              <Link>Front-End </Link>
            </NextLink>
            작업을 하고 있고, Apple Application 개발을 병행하며 신세계를 느끼고 있습니다.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
  
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1989</BioYear>
            Born in GwangMyeong, South Korea.
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            South Korea Army Sgt. Expired Discharge.
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            To Help Online Shopping mall Private Business.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Worked in CI Telecom's Inventory Management Department.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked in the Interior Electrical Department at HANA Electric.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed the java and python web development course using big data at the Globalit Human Resources Development Institute
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Xiness co.,ltd
          </BioSection>
        </Section>
  
	  		<Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Samgyeopsal(Korean Pork belly), Exercise, watching e-Sports(LOL), watching EPL(Spus),{' '} 
            <NextLink href="/books/" passHref scroll={false}>
              <Link>Reading a Book </Link>
            </NextLink>
          </Paragraph>
        </Section>
  
      </Container>
    
    </Layout>
  )
}

export default Page
