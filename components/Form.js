import React, {useState} from 'react'
import Product from './Product'
import { nanoid } from 'nanoid'
import Image from 'next/image'


const Invoiceform = () => {

    const [products, setProducts] = useState([
        { id:nanoid(10), desc: "", price: 0, place: "", date: "", time:""  }
    ])

    const [totalamount, settotalamount] = useState(0);

    const [date, setdate] = useState('');
 


    const addnewitem = () => {
        const newproduct = { id:nanoid(10), desc: "", price: 0, place: "", date: "", time:""  }
        setProducts([...products, newproduct]);
    }





    return (
        <div className="flex flex-col xl:flex-row justify-center mt-20 xl:space-x-14">
            <div className="border w-full max-w-4xl mt-5 rounded  shadow-lg p-3 md:p-10 bg-white ">


                <div className="hidden md:flex flex-row justify-between  bg-gray-500 text-white rounded p-2 space-x-12 ">
                    <div className="w-1/3">
                        Reason
                    </div>
                    <div className="flex flex-row w-2/3 justify-start space-x-10 ">
                        <div className="w-1/4">Date</div>
                        <div className="w-1/4">Time</div>
                        <div className="w-1/4">Amount</div>


                    </div>

                </div>

                {products.map((product) => {
                    return <Product totalamount={totalamount} settotalamount={settotalamount} id={product.id} product={products} setProducts={setProducts}  key={product.id} desc_one={product.desc} price_one={product.price}  place_one={product.place} date_one={product.date} time_one={product.time}/>
                })}

                <div>
                    <button onClick={addnewitem} className="bg-purple-400 text-white px-3 py-2 mt-10 rounded hover:bg-purple-500">+ New Item</button>
                </div>

                
                
            </div>



            <div className="mt-5 flex flex-col p-5 md:p-0">
                {/* <button className="bg-purple-400 sticky top-36 text-white  font-bold text-lg rounded mb-5 px-16 py-2 hover:bg-purple-500">Preview</button> */}
                
                <div className="font-bold sticky top-60">
                    Subtotal : 
                </div>

                <div className="font-bold mt-10 text-xl  sticky top-72">
                     ₹ {totalamount}
                </div>


            </div>
        





        </div>

 


    )
}

export default Invoiceform