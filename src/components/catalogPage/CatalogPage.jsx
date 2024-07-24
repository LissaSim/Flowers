import "./CatalogPage.css";
import cartIcon from "../../../public/img/bag.png";
import Pagination from "../pagination/Pagination.jsx";
// import {useHttp} from "../../hooks/http.js";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFlowers, resetFilters} from "../reducers/flowersSlice.js"
import {addItem} from "../reducers/cartSlice.js"
import {createSelector} from "reselect";

const CatalogPage = () => {

const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchFlowers())
    }, []);

    const filteredFlowersSelector = createSelector(
        (state) => state.flowers.flowers,
        (state) => state.flowers.value,
        (flowers, value) => {
            if (value === "") {
                return flowers
            } else {
                return flowers.filter(item => item.value === value)
            }
        }
    );

const filteredFlowers = useSelector(filteredFlowersSelector)

    const renderContent = (arr) => {
        return (
            arr.map(({...props}) => {
                return (
                    <div className="catalog__card" key={props.id}>
                        <img src={props.img} alt=""/>
                        <div className="catalog__card-descr">
                            <h3 className="catalog__card-title">{props.title}</h3>
                            <span className="catalog__card-text">
                                <h4 className="catalog__card-title">{props.size}</h4>
                                <h4 className="catalog__card-title"><em>{props.price}</em> $</h4>
                            </span>
                        </div>
                        <button className="homepage__popular-button" onClick={() => dispatch(addItem(props))}>
                            <span className="homepage__popular-button-text">Add to cart</span>
                            <img src={cartIcon}/>
                        </button>
                    </div>
                )
            })
        )
    }
    const element = renderContent(filteredFlowers);
    return (
        <div className="catalog">
            <h3 className="catalog__text">Catalog</h3>
            <button className="homepage__popular-button">
                <span className="homepage__popular-button-text" onClick={() => dispatch(resetFilters())}>Reset filters</span>
            </button>
            <div className="catalog__wrapper">
                {element}
            </div>
            <Pagination/>
        </div>
    )
}
export default CatalogPage