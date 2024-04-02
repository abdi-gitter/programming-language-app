import {languages} from '../helper/languages';
import { LanguageCard } from './LanguageCard';
import { Row } from 'react-bootstrap';
const CardContainer = ({search}) => {
  return (
    <div className='container rounded-4 my-4 p-3 bg-light card-container'>
    <Row className='g-3 justify-content-center '>
    {/*first we filter the data and then we map it to the 
  PlayerCard to create the cards*/}
    {languages.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) 
      )
      .map((item, index) => (
        <LanguageCard
        key={index}
        name={item.name} 
        img={item.img} 
        options={item.options}/>
        //{...item}
    ))}  
    </Row>
  </div>
  )
}

export default CardContainer
