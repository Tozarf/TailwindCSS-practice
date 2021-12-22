import { useEffect, useState } from "react"



export const Form = () => {
    
    const [petName, setPetName] = useState("Marshall")
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('sending data')
    }
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h1 className="font-black text-3xl text-center">
                Patients Monitoring
            </h1>
            <p className="text-lg mt-5 text-center mb-10">
                Add Patients and {''} 
                <span className='text-indigo-600 font-bold'>
                    Manage them
                </span>
            </p>
            <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-20'
                    onSubmit={handleSubmit}
            >
            <div className='mb-5'>
                <label htmlFor="pet" className='block text-gray-700 uppercase font-bold'>Pet's Name{''}</label>
                <input 
                    id="pet"
                    type="text" 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    placeholder={`Pet's Name`}
                    value={petName}
                    onChange={(e)=>setPetName(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor="owner" className='block text-gray-700 uppercase font-bold'>Owner{''}</label>
                <input 
                    id="owner"
                    type="text" 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    placeholder={`Owner's Name`}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email{''}</label>
                <input 
                    id="email"
                    type="email" 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    placeholder={`Owner's Email`}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor="discharge" className='block text-gray-700 uppercase font-bold'>Discharge Date{''}</label>
                <input 
                    id="discharge"
                    type="date" 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 

                />
            </div>
            <div className='mb-5'>
                <label htmlFor="discharge" className='block text-gray-700 uppercase font-bold'>Discharge Date{''}</label>
                <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="symptoms" placeholder='Describe the symptoms'/>
            </div>
            <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all' value="Add patient"/>
            </form>
        </div>
    )
}
