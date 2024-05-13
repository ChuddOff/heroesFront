import { setFilterAll, setFilterFire, setFilterWater, setFilterWind, setFilterEarth } from '../../actions';
import { useDispatch } from 'react-redux';

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const dispatch = useDispatch();
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <button 
                    className="btn btn-outline-dark active"
                    onClick={() =>  {dispatch(setFilterAll())}} >Все</button>
                    <button className="btn btn-danger"
                    onClick={() =>  {dispatch(setFilterFire())}} >Огонь</button>
                    <button className="btn btn-primary"
                    onClick={() =>  {dispatch(setFilterWater())}} >Вода</button>
                    <button className="btn btn-success"
                    onClick={() =>  {dispatch(setFilterWind())}} >Ветер</button>
                    <button className="btn btn-secondary"
                    onClick={() =>  {dispatch(setFilterEarth())}} >Земля</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;