import Header from '../Header'
import CardItem from '../CardItem';
import './index.css'

const cards = [
    { id: 1, name: "Card 1" },
    { id: 2, name: "Card 2" },
    { id: 3, name: "Card 3" },
    { id: 4, name: "Card 4" },
    { id: 5, name: "Card 5" },
    { id: 6, name: "Card 6" },
    { id: 7, name: "Card 7" },
    { id: 8, name: "Card 8" },
    { id: 9, name: "Card 9" },
    { id: 10, name: "Card 10" }
  ];

const Home = () =>{
    return (
        <div className='home-page'>
            <Header />
            <div className='dashboard'>
            <h1>Dashboard</h1>
            <ul className='cards-container' >
                {cards.map(item => <CardItem card={item} key={item.id} />)}
            </ul>
    
            </div>
        </div>
    )
} 

export default Home