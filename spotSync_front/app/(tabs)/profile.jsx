import React from "react";
import { View, Image, Text } from "react-native";
import { icons, images } from "../../constants";

const Profile = () => {
  return (
    <View className="flex-1 justify-center  bg-primary px-4 space-y-6">
      <View className="flex flex-row justify-end mb-20">
        <Image source={icons.edit} className="w-5 h-5 mt-1 mr-3" tintColor="white"/>
        <Text className="font-pmedium text-[18px] text-white">Edit</Text>
      </View>
      <View className="flex flex-col items-center justify-center">
        <Image source={images.rrs} className="w-24 h-24 rounded-full" />
        <Text className="text-xl font-pbold my-2 text-white">
          Dr Rajiv Ratn Shah
        </Text>
      </View>

      <View className="flex flex-row space-x-2">
        <View className="flex flex-col items-center justify-center w-1/3 bg-secondary rounded-xl">
          <Image source={icons.help} className="w-10 h-10 mt-2" />
          <Text className="font-pmedium text-[18px] text-black mt-3">Help</Text>
        </View>
        <View className="flex flex-col items-center justify-center w-1/3 bg-secondary rounded-xl">
          <Image source={icons.wallet} className="w-10 h-10 mt-2" />
          <Text className="font-pmedium text-[18px] text-black mt-3">
            Payments
          </Text>
        </View>
        <View className="flex flex-col items-center justify-center w-1/3 bg-secondary rounded-xl">
          <Image source={icons.activity} className="w-10 h-10 mt-2" />
          <Text className="font-pmedium text-[18px] text-black mt-3">
            Activity
          </Text>
        </View>
      </View>
      <View className="flex flex-row space-x-2">
        <Image source={icons.invoice} className="w-5 h-5 mt-1" tintColor="white"/>
        <Text className="font-pmedium text-[18px] text-white">
          Invoices
        </Text>
      </View>
      <View className="flex flex-row space-x-2">
        <Image source={images.settings} className="w-5 h-5 mt-1" tintColor="white"/>
        <Text className="font-pmedium text-[18px] text-white">
          Settings
        </Text>
      </View>
      <View className="flex flex-row space-x-2">
        <Image source={icons.notifications} className="w-5 h-5 mt-1" tintColor="white"/>
        <Text className="font-pmedium text-[18px] text-white">
          Notifications
        </Text>
      </View>
      <View className="flex flex-row space-x-2">
        <Image source={icons.info} className="w-5 h-5 mt-1" tintColor="white"/>
        <Text className="font-pmedium text-[18px] text-white">
          Legal
        </Text>
      </View>
    </View>
  );
};

export default Profile;
