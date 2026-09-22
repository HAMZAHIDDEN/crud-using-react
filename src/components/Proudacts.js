import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


function Proudacts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/products')
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:9000/products/${id}`, {
                        method: 'DELETE'
                    })
                    .then(() => {
                        setProducts(products.filter(product => product.id !== id));
                    });
                }
            });

       
    }

    return (
        <div>
            <h1>Products Page</h1>
            <Link to="/products/add" className="btn btn-success">Add Product</Link>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>price</th>
                        <th>description</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td>{product.description}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                                    <Link to={`/products/${product.id}/edit`} className="btn btn-primary">Edit</Link>
                                    <Link to={`/products/${product.id}/view`} className="btn btn-success">View</Link>
                                </td>
                            </tr>
                        ))}
                    
                </tbody>
            </table>
        </div>
    )
}
export default Proudacts;