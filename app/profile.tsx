import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
// import * as ImagePicker from 'expo-image-picker'

const PetRegistrationForm = () => {
  const [formData, setFormData] = useState({
    petName: '',
    category: '',
    breed: '',
    age: '',
    weight: '',
    color: '',
    description: '',
    image: null
  })

  const [errors, setErrors] = useState({})

  const categories = [
    { label: 'Select Category', value: '' },
    { label: 'Dog 🐕', value: 'dog' },
    { label: 'Cat 🐱', value: 'cat' },
    { label: 'Bird 🐦', value: 'bird' },
    { label: 'Rabbit 🐰', value: 'rabbit' },
    { label: 'Fish 🐠', value: 'fish' },
    { label: 'Hamster 🐹', value: 'hamster' },
    { label: 'Other 🐾', value: 'other' }
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.petName.trim()) {
      newErrors.petName = 'Pet name is required'
    }
    
    if (!formData.category) {
      newErrors.category = 'Please select a category'
    }
    
    if (!formData.breed.trim()) {
      newErrors.breed = 'Breed is required'
    }
    
    if (!formData.age.trim()) {
      newErrors.age = 'Age is required'
    } else if (isNaN(formData.age) || formData.age <= 0) {
      newErrors.age = 'Please enter a valid age'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert(
        'Success!',
        `${formData.petName} has been registered successfully!`,
        [{ text: 'OK', onPress: () => console.log('Pet registered:', formData) }]
      )
      // Here you would typically send the data to your backend
    } else {
      Alert.alert('Error', 'Please fill in all required fields correctly.')
    }
  }

  const handleImagePicker = async () => {
    // Uncomment and use this with expo-image-picker
    /*
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    if (!result.canceled) {
      setFormData(prev => ({
        ...prev,
        image: result.assets[0].uri
      }))
    }
    */
    
    // For demo purposes
    Alert.alert('Image Picker', 'Image picker would open here. Install expo-image-picker to enable this feature.')
  }

  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  return (
    <ScrollView className="flex-1 bg-gradient-to-b from-pink-50 to-white">
      <View className="px-6 pt-12 pb-8">
        
        {/* Header */}
        <View className="items-center mb-8">
          <View className="w-20 h-20 bg-pink-100 rounded-full items-center justify-center mb-4">
            <Text className="text-pink-500 text-4xl">🐾</Text>
          </View>
          <Text className="text-3xl font-bold text-pink-600 mb-2">Register Your Pet</Text>
          <Text className="text-gray-500 text-center text-lg">Add your furry friend to our family</Text>
        </View>

        {/* Form Container */}
        <View className="bg-white rounded-3xl shadow-lg p-6 border border-pink-100">
          
          {/* Image Upload Section */}
          <View className="items-center mb-6">
            <TouchableOpacity 
              onPress={handleImagePicker}
              className="w-32 h-32 bg-pink-50 rounded-full items-center justify-center border-2 border-dashed border-pink-200 mb-4"
            >
              {formData.image ? (
                <Image 
                  source={{ uri: formData.image }} 
                  className="w-full h-full rounded-full"
                  resizeMode="cover"
                />
              ) : (
                <View className="items-center">
                  <Text className="text-pink-400 text-4xl mb-2">📸</Text>
                  <Text className="text-pink-500 font-medium">Add Photo</Text>
                </View>
              )}
            </TouchableOpacity>
            <Text className="text-gray-500 text-center">Tap to upload your pet's photo</Text>
          </View>

          {/* Pet Name */}
          <View className="mb-4">
            <Text className="text-pink-600 font-semibold mb-2 text-lg">Pet Name *</Text>
            <TextInput
              placeholder="Enter your pet's name"
              placeholderTextColor="#d1d5db"
              className={`w-full border-2 rounded-xl p-4 bg-pink-50 text-gray-700 text-lg ${
                errors.petName ? 'border-red-300' : 'border-pink-100'
              }`}
              value={formData.petName}
              onChangeText={(text) => updateField('petName', text)}
            />
            {errors.petName && (
              <Text className="text-red-500 text-sm mt-1 ml-2">{errors.petName}</Text>
            )}
          </View>

          {/* Category Dropdown */}
          <View className="mb-4">
            <Text className="text-pink-600 font-semibold mb-2 text-lg">Category *</Text>
            <View className={`border-2 rounded-xl bg-pink-50 ${
              errors.category ? 'border-red-300' : 'border-pink-100'
            }`}>
              <Picker
                selectedValue={formData.category}
                onValueChange={(value) => updateField('category', value)}
                style={{ height: 60, color: '#374151' }}
              >
                {categories.map((cat, index) => (
                  <Picker.Item key={index} label={cat.label} value={cat.value} />
                ))}
              </Picker>
            </View>
            {errors.category && (
              <Text className="text-red-500 text-sm mt-1 ml-2">{errors.category}</Text>
            )}
          </View>

          {/* Breed */}
          <View className="mb-4">
            <Text className="text-pink-600 font-semibold mb-2 text-lg">Breed *</Text>
            <TextInput
              placeholder="Enter breed (e.g., Golden Retriever, Persian)"
              placeholderTextColor="#d1d5db"
              className={`w-full border-2 rounded-xl p-4 bg-pink-50 text-gray-700 text-lg ${
                errors.breed ? 'border-red-300' : 'border-pink-100'
              }`}
              value={formData.breed}
              onChangeText={(text) => updateField('breed', text)}
            />
            {errors.breed && (
              <Text className="text-red-500 text-sm mt-1 ml-2">{errors.breed}</Text>
            )}
          </View>

          {/* Age and Weight Row */}
          <View className="flex-row mb-4">
            <View className="flex-1 mr-2">
              <Text className="text-pink-600 font-semibold mb-2 text-lg">Age * (years)</Text>
              <TextInput
                placeholder="Age"
                placeholderTextColor="#d1d5db"
                className={`w-full border-2 rounded-xl p-4 bg-pink-50 text-gray-700 text-lg ${
                  errors.age ? 'border-red-300' : 'border-pink-100'
                }`}
                value={formData.age}
                onChangeText={(text) => updateField('age', text)}
                keyboardType="numeric"
              />
              {errors.age && (
                <Text className="text-red-500 text-sm mt-1 ml-2">{errors.age}</Text>
              )}
            </View>
            <View className="flex-1 ml-2">
              <Text className="text-pink-600 font-semibold mb-2 text-lg">Weight (kg)</Text>
              <TextInput
                placeholder="Weight"
                placeholderTextColor="#d1d5db"
                className="w-full border-2 border-pink-100 rounded-xl p-4 bg-pink-50 text-gray-700 text-lg"
                value={formData.weight}
                onChangeText={(text) => updateField('weight', text)}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Color */}
          <View className="mb-4">
            <Text className="text-pink-600 font-semibold mb-2 text-lg">Color</Text>
            <TextInput
              placeholder="Pet's primary color (e.g., Brown, Black, White)"
              placeholderTextColor="#d1d5db"
              className="w-full border-2 border-pink-100 rounded-xl p-4 bg-pink-50 text-gray-700 text-lg"
              value={formData.color}
              onChangeText={(text) => updateField('color', text)}
            />
          </View>

          {/* Description */}
          <View className="mb-6">
            <Text className="text-pink-600 font-semibold mb-2 text-lg">Description</Text>
            <TextInput
              placeholder="Tell us more about your pet's personality, habits, etc."
              placeholderTextColor="#d1d5db"
              className="w-full border-2 border-pink-100 rounded-xl p-4 bg-pink-50 text-gray-700 text-lg"
              value={formData.description}
              onChangeText={(text) => updateField('description', text)}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            onPress={handleSubmit}
            className="w-full bg-gradient-to-r from-pink-400 to-pink-500 rounded-xl py-5 shadow-md"
          >
            <Text className="text-white text-xl font-bold text-center">Register Pet 🐾</Text>
          </TouchableOpacity>

          {/* Cancel Button */}
          <TouchableOpacity
            className="w-full mt-4 border-2 border-pink-200 rounded-xl py-4"
          >
            <Text className="text-pink-500 text-lg font-semibold text-center">Cancel</Text>
          </TouchableOpacity>

        </View>

        {/* Bottom Note */}
        <View className="mt-6 bg-pink-50 rounded-2xl p-4">
          <Text className="text-pink-600 text-center font-medium">
            💡 Tip: Adding a photo helps vets and caregivers identify your pet easily!
          </Text>
        </View>

        {/* Bottom Spacing */}
        <View className="h-8"></View>

      </View>
    </ScrollView>
  )
}

export default PetRegistrationForm