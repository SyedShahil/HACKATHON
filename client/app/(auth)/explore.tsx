import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import { Stethoscope, User, Mail, Phone, Lock } from "lucide-react-native";

export default function RegisterScreen() {
  return (
    <ScrollView className="flex-1 bg-green-50">

      <View className="flex-1 items-center justify-center px-6 py-20">

        {/* Background Illustration */}
        <Image
          source={require("@/assets/doctor2.png")}
          className="absolute w-80 h-80 opacity-30"
          resizeMode="contain"
        />

        {/* Card */}
        <View className="w-full bg-white rounded-2xl shadow-lg p-6">

          {/* Title */}
          <View className="flex-row items-center mb-6">
            <Stethoscope size={28} color="#166534" />
            <Text className="text-2xl font-bold text-green-800 ml-2">
              Register
            </Text>
          </View>

          {/* Name */}
          <View className="flex-row items-center border border-green-200 rounded-lg px-3 mb-3">
            <User size={18} color="#166534" />
            <TextInput
              placeholder="Full Name"
              className="flex-1 p-3 ml-2"
            />
          </View>

          {/* Email */}
          <View className="flex-row items-center border border-green-200 rounded-lg px-3 mb-3">
            <Mail size={18} color="#166534" />
            <TextInput
              placeholder="Email"
              className="flex-1 p-3 ml-2"
            />
          </View>

          {/* Phone */}
          <View className="flex-row items-center border border-green-200 rounded-lg px-3 mb-3">
            <Phone size={18} color="#166534" />
            <TextInput
              placeholder="Phone Number"
              keyboardType="phone-pad"
              className="flex-1 p-3 ml-2"
            />
          </View>

          {/* Address */}
         

          {/* Password */}
          <View className="flex-row items-center border border-green-200 rounded-lg px-3 mb-5">
            <Lock size={18} color="#166534" />
            <TextInput
              placeholder="Password"
              secureTextEntry
              className="flex-1 p-3 ml-2"
            />
          </View>

          {/* Register Button */}
          <TouchableOpacity className="bg-green-600 rounded-lg p-3">
            <Text className="text-white text-center font-semibold text-base">
              Register
            </Text>
          </TouchableOpacity>

        </View>
      </View>

    </ScrollView>
  );
}