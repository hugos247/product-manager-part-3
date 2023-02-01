import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";



export const EditProduct = () => {


    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    
    useEffect( () => {
        axios.get(`http://localhost:8000/api/oneproduct/${id}`)
          .then( (res) => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
          })
          .catch ( (error) => {
            console.log('Algo salio mal', error);
          })
      },[])

      const submitHandler = ( event ) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/editproduct/${id}`,
        { title, price, description })
        .then ( ( res ) => {
            navigate('/');
        })
        .catch( ( err ) => console.log(`something went wrong ${err}`) );

        
      }

  return (
    <div>
            <form className= "col-6 mx-auto"onSubmit={ submitHandler }>

                <label className="form-label">Title</label>
                <input type="text" className="form-control" value={title} onChange={ event => setTitle(event.target.value) }/>

                <label className="form-label">Price</label>
                <input type="text" className="form-control" value={price} onChange={ event => setPrice(event.target.value) }/>

                <label className="form-label">Description</label>
                <input type="text" className="form-control" value={description} onChange={ event => setDescription(event.target.value) }/>

            <button className="btn btn-primary ">Edit Product</button>
            </form>
    </div>
  )
}
