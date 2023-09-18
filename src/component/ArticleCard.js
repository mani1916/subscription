    import Button from 'react-bootstrap/Button';
    import Card from 'react-bootstrap/Card';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faBoltLightning,faHeart, faNewspaper, faShareNodes } from '@fortawesome/free-solid-svg-icons';
    import { useState } from 'react';
    import StripeCheckout from 'react-stripe-checkout'
    import '../style/home.css'
    function ArticleCard({imagesrc,amount,author,date,cardTitle,text,link,pay,setcards,cards,myarticle,Setarticle}) {
        
        const[heart,setHeart]=useState(false)
        var pay1=pay
        const cardamount=parseInt(amount.slice(1))*100
        const handleHeart=()=>{
            setHeart(heart=>!heart)
        }
        const rece=(author)=>{
            // console.log(author)
        }
        const setPayment=(card,author)=>{
            // console.log("ij",author)
            if(card.author===author)
            {   
                myarticle.push(card)
                card.pay=true
                // pay1=true
            }
            return card;
        }
        const onToken=(token,author)=>{
            const newcard=[]
                for (let index = 0; index < cards.length; index++) {
                    if(cards[index].author!=author)
                    {
                        newcard.push(cards[index])
                    }      
                }
                // console.log(newcards)
                const newcards=cards.map((card)=>setPayment(card,author))
                console.log(myarticle)
                setcards(newcard)
                console.log(newcard)
        }
       
    return (
        <div className='nn' style={{display:'flex',justifyContent:'space-between'}}>
        <Card style={{ width: '20rem'}}>
        <Card.Img variant="top" src={imagesrc} />
        <div style={{display:!pay?'block':'None',  position: 'absolute', top: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '5px 10px',borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px' }}>
        {amount}
    </div>
        <Card.Body id='cardbg'>
            <div style={{display:'flex',flexDirection:'row'}}>
            <Card.Text>{author} | {date}</Card.Text>
            <div className='icon' style={{color: "#c7c7c7",fontSize:'20px',marginTop:'1%',display:'flex'}} >
                <FontAwesomeIcon icon={faHeart} style={{color:heart?'#FA8072':'#c7c7c7',cursor: 'pointer',marginLeft:'20%'}} onClick={handleHeart}/>
                <FontAwesomeIcon icon={faShareNodes} style={{fontWeight:'20px',cursor: 'pointer',marginLeft:'7px'}}/></div>
            </div>
            <hr/>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text>
            {text}
            </Card.Text>
            {/* <Button style={{display:!pay?'block':'None',backgroundColor:'#E5F9F4',border:'none',color:'#426259'}}>
                <FontAwesomeIcon icon={faCartShopping} style={{fontWeight:'20px',cursor: 'pointer',marginLeft:'7px'}}/> ADD TO CART</Button> */}

            <StripeCheckout
                    token={(token) => onToken(token, author)}
                    stripeKey="pk_test_51Nqhc3SFrMfG17uOhpXVKWKYlmPUTsZH50GSiw2ajG4NME3HOTFxP0AOIALIpFnfTsNcTThlaDOqZPHO2BWM5LEj00qiwu3FVG"
                    amount={cardamount}
                    currency="USD"
                >
                   <Button style={{display:!pay1?'block':'None',backgroundColor:'#426259',border:'none',marginTop:'2%'}}><FontAwesomeIcon icon={faBoltLightning}
            style={{fontWeight:'20px',cursor: 'pointer',marginLeft:'7px',color:'#E5F9F4',backgroundColor:'#426259'
                }}/> BUY NOW</Button> 
                </StripeCheckout>
            
            <Button style={{display:pay1?'block':'None',backgroundColor:'#426259',border:'none',marginTop:'2%'}}><FontAwesomeIcon icon={faNewspaper}
            style={{fontWeight:'20px',cursor: 'pointer',marginLeft:'7px',color:'#E5F9F4',backgroundColor:'#426259'
                }}/><a href={link} style={{textDecoration:'none',color:'white'}}> READ</a> </Button>
        </Card.Body>
        </Card>
        </div>
        
    );
    }

    export default ArticleCard;