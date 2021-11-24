import GrupoProdHome from "../components/GrupoProdHome";
import GroupCategoria from "../components/GroupCategoria";

export default function HomeView() {
    return (
        <div>
            <h2 className="text-center my-4">Categorías</h2>
            <GroupCategoria />
            <h2 className="text-center my-4">Últimas novedades</h2>
            <GrupoProdHome />
        </div>
    );
}
