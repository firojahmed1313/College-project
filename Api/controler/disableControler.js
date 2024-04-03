import {DisableCar}  from "../model/disableCar.js";

export const disableCarData =async(req,res,next) => {
    const id = req.params.liId;
    //console.log(id);
    const data=await DisableCar.find({licence_id:id});
    res.status(200).json({
        success: true,
        data
    });
};

export const addDisablCar = async(req, res, next) => {
    const { carOwner, num_of_seat, vehicle, vehicleNo, category, licence_id, phoneNumber, rent, from, dest } = req.body.carData;
    //console.log(carOwner, num_of_seat, vehicle, vehicleNo, category, licence_id, phoneNumber, rent, from, dest);
    //console.log(req.body)
    const disableCar = await DisableCar.create({
        carOwner,
        num_of_seat,
        vehicle,
        vehicleNo,
        category,
        licence_id,
        phoneNumber,
        rent,
        from,
        dest
    });
    res.status(200).json({
        success: true,
        disableCar,
        massage: "Disable Car Added Sucessfully",
    });
};

export const disableCarDelete = async(req, res, next) => {
    const id = req.params.id;
    //console.log(id);
    const disableCar = await DisableCar.findByIdAndDelete(id);
    res.status(200).json({
        success: true,
        disableCar,
        massage: "Disable Car Deleted Sucessfully",
    });
};