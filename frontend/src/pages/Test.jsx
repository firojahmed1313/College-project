import React, { useEffect, useState } from 'react'
import axios from "axios";
const Test = () => {
    const [data, setData] = useState();
    const addData = async () => {
        const carData = {
            carOwner: "car.own",
            num_of_seat: "car.available_seat",
            vehicle: "car.vehicle",
            vehicleNo: "car.car_no1",
            category: "car.category",
            licence_id: "123456",
            phoneNumber: "car.phone_no",
            rent: "car.rent",
            from: "car.depert.toUpperCase()",
            dest: "car.goingto.toUpperCase()"
        }
        console.log("buttons clicked");
        try {
            const res = await axios.post("https://5000-firojahmed1-collegeproj-q61ufo89vz5.ws-us110.gitpod.io/api/driver/disableCar", { carData });
            console.log("try", res);
        } catch (error) {
            console.warn(error);
        }

    }
    const buttonData=(d)=>{
        console.log(d);
    }
    useEffect(() => {
        const getData = async () => {
            const dData = await axios.get("https://5000-firojahmed1-collegeproj-q61ufo89vz5.ws-us110.gitpod.io/api/driver/disableCar/123456");
            setData(dData.data.data);
            //console.log(dData.data.data);
        }

        getData()
    }, [])
    console.log(data);
    return (
        <>
            <div>Test</div>
            {data?.map((d) => {
                return (
                    <>
                        <p key={d._id}>{d.carOwner}</p>
                        <button onClick={()=>buttonData(d)} >en</button>
                    </>
                )
            })}

            <button onClick={addData} >Add</button>
        </>
    )
}

export default Test