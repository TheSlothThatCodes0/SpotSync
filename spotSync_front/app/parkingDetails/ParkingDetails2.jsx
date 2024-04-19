import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { images } from "../../constants";
import { Link } from "expo-router";

console.disableYellowBox = true;

const ParkingDetails2 = () => {
  const [data, setData] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://192.168.53.249:8000/detect/slotsRemaining/");
  //       if (response.ok) {
  //         const jsonData = await response.json();
  //         setData(jsonData);
  //       } else {
  //         console.error("Error fetching data:", response.status);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const values = [59, 59, 59, 59, 60, 59, 60, 60, 60, 60, 60, 61, 61, 62]; // Replace with your list of values

    let index = 0;
    const interval = setInterval(() => {
      if (index === values.length) {
        clearInterval(interval);
        return;
      }
      setData(values[index]);
      index++;
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ScrollView className="bg-primary flex-1">
      <View className="flex my-6 px-4 space-y-6">
        <Image
          source={images.dlf}
          style={{
            width: "100%",
            height: 200,
            marginTop: 20,
            borderRadius: 20,
          }}
        />

        <Text className="font-pbold text-xl text-white mb-2 text-center mt-2">
          DLF Parking
        </Text>

        <View className="flex flex-col space-x-4 w-full h-32 px-5 bg-secondary rounded-2xl  mb-2">
          <Text className="font-pbold text-5xl text-black text-center mt-7" style={{ lineHeight: 55}}>
            {data}
          </Text>
          <Text className="font-pbold text-m text-black text-center">
            parking lots remaining
          </Text>
        </View>

        <View className="flex flex-col space-x-4 w-full h-58 px-5 bg-secondary rounded-2xl  mb-2">
          <Image
            source={images.graph}
            style={{
              width: "100%",
              height: 200,
              marginTop: 20,
            }}
          />
        </View>

        <View className="flex flex-col space-x-4 w-full h-58 px-5 bg-secondary rounded-2xl  mb-2">
          <Text className="font-pbold text-lg text-black text-center mt-2">
            Reviews
          </Text>
          <Text className="font-pregular text-m italic text-black text-center">
          "Consistently busy, particularly during night hours. Consider using a parking application to streamline the process." {"\n"} ~ Alex Johnson
          </Text>
          <Text className="font-pregular text-m italic text-black text-center mt-2">
          "Always plenty of spaces available, even during peak hours. The parking app makes finding a spot a breeze." {"\n"} ~ Taylor Smith
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ParkingDetails2;
