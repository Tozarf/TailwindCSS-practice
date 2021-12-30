import { useEffect } from "react";
import { Patient } from "./Patient";

export const PatientsList = ({ patients, setPatient, deletePatient }) => {
    useEffect(() => {
        if (patients.length > 0) {
            console.log("new patient");
        }
    }, [patients]);

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
            {patients && patients.length ? (
                <>
                    <h1 className="font-black text-3xl text-center">
                        Patients List
                    </h1>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Manage your {""}
                        <span className="text-indigo-600 font-bold">
                            Patients and Appointments
                        </span>
                    </p>
                    {patients.map((patient) => (
                        <Patient
                            key={patient.id}
                            patient={patient}
                            setPatient={setPatient}
                            deletePatient={deletePatient}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h1 className="font-black text-3xl text-center">
                        There are no patients yet
                    </h1>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Start adding your patients {""}
                        <span className="text-indigo-600 font-bold">
                            and they will be shown here...
                        </span>
                    </p>
                </>
            )}
        </div>
    );
};
