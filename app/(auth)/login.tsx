import { View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';

const Login = () => {
  const { isUser, logOut, login } = useAuth();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter()

  const handleLogin = () => {
    if (username === "admin" && password === "1234"){
        alert("login successfull")
    // You can pass username/password to login() if needed
    login();
    router.replace("/")
    }
  };

  return (
    <View className="flex-1 w-full bg-gradient-to-br from-pink-50 to-white justify-center items-center px-6">
      
      {/* Login Card Container */}
      <View className="w-full max-w-sm bg-white rounded-3xl shadow-lg p-8 border border-pink-100">
        
        {/* Header Section */}
        <View className="items-center mb-8">
          <View className="w-20 h-20 bg-pink-100 rounded-full items-center justify-center mb-4">
            <Text className="text-pink-500 text-4xl">🐾</Text>
          </View>
          <Text className="text-2xl font-bold text-pink-600 mb-2">PetCare</Text>
          <Text className="text-gray-500 text-center">Welcome back! Please sign in to continue</Text>
        </View>

        {/* Username input */}
        <View className="mb-4">
          <Text className="text-pink-600 font-medium mb-2 ml-1">Username</Text>
          <TextInput
            placeholder="Enter your username"
            placeholderTextColor="#d1d5db"
            className="w-full border-2 border-pink-100 rounded-xl p-4 bg-pink-50 text-gray-700 focus:border-pink-300"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        {/* Password input */}
        <View className="mb-6">
          <Text className="text-pink-600 font-medium mb-2 ml-1">Password</Text>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#d1d5db"
            className="w-full border-2 border-pink-100 rounded-xl p-4 bg-pink-50 text-gray-700 focus:border-pink-300"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Login button */}
        <TouchableOpacity
          onPress={handleLogin}
          className="w-full bg-gradient-to-r from-pink-400 to-pink-500 rounded-xl py-4 shadow-md active:shadow-sm"
        >
          <Text className="text-white text-lg font-bold text-center">Sign In</Text>
        </TouchableOpacity>

        {/* Forgot Password Link */}
        <TouchableOpacity className="mt-4">
          <Text className="text-pink-400 text-center font-medium">Forgot Password?</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-pink-100"></View>
          <Text className="mx-4 text-gray-400 font-medium">OR</Text>
          <View className="flex-1 h-px bg-pink-100"></View>
        </View>

        {/* Sign Up Link */}
        <View className="flex-row justify-center">
          <Text className="text-gray-500">Don't have an account? </Text>
          <TouchableOpacity>
            <Text className="text-pink-500 font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom decorative elements */}
      <View className="absolute bottom-10 flex-row space-x-2">
        <View className="w-2 h-2 bg-pink-200 rounded-full"></View>
        <View className="w-2 h-2 bg-pink-300 rounded-full"></View>
        <View className="w-2 h-2 bg-pink-400 rounded-full"></View>
      </View>
      
    </View>
  );
};

export default Login;