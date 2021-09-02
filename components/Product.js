import React, {useState} from 'react'


const Product = ({totalamount, settotalamount, product, setProducts ,id, desc_one, price_one, place_one, date_one, time_one}) => {


    const [desc, setdesc] = useState(desc_one)
    const [price, setprice] = useState(price_one)
    const [place, setplace] = useState(place_one)
    const [date, setdate] = useState(date_one)
    const [time, settime] = useState(time_one)


    const deleteprod = () => {
        settotalamount(totalamount - price )
        const remainingprod = product.filter(prod => id !== prod.id);
        setProducts(remainingprod);
    }

    const descchangehandler = (e) => {
        setdesc(e.target.value)
        const updatedprod =  product.map((prod) => {
            if(id === prod.id){
                return {...prod, desc : e.target.value}
            }
            return prod;
        });

        setProducts(updatedprod)
    }

    const pricechangehandler = (e) => {
        setprice(e.target.value)
        const updatedprod =  product.map((prod) => {
            if(id === prod.id){
                settotalamount(totalamount + Number(e.target.value) - prod.price )
                return {...prod, price : e.target.value}
            }
            return prod;
        });

        setProducts(updatedprod)
    }

    const placechangehandler = (e) => {
        setplace(e.target.value)
        const updatedprod =  product.map((prod) => {
            if(id === prod.id){
                return {...prod, place : e.target.value}
            }
            return prod;
        });

        setProducts(updatedprod)
    }

    const datechangehandler = (e) => {
        setdate(e.target.value)
        const updatedprod =  product.map((prod) => {
            if(id === prod.id){
                return {...prod, date : e.target.value}
            }
            return prod;
        });

        setProducts(updatedprod)
    }

    const timechangehandler = (e) => {
        settime(e.target.value)
        const updatedprod =  product.map((prod) => {
            if(id === prod.id){
                return {...prod, time : e.target.value}
            }
            return prod;
        });

        setProducts(updatedprod)
    }




    return (
        <div className="flex flex-col md:flex-row w-full md:space-x-2 md:border-none border-2 border-purple-50 p-3 md:p-0">

            <div className="relative w-full md:w-1/3 mt-10">
                <label className="absolute text-gray-600 pl-4 text-sm top-1 " htmlFor="desc">Reason</label>
                <input type="text" id="desc" value={desc} onChange={descchangehandler} className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none border-none focus:bg-purple-100"/>
            </div>

            <div className="flex flex-col md:flex-row w-full md:w-2/3 md:space-x-2 ">

                

                {/* <div className="relative w-full md:w-1/3 mt-5 md:mt-10">
                    <label className="absolute text-gray-600 pl-4 text-sm top-1 " htmlFor="place">Place</label>
                    <input type="text" id="place" value={place} onChange={placechangehandler} className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none border-none focus:bg-purple-100"/>
                </div> */}

                <div className="relative w-full md:w-4/12 mt-5 md:mt-10">
                    <label className="absolute text-gray-600 pl-4 text-sm top-1" htmlFor="date">Date</label>
                    <input type="date" value={date} onChange={datechangehandler} id="date" className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none border-none  focus:bg-purple-100"/>
                </div>

                <div className="relative w-full md:w-3/12 mt-5 md:mt-10">
                    <label className="absolute text-gray-600 pl-4 text-sm top-1" htmlFor="time">Time</label>
                    <input type="time" value={time} onChange={timechangehandler} id="time" className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none border-none  focus:bg-purple-100"/>
                </div>

                <div className="relative w-full md:w-3/12 mt-5 md:mt-10">
                    <label className="absolute text-gray-600 pl-4 text-sm top-1 " htmlFor="price">Amount</label>
                    <input type="number" id="price" value={price} onChange={pricechangehandler} className="w-full px-3 pb-3 pt-5 bg-purple-50 rounded focus:outline-none border-none focus:bg-purple-100"/>
                </div>

                <div className="relative w-full md:w-2/12 mt-5 md:mt-10 flex items-center justify-center ">
                    <button onClick={deleteprod}  className="bg-purple-400 text-white py-2 text-sm px-1  rounded hover:bg-purple-500">remove</button>
                </div>




            </div>

        </div>


    )
}
export default Product