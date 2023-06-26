import { Card } from "../components/Card"
import { useTitle } from "../hooks/useTitle";

export const Home = ({ title }) => {
    useTitle(title);
    const productData = [{
        id: 1001,
        name: "Sony Wh-Ch510 Bluetooth Wireless",
        price: "$149",
        imageUrl: "/assets/images/1001.png"
    },
    {
        id: 1002,
        name: "boAt Rockerz 450",
        price: "$49",
        imageUrl: "/assets/images/1002.png"
    },
    {
        id: 1003,
        name: "JBL Tune 760NC",
        price: "$179",
        imageUrl: "/assets/images/1003.png"
    },
    {
        id: 1004,
        name: "Logitech H111 Wired",
        price: "$39",
        imageUrl: "/assets/images/1004.png"
    },
    {
        id: 1005,
        name: "APPLE Airpods Max Bluetooth Headset",
        price: "$199",
        imageUrl: "/assets/images/1005.png"
    },
    {
        id: 1006,
        name: "ZEBRONICS Zeb-Thunder Wired",
        price: "$29",
        imageUrl: "/assets/images/1006.png"
    }];
    return (
        <main className="flex flex-wrap py-7 card-container">
            {productData?.map((elem) => (
                <Card key={elem.id} data={elem} />
            ))}
        </main>
    )
}