import '../input.css'
import '../dist/output.css'
import Header from './Header'
import { useState } from 'react'
import CartList from './CartList'

const ProductList = () => {
    const [num, setNumber] = useState(0)
    const [show, setShow] = useState(true)
    const [item, setItems] = useState([])
    const handleShow = (v) => {
        setShow(v)
    }
    const [filteredData, setFilteredData] = useState([]);

    const handleClick = (productItem) => {
      setNumber((prevNum) => prevNum + 1);
        setItems((prevItems) => {
          const existingItemIndex = prevItems.findIndex((item) => item.id === productItem.id); 
          if (existingItemIndex !== -1) {
            // Product already exists in the cart, update quantity
            const updatedItems = [...prevItems];
            updatedItems[existingItemIndex].quantity += 1;
            return updatedItems;
            
          } else {
            // Product is not in the cart, add it with quantity 1
            return [
              ...prevItems,
              {
                ...productItem,
                quantity: 1,
              },
            ];
          }
        });
      }
    
      return (
        <div>
            <Header len={num} show={handleShow}   setData={setFilteredData}/>
            {show ? (
                <div className='mx-auto grid grid-cols-3 gap-4 w-2/3 max-sm:grid-cols-1 max-lg:grid-cols-2 p-5 z-5 pt-40 '>
                    {filteredData.map((productItem) => (
                        <div key={productItem.id} className='shadow-lg border-2 border-slate-500 rounded-lg hover:shadow-2xl p-5'>
                            <img src={productItem.url} style={{ width: '100%' }} alt={productItem.name}></img>
                            <p>{productItem.name} | {productItem.category}</p>
                            <p>{productItem.seller}</p>
                            <p>Price: ${productItem.price}</p>
                            <button
                                onClick={() => { handleClick(productItem) }}
                                className='bg-sky-600 text-white rounded-lg p-2 w-fit mt-2 hover:bg-sky-500 hover:shadow-md'
                            >
                                Add To Cart
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <CartList items={item} />
            )}
        </div>
    )
}
export default ProductList