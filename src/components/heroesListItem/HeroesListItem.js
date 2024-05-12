import {useHttp} from '../../hooks/http.hook';
import { useRef } from 'react';
import './HeroesListItem.css'

const HeroesListItem = ({name, description, element, uri, _id}) => {

    const myRef = useRef(null);

    let elementClassName
    const {request} = useHttp();

    const delHero = (id) => {
        myRef.current.classList.add('delete')
        request(`/api/zamer/deleteHero/?id=${id}`, 'DELETE')
    }

    switch (element) {
        case 'fire':
            elementClassName = 'bg-danger bg-gradient'; 
            break;
        case 'water':
            elementClassName = 'bg-primary bg-gradient';
            break;
        case 'wind':
            elementClassName = 'bg-success bg-gradient';
            break;
        case 'earth':
            elementClassName = 'bg-secondary bg-gradient';
            break;
        default:
            elementClassName = 'bg-warning bg-gradient';
    }

    return (
        <li 
            className={`heroAnim card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
            ref={myRef} >
            <img src={uri} 
                 className=" d-inline icon" 
                 alt="unknown hero" 
                 style={{'objectFit': 'cover'}}/>
            <div className="card-body">
                
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button 
                type="button" 
                className="btn-close btn-close" 
                aria-label="Close"
                onClick={() => {
                    delHero(_id)
                }} ></button>
            </span>
        </li>
    )
}

export default HeroesListItem;