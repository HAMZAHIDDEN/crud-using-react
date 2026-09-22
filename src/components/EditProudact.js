import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
function EditProudact() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() =>{
        fetch(`http://localhost:9000/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setTitle(data.title);
            setPrice(data.price);
            setDescription(data.description);
        });
    }, [id]);

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const UpdateProduct = () =>{
        fetch(`http://localhost:9000/products/${id}`, {
            method :'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, price, description })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('Product updated:', data);
            navigate('/products');
        })
        .catch((error) => {
            console.error('Error updating product:', error);
        });
    }

    return(
        <>
            <h1> Edit Product </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="productTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="productTitle" aria-describedby="emailHelp"
                        value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="productPrice"
                        value={price} onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="productDescription"
                        value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success" onClick={UpdateProduct}>Update</button>
                <Link to="/products" className="btn btn-primary">Back</Link>

            </form>
        </>
    )
}
export default EditProudact;