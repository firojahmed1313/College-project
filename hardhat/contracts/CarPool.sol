// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.17;

//3,qwe,we,re,ert,123,12456,111111,13,kol,des
//kol,des,1234567

contract CarpoolingSystem {
    address driver;
    uint256 internal num_of_seats;
    uint256 internal rent;
    uint256 internal num_of_car;
    uint256 internal num_of_user;
    uint256 internal carId;
    uint256 internal userId;
    string internal setSelectedDriver;


    struct Car {
        address payable driver;
        uint256 num_of_seat; //
        uint256 carId;
        string name; //
        string vehicle; //
        string vehicleNo; //
        string category; //
        string licence_id; //
        string password; //
        string phoneNumber; //
        uint256 rent; //
        string from; //
        string dest; //
    }
    mapping(string => Car) carpools;
    //Car[] public  allcar;
    mapping(string => Car[]) carpool;
    struct BookCar {
        address payable driver;
        uint256 num_of_seat; //
        uint256 carId;
        string name; //
        string vehicle; //
        string vehicleNo; //
        string category; //
        string licence_id; //
        string password; //
        string phoneNumber; //
        uint256 rent; //
        string from; //
        string dest; //
        address user;
        uint256 userId;
        string phone_no;
    }
    mapping(string => BookCar) BookCarcarpools;

    
    struct User {
        address user;
        uint256 userId;
        string from;
        string dest;
        string phone_no;
    }

    mapping(string => User) internal user_by_phone_no;

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
        uint256 _num_of_seat,
        string memory _name,
        string memory _vehicle,
        string memory _vehicleNo,
        string memory _category,
        string memory _licence_id,
        string memory _password,
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
        carpools[_licence_id]=(
            Car(
                payable(msg.sender),
                _num_of_seat,
                carId,
                _name,
                _vehicle,
                _vehicleNo,
                _category,
                _licence_id,
                _password,
                _phoneNumber,
                _rent,
                _from,
                _dest
            )
        );
        
        carpool[_fromdest].push(carpools[_licence_id]);
        
    }

    function addUser(
        string memory _from,
        string memory _dest,
        string memory _phone_no
    ) public {
        userId = userId + 1;
        user_by_phone_no[_phone_no] = (
            User(msg.sender, userId, _from, _dest, _phone_no)
        );
    }

    function getUserCount() public view returns (uint256) {
        return userId;
    }

    function getCarCount() public view returns (uint256) {
        return carId;
    }

    function getAvailableCarpools(string memory _licence_id)
        public
        view
        returns (Car memory)
    {
        Car memory currentCar = carpools[_licence_id];
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

    function setSelected(string memory _vehicleNo) public {
        setSelectedDriver = _vehicleNo;
    }

    function getSelected(string memory _vehicleNo)
        public
        view
        returns (string memory)
    {
        string memory selectedDriver = setSelectedDriver;
        require(
            keccak256(abi.encodePacked(selectedDriver)) ==
                keccak256(abi.encodePacked(_vehicleNo)),
            "Only CHOOSE driver can perform this action"
        );
        return setSelectedDriver;
    }

    function makePayment(string memory _vehicleNo) public payable {
        //require(_carId >= 0 && _carId <= carId, "Invalid car ID");
        Car storage car = carpools[_vehicleNo];
        require(msg.sender != car.driver, "Cannot pay yourself");

        require(msg.value >= car.rent, "Insufficient funds to make payment");

        car.driver.transfer(msg.value);
    }

    /*function allData() public view returns(mapping(string => Car) memory) {
        return carpools;
    }
    struct CarData {
        string vehicleNo;
        Car car;
    }

    function allData() public view returns (CarData[] memory) {
        CarData[] memory carDataList = new CarData[](carId);
        for (uint i = 1; i <= carId; i++) {
            string memory vehicleNo = carpools[i].vehicleNo;
            carDataList[i - 1] = CarData(vehicleNo, carpools[vehicleNo]);
        }
        return carDataList;
    }*/
}
