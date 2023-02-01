import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';


export const OneProduct = () => {

    const [product, setProduct] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();


    useEffect( () => {
      axios.get(`http://localhost:8000/api/oneproduct/${id}`)
        .then( (res) => {
          setProduct( res.data );
        })
        .catch ( (error) => {
          console.log('Algo salio mal', error);
        })
    },[])

    const deleteProduct = () => {
      axios.delete(`http://localhost:8000/api/deleteproduct/${id}`)
        .then( (res) => {
          console.log( res );
          navigate('/');
        })
        .catch ( ( err ) => {
          console.log( err );
        })
    }

  return (
    <div>
      <h1>{ product.title }</h1>
      <p> Price: { product.price }</p>
      <p> Description: { product.description } </p>
      <button onClick={ deleteProduct } className="btn btn-danger">Borrar producto</button>
    </div>
  )
}
