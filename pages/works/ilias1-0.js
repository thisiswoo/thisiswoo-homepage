import {
    Container,
    Badge,
    Link,
    List,
    ListItem, WrapItem, Text, Wrap,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="ilias AI
    ">
        <Container>
            <Title>
                Ilias AI <Badge>2023 ~</Badge>
            </Title>
            <P>
                디지털 후각 데이터를 이용한 출입관리 시스템 웹 개발
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.iliasai.com/" target='_blank'>
                        Ilias AI <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                {/*<ListItem>*/}
                {/*    <Meta>Video</Meta>*/}
                {/*    <Link href="https://www.youtube.com/watch?v=NDNu2zGa6hU" target='_blank'>*/}
                {/*        소개영상1<ExternalLinkIcon mx="2px" />*/}
                {/*    </Link>,&nbsp;*/}
                {/*    <Link href="https://www.youtube.com/watch?v=yYo1dGl2X7E" target='_blank'>*/}
                {/*        소개영상2(한글)<ExternalLinkIcon mx="2px" />*/}
                {/*    </Link>,&nbsp;*/}
                {/*    <Link href="https://www.youtube.com/watch?v=AHPSdyxbkSY" target='_blank'>*/}
                {/*        소개영상3(영문) <ExternalLinkIcon mx="2px" />*/}
                {/*    </Link>*/}
                {/*</ListItem>*/}
                {/*<ListItem>*/}
                {/*    <Meta>Platform</Meta>*/}
                {/*    <span>Windows, macOS, Linux, iOS, Android</span>*/}
                {/*</ListItem>*/}
                <ListItem>
                    <Meta>Server</Meta>
                    <span>Linux</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Java, Spring Boot, MySQL, JPA, Querydsl, Gradle, Maven</span>
                </ListItem>
                <ListItem>
                    <Meta>Agency</Meta>
                    <Link href="https://kr.xiness.com/" target='_blank'>
                        Xiness
                    </Link>
                    ,&nbsp;
                    <Link href="https://www.iliasai.com/" target='_blank'>
                        iliasAI
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Tasks</Meta>
                    <Wrap>
                        <WrapItem>
                            <Text fontSize='md'>
                                - 프로젝트 세팅(vue.js(3.x), Spring boot 2.7.x(maven))
                            </Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='md'>
                                - 기존 JSP의 화면을 <Link href="https://thisiswoo.github.io/development/reason-why-i-chose-company-project-vue3.html" target="_blank"><b>Vue3로 마이그레이션</b></Link>
                            </Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='md'>
                                - Spring Security를 활용한 권한별 접근 리소스 개발
                            </Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='md'>
                                - Firebase를 활용한 위험 Level의 출입자 알림 서비스 개발
                            </Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='md'>
                                - Spring Boot와 Querydsl을 활용하여 기존 DB 조회를 <Link href="https://thisiswoo.github.io/development/excessive-data-exposure.html" target="_blank"><b>65% 성능 개선</b></Link>
                            </Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='md'>
                                - 재사용 가능한 공통 팝업 함수를 개발하여 기존 대비 코드량 <Link href="https://thisiswoo.github.io/development/js-notification-refactoring.html" target="_blank"><b>70% 감소</b></Link>
                            </Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='md'>
                                - QueryDSL의 group_concat() 함수를 활용하여 <Link href="https://thisiswoo.github.io/development/using-jpa-querydsl-groupconcat-func.html" target="_blank"><b>동일 ID의 행 값들을 하나로 통합하여 데이터 행들을 효율적으로 그룹화</b></Link>하고 정리
                            </Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='md'>
                                - docker / Jenkins를 활용한 회사 내부 서버에 프로젝트 배포
                            </Text>
                        </WrapItem>
                    </Wrap>
                </ListItem>
            </List>

            <WorkImage src="/images/works/iliasai/iliasai_01.jpg" alt="iliasai" />
            <WorkImage src="/images/works/iliasai/iliasai_02.jpg" alt="iliasai" />
            <WorkImage src="/images/works/iliasai/iliasai_03.jpg" alt="iliasai" />
            <WorkImage src="/images/works/iliasai/iliasai_04.jpg" alt="iliasai" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
