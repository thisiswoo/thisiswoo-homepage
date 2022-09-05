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
  <Layout title="Smart Trans System">
    <Container>
      <Title>
        Trans <Badge>2022</Badge>
      </Title>
      <P>
        AI-based facial recognition access control system. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Spring, MySQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/trans/trans1.png" alt="Trans" />
      <WorkImage src="/images/works/trans/trans2.png" alt="Trans" />
      <WorkImage src="/images/works/trans/trans3.png" alt="Trans" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
