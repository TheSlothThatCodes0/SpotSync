import React from 'react';
import { View, Image } from 'react-native';

const ParkingCapacityIndicator = ({ totalCapacity, slotsRemaining }) => {
  const filledCars = Math.floor((totalCapacity - slotsRemaining) / totalCapacity * 5);

  const carIcons = [];
  for (let i = 0; i < 5; i++) {
    const filled = i < filledCars;
    carIcons.push(
      <Image
        key={i}
        source={require('../assets/icons/car-solid.png')} // Replace with your car icon path
        style={{
          width: 30,
          height: 30,
          marginRight: 5,
          tintColor: filled ? 'black' : 'gray',
        }}
      />
    );
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {carIcons}
    </View>
  );
};

export default ParkingCapacityIndicator;
