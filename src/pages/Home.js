import { Card } from "../components/Card"
import { useTitle } from "../hooks/useTitle";
import { productData } from "../dummyData";

export const Home = ({ title }) => {
    useTitle(title);
    return (
        <main className="flex flex-wrap py-7 card-container">
            {productData?.map((elem) => (
                <Card key={elem.id} product={elem} />
            ))}
        </main>
    )
}