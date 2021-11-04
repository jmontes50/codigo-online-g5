export default function Producto() {
    return (
        <div className="producto">
            <img 
				className="img-top" 
				src="https://picsum.photos/400" 
				alt="imagen" 
			/>
			<div className="text-bottom">
				<h4>Producto</h4>
				<p>Lorem ipsum dolor sit amet.</p>
				<div className="prod-info">
					<span>S/25</span>
					<button className="btn-agregar">
						Agregar
					</button>
				</div>
			</div>
        </div>
    );
}
