import { createContext, useState } from "react";

const DataContext = createContext();
export const DataProvider = ({ children }) => { // Destructure children
    const[myarticle,Setarticle]=useState([])
    const x=[
      {
        imagesrc:'https://www.internetsociety.org/wp-content/uploads/2017/08/StockSnap_WUBMLJRYEK-e1521968487421.jpg',
        amount:'$48',
        author:'Carl Gahnberg',
        date:'26 April 2017',
        cardTitle:'Will Artificial Intelligence Change The World For the Better? Or Worse? Read our new policy paper',
        text:'Artificial Intelligence (AI) is a concept that has a long standing tradition in the realm of science-fiction, popularized by....',
        link:'https://www.internetsociety.org/blog/2017/04/will-artificial-intelligence-change-the-world-for-the-better-or-worse-read-our-new-policy-paper/',
        pay:false
      },
      {
        imagesrc:'https://www.internetsociety.org/wp-content/uploads/2018/07/basic-education-digital-future.jpg',
        amount:'$98',
        author:'datysgeld',
        date:'27 July 2018',
        cardTitle:'How to Reform Basic Education for a Digital Future: Views from a Multistakeholder Group',
        text:'In June 2018, in the city of Panamá, a parallel session was organized by the Internet Society during the international meeting of ICANN 62. This session had....',
        link:'https://www.internetsociety.org/blog/2018/07/how-to-reform-basic-education-for-a-digital-future-views-from-a-multistakeholder-group/',
        pay:false
      },
      {
        imagesrc:'https://www.internetsociety.org/wp-content/uploads/2022/04/ndss-2020-session-crowd-scaled.jpg',
        amount:'$87',
        author:'Joseph Lorenzo Hall',
        date:'20 April 2022',
        cardTitle:'A Golden Age of Systems Security Research: What’s Happening at the NDSS Symposium 2022',
        text:'Every year, the Internet Society hosts one of the top conferences for computer and network security research, the Network and Distributed....',
        link:'https://www.internetsociety.org/blog/2022/04/a-golden-age-of-systems-security-research-whats-happening-at-the-ndss-symposium-2022/',
        pay:false
      },
      {
        imagesrc:'https://www.internetsociety.org/wp-content/uploads/2022/02/spacex-TV2gg2kZD1o-unsplash-1280x853-1.jpg',
        amount:'$121',
        author:'Dan York',
        date:'2 February 2022',
        cardTitle:'A New Tool to Measure Internet Resilience—Why It Matters',
        text:'The COVID-19 pandemic has made clear that the Internet plays a critical role in society, and it’s underlined the importance of reliable Internet connectivity for everyone. It’s alsoX`X....',
        link:'https://www.internetsociety.org/blog/2021/11/a-new-tool-to-measure-internet-resilience-why-it-matters/',
        pay:false
      },{
        imagesrc:'https://www.internetsociety.org/wp-content/uploads/2021/11/pulse-platform.png',
        amount:'$91',
        author:'Amreesh Phokeer',
        date:'16 November 2021',
        cardTitle:'What Is a LEO Satellite System—and Can It Help Build a Bigger Internet?',
        text:'There’s a new space race happening right now and the stakes are just as high as they were half a....',
        link:'https://www.internetsociety.org/blog/2021/11/creating-affordable-internet-access-with-the-help-of-the-early-career-fellowship/',
        pay:false
      },
      {
        imagesrc:'https://www.internetsociety.org/wp-content/uploads/2021/11/Screen-Shot-2021-11-11-at-14.31.22.png',
        amount:'$31',
        author:'thronom',
        date:' 11 November 2021',
        cardTitle:'Creating Affordable Internet Access with the Help of the Early Career Fellowship',
        text:'The Early Career Fellowship empowers a new, diverse generation of Internet champions. Fellows become advocates for the open, globally connected, secure, and trustwo.....',
        link:'https://www.internetsociety.org/blog/2021/11/creating-affordable-internet-access-with-the-help-of-the-early-career-fellowship/',
        pay:false
      }
    ]
    const[search,setSearch]=useState('')
    const[cards,setcards]=useState([
        {
          imagesrc:'https://www.internetsociety.org/wp-content/uploads/2017/08/StockSnap_WUBMLJRYEK-e1521968487421.jpg',
          amount:'$48',
          author:'Carl Gahnberg',
          date:'26 April 2017',
          cardTitle:'Will Artificial Intelligence Change The World For the Better? Or Worse? Read our new policy paper',
          text:'Artificial Intelligence (AI) is a concept that has a long standing tradition in the realm of science-fiction, popularized by....',
          link:'https://www.internetsociety.org/blog/2017/04/will-artificial-intelligence-change-the-world-for-the-better-or-worse-read-our-new-policy-paper/',
          pay:false
        },
        {
          imagesrc:'https://www.internetsociety.org/wp-content/uploads/2018/07/basic-education-digital-future.jpg',
          amount:'$98',
          author:'datysgeld',
          date:'27 July 2018',
          cardTitle:'How to Reform Basic Education for a Digital Future: Views from a Multistakeholder Group',
          text:'In June 2018, in the city of Panamá, a parallel session was organized by the Internet Society during the international meeting of ICANN 62. This session had....',
          link:'https://www.internetsociety.org/blog/2018/07/how-to-reform-basic-education-for-a-digital-future-views-from-a-multistakeholder-group/',
          pay:false
        },
        {
          imagesrc:'https://www.internetsociety.org/wp-content/uploads/2022/04/ndss-2020-session-crowd-scaled.jpg',
          amount:'$87',
          author:'Joseph Lorenzo Hall',
          date:'20 April 2022',
          cardTitle:'A Golden Age of Systems Security Research: What’s Happening at the NDSS Symposium 2022',
          text:'Every year, the Internet Society hosts one of the top conferences for computer and network security research, the Network and Distributed....',
          link:'https://www.internetsociety.org/blog/2022/04/a-golden-age-of-systems-security-research-whats-happening-at-the-ndss-symposium-2022/',
          pay:false
        },
        {
          imagesrc:'https://www.internetsociety.org/wp-content/uploads/2022/02/spacex-TV2gg2kZD1o-unsplash-1280x853-1.jpg',
          amount:'$121',
          author:'Dan York',
          date:'2 February 2022',
          cardTitle:'A New Tool to Measure Internet Resilience—Why It Matters',
          text:'The COVID-19 pandemic has made clear that the Internet plays a critical role in society, and it’s underlined the importance of reliable Internet connectivity for everyone. It’s alsoX`X....',
          link:'https://www.internetsociety.org/blog/2021/11/a-new-tool-to-measure-internet-resilience-why-it-matters/',
          pay:false
        },{
          imagesrc:'https://www.internetsociety.org/wp-content/uploads/2021/11/pulse-platform.png',
          amount:'$91',
          author:'Amreesh Phokeer',
          date:'16 November 2021',
          cardTitle:'What Is a LEO Satellite System—and Can It Help Build a Bigger Internet?',
          text:'There’s a new space race happening right now and the stakes are just as high as they were half a....',
          link:'https://www.internetsociety.org/blog/2021/11/creating-affordable-internet-access-with-the-help-of-the-early-career-fellowship/',
          pay:false
        },
        {
          imagesrc:'https://www.internetsociety.org/wp-content/uploads/2021/11/Screen-Shot-2021-11-11-at-14.31.22.png',
          amount:'$31',
          author:'thronom',
          date:' 11 November 2021',
          cardTitle:'Creating Affordable Internet Access with the Help of the Early Career Fellowship',
          text:'The Early Career Fellowship empowers a new, diverse generation of Internet champions. Fellows become advocates for the open, globally connected, secure, and trustwo.....',
          link:'https://www.internetsociety.org/blog/2021/11/creating-affordable-internet-access-with-the-help-of-the-early-career-fellowship/',
          pay:false
        }
      ])
      const[display1,setDisplay]=useState(true)
      function change(){
        console.log(display1)
        setDisplay(display1=>!display1)
      }
      function sear(msg){
        console.log(msg)
        setSearch(msg)
        if(msg){
        const searchcard=cards.filter(card=>((card.author).toLowerCase()).includes(search.toLowerCase()))
        setcards(searchcard)
        }else{
          setcards(x)
        }
      }
    
      return (
        <DataContext.Provider value={{myarticle,cards,setcards,Setarticle,display1,setDisplay,change,search,setSearch,sear}}>
          {children} {/* Render the child components */}
        </DataContext.Provider>
      );
}  
export default DataContext