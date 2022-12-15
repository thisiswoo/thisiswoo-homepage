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
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript,
  SiJquery,
  SiBootstrap,
  SiSass,
  SiVuedotjs,
  SiReact,
  SiNextdotjs,
  SiMarkdown,
  SiJava,
  SiMysql,
  SiSpring,
  SiSpringboot,
  SiApache,
  SiApachetomcat,
  SiVercel,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJirasoftware,
  SiFigma,
  SiVisualstudiocode,
  SiIntellijidea,
  SiEclipseide,
  SiNeovim,
  SiIterm2,
} from "react-icons/si";

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
          The important thing is an unbreakable heart.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Lee Geon-Woo
            </Heading>
            <p>
              &ensp;&ensp;<Text fontSize='md' as='b'>&quot;꾸준함을 바탕으로 모두의 기대에 부응하기 위해 노력하는 이건우입니다.&quot;</Text>
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
              src="/images/job_photograph.jpg"
              alt="Profile Image"
              />
          </Box>
        </Box>

  			<Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Who am I 
          </Heading>
          <Box>
            <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
              <TagLabel>Leadership(리더쉽)</TagLabel>
              <TagRightIcon as={CheckIcon} />
            </Tag>
            &nbsp;보통 1차 프로젝트 후 각자의 의견 차이로 인해 파이널 프로젝트는 새로운 인원들과 새 프로젝트를 하게 되는 경우가 많습니다.
            하지만 우리 팀은 1차 프로젝트 인원 그대로 기존 내용에서 더 발전시켜 파이널 프로젝트를 성공적으로 마무리하게 되었습니다.
            그 이유는 커뮤니케이션을 통해 적극적으로 의견을 조율했으며, 팀원들의 상황에 맞추어 배려해 주며 다독여 주었기 때문입니다.
            팀원 그대로 프로젝트를 성공할 수 있었던 이유는 팀장으로서 <b>배려심</b>을 가지고 팀원들을 단합했기 때문입니다.<br/><br/>
            <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
              <TagLabel>Faithful(성실함)</TagLabel>
              <TagRightIcon as={CheckIcon} />
            </Tag>
            &nbsp;교육기관에서 코로나로 인해 많은 사람들이 비대면 수업을 선택했지만 저는 대면 수업을 참석하기 위해 매일 1시간 일찍 도착해 복습을 하며
            오늘의 수업을 준비하였습니다. 그리고 수업이 끝난 후에도 남아서 3시간씩 개인 공부를 했습니다. 그 결과 전체 인원 중 두 사람만 받는 <b>모범상</b>
            을 수상하게 되었습니다.&nbsp;{' '}
            <NextLink href="/projects/oldpetbill" passHref scroll={false}>
              <Link>프로젝트 보기.</Link>
            </NextLink>
            <br/><br/>
            <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
              <TagLabel>Responsibility(책임감)</TagLabel>
              <TagRightIcon as={CheckIcon} />
            </Tag>
            &nbsp;과거 마케팅 회사에서 재직 시 전시회에 참여하여 회사 제품을 홍보하고 판매하는 업무를 맡았습니다.
            그 당시 전시회 3일 동안 제품 완판이라는 기록을 세웠습니다. 그리고 제품이 모자라 온라인으로 구매를 유도하여 추가 판매량을 늘렸습니다.
            그 결과 팀장님의 신뢰를 얻어 모든 전시회의 담당을 하게 되었습니다. 
            이처럼 저는 맡은 업무뿐만 아니라 회사에 보탬이 되고자 노력하는 <b>책임감</b>을 갖고 있습니다. <br/><br/>

          </Box>
          <Box align="center" my={4}>
            <NextLink href="/projects" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Projects
              </Button>
            </NextLink>
          </Box>
        </Section>
  
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Career
          </Heading>
          <BioSection>
            <BioYear>2008-2010</BioYear>
            대한민국 육군 병장 만기제대. 
          </BioSection>
          <BioSection>
            <BioYear>2012-2014</BioYear>
            의류 온라인 쇼핑몰 사업.
          </BioSection>
          <BioSection>
            <BioYear>2014-2016</BioYear>
            CI 텔레콤에서 재고 관리 부서에서 근무. 
          </BioSection>
          <BioSection>
            <BioYear>2016-2018</BioYear>
            미리에서 마케팅 및 전시 업무 담당.
          </BioSection>
          <BioSection>
            <BioYear>2018-2020</BioYear>
            하나전기 인테리어 전기시공팀에서 근무.
          </BioSection>
          <BioSection>
            <BioYear>2021-2021</BioYear>
            글로벌IT 인재개발원 빅데이터를 활용한 자바, 파이썬 웹 개발 과정 수료.
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            {' '}
            {/* <NextLink href="https://kr.xiness.com/" passHref> */}
            <NextLink href="/works" passHref>
              {/* <Link target="_blank">Xiness co.,ltd</Link> */}
              <Link>Xiness co.,ltd</Link>
            </NextLink>
          </BioSection>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Works
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
            <HStack spacing='20px' justify='left' >
              <Center>
                <Tag w={110} size='md' key='md' variant='subtle' colorScheme='red'>
                  <TagLabel align='end'>Frontend</TagLabel>
                </Tag>
              </Center>
              <Wrap>
                <WrapItem>
                  <SiHtml5 size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiCss3 size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiJavascript size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiJquery size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiBootstrap size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiSass size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiVuedotjs size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiReact size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiNextdotjs size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiMarkdown size='30px'/>
                </WrapItem>
              </Wrap>
            </HStack>
            <br/>
            <HStack spacing='20px' justify='left'>
              <Center>
                <Tag w={110} size='md' key='md' variant='subtle' colorScheme='cyan'>
                  <TagLabel>Backend</TagLabel>
                </Tag>
              </Center>
              <Wrap>
                <WrapItem>
                  <SiJava size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiSpring size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiSpringboot size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiMysql size='30px'/>
                </WrapItem>
              </Wrap>
            </HStack>
            <br/>
            <HStack spacing='20px' justify='left'>
              <Center>
                <Tag w={110} size='md' key='md' variant='subtle' colorScheme='green'>
                  <TagLabel>Deployment</TagLabel>
                </Tag>
              </Center>
              <Wrap>
                <WrapItem>
                  <SiApache size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiApachetomcat size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiDocker size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiVercel size='30px'/>
                </WrapItem>
              </Wrap>
            </HStack>
            <br/>
            <HStack spacing='20px' justify='left'>
              <Center>
                <Tag w={110} size='md' key='md' variant='subtle' colorScheme='yellow'>
                  <TagLabel>VCS</TagLabel>
                </Tag>
              </Center>
              <Wrap>
                <WrapItem>
                  <SiGit size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiGithub size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiGitlab size='30px'/>
                </WrapItem>
              </Wrap>
            </HStack>
            <br/>
            <HStack spacing='20px' justify='left'>
              <Center>
                <Tag w={110} size='md' key='md' variant='subtle' colorScheme='blue'>
                  <TagLabel>Collaborate</TagLabel>
                </Tag>
              </Center>
              <Wrap>
                <WrapItem>
                  <SiJirasoftware size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiFigma size='30px'/>
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
                  <SiVisualstudiocode size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiNeovim size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiIterm2 size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiIntellijidea size='30px'/>
                </WrapItem>
                <WrapItem>
                  <SiEclipseide size='30px'/>
                </WrapItem>
              </Wrap>
            </HStack>
        </Section>
  
	  		<Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            삼겹살, 잠, 운동, 책, EPL&#40;COYS&#41; 경기 보기, e-Sports&#40;LOL&#41; 경기 보기
          </Paragraph>
        </Section>
  
      </Container>
    
    </Layout>
  )
}

export default Page
