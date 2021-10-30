//Reglas del componente
//.1 función o clase
//.2 el nombre de la función/componente tiene que comenzar en Mayúsculas
//.3 esa función/componente tiene que retornar algo
//.3.1 el return sera el JSX(HTML) que se dibujará
//.3.2 JSX utiliza (<html></html>) para indicar que dibujará elementos
//.4 tiene que exportarse por defecto, para que otros componentes, lo puedan reutilizar

function Main({subtitulo, tituloPadre, actualizarTitulo}) {

    return (<main>
		<div>
			<h2>{subtitulo}</h2>
			<p>Lorem ipsum dolor sit amet.</p>
			<p>El titulo de App es {tituloPadre}</p>
			<button onClick={() => {actualizarTitulo("Titulo desde Main")}}>
				Actualizar desde Main
			</button>
		</div>
	</main>);
}

export default Main;
