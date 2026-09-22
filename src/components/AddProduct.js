import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
function AddProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    const AddProduct = async () =>{
        fetch('http://localhost:9000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                price: Number(price),
                description
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Product added:', data);
                setTitle('');
                setPrice('');
                navigate('/products');

            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
    }


   


    return (
        <div>
            <h1> Add Product </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input type="number" className="form-control" id="exampleInputPassword1"
                        value={price} onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="productDescription"
                        value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success" onClick={AddProduct}>Add Product</button>
                <Link to="/products" className="btn btn-primary">Back</Link>

            </form>
        </div>
    )
}
export default AddProduct;