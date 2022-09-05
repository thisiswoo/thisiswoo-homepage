import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import ov_kr_kgate1 from '../public/images/works/kgate/ov_kr_kgate1.jpg'
import trans1 from '../public/images/works/trans/trans1.png'
import petbill1 from '../public/images/projects/old/petbill1.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={40} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
				<Section>
          <WorkGridItem id="kgate" title="KGate2.0" thumbnail={ov_kr_kgate1}>
            AI-based facial recognition access control system.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="trans" title="Smart Trans" thumbnail={trans1}>
            Korea Certificate Smart Translation System 
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

    </Container>
  </Layout>

)

export default Works
