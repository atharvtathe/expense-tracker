import React, {useState} from 'react'
import Product from './Product'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import '@natscale/react-calendar/dist/main.css';
// import Calendar from 'rc-calendar';
import { Calendar } from '@natscale/react-calendar';
const Invoiceform = () => {
    // const [value, onChange] = useState(new Date());
    const [products, setProducts] = useState([
        // { id:nanoid(10), desc: "", price: 0, place: "", date: "", time:""  }
    ])

    const [totalamount, settotalamount] = useState(0);

    const [date, setdate] = useState('');
 
    const [value, setValue] = useState();

    const [buttonstate, setbuttonstate] = useState(true)

    const addnewitem = () => {
        const newproduct = { id:nanoid(10), desc: "", price: 0, place: "", date: "", time:""  }
        setProducts([...products, newproduct]);
    }

    const onChange = (value) => {
        setValue(value);
    }







    return (
        <>

        
        <div className="border flex flex-row justify-between w-full max-w-4xl mt-24 rounded  mx-auto p-3 md:p-10 bg-white ">
                <div>
                      {buttonstate &&<button  className="bg-purple-400 text-white px-3 py-2  rounded hover:bg-purple-500">View List</button>}
                      {!buttonstate && <button  className="bg-purple-400 text-white px-3 py-2  rounded hover:bg-purple-500">Add to List</button>}

                      <div className="mt-10 font-bold">Subtotal : {totalamount}</div>
                </div>


              
                <div>
                    <Calendar value={value}  onChange={onChange}/>
                </div>
                
        </div>

        <div className="flex flex-col xl:flex-row justify-center mt-5 xl:space-x-14">

            <div className="border w-full max-w-4xl mt-5 rounded  shadow-lg p-3 md:p-10 bg-white ">


                {products.length ? <div className="hidden md:flex flex-row justify-between  bg-gray-500 text-white rounded p-2 space-x-12 ">
                    <div className="w-1/3">
                        Reason
                    </div>
                    <div className="flex flex-row w-2/3 justify-start space-x-10 ">
                        <div className="w-1/4">Date</div>
                        <div className="w-1/4">Time</div>
                        <div className="w-1/4">Amount</div>


                    </div>

                </div> : <div></div>}

                {products.map((product) => {
                    return <Product totalamount={totalamount} settotalamount={settotalamount} id={product.id} product={products} setProducts={setProducts}  key={product.id} desc_one={product.desc} price_one={product.price}  place_one={product.place} date_one={product.date} time_one={product.time}/>
                })}

                <div>
                    <button onClick={addnewitem} className="bg-purple-400 text-white px-3 py-2 mt-10 rounded hover:bg-purple-500">+ New Item</button>
                </div>

                
                
            </div>



        </div>
        </>
 


    )
}

export default Invoiceform