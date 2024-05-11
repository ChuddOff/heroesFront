import './HeroesList.css'

import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'https://cdn.socket.io/4.7.5/socket.io.min.js'

import { heroesFetching, heroesFetched, heroesFetchingError } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
    const {heroes, heroesLoadingStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    console.log(io);

    useEffect(() => {
        dispatch(heroesFetching());
        request("/api/zamer/heroes")
                .then(data => dispatch(heroesFetched(data.reverse().slice(0, 11))))
                .catch(() => dispatch(heroesFetchingError()))
        const int = setInterval(() => {
            request("/api/zamer/heroes")
                .then(data => dispatch(heroesFetched(data.reverse().slice(0, 11))))
                .catch(() => dispatch(heroesFetchingError()))
        }, 3000);
        // eslint-disable-next-line
    }, []);


    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({_id, ...props}) => {
            return <HeroesListItem key={_id} _id={_id} {...props}/>
        })
    }
    const elements = renderHeroesList(heroes);
    return (
        <ul className='heroes'>
            {elements}
        </ul>
    )
}

export default HeroesList;