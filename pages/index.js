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
          I will record with the mind of a history official.
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
              maxWidth="180px" 
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
            &nbsp;모두 비전공자이고 각기 다른 삶을 살아왔던 저희 팀원들을 단합할 수 있었던 이유는 작은 <b>배려</b>로 인해 가능했던 거 같습니다. 
            보통 교육기관에서 1차 프로젝트 후 각자의 생각과 개성이 달라 파이널 프로젝트는 새로운 인원들과 새로운 프로젝트를 하게 되는 경우가 많습니다.
            하지만 저희 팀원들은 서로를 배려하고, 응원해 주고, 힘들어하는 팀원이 있으면 다독여주고, 용기를 아주어 1차 프로젝트 내용뿐만 아니라 인원들도 함께 프로젝트 내용을 더 발전시켜
            낙오자 한 명도 없이 파이널 프로젝트를 성공적으로 마무리하게 되었습니다.<br/><br/>
            <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
              <TagLabel>Faithful(성실함)</TagLabel>
              <TagRightIcon as={CheckIcon} />
            </Tag>
            &nbsp;팀원들의 화합과 성공적인 프로젝트의 배경에는 저의 <b>성실함</b>이 밑 바탕이 되어 팀원들을 아우를 수 있었고, 그 덕에 프로젝트를 성공적으로 완료했으며,
            1차 프로젝트 내용을 더 발전시켜 기존 팀원들과 함께 마지막 프로텍트를 성공적으로 마무리할 수 있었습니다.
            그 결과 모범상을 수상할 수 있었습니다. {' '}
            <NextLink href="/projects/oldpetbill" passHref scroll={false}>
              <Link>프로젝트 보기.</Link>
            </NextLink>
            <br/><br/>
            <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
              <TagLabel>Responsibility(책임감)</TagLabel>
              <TagRightIcon as={CheckIcon} />
            </Tag>
            &nbsp;과거 마케팅 회사에서 재직 시 맡은 업무 중 하나가 전시회에 참여하여 회사 제품을 홍보하고 판매하는 업무를 맡았습니다.
            전시회 3일을 저희 제품 완판이라는 기록을 세우고 현장에 제품이 모자라 온라인으로 추가 구매를 유도하여 판매를 늘리게 됩니다.
            그리하여 전국 큰 전시회를 다니면서 현장 제품 완판과 함께 온라인 추가 구매까지 이어지게 하여 회사에 보탬이 되었습니다.
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
            <BioYear>2010</BioYear>
            대한민국 육군 병장 만기제대. 
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            의류 온라인 쇼핑몰 사업.
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            CI 텔레콤에서 재고 관리 부서에서 근무. 
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            미리에서 마케팅 및 전시 업무 담당.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            하나전기 인테리어 전기시공팀에서 근무.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            글로벌IT 인재개발원 빅데이터를 활용한 자바, 파이썬 웹 개발 과정 수료.
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            {' '}
            <NextLink href="https://kr.xiness.com/" passHref>
              <Link target="_blank">Xiness co.,ltd</Link>
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
