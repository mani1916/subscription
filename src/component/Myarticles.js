import React, { useContext } from 'react';
import{Row,Col} from 'react-bootstrap'
import Nav1 from './Nav1';
import DataContext from '../context/DataContext'

 import ArticleCard from './ArticleCard';
const Myarticles = () => {
  const{myarticle,Setarticle}=useContext(DataContext)
    console.log(myarticle)
    return (
        <>
        <div>
          
            <Nav1 count={myarticle.length}/>
        <Row xs={1} md={3} className="g-4" style={{marginLeft:'7%'}}>
          {myarticle.map((myarticle) => (
    <Col align='topx  ' key={myarticle.author} style={{marginBottom:'3%'}}>
      <ArticleCard
        cards={myarticle}
        setcards={Setarticle}
        imagesrc={myarticle.imagesrc}
        amount={myarticle.amount}
        author={myarticle.author}
        date={myarticle.date}
        cardTitle={myarticle.cardTitle}
        text={myarticle.text}
        link={myarticle.link}
        pay={!myarticle.pay}
        myarticle={myarticle}
        Setarticle={Setarticle}
      />
     </Col>
  ))}
</Row>
        
        </div>
        </>
    );
}
// Define default props outside of the functional component


export default Myarticles;
