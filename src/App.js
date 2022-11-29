import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from './Card';
import { useState } from 'react';

function App() {
    const [products,setProducts] = useState([
        {
            id:1,
            name:"IPHONE 14",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQjf3L6AigHvCAUVWNCsCg_vPXovK98vuIA&usqp=CAU",
            price:66990        
        },
       {
         id:2,
         name:"GOOGLE Pixel 7",
         image:"https://m.media-amazon.com/images/I/41Ix9X2L4zL._SX300_SY300_QL70_FMwebp_.jpg",
         price:49999
       },
       {
        id:3,
        name:"ROG Phone 5s",
        image:"https://rukminim1.flixcart.com/image/416/416/ky7lci80/mobile/m/k/z/-original-imagahvgdm4ycnam.jpeg?q=70",
        price:49999
       },
       {
        id:4,
        name:"NOTHING Phone",
        image:"https://rukminim1.flixcart.com/image/416/416/l5h2xe80/mobile/5/x/r/-original-imagg4xza5rehdqv.jpeg?q=70",
        price:32999
       },
       {
        id:5,
        name:"SAMSUNG Galaxy S21 FE 5G",
        image:"https://rukminim1.flixcart.com/image/416/416/kzpw2vk0/mobile/u/o/q/galaxy-s21-fe-5g-lavender-8gb-128gb-storage-sm-g990elviinu-original-imagbnbdaj3tygup.jpeg?q=70",
        price:59998
       },
       {
        id:6,
        name:"VIVO V25 Pro 5G",
        image:"https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/5/q/j/-original-imagh4fnprjvgzzj.jpeg?q=70",
        price:35999
       },
       {
        id:7,
        name:"OPPO Reno8 5G",
        image:"https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/y/s/b/-original-imaggg5sk9zpp8hs.jpeg?q=70",
        price:29999
       },
       {
        id:8,
        name:"ONEPLUS Pro 5G",
        image:"https://m.media-amazon.com/images/I/71flXufDnbL._SX679_.jpg",
        price:60999
       }
    ])
    const [counter,setCounter] = useState(0)
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Shop in style</h1>
                <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
        </div>
    </header>
    <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {
                    products.map((product)=>{
                      return <Card product={product}/>
                    })
                   }
                </div>
            </div>
        </section>
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
    </>
  );
}

export default App;
