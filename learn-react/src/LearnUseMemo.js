import { useState, useMemo, useRef } from 'react';

function LearnUseMemo() {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const productNameRef = useRef();

    const handleSubmit = () => {
        setProducts(prev => [...prev, {productName, price: Number(price)}]);
        setProductName('');
        setPrice('');
        productNameRef.current.focus();
    }

    /*
        - useMemo: giúp tránh việc re-render lại các logic khi không cần thiết
    */
    const totalPrice = useMemo(() => {
        console.log('re-render');
        return products.reduce((total, product) => total + product.price, 0);
    }, [products])

    return (
        <div style={{padding: '10px 32px'}}>
            <input type="text" 
                ref={productNameRef}
                value={productName} 
                placeholder='Enter product name' 
                onChange={e => setProductName(e.target.value)}    
            />
            <br />
            <input type="text" 
                value={price} 
                placeholder='Enter price' 
                onChange={e => setPrice(e.target.value)}    
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>

            <br />
            Total:  {totalPrice}
            <ul>
                {
                    products.map((product, index) => (
                        <li key={index}>
                            {product.productName} - {product.price}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default LearnUseMemo;