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
                Ilias AI <Badge>2023</Badge>
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
                <ListItem>
                    <Meta>Video</Meta>
                    <Link href="https://www.youtube.com/watch?v=NDNu2zGa6hU" target='_blank'>
                        소개영상1<ExternalLinkIcon mx="2px" />
                    </Link>,&nbsp;
                    <Link href="https://www.youtube.com/watch?v=yYo1dGl2X7E" target='_blank'>
                        소개영상2(한글)<ExternalLinkIcon mx="2px" />
                    </Link>,&nbsp;
                    <Link href="https://www.youtube.com/watch?v=AHPSdyxbkSY" target='_blank'>
                        소개영상3(영문) <ExternalLinkIcon mx="2px" />
                    </Link>

                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows, macOS, Linux, iOS, Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Server</Meta>
                    <span>Linux, Windows</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Java, Spring Boot, MySQL, JPA, Querydsl, Gradle, Maven</span>
                </ListItem>
                <ListItem>
                    <Meta>Agency</Meta>
                    <Link href="https://kr.xiness.com/" target='_blank'>
                        자이네스
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Tasks</Meta>
                    <Wrap>
                        <WrapItem>
                            <Text fontSize='md'>
                                - Spring Boot와 QueryDSL을 활용한 권한 별 사용자/어드민 페이지 개발
                            </Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='md'>
                                - Mini Computer(Window/Linux)와 안드로이드 SDK를 이용하여 출입관리 시스템 구축
                            </Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='md'>
                                - Google 원격을 통한 Mini Computer와의 원격 제어 구현
                            </Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='md'>
                                - Spring Scheduler를 활용한 주기적인 데이터 관리
                            </Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='md'>
                                - Apache POI, i18n 라이브러리를 이용한 개인정보 조회 이력 엑셀 다운로드 개발 및 다국어 모드 적용
                            </Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='md'>
                                - [접근 권한 : 시스템] - (서비스 관리)계정관리, 고객사별 게이트 관리 / SMS알림톡 이력 관리 / (설정) 카메라 설정, 게이트 설정 / 공지사항 개발
                            </Text>
                        </WrapItem>
                        <WrapItem>
                            <Text fontSize='md'>
                                - [접근 권한 : 운영자] - (서비스 관리) 기본 정보 관리, 담당자 관리, 게이트 관리, 개인정보 조회 관리 / (사용자 관리) 이벤트 처리 상태 관리 / SMS알림톡 이력 관리 / 출입이력 관리 / (공지사항) 시스템 공지사항, 사내 공지사항 개발
                            </Text>
                        </WrapItem>
                    </Wrap>
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
