import {Col, Card} from 'react-bootstrap';
import { useState } from 'react';

export const LanguageCard = ({name, img, options}) => {
    const [isImage, setIsImage] = useState(true);
  return (
    <Col md={6} lg={4} xl={3} onClick={() => setIsImage(!isImage)}>
      <Card className='rounded-2 m-auto player-card'>
      {isImage ? (
        <Card.Img className='player-logo' src={img} />
        ) : (
        <div className='d-flex align-items-center player-logo' >
        
            <ul className='m-auto' >

            {options.map((item, index) => (
                <li key={index} className='h5 text-start list-unstyled ' >
                🖥️{item}
                </li>
            ))}
            </ul>
        
        </div>
      )}
            
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
      </Card>
    </Col>
  )
}





