import { useEffect, useState } from "react"



export const Form = ({patients, setPatients}) => {
    
    const [petName, setPetName] = useState("")
    const [ownersName, setOwnersName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [symptoms, setSymptoms] = useState("")

    const [error, setError] = useState(false)
    
    const handleSubmit = (e)=>{
        e.preventDefault()

        if([petName,ownersName, email, date, symptoms].includes('')){
            console.log('There is at least one empty field')
            setError(true)
            return;
        }
        const patientInfo = {
            petName,ownersName,email,date,symptoms
        }
        setError(false)
        setPatients([...patients, patientInfo])

        setPetName('')
        setOwnersName('')
        setEmail('')
        setDate('')
        setSymptoms('')

    }
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
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
                {error && <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md"><p>All of the fields must be filled.</p></div>  }
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
                    value={ownersName}
                    onChange={(e)=>setOwnersName(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email{''}</label>
                <input 
                    id="email"
                    type="email" 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    placeholder={`Owner's Email`}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor="discharge" className='block text-gray-700 uppercase font-bold'>Discharge Date{''}</label>
                <input 
                    id="discharge"
                    type="date" 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor="discharge" className='block text-gray-700 uppercase font-bold'>Discharge Date{''}</label>
                <textarea 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    id="discharge" 
                    placeholder='Describe the symptoms'
                    value={symptoms}
                    onChange={(e)=>setSymptoms(e.target.value)}
                />
            </div>
            <input 
            type="submit" 
            className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all' value="Add patient"/>
            </form>
        </div>
    )
}
