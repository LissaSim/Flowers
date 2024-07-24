import "./Pagination.css";
import arrowLeft from "../../../public/img/arrowLeft.png"
import arrowRight from "../../../public/img/arrowRight.png"

const Pagination = () => {
    return(
        <div className="pagination">
            <button className="pagination__btn">
                <img src={arrowLeft} alt=''/>
            </button>
            <ul className="pagination__list">
                <li className="pagination__list-item"><a className="pagination__list-link active">1</a></li>
                <li className="pagination__list-item"><a className="pagination__list-link">2</a></li>
                <li className="pagination__list-item"><a className="pagination__list-link">3</a></li>
            </ul>
            <button className="pagination__btn">
                <img src={arrowRight} alt=''/>
            </button>
        </div>
    )
}
export default Pagination
