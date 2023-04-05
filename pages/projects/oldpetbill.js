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
        공공 데이터를 활용한 전국 동물병원 진료비 안내 사이트 구축.
        지도를 통한 지역 동물병원의 위치 및 전화번호 안내와 함께 강아지, 고양이의 대표 질병 각 40여개의 질병정보 및 가격 비교 사이트 구축.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Data</Meta>
          <Link href="https://data.seoul.go.kr/">
            서울시(서울 열린데이터 광장) 
            <ExternalLinkIcon mx="2px" />
          </Link>
          &#44;&nbsp;
          <Link href="https://www.data.go.kr/">
            전국((서울시 제외) 공공 데이터포털) 
            <ExternalLinkIcon mx="2px" />
          </Link>
          <Link href="https://petprice.kr/">
            , 펫프라이스&#40;App&#41;
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Spring, JSP, OracleSQL</span>
        </ListItem>
        <ListItem>
          <Meta>Agency</Meta>
          <span>글로벌 아이티 인재개발원</span>
        </ListItem>
        <ListItem>
          <Meta>Award</Meta>
          <span>모범상 수상</span>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/old/exemplary_award.png" alt="petbill" />
      <ProjectImage src="/images/projects/old/petbill1.png" alt="petbill" />
      <ProjectImage src="/images/projects/old/petbill2.png" alt="petbill" />
      <ProjectImage src="/images/projects/old/petbill3.png" alt="petbill" />
      <ProjectImage src="/images/projects/old/petbill4.png" alt="petbill" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
