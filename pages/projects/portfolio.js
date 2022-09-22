import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="My Portfolio">
    <Container>
      <Title>
        My Portfolio <Badge>2022</Badge>
      </Title>
      <P>
        Next.js, Chakra UI,  Framer Motion, Three.js를 활용한 포트폴리오 사이트 만들기. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://thisiswoo.vercel.app/">
            <ExternalLinkIcon mx="2px" /> https://thisiswoo.vercel.app/ 
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, macOS, iOS, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Chakra UI, Framer Motion, Three.js, MagicaVoxel, Blender</span>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/new/my_portfolio/my_portfolio1.png" alt="portfolio" />
      <ProjectImage src="/images/projects/new/my_portfolio/my_portfolio2.png" alt="portfolio" />
      <ProjectImage src="/images/projects/new/my_portfolio/my_portfolio3.png" alt="portfolio" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
