import React from 'react'
import locationmap from '../assets/locationMap.png'; // with import
const fetchCoordinates = async (cityName) => {
    const apiKey = "AIzaSyDGKcl7--OS9RAZC1gCtJaubTiktNFxGAA";
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(cityName)}&key=${apiKey}`;
/*
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'OK' && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location;
            return { lat, lng };
        } else {
            console.error('No results found for the city name.');
            return null;
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        return null;
    }*/
};
const cities = ['Sydney', 'Melbourne'];

// Fetch coordinates of each city
const fetchCityCoordinates = async () => {
    const cityCoordinates = [];
    for (const city of cities) {
        console.log(city);
        const coordinates = await fetchCoordinates(city);
        console.log(coordinates);
        if (coordinates) {
            cityCoordinates.push(coordinates);
        }
    }
    return cityCoordinates;
};
const drawPath = (map, cityCoordinates) => {
    const path = new google.maps.Polyline({
        path: cityCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    path.setMap(map);
};
const GoogleMap = () => {
    fetchCityCoordinates().then(cityCoordinates => {
        console.log(cityCoordinates);
        //drawPath(map, cityCoordinates);
    });
    return (
        <>
            <img src={locationmap} alt='map' className='mapimg' />
        </>
    )
}

export default GoogleMap