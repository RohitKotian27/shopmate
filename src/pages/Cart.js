import { useTitle } from '../hooks/useTitle';
export const Cart = ({ title }) => {
    useTitle(title);
    const listData = [{
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
    }];
    return (
        <main>
            <section className="py-5">
                <h1 className="text-center text-2xl font-bold mb-5">Cart Items : 2</h1>
                {listData?.map((elem) => (
                    <div key={elem.id} className="listCard">
                        <img src={elem.imageUrl} alt="" />
                        <p>{elem.name}</p>
                        <p>{elem.price}</p>
                        <button>Remove</button>
                    </div>
                ))}
            </section>
        </main>
    )
}