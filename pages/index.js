import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue,
  Text,
  Tag,
  TagLabel,
  TagRightIcon,
  HStack,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react'
import { ChevronRightIcon, CheckIcon } from '@chakra-ui/icons'
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
          I will record with the mind of a history official.
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              이건우
            </Heading>
            <p>
              &ensp;&ensp;<Text fontSize='md' as='b'>Java & Spring 기반의 2년 차 백엔드 개발자 이건우입니다.</Text>
            </p>
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
              maxWidth="150px"
              display="inline-block" 
              borderRadius="full" 
              src="/images/me.png"
              alt="Profile Image"
              />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Introduce
          </Heading>
          <Box>
            <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
              <TagLabel>Career</TagLabel>
              <TagRightIcon as={CheckIcon} />
            </Tag>
            &nbsp;Java & Spring 기반의 2년 차 백엔드 개발자 이건우입니다. 주로 웹 개발/배포/운영을 하고 있습니다.
            <br/><br/>
            <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
              <TagLabel>Faithful</TagLabel>
              <TagRightIcon as={CheckIcon} />
            </Tag>
            &nbsp;항상 초심을 잃지 않고 <b>꾸준함</b>을 유지하기 위해 사내 <b>스터디 모임</b> 뿐만 아니라 <b>개인 프로젝트</b> 및 <b>토이 프로젝트</b>를 <b>추진</b>하여 진행하고 있습니다.<br/>
            이를 통해 습득한 지식을 <Link href="https://github.com/thisiswoo" target="_blank"><b>Github</b></Link>와 기술 블로그에 <Link href="https://thisiswoo.github.io/" target="_blank"><b>기록 • 공유</b></Link>하는 저만의 <b>루틴</b>을 실천 중입니다.<br/>
            또한, 실무에서 이슈 발생 시 테스트를 통해 <Link href="https://thisiswoo.github.io/tag-problem-solving/" target="_blank"><b>원인을 분석하고 해결 • 개선</b></Link>을 하고 있습니다.<br/><br/>
            <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
              <TagLabel>Resolve</TagLabel>
              <TagRightIcon as={CheckIcon} />
            </Tag>
            &nbsp;<b>꾸준함</b>의 힘을 알기에 <b>꾸준함</b>과 <b>기록</b>을 통해 <b>정진</b>하겠습니다.
          </Box>
          <Box align="center" my={4}>
            <NextLink href="/projects" passHref scroll={false}>
              {/*<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">*/}
              <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
                Projects
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Company
          </Heading>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            {' '}
            <NextLink href="https://kr.xiness.com/" target="_blank" passHref>
              <Link>자이네스</Link>
            </NextLink>
            &nbsp;- 웹 개발/배포/운영 담당
          </BioSection>
          <BioSection>
            <BioYear>2021-2021</BioYear>
            글로벌IT 인재개발원 빅데이터를 활용한 자바, 파이썬 웹 개발 과정 수료.
          </BioSection>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              {/*<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">*/}
              <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
                Works
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <HStack spacing='20px' justify='left'>
            <Center>
              <Tag w={110} size='md' key='md' variant='subtle' colorScheme='cyan'>
                <TagLabel>Backend</TagLabel>
              </Tag>
            </Center>
            <Wrap>
              <WrapItem>
                <Text fontSize='md' as='b'>
                  Java, Spring Boot, Spring MVC, JPA, QueryDSL
                </Text>
              </WrapItem>
            </Wrap>
          </HStack>
          <br/>
          <HStack spacing='20px' justify='left'>
            <Center>
              <Tag w={110} size='md' key='md' variant='subtle' colorScheme='green'>
                <TagLabel>DevOps</TagLabel>
              </Tag>
            </Center>
            <Wrap>
              <WrapItem>
                <Text fontSize='md' as='b'>
                  MySQL, Jenkins, Git, GitHub, GitLab
                </Text>
              </WrapItem>
            </Wrap>
          </HStack>
          <br/>
          <HStack spacing='20px' justify='left' >
            <Center>
              <Tag w={110} size='md' key='md' variant='subtle' colorScheme='red'>
                <TagLabel align='end'>Frontend</TagLabel>
              </Tag>
            </Center>
            <Wrap>
              <WrapItem>
                <Text fontSize='md' as='b'>
                  HTML, CSS, JavaScript, Vue, jQuery, JSP
                </Text>
              </WrapItem>
            </Wrap>
          </HStack>
          <br/>
          <HStack spacing='20px' justify='left'>
            <Center>
              <Tag w={110} size='md' key='md' variant='subtle' colorScheme='purple'>
                <TagLabel>Tools</TagLabel>
              </Tag>
            </Center>
            <Wrap>
              <WrapItem>
                <Text fontSize='md' as='b'>
                  IntelliJ, VSCode, Vim
                </Text>
              </WrapItem>
            </Wrap>
          </HStack>
          <br/>
          <HStack spacing='20px' justify='left'>
            <Center>
              <Tag w={110} size='md' key='md' variant='subtle' colorScheme='blue'>
                <TagLabel>Collaboration</TagLabel>
              </Tag>
            </Center>
            <Wrap>
              <WrapItem>
                <Text fontSize='md' as='b'>
                  Wiki Confluence, Slack
                </Text>
              </WrapItem>
            </Wrap>
          </HStack>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            삼겹살 먹기, 잠자기, 운동(웨이트 트레이닝, 수영)하기, 책보기, EPL&#40;COYS&#41; 경기 보기, e-Sports&#40;LOL&#41; 경기 보기
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
