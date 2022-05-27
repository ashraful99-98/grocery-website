import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // fetch('./product.JSON')
        fetch('http://localhost:5000/products')
            // .then(res => res.json())
            // .then(data => setProducts(data))
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    return [products, setProducts];
}
export default useProducts;