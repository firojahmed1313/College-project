// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.17;

//add,3,qwe,we,re,ert,123,111111,13,kol,des
//kol,des,1234567,re
// add user with payment and setSelected*
//GET CHANGE*
contract CarpoolingSystemFinal {
    address driver;
    uint256 internal carId;
    uint256 internal userId;
    string internal setSelectedDriver;

    struct Car {
        address payable carOwner;
        address payable driver;
        uint256 num_of_seat; //
        uint256 carId;
        string name; //
        string vehicle; //
        string vehicleNo; //
        string category; //
        string licence_id; //
        //
        string phoneNumber; //
        uint256 rent; //
        string from; //
        string dest; //
    }
    mapping(string => Car) carpools;
    //Car[] public  allcar;
    mapping(string => Car[]) carpool;
    mapping(string => Car[]) carpoollicence;

    struct User {
        address user;
        string name;
        uint256 userId;
        string from;
        string dest;
        string phone_no;
        //string vehicleNo;
        Car BookedCar;
    }

    mapping(string => User[]) internal user_by_phone_no;
    mapping(string => User) user_by_vehicleNo;

    constructor() {
        driver = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(
            msg.sender == driver,
            "Only contract owner can perform this action"
        );
        _;
    }
    modifier notOwner() {
        require(
            msg.sender != driver,
            "Only contract user can perform this action"
        );
        _;
    }

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
                payable(msg.sender),
                _num_of_seat,
                carId,
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
    }

   

    function getUserCount() public view returns (uint256) {
        return userId;
    }

    function getCarCount() public view returns (uint256) {
        return carId;
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

    

    function getSelected(string memory _vehicleNo)
        public
        view
        returns (User memory)
    {
        string memory selectedDriver = setSelectedDriver;
        require(
            keccak256(abi.encodePacked(selectedDriver)) ==
                keccak256(abi.encodePacked(_vehicleNo)),
            "Only CHOOSE driver can perform this action"
        );
        return user_by_vehicleNo[setSelectedDriver];
    }

    function makePayment( 
        string memory _name,
        string memory _from,
        string memory _dest,
        string memory _phone_no,
        string memory _vehicleNo
    ) public payable {
        Car storage car = carpools[_vehicleNo];
        require(msg.sender != car.driver, "Cannot pay yourself");

        require(msg.value >= car.rent, "Insufficient funds to make payment");

        car.driver.transfer(msg.value);
        userId = userId + 1;
        user_by_vehicleNo[_vehicleNo]=(
            User(
                msg.sender,
                _name,
                userId,
                _from,
                _dest,
                _phone_no,
                carpools[_vehicleNo]
            )
        );
        user_by_phone_no[_phone_no].push(user_by_vehicleNo[_vehicleNo]);
        setSelectedDriver = _vehicleNo;
    }
}
