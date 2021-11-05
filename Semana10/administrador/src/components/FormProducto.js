export default function FormProducto({ value }) {
    console.log(value);
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre producto</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Descripción producto</label>
                    <input type="text" className="form-control" name="descripcion" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Precio producto</label>
                    <input type="number" className="form-control" name="precio" />
                </div>
            </form>
        </div>
    );
}
