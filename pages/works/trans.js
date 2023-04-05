import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
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
        각종 인증문서 스마트 번역(4개 국어 - 영어, 중국어, 일본어, 베트남어) 및 Word 파일 다운로드 시스템 웹 개발.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Spring Boot, MySQL, Apache POI</span>
        </ListItem>
        <ListItem>
          <Meta>Agency</Meta>
          <Link href="https://kr.xiness.com/" target='_blank'>
            자이네스
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Tasks</Meta>
          <span>Apache POI 라이브러리를 이용한 주민등록증 번역 및 Word 파일 다운로드 구현</span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/trans/trans1.png" alt="Trans" />
      <WorkImage src="/images/works/trans/trans2.png" alt="Trans" />
      <WorkImage src="/images/works/trans/trans3.png" alt="Trans" />
      <WorkImage src="/images/works/trans/trans4.png" alt="Trans" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
