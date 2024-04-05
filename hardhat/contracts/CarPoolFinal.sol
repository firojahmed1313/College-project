// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.24;
//pragma solidity optimizer runs=200;
//0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,3,qwe,we,re,ert,123,111111,13,kol,des
//kol,des,1234567,re
//getAvailableCarBylicenceId - why deleted add ====solved  isDeleted[_vehicleNo] = false;
//getSelected only licence_id not vehicleNo 

contract CarpoolingSystemFinal {
    address driver;
    uint256 internal carId;
    uint256 internal userId;
    mapping(string => bool) public isDeleted;

    mapping (string=>string) public setSelectedDrivers;
 
    struct Car {
        address payable driver;
        uint256 num_of_seat;
        string name; //
        string vehicle; //
        string vehicleNo; 
        string category;
        string licence_id; //
        string phoneNumber; //
        uint256 rent; //
        string from; //
        string dest; //
    }
    mapping(string => Car) carpools;
    mapping(string => Car[]) carpool;
    mapping(string => Car[]) carpoollicence;

    struct User {
        address user;
        uint256 userId;
        string from;
        string dest;
        string phone_no;
        //string vehicleNo;
        Car BookedCar;
    }

    mapping(string => User[]) internal user_by_phone_no;
    mapping(string => User) user_by_vehicleNo;
    mapping (string => User[]) bookedDatabyvehicleNo;

    function addCar(
        address payable _carOwner,
        uint256 _num_of_seat,
        string memory _name,
        string memory _vehicle,
        string memory _vehicleNo,
        string memory _category,
        string memory _licence_id,
        string memory _phoneNumber,
        uint256 _rent,
        string memory _from,
        string memory _dest
    ) public payable {
        carId = carId + 1;
        bytes memory fromBytes = bytes(_from);
        bytes memory destBytes = bytes(_dest);
        string memory _fromdest = string(
            abi.encodePacked(fromBytes, destBytes)
        );
        carpools[_vehicleNo] = (
            Car(
                _carOwner,
                _num_of_seat,
                 _name,
                _vehicle,
                _vehicleNo,
                _category,               
                _licence_id,
                _phoneNumber,
                _rent,
                _from,
                _dest
            )
        );

        carpool[_fromdest].push(carpools[_vehicleNo]);
        carpoollicence[_licence_id].push(carpools[_vehicleNo]);
        isDeleted[_vehicleNo] = false;
    }

    function cardeleteRecord(string memory _vehicleNo) public {
        require(!isDeleted[_vehicleNo], "The record is already deleted");
        Car storage car = carpools[_vehicleNo];
        string memory fromDest = string(
            abi.encodePacked(bytes(car.from), bytes(car.dest))
        );
        uint256 index;
        uint256 length = carpool[fromDest].length;
        for (uint256 i = 0; i < length; i++) {
            if (keccak256(bytes(carpool[fromDest][i].vehicleNo)) == keccak256(bytes(_vehicleNo))) {
                index = i;
                break;
            }
        }
        carpool[fromDest][index] = carpool[fromDest][length - 1];
        carpool[fromDest].pop();

        // Remove the car from the carpoollicence mapping
        length = carpoollicence[car.licence_id].length;
        for (uint256 i = 0; i < length; i++) {
            if (keccak256(bytes(carpoollicence[car.licence_id][i].vehicleNo ))== keccak256(bytes(_vehicleNo))) {
                index = i;
                break;
            }
        }
        carpoollicence[car.licence_id][index] = carpoollicence[car.licence_id][
            length - 1
        ];
        carpoollicence[car.licence_id].pop();
        delete carpools[_vehicleNo];
        isDeleted[_vehicleNo] = true;
    }

    function getUserCount() public view returns (uint256) {
        return userId;
    }

    function getAvailableCarpools(string memory _vehicleNo)
        public
        view
        returns (Car memory)
    {
        Car memory currentCar = carpools[_vehicleNo];
        return currentCar;
    }

    function getAvailableCarBylicenceId(string memory _licence_id)
        public
        view
        returns (Car[] memory)
    {
        Car[] memory currentCar = carpoollicence[_licence_id];

        return currentCar;
    }
    function getBookedCarBylicenceId(string memory _licence_id)
        public
        view
        returns (User[] memory)
    {
        User[] memory currentCar = bookedDatabyvehicleNo[_licence_id];

        return currentCar;
    }

    function getAvailableCarByDest(string memory _dest)
        public
        view
        returns (Car[] memory)
    {
        Car[] memory currentCar = carpool[_dest];

        return currentCar;
    }

    function getAvailableUser(string memory _phoneNo)
        public
        view
        returns (User[] memory)
    {
        User[] memory currentUser = user_by_phone_no[_phoneNo];

        return currentUser;
    }


    function getSelected(string memory _licence_id)
        public
        view
        returns (User memory)
    {
        string memory selectedDriver = setSelectedDrivers[_licence_id];
        return user_by_vehicleNo[selectedDriver];
    }

    function makePayment(
        string memory _from,
        string memory _dest,
        string memory _phone_no,
        string memory _vehicleNo
    ) public payable {
        //require(_carId >= 0 && _carId <= carId, "Invalid car ID");
        Car storage car = carpools[_vehicleNo];
        require(msg.sender != car.driver, "Cannot pay yourself");

        require(msg.value >= car.rent, "Insufficient funds to make payment");

        car.driver.transfer(msg.value);
        userId = userId + 1;
        user_by_vehicleNo[_vehicleNo] = (
            User(
                msg.sender,
                userId,
                _from,
                _dest,
                _phone_no,
                carpools[_vehicleNo]
            )
        );
        user_by_phone_no[_phone_no].push(user_by_vehicleNo[_vehicleNo]);
        setSelectedDrivers[car.licence_id] = _vehicleNo;
    }
    function bookedList(string memory _vehicleNo,string memory _licence_id) public  {
        delete setSelectedDrivers[_licence_id] ;
        bookedDatabyvehicleNo[_licence_id].push(user_by_vehicleNo[_vehicleNo]);
    }

}
