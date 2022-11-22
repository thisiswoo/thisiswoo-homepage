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
          Thumbnail Maker <Badge>2022</Badge>
        </Title>
        <P>html, css, javascript의 프로젝트를 Vue.js를 이용하여 Refactoring 하기.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Author</Meta>
            <Link href="https://github.com/wonkooklee" target='_blank'>
                wonkooklee <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Reference</Meta>
            <Link href="https://devfolio.kr/project/24" target='_blank'>
                썸네일 메이커 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <Link href="https://devfolio.kr/" target='_blank'>
                DevFoliOh! <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vue.js</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/thisiswoo/vue-tutorial" target='_blank'>
                Refactoring Source <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Info</Meta>
            <span>
                아래 이미지들의 원작자 님의 포스트를 참고하였습니다.
            </span>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/new/thumbnail_maker/thumbnail_maker_1.gif" alt="thumbnail" />
        <ProjectImage src="/images/projects/new/thumbnail_maker/thumbnail_maker_2.gif" alt="thumbnail" />
        <ProjectImage src="/images/projects/new/thumbnail_maker/thumbnail_maker_3.gif" alt="thumbnail" />
        <ProjectImage src="/images/projects/new/thumbnail_maker/thumbnail_maker_4.gif" alt="thumbnail" />
      </Container>
    </Layout>
  )
  
  export default Project
  export { getServerSideProps } from '../../components/chakra'
  