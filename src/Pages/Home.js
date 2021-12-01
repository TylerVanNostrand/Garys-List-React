import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

export default function Home() {
    return (
        <div class="d-flex justify-content-center">
            <Row className='text-center'>
                <Col xs={12} className='h3'>Welcome to Gary's List!</Col>
                <Col xs={12} className='h3'>Your go to online store
                    for all thing's Dungeon's and Dragon's related. </Col>
                <Col xs={12}>
                    <Link to='../products/'>Click here to browse products</Link>
                </Col>
            </Row>
        </div>
    )
}