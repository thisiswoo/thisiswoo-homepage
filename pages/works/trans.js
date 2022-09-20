import {
  Container,
  Badge,
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
        가족관계 증명서, 혼인관계 증명서, 인감 증명서, 주민등록증, 운전면허증, 여권등의 서류를 4개국어 영어, 중국어, 일본어, 베트남어로 자동 번역 및 다운로드 시스템. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
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

      <WorkImage src="/images/works/trans/trans1.png" alt="Trans" />
      <WorkImage src="/images/works/trans/trans2.png" alt="Trans" />
      <WorkImage src="/images/works/trans/trans3.png" alt="Trans" />
      <WorkImage src="/images/works/trans/trans4.png" alt="Trans" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
