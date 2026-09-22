import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function View() {

    let { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:9000/products/${id}/view/`)
            .then(response => response.json())
            .then((data) => setProduct(data))
    }, [])
    return (

        <div className="card" style={{ width: "18rem" }}>
            <h5 className="card-header">Title: {product.title}</h5>
            <div className="card-body">
                <h5 className="card-title">Description: {product.description}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Category: {product.category}</p>
                <Link to="/products" className="btn btn-primary">Back</Link>
            </div>
        </div>
        // <div>
        //     <h1>View Page {id}</h1>
        //     <p>{product.title}</p>
        //     <p>${product.price}</p>
        //     <p>{product.description}</p>
        //     <p></p>
        //     

        // </div>
    )
}
export default View;