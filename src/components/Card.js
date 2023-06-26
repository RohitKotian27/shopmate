export const Card = ({ data }) => {
    const { name, price, imageUrl } = data;
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 productCard">
            <img src={imageUrl} className="p-3 rounded-t-lg" alt={name} />
            <div className="px-4 pb-4">
                <h5 className="text-lg font-medium tracking-tight text-left text-gray-900 dark:text-white my-3">{name}</h5>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900 dark:text-white">{price}</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>
    )
}
