import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <Loader isLoading={loading} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.spotsynclogo}
            className="w-[300px] h-[100px]"
            resizeMode="contain"
          />
          <View className="relative mt-2">
            <Text className="text-2xl text-white font-bold text-center">
                Never Hunt For Parking Spots Again 
            </Text>

          </View>

          <CustomButton
            title="Continue with Phone Number"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-20"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
