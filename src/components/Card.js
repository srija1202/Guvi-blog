// src/components/Card.js
import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ title, head, description, image, date, comment }) => {
  return (
    <BootstrapCard className="mb-3">
      <BootstrapCard.Img variant="top" src={image} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Subtitle className="mb-2 text-muted">{head}</BootstrapCard.Subtitle>
        <BootstrapCard.Text>{description}</BootstrapCard.Text>
        <BootstrapCard.Text>
          <small className="text-muted">Date: {date} | Comments: {comment}</small>
        </BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
