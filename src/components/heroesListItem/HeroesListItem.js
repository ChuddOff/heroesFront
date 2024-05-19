import {useHttp} from '../../hooks/http.hook';
import { useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { socket } from '../../socket';

import './HeroesListItem.css'

const HeroesListItem = ({name, description, element, uri, _id}) => {
    const [position, setPosition] = useState(0);

    const handlers = useSwipeable({
        onSwipeStart: (event) => {
            setPosition(event.deltaX);
        },
        onSwiping: (event) => {
            setPosition(event.deltaX);

        },
        onSwiped: () => {
            if (Math.abs(position) > 150) {
                delHero(_id, false);
            } else {
                setPosition(0);
            }
            document.body.style.overflowY = 'hidden'
        },
    });

    const myRef = useRef(null);

    let elementClassName
    const {request} = useHttp();

    const delHero = async (id, anim) => {
        if (anim) {
            myRef.current.classList.add('delete')
        } else {
            myRef.current.style.opacity = '0%'
        }
        const {_id} = await request(`/api/zamer/deleteHero/?id=${id}`, 'DELETE');
        setTimeout(() => {
            socket.emit("delete", {
                _id: _id,
            },)
        }, 500);

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
            onClick={() => {document.body.style.overflow = 'hidden'}}
            className='heroAnim'
            style={{
                position: 'relative'
              }}
            {...handlers} >
            <div
            ref={myRef}
             style={{
                transform: `translateX(${position}px)`,
                opacity: `${100- Math.abs(position/2.5)}%`
            }}
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
             >
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
                        delHero(_id, true)
                    }} ></button>
                </span>
            </div>
        </li>
    )
}

export default HeroesListItem;