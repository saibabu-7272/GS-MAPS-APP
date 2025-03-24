import {Link} from 'react-router-dom'

import './index.css'

const CardItem = props =>{
    const {card} = props 
    return (
        <li className='card'>
            <Link to="/map" >
                <button className='card-btn' type='button'>{card.name}</button>
            </Link>
        </li>
    )
}


export default CardItem