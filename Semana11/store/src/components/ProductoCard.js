import { Link } from "react-router-dom";

//eventualmente le pasaremos un producto
const ProductoCard = ({ producto }) => {
    return (
        <Link className="card mb-3" to={`/`}>
            <img className="card-img-top" src="https://picsum.photos/600/300" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">Producto</h5>
                <p>S/ 10</p>
            </div>
        </Link>
    );
};

export default ProductoCard;
