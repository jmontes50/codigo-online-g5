import GrupoProdHome from "../components/GrupoProdHome";
import GroupCategoria from "../components/GroupCategoria";
import HeaderCarousel from "../components/HeaderCarousel";
export default function HomeView() {
    return (
        <>
            <HeaderCarousel />
            <h2 className="text-center my-4">Categorías</h2>
            <GroupCategoria />
            <h2 className="text-center my-4">Últimas novedades</h2>
            <GrupoProdHome />
        </>
    );
}
