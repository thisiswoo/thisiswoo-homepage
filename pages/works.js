import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'
import Layout from '../components/layouts/article'

import iliasai from '../public/images/works/iliasai/iliasai_02.jpg'
import kgate1 from '../public/images/works/kgate/kgate1_main_720x400.jpg'
import trans from '../public/images/works/trans/trans_main_720x400.png'

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={40} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="ilias1-0" title="ilias AI" thumbnail={iliasai}>
                        {/* AI-based facial recognition access control system. */}
                        향기는 마음을 움직이고, 센트 테크는 세상을 변화시킨다. 디지털 후각 데이터 전문 서비스 플랫폼.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="kgate2-0" title="KGate2.0" thumbnail={kgate1}>
                        {/* AI-based facial recognition access control system. */}
                        AI 기반 안면인식 출입 통제 시스템.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="trans" title="Trans" thumbnail={trans}>
                        {/* Korea Certificate Documents Smart Translation System. */}
                        각종 인증 문서 스마트 번역 시스템.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

        </Container>
    </Layout>

)

export default Works
