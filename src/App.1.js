import logo from './logo.svg';
import './App.1.css';
import { BsFillCartFill} from 'react-icons/bs';
import {AiFillCaretDown } from 'react-icons/ai';
import { useState } from 'react';



function App() {
    <Head />;

    const usres = [
        {
            img: "404*567",

            name: "eat",
            point: "⭐⭐⭐⭐",
            rate: "$45",
            add: "add to cart"
        },
        {
            img: "404*567",
            sale: "sale",
            name: "eat",
            point: "⭐⭐⭐⭐",
            rate: "$45",
            add: "add to cart"
        },
        {
            img: "404*567",
            sale: "sale",
            name: "eat",
            point: "⭐⭐⭐⭐",
            rate: "$45",
            add: "add to cart"
        },
        {
            img: "404*567",
            sale: "sale",
            name: "eat",
            point: "⭐⭐⭐⭐",
            rate: "$45",
            add: "add to cart"
        }, {
            img: "404*567",
            sale: "sale",
            name: "eat",
            point: "⭐⭐⭐⭐",
            rate: "$45",
            add: "add to cart"
        },
        {
            img: "404*567",
            sale: "sale",
            name: "eat",
            point: "⭐⭐⭐⭐",
            rate: "$45",
            add: "add to cart"
        },
        {
            img: "404*567",
            sale: "sale",
            name: "eat",
            point: "⭐⭐⭐⭐",
            rate: "$45",
            add: "add to cart"
        },
        {
            img: "404*567",
            sale: "sale",
            name: "eat",
            point: "⭐⭐⭐⭐",
            rate: "$45",
            add: "add to cart"
        }
    ];

    return (
        <div className='body'>
            <Head />
            <Title />

            <div className='container'>
                <div className='row'>
                    {usres.map((nm) => (
                        <User img={nm.img} sale={nm.sale} name={nm.name} point={nm.point} rate={nm.rate} add={nm.add} />
                    ))}
                </div>
            </div>
            <End />
        </div>
    );
}
function User({img,sale,name,point,rate,add}){
//   // console.log(props,typeof props);
  let [cart,setcart]=useState(0)
  return(
      <section>
        <div className='md-4'> 
        <div className='sale'>{sale}</div>
         <img className='pic' src={img}/>
         <div className='proname'><b>{name}</b></div>
         <div className='point'>{point}</div>
         <div className='rate'>{rate}</div>
         <button className='add color' onClick={()=> setcart(cart+1)}><b>{add}</b></button>
         </div>
  </section>
  );
}; 
function Head() {
    return (
        <div className='main1'>
            <h3>Start Bootstrap</h3>
            <ul className='higer'>

                <li><a>Home</a></li>
                <li>About</li>
                <li>
                    Shop
                    <AiFillCaretDown/>
                    <ul className='sub-menu'>
                        <li>All Product</li>
                        <li>POpular Items</li>
                        <li>New Arrival</li>

                    </ul>
                </li>
            </ul>
            <div className='cart'>
                <form>
                    <Open />
                </form>
            </div>
        </div>

    );
}
function Title() {
    return (
        <div className='mani2'>
            <h1>Shop in style</h1>
            <p>With this shop hompeage template</p>
        </div>
    );
}
function End() {
    return (
        <p className='line'>Copyright © Your Website 2022</p>
    );
}
function Open() {
    return (
        <div className='cart'>
            <button className='add color'>
                < BsFillCartFill/>

                Cart
                <span className='ccc'>{User.add}</span>
            </button>
        </div>
    );
}
