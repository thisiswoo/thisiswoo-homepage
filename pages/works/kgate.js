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
        AI 기반 안면인식 출입통제 시스템.<br />
        출입자 자동 발열 체크, 얼굴 자동 인식, 비접촉식 99.9% 살균 손세정제, 근태관리 시스템.
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
          <span>Windows, macOS, Linux, iOS, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Server</Meta>
          <span>Windows Server, Linux Server</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Spring Boot, MySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Company</Meta>
          <span>Xiness co,.ltd</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/kgate/ov_kr_kgate1.jpg" alt="Kgate" />
      <WorkImage src="/images/works/kgate/ov_kr_kgate2.jpg" alt="Kgate" />
      <WorkImage src="/images/works/kgate/ov_kr_kgate3.jpg" alt="Kgate" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
