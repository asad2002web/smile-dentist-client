import { useState } from "react"
import { Title } from "../../components"

const RequestAppointment = () => {

    const [requestDoctor, setRequestDoctor] = useState(null)

    console.log(requestDoctor)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const location = form.location.value;
        const doctor = form.doctor.value;
        const data = { name, location, doctor }
        setRequestDoctor(data)
    }

    return (
        <div className="Container pb-[100px]">
            <div className="w-full lg:w-1/2 mx-auto">
                <Title miniTitle="Request an Appointment" Title="Make an Appointment
                " />
            </div>
            <div className="bg-blue-500 rounded-md px-12 py-12">
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-5">
                    <input className="w-full" name="name" type="text" placeholder="Your Name" />
                    <input className="w-full" name="location" type="text" placeholder="Location" />
                    <select className="w-full" name="doctor">
                        <option value="dentist">Dentist</option>
                        <option value="dentist">Dentist</option>
                        <option value="dentist">Dentist</option>
                    </select>
                    <button className="bg-[#0E264F] w-full md:w-1/3 text-white uppercase">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RequestAppointment