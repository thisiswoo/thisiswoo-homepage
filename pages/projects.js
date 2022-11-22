import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import petbill1 from '../public/images/projects/old/petbill_main_720x400.png'
import portfolio from '../public/images/projects/new/my_portfolio/portfolio_main_720x400.png'
import thumbnail from '../public/images/projects/new/thumbnail_maker/thumbnail_main_720x400.png'
import tag from '../public/images/projects/new/tag_maker/tag_main_720x400.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={40} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={4}>
        <Section delay={0.1}>
          <ProjectGridItem 
            id="tag" 
            title="Tag Maker" 
            thumbnail={tag}
          >
            vue3로 refactoring한 태그 메이커
          </ProjectGridItem>
        </Section>
				<Section delay={0.1}>
          <ProjectGridItem 
            id="thumbnail" 
            title="Thumbnail Maker" 
            thumbnail={thumbnail}
          >
            vue3로 refactoring한 썸네일 메이커
          </ProjectGridItem>
        </Section>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={4}>
        <Section delay={0.2}>
          <ProjectGridItem
            id="portfolio"
            title="My Portfolio"
            thumbnail={portfolio}
          >
            나의 포트폴리오
          </ProjectGridItem>
        </Section>        
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={4}>
        <Section delay={0.4}>
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
