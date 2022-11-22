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
            &nbsp;교육기관에서 1,2차 프로젝트의 <b>팀장</b>을 맡게 되면서 1차 팀 프로젝트의 주제, 팀원들과 함께 마지막 프로젝트를 진행하게 되어 
            성공적으로 프로젝트를 마무리할 수 있었습니다.<br/><br/>
            <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
              <TagLabel>Unity(단합력)</TagLabel>
              <TagRightIcon as={CheckIcon} />
            </Tag>
            &nbsp;모두 비전공자이고 각기 다른 삶을 살아왔던 저희 팀원들을 단합할 수 있었던 이유는
            작은 배려로 인해 가능했던 거 같습니다. 프로젝트에 힘들어하면 작은 위로와 격려를 통해 팀원들의
            사기를 높이게 하고, 팀장으로서 권위적인 모습보단 친근한 형이나 오빠의 모습으로 다가가려 노력했던 
            모습들이 우리 팀원들을 낙오자 없이 <b>단합</b>시킬 수 있었던 이유입니다.<br/><br/>
            <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
              <TagLabel>Drive(추진력)</TagLabel>
              <TagRightIcon as={CheckIcon} />
            </Tag>
            &nbsp;파이널 프로젝트 때 팀원들의 프로젝트 구상들이 서로 달라 오랫동안 회의를 진행했었습니다.
            강사님과의 회의에서도 프로젝트 진행이 더디어 프로젝트 완성할 수 있겠냐?라는 말까지 듣게 되었는데,
            제가 팀원들에게 우리가 추가하려던 기능들 다 제거하고, 우리 프로젝트의 가장 기본이 되는 정보제공으로
            초점을 맞추어 작업을 하자고 제안하였습니다. 팀원들 모두 저의 말에 동의하고 프로젝트를 시작할 수 있었습니다.
            우리 모두가 프로젝트에 대한 갈피를 못 잡을 때 저의 <b>추진력</b>
            으로 인해 프로젝트를 시작하게 되었습니다.<br/><br/>
            <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
              <TagLabel>Faithful(성실함)</TagLabel>
              <TagRightIcon as={CheckIcon} />
            </Tag>
            &nbsp;위와 같은 사례들을 바탕으로 교육 기간 내에 교육과 프로젝트에 <b>성실함</b>으로 임하여 {' '}
            <NextLink href="/projects/oldpetbill" passHref scroll={false}>
              <Link>모범상</Link>
            </NextLink>
            을 수상할 수 있었습니다.<br/><br/>
            <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
              <TagLabel>Steady(꾸준함)</TagLabel>
              <TagRightIcon as={CheckIcon} />
            </Tag>
            &nbsp;이 모든 것은 꾸준함이 바탕이 되어 가능했다고 생각합니다. 
            제가 뛰어나서 팀장을 맡은 것도, 제가 대단해서 모범상을 수상한 것도 아니라고 생각합니다.
            그저 <b>꾸준함</b>이 밑 바탕이 되어 팀원들을 아우를 수 있었고, 그 덕에 프로젝트를 성공적으로 완료했으며,
            그의 결과가 {' '}
            <NextLink href="/projects/oldpetbill" passHref scroll={false}>
              <Link>모범상</Link>
            </NextLink>
            이라는 결과로 이어졌다고 생각합니다.

          </Box>
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
            Career
          </Heading>
          <BioSection>
            <BioYear>1989</BioYear>
            대한민국 광명시.
          </BioSection>
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
            글로벌IT 인재개발원에서 빅데이터를 활용한 자바, 파이썬 웹 개발 과정 수료.
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
            <HStack spacing='20px' justify='left'>
              <Box w='96px'>
                <Tag size='md' key='md' variant='subtle' colorScheme='red'>
                  <TagLabel>Frontend</TagLabel>
                </Tag>
              </Box>
              <SiHtml5 size='30px'/>
              <SiCss3 size='30px'/>
              <SiJavascript size='30px'/>
              <SiJquery size='30px'/>
              <SiBootstrap size='30px'/>
              <SiSass size='30px'/>
              <SiVuedotjs size='30px'/>
              <SiReact size='30px'/>
              <SiNextdotjs size='30px'/>
            </HStack>
            <br/>
            <HStack spacing='20px' justify='left'>
              <Box w='96px'>
                <Tag size='md' key='md' variant='subtle' colorScheme='cyan'>
                  <TagLabel>Backend</TagLabel>
                </Tag>
              </Box>
              <SiJava size='30px'/>
              <SiSpring size='30px'/>
              <SiSpringboot size='30px'/>
              <SiMysql size='30px'/>
            </HStack>
            <br/>
            <HStack spacing='20px' justify='left'>
              <Box w='96px'>
                <Tag size='md' key='md' variant='subtle' colorScheme='green'>
                  <TagLabel>Deployment</TagLabel>
                </Tag>
              </Box>
              <SiApache size='30px'/>
              <SiApachetomcat size='30px'/>
              <SiDocker size='30px'/>
              <SiVercel size='30px'/>
            </HStack>
            <br/>
            <HStack spacing='20px' justify='left'>
              <Box w='96px'>
                <Tag size='md' key='md' variant='subtle' colorScheme='yellow'>
                  <TagLabel>VCS</TagLabel>
                </Tag>
              </Box>
              <SiGit size='30px'/>
              <SiGithub size='30px'/>
              <SiGitlab size='30px'/>
            </HStack>
            <br/>
            <HStack spacing='20px' justify='left'>
              <Box w='96px'>
                <Tag size='md' key='md' variant='subtle' colorScheme='blue'>
                  <TagLabel>Collaborate</TagLabel>
                </Tag>
              </Box>
              <SiJirasoftware size='30px'/>
              <SiFigma size='30px'/>
            </HStack>
            <br/>
            <HStack spacing='20px' justify='left'>
              <Box w='96px'>
                <Tag size='md' key='md' variant='subtle' colorScheme='purple'>
                  <TagLabel>Tools</TagLabel>
                </Tag>
              </Box>
              <SiVisualstudiocode size='30px'/>
              <SiNeovim size='30px'/>
              <SiIterm2 size='30px'/>
              <SiIntellijidea size='30px'/>
              <SiEclipseide size='30px'/>
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
