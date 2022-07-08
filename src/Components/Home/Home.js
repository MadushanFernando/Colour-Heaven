import Overview from "./Overview/Overview";
import CollectionsCarousel from "./CollectionsCarousel/CollectionsCarousel";

function Home(props) {
    return (
        <>
            <Overview></Overview>
            <CollectionsCarousel></CollectionsCarousel>
        </>
    );
}

export default Home;