import { DisableCar } from "../model/disableCar";

export const disableCarData =async(req,res,next) => {
    const id = req.params.id;
    const data=await DisableCar.find({licence_id:id});
    res.status(200).json({
        success: true,
        data
    });
};

export const addDisablCar = async(req, res, next) => {
    const { carOwner, num_of_seat, vehicle, vehicleNo, category, licence_id, phoneNumber, rent, from, dest } = req.body;
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