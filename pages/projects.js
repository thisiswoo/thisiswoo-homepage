import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import ov_kr_kgate1 from '../public/images/works/kgate/ov_kr_kgate1.jpg'
import petbill1 from '../public/images/projects/old/petbill1.png'
import working from '../public/images/working.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={40} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
				<Section>
          <ProjectGridItem id="#" title="petBill 프로젝트 리뉴얼 중..." thumbnail={working}>
            petBill 리뉴얼 작업 중... 
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="kgate"
            title="walknote"
            thumbnail={ov_kr_kgate1}
          >
            img size test 
          </ProjectGridItem>
        </Section>        
      </SimpleGrid>

      <Section delay={0.1}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <ProjectGridItem
            id="oldpetbill"
            title="petBill"
            thumbnail={petbill1}
          >
            전국 동물병원 진료비 안내 사이트 
          </ProjectGridItem>
        </Section>          

      </SimpleGrid>

    </Container>
  </Layout>

)

export default Projects
