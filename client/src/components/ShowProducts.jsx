import axios from "axios"
import { useEffect,useState } from "react"
import { useNavigate,useParams } from "react-router-dom"
import { ProductForm } from "./ProductForm"


export const ShowProducts = ( ) => {

  const [list, setList] = useState([]);
  const [products, setProducts] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  


  useEffect( () => {
    axios.get('http://localhost:8000/api/getproducts')
    .then( (res) => {
      console.log(res);
      setList(res.data);
    })
    .catch( (err) => {
      console.log(err);
    })
  },[])


  const deleteProduct = ( id ) => {
    axios.delete(`http://localhost:8000/api/deleteproduct/${id}`)
      .then( (res) => {
        const filteredProducts = products.filter((product, index)=>{
          return product._id !== id;
      });


      console.log(filteredProducts);
      setProducts(filteredProducts)
      })
      .catch ( ( err ) => {
        console.log( err );
      })



  }

  return (
    <div>
        <ProductForm />
        <hr />
        {
            list.map( ( product, index) => {
                return (
                <div key={ index }>
                    <a key={ index } href={`/${product._id}`}> { product.title } </a>
                    <button onClick={ () => deleteProduct(product._id) } className="btn btn-danger">Borrar producto</button>
                </div>

                );
                
            })
        }
    </div>
  )
}
