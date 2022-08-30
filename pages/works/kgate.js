import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="KGate2.0">
    <Container>
      <Title>
        KGate2.0 <Badge>2022-</Badge>
      </Title>
      <P>
        AI-based facial recognition access control system. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://gatedev1.xiness.com/manage">
            https://gatedev1.xiness.com/manage <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Spring, MySQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/kgate/kgate-old-v-en-1.jpeg" alt="Kgate" />
      <WorkImage src="/images/works/kgate/kgate-old-v-en-2.jpeg" alt="Kgate" />
      <WorkImage src="/images/works/kgate/kgate-old-v-en-3.jpeg" alt="Kgate" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
