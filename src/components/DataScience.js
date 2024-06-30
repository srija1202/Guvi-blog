// src/pages/DataScience.js
import React from 'react';
import Card from '../components/Card';
import data from '../data.json';
import { Container, Row, Col } from 'react-bootstrap';

const DataScience = () => {
    return (
      <Container>
        <Row>
          {data.filter(item => item.head === 'Data science').map((item) => (
            <Col sm={12} md={6} lg={4} key={item.id}>
              <Card {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

export default DataScience;
