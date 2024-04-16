import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";

import { icons, images } from "../../constants";
import { SearchInput } from "../../components";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ParkingCapacityIndicator from "../../components/ParkingCapacityIndicator";
import { Link } from "expo-router";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-3xl text-secondary">
                  Welcome Back!
                </Text>
                <Text className="text-1xl font-psemibold text-white">
                  where are you planning {"\n"}to park today?
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.settings}
                  className="w-9 h-10"
                  resizeMode="contain"
                  tintColor="#CDCDE0"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="font-pbold text-2xl text-white mb-2">
                Parkings Nearby
              </Text>

              <View className="flex flex-col space-x-4 w-full h-32 px-5 bg-secondary rounded-2xl border-2 border-black-200 focus:border-secondary mb-2">
                <Text className="font-pmedium text-[18px] text-black mb-4 mt-3">
                  Ambiance Mall Parking
                </Text>
                <ParkingCapacityIndicator
                  totalCapacity={500}
                  slotsRemaining={100}
                />
                <Link
                  href={"../parkingDetails/ParkingDetails1"}
                  className="absolute right-2 bottom-2 px-4 py-2 mb-5 rounded-full bg-black text-white text-center"
                >
                  <Text className="font-pmedium mr-2">More Details</Text>
                  <Image
                    source={icons.rightArrow}
                    style={{ width: 12, height: 12, tintColor: 'white'}}
                  />
                </Link>
              </View>

              <View className="flex flex-col space-x-4 w-full h-32 px-5 bg-secondary rounded-2xl border-2 border-black-200 focus:border-secondary mb-2">
                <Text className="font-pmedium text-[18px] text-black mb-4 mt-3">
                  DLF Parking
                </Text>
                <ParkingCapacityIndicator
                  totalCapacity={500}
                  slotsRemaining={100}
                />
                <Link
                  href={"../parkingDetails/ParkingDetails2"}
                  className="absolute right-2 bottom-2 px-4 py-2 mb-5 rounded-full bg-black text-white text-center "
                >
                  <Text className="font-pmedium mr-2">More Details</Text>
                  <Image
                    source={icons.rightArrow}
                    style={{ width: 12, height: 12, tintColor: 'white'}}
                  />
                </Link>
              </View>

              <View className="flex flex-col space-x-4 w-full h-32 px-5 bg-secondary rounded-2xl border-2 border-black-200 focus:border-secondary mb-2">
                <Text className="font-pmedium text-[18px] text-black mb-4 mt-3">
                  CyberHub Parking
                </Text>
                <ParkingCapacityIndicator
                  totalCapacity={1000}
                  slotsRemaining={700}
                />
                <Link
                  href={"../parkingDetails/ParkingDetails3"}
                  className="absolute right-2 bottom-2 px-4 py-2 mb-5 rounded-full bg-black text-white text-center"
                >
                  <Text className="font-pmedium mr-2">More Details</Text>
                  <Image
                    source={icons.rightArrow}
                    style={{ width: 12, height: 12, tintColor: 'white'}}
                  />
                </Link>
              </View>
            </View>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
