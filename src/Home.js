import React from 'react'
import { Symptoms } from './Symptoms'
import {Container, Row, Col} from 'react-bootstrap'


export const Home = () => (
    <Container>
        <Row>
            <Col>
                {/* Twitter feed from the cdc, we can change source, put somehwere else, or delete. Im just throwing ideas out */}
                <a class="twitter-timeline" data-width="500" data-height="500" data-theme="dark" href="https://twitter.com/CDCgov?ref_src=twsrc%5Etfw">Tweets by CDCgov</a>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </Col>
            <Col>
                <Symptoms />
            </Col>
        </Row>
    </Container>
)