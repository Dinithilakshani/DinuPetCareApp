import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'


const { width, height } = Dimensions.get('window');

const Index = () => {
  return (
    <View className="flex-1 bg-gradient-to-br from-pink-50 via-white to-pink-100">
      {/* Status Bar Space */}
      <View className="h-12 bg-transparent"></View>
      
      {/* Main Content */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        
        {/* Hero Section - Full Width */}
        <View className="bg-gradient-to-r from-pink-400 via-pink-500 to-rose-400 mx-4 rounded-3xl p-8 mb-6 shadow-xl" style={{minHeight: height * 0.25}}>
          <View className="flex-row justify-between items-start mb-4">
            <View className="flex-1">
              <Text className="text-white text-3xl font-bold mb-2">Welcome Back, Dinu! 🐾</Text>
              <Text className="text-pink-100 text-lg">Your pets are waiting for some love</Text>
            </View>
            <TouchableOpacity className="w-14 h-14 bg-white/20 backdrop-blur rounded-full items-center justify-center">
              <Text className="text-white text-2xl">🔔</Text>
            </TouchableOpacity>
          </View>
          
          {/* Pet Status in Hero */}
          <View className="bg-white/20 backdrop-blur rounded-2xl p-4 mt-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="text-white font-bold text-lg">Today's Summary</Text>
                <Text className="text-pink-100">3 pets • All healthy • 2 activities</Text>
              </View>
              <View className="w-12 h-12 bg-white/30 rounded-full items-center justify-center">
                <Text className="text-white text-xl">❤️</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Search Section - Full Width */}
        <View className="px-4 mb-6">
          <View className="bg-white rounded-2xl shadow-lg border border-pink-100/50" style={{height: 60}}>
            <View className="flex-row items-center px-6 h-full">
              <Text className="text-pink-400 text-xl mr-4">🔍</Text>
              <TextInput
                placeholder="Search for vets, services, or pet care tips..."
                placeholderTextColor="#d1d5db"
                className="flex-1 text-gray-700 text-lg"
              />
              <TouchableOpacity className="w-10 h-10 bg-pink-100 rounded-full items-center justify-center">
                <Text className="text-pink-500">⚙️</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Quick Actions Grid - Full Width */}
        <View className="px-4 mb-6">
          <Text className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</Text>
          <View className="flex-row flex-wrap justify-between">
            {[
              {emoji: '🏥', title: 'Emergency Vet', subtitle: 'Find nearby clinic'},
              {emoji: '📅', title: 'Appointments', subtitle: 'Schedule visit'},
              {emoji: '💊', title: 'Medications', subtitle: 'Track medicine'},
              {emoji: '🍖', title: 'Feeding', subtitle: 'Meal tracker'},
              {emoji: '🎾', title: 'Activities', subtitle: 'Play & exercise'},
              {emoji: '📊', title: 'Health Stats', subtitle: 'View reports'}
            ].map((item, index) => (
              <TouchableOpacity 
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100/50 mb-4"
                style={{width: (width - 48) / 2 - 8}}
              >
                <View className="items-center">
                  <View className="w-16 h-16 bg-pink-100 rounded-2xl items-center justify-center mb-3">
                    <Text className="text-3xl">{item.emoji}</Text>
                  </View>
                  <Text className="text-gray-800 font-bold text-lg text-center">{item.title}</Text>
                  <Text className="text-gray-500 text-sm text-center mt-1">{item.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Navigation Menu - Enhanced */}
        <View className="px-4 mb-6">
      <Text className="text-2xl font-bold text-gray-800 mb-4">Menu</Text>
      <View className="space-y-4">
        {/* Medical Health Link */}
        <Link href="/medical" asChild>
          <TouchableOpacity className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100/50">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1">
                <View className="w-16 h-16 bg-gradient-to-br from-blue-400 to-pink-500 rounded-2xl items-center justify-center mr-4">
                  <Text className="text-white text-2xl">🩺</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-800 font-bold text-xl">Medical Health</Text>
                  <Text className="text-gray-500 text-lg mt-1">Track vaccinations and vet visits</Text>
                </View>
              </View>
              <View className="w-12 h-12 bg-pink-100 rounded-full items-center justify-center">
                <Text className="text-pink-500 text-xl">›</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>

        {/* Food Link */}
        <Link href="/food" asChild>
          <TouchableOpacity className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100/50">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1">
                <View className="w-16 h-16 bg-gradient-to-br from-green-400 to-pink-500 rounded-2xl items-center justify-center mr-4">
                  <Text className="text-white text-2xl">🍽️</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-800 font-bold text-xl">Food & Nutrition</Text>
                  <Text className="text-gray-500 text-lg mt-1">Manage diet and feeding schedules</Text>
                </View>
              </View>
              <View className="w-12 h-12 bg-pink-100 rounded-full items-center justify-center">
                <Text className="text-pink-500 text-xl">›</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>

        {/* Bathing Link */}
        <Link href="/bathing" asChild>
          <TouchableOpacity className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100/50">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1">
                <View className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl items-center justify-center mr-4">
                  <Text className="text-white text-2xl">🛁</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-800 font-bold text-xl">Bathing & Grooming</Text>
                  <Text className="text-gray-500 text-lg mt-1">Schedule baths and grooming</Text>
                </View>
              </View>
              <View className="w-12 h-12 bg-pink-100 rounded-full items-center justify-center">
                <Text className="text-pink-500 text-xl">›</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>

        {/* Pet Tracker - Retained */}
        <Link href="/pet-tracker" asChild>
          <TouchableOpacity className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100/50">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1">
                <View className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl items-center justify-center mr-4">
                  <Text className="text-white text-2xl">📱</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-800 font-bold text-xl">Pet Tracker</Text>
                  <Text className="text-gray-500 text-lg mt-1">GPS tracking and safety alerts</Text>
                </View>
              </View>
              <View className="w-12 h-12 bg-pink-100 rounded-full items-center justify-center">
                <Text className="text-pink-500 text-xl">›</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
        {/* Recent Activities - Full Width */}
        <View className="px-4 mb-6">
          <Text className="text-2xl font-bold text-gray-800 mb-4">Recent Activities</Text>
          <View className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100/50">
            {[
              {status: 'success', activity: 'Vaccination completed for Max', time: '2 hours ago', color: 'bg-green-400'},
              {status: 'reminder', activity: 'Feeding time for Luna', time: '4 hours ago', color: 'bg-blue-400'},
              {status: 'play', activity: 'Playtime session with Buddy', time: 'Yesterday', color: 'bg-pink-400'},
              {status: 'health', activity: 'Health checkup scheduled', time: '2 days ago', color: 'bg-purple-400'}
            ].map((item, index) => (
              <View key={index} className={`flex-row items-center py-4 ${index !== 3 ? 'border-b border-pink-50' : ''}`}>
                <View className={`w-4 h-4 ${item.color} rounded-full mr-4`}></View>
                <View className="flex-1">
                  <Text className="text-gray-800 font-semibold text-lg">{item.activity}</Text>
                  <Text className="text-gray-500 text-base mt-1">{item.time}</Text>
                </View>
                <TouchableOpacity className="w-10 h-10 bg-pink-50 rounded-full items-center justify-center">
                  <Text className="text-pink-400">›</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* Stats Section */}
        <View className="px-4 mb-8">
          <Text className="text-2xl font-bold text-gray-800 mb-4">This Week</Text>
          <View className="flex-row justify-between">
            <View className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100/50 flex-1 mr-2">
              <Text className="text-3xl text-center mb-2">🚶</Text>
              <Text className="text-2xl font-bold text-gray-800 text-center">12.5k</Text>
              <Text className="text-gray-500 text-center">Steps</Text>
            </View>
            <View className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100/50 flex-1 mx-1">
              <Text className="text-3xl text-center mb-2">🕐</Text>
              <Text className="text-2xl font-bold text-gray-800 text-center">8.5h</Text>
              <Text className="text-gray-500 text-center">Play Time</Text>
            </View>
            <View className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100/50 flex-1 ml-2">
              <Text className="text-3xl text-center mb-2">💝</Text>
              <Text className="text-2xl font-bold text-gray-800 text-center">15</Text>
              <Text className="text-gray-500 text-center">Care Tasks</Text>
            </View>
          </View>
        </View>

        {/* Bottom Safe Area */}
        <View className="h-8"></View>
        
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity 
        className="absolute bottom-8 right-6 w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full items-center justify-center shadow-2xl"
        style={{elevation: 8}}
      >
        <Text className="text-white text-2xl">+</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Index