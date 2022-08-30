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

const Project = () => (
  <Layout title="petBill">
    <Container>
      <Title>
        petBill <Badge>2021</Badge>
      </Title>
      <P>
        공공 데이터를 활용한 전국 동물병원 진료비 안내 사이트 구축 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Data</Meta>
          <Link href="https://data.seoul.go.kr/">
            <ExternalLinkIcon mx="2px" />
            서울시 (서울 열린데이터 광장) 
          </Link>
          &#44;&#32;
          <Link href="https://www.data.go.kr/">
            <ExternalLinkIcon mx="2px" />
            전국((서울시 제외) 공공 데이터포털) 
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Spring, OracleSQL</span>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/old/petbill1.png" alt="petbill" />
      <ProjectImage src="/images/projects/old/petbill2.png" alt="petbill" />
      <ProjectImage src="/images/projects/old/petbill3.png" alt="petbill" />
      <ProjectImage src="/images/projects/old/petbill4.png" alt="petbill" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
