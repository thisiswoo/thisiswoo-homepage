import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import kgate_old_thum from '../public/images/works/kgate/kgate-old-v-en-1.jpeg'
import test_thum1 from '../public/images/works/test_thum1.png'
import test_thum2 from '../public/images/works/test_thum2.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={40} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
				<Section>
          <WorkGridItem id="kgate" title="KGate2.0" thumbnail={kgate_old_thum}>
            AI-based facial recognition access control system.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

    </Container>
  </Layout>

)

export default Works
