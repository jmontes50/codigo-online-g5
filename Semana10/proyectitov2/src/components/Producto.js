export default function Producto({ item }) {
    //Como item es un obj que contiene precio, id, nombre, descripcion, url_imagen
    const { id, nombre, descripcion, precio, imagen } = item;

    return (
        <div className="producto">
            <img className="img-top" src={imagen} alt={nombre} />
            <div className="text-bottom">
                <h4>{nombre}</h4>
                <p>{descripcion}</p>
                <div className="prod-info">
                    <span>S/ {precio}</span>
                    <button className="btn-agregar">Agregar</button>
                </div>
            </div>
        </div>
    );
}
