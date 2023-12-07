import React, { useEffect, useState } from 'react';

function CartList({ items }) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const calculatedTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(calculatedTotal);
    }, [items]);
    return (
        <div className='p-40'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Count
                            </th>
                            <th scope="col" className="px-6 py-3 lg:table-cell max-sm:hidden max-md:hidden">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3 lg:table-cell max-sm:hidden max-md:hidden max-lg:hidden">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 lg:table-cell max-sm:hidden">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4" >
                                    {item.quantity}
                                </td>
                                <td className="px-6 py-4 lg:table-cell max-sm:hidden max-md:hidden">
                                    {item.category}
                                </td>
                                <td className="px-6 py-4 lg:table-cell max-sm:hidden max-md:hidden max-lg:hidden">
                                    {item.price}
                                </td>
                                <td className="px-6 py-4 lg:table-cell max-sm:hidden text-red-500 font-bold">
                                    ${item.price * item.quantity}.00
                                </td>
                            </tr>
                        ))}
                    </tbody>
        
                </table>
            </div>
            <div className='text-center text-red-500 font-bold mt-10'>
            <h2>Total: ${total}.00</h2>
            </div>
        </div>
    );
}

export default CartList;
