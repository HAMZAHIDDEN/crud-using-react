import { Link } from "react-router-dom";
function Slider() {
    return (
        <>
            <ul className="list-unstyled">
                <li >
                    <Link to="/products">Get Products</Link>
                </li>
                <li >
                    <Link to="/categories">Get Category</Link>
                </li>
            </ul>
        </>
    )
}

export default Slider;