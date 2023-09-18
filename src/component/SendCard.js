import React from 'react';
import ArticleCard from './ArticleCard';
import Nav1 from './Nav1';
// import Col from 'react-bootstrap/esm/Col';
import{Row,Col} from 'react-bootstrap'
import { useContext } from 'react';
import DataContext from '../context/DataContext'
const SendCard = () => {

  const{myarticle,Setarticle,cards,setcards}=useContext(DataContext)
    return (
        <>
        <Nav1 count={myarticle.length}/>
        <Row xs={1} md={3} className="g-4" style={{marginLeft:'7%'}}>
          {cards.map((card) => (
    <Col align='topx  ' key={card.author} style={{marginBottom:'3%'}}>
      <ArticleCard
        cards={cards}
        setcards={setcards}
        imagesrc={card.imagesrc}
        amount={card.amount}
        author={card.author}
        date={card.date}
        cardTitle={card.cardTitle}
        text={card.text}
        link={card.link}
        pay={card.pay}
        myarticle={myarticle}
        Setarticle={Setarticle}
      />
     </Col>
  ))}
</Row>
        
        </>
    );
}

export default SendCard;

  

 
