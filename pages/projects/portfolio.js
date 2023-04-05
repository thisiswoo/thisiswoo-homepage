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
        My Portfolio 웹 사이트 만들기 <Badge>2022</Badge>
      </Title>
      <P>
        Next.js, Chakra UI를 이용하여 화면 구성, MagicaVoxel, Blender를 활용한 메인 캐릭터 생성, Framer Motion, Three.js를 이용하여 메인 캐릭터 3D 움직임 추가.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://thisiswoo.vercel.app/" target='_blank'>
            https://thisiswoo.vercel.app/ <ExternalLinkIcon mx="2px" />
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
