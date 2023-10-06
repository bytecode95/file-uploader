import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import beforeImage from '../assets/picture.png'
import {useState} from "react";
import axios from "axios";

export default function AddProduct(){

    const [image, setImage] = useState();
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) =>{

        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('quantity', quantity);
        formData.append('price', price);
        formData.append('description', description);

        const config = {headers: {'Content-Type': 'multipart/form-data'}}

        try{
            const data = await axios.post('http://192.168.8.187:3000/api/addproduct', formData, config)
            console.log(data);
        }
        catch(err) {
            console.log(err);
        }
        
    }


    return(
        <>
            <Form onSubmit={handleSubmit} action="/addproducts" encType={'multipart/form-data'} className="container d-flex justify-content-center">
                <Card style={{ width: '23rem' }}>
                    <h3>Product Form</h3>
                    {
                        image ? (<Card.Img style={{height:'300px', width:'300px'}} alt={'product-img'} src={URL.createObjectURL(image)} />)
                            :(<Card.Img style={{height:'300px', width:'300px'}} alt={'before-img'} src={beforeImage} />)
                    }

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Please add image here</Form.Label>
                        <Form.Control onChange={(e)=>{setImage(e.target.files[0])}} name="image" type="file" />
                    </Form.Group>
                    <Card.Body>
                        <Form.Group className="mb-3" >
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control onChange={(e)=>{setQuantity(e.target.value)}} type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={(e)=>{setPrice(e.target.value)}} type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Description</Form.Label><br/>
                            <textarea  onChange={(e)=>{setDescription(e.target.value)}} placeholder="Enter Descrption" rows="3"></textarea>
                        </Form.Group>
                        <Button type="submit" variant="primary">Submit</Button>
                    </Card.Body>
                </Card>

            </Form>
        </>
    )
}