import ProductoCard from "./ProductoCard";

//productos va a ser un arreglo
const GrupoProdHome = (productos) => {
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-12 col-md-6 col-sm-4">
                    {productos.map((prod, i) => (
                        <ProductoCard key={i} producto={prod} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GrupoProdHome;
