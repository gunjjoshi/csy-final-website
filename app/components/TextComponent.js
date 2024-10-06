"use client"
import styles from '../page.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

const TextComponent = ({ title }) => {
    return (
        <Container>
            <Row>


                <Col >
                    <div style={{ color: 'white' }} className="d-flex flex-column justify-content-center h-100 whitetext">
                        <center><h1 style={{ color: 'white' }} className='whitetext'>{title}</h1></center>
                    </div>
                </Col>
                <br></br>
                <br></br>
                <br></br>



            </Row>



            {/* <Row>
            <Col xs={6} md={4}>
                    <Image src="/images.png" alt="Media" width={300} height={300} className={styles.eventclass} />
                    <h4 style={{ color: 'white' }} align="center" className='whitetext'>Patrons</h4>
            </Col>
            <Col xs={6} md={4}>
                    <Image src="/images.png" alt="Media" width={300} height={300} className={styles.eventclass} />
            </Col>
            <Col xs={6} md={4}>
                    <Image src="/images.png" alt="Media" width={300} height={300} className={styles.eventclass} />
            </Col>
            
            


            </Row> */}
        </Container >
    );
};

export default TextComponent;
