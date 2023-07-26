import styles from '../page.module.css';
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MediaComponent = ({ imageSrc, title, description }) => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Image src={imageSrc} alt="Media" width={300} height={300} className={styles.eventclass} />
                </Col>
                <Col xs={12} md={6}>
                    <div style={{ color: 'white' }} className="d-flex flex-column justify-content-center h-100 whitetext">
                        <h2 style={{ color: 'white' }} className="whitetext">{title}</h2>
                        <p style={{ color: 'white' }} className="whitetext">{description}</p>
                        <Button variant="primary" style={{ backgroundColor: '#3acc6b', color: 'black', borderColor: '#3acc6b' }}>
                            Read More
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MediaComponent;
