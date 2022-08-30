import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import kgate_old_thum from '../public/images/works/kgate/kgate-old-v-en-1.jpeg'
import test_thum1 from '../public/images/works/test_thum1.png'
import petbill1 from '../public/images/projects/old/petbill1.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={40} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
				<Section>
          <ProjectGridItem id="kgate" title="KGate2.0" thumbnail={kgate_old_thum}>
            AI-based facial recognition access control system.
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
