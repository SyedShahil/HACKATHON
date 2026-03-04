import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Stethoscope } from "lucide-react-native";

export default function LoginScreen() {
  return (
    <View className="flex-1 bg-green-50 items-center justify-center px-6">

      {/* Background Illustration */}
      <Image
        source={require("@/assets/doctor1.png")}
        className="absolute w-80 h-80 opacity-30"
        resizeMode="contain"
      />

      <View className="w-full bg-white p-6 rounded-2xl shadow-lg">

        {/* Title */}
        <View className="flex-row items-center mb-6">
          <Stethoscope size={28} color="#166534" />
          <Text className="text-2xl font-bold text-green-800 ml-2">
            Login
          </Text>
        </View>

        <TextInput
          placeholder="Email"
          className="border border-green-200 p-3 rounded-lg mb-4"
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          className="border border-green-200 p-3 rounded-lg mb-5"
        />

        <TouchableOpacity className="bg-green-600 p-3 rounded-lg">
          <Text className="text-white text-center font-semibold">
            Login
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}