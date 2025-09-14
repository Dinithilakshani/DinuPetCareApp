import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Food = () => {
  const [selectedAge, setSelectedAge] = useState('puppy')
  const [selectedAnimal, setSelectedAnimal] = useState('dog')

  const nutritionData = {
    dog: {
      puppy: {
        title: 'Puppy Nutrition (0-12 months)',
        dailyMeals: '3-4 meals per day',
        waterIntake: '1/2 to 1 ounce per pound of body weight',
        items: [
          {
            foodType: 'High-Quality Puppy Food',
            description: '22-32% protein, 10-25% fat. Look for AAFCO certification.',
            amount: '1/4 to 2 cups daily (depending on size)',
            timing: 'Morning, afternoon, evening',
            safety: 'safe'
          },
          {
            foodType: 'Wet Puppy Food',
            description: 'Can supplement dry food. Higher moisture content.',
            amount: '1-3 cans daily (based on size)',
            timing: 'Mix with dry food',
            safety: 'safe'
          },
          {
            foodType: 'Puppy Treats',
            description: 'Training treats should be small and soft.',
            amount: 'No more than 10% of daily calories',
            timing: 'During training sessions',
            safety: 'moderate'
          },
          {
            foodType: 'Raw Diet',
            description: 'Consult vet first. Risk of bacteria and nutritional imbalance.',
            amount: 'Vet supervised portions',
            timing: 'Not recommended for puppies',
            safety: 'caution'
          }
        ],
        forbidden: ['Chocolate', 'Grapes', 'Onions', 'Xylitol', 'Cooked bones', 'Avocado']
      },
      adult: {
        title: 'Adult Dog Nutrition (1-7 years)',
        dailyMeals: '2 meals per day',
        waterIntake: '1 ounce per pound of body weight',
        items: [
          {
            foodType: 'Premium Adult Dog Food',
            description: '18-25% protein, 8-17% fat. Complete and balanced.',
            amount: '1-3 cups daily (breed dependent)',
            timing: 'Morning and evening',
            safety: 'safe'
          },
          {
            foodType: 'Grain-Free Options',
            description: 'Good for dogs with grain sensitivities.',
            amount: 'Follow package guidelines',
            timing: 'Regular meal times',
            safety: 'safe'
          },
          {
            foodType: 'Fresh Vegetables',
            description: 'Carrots, green beans, sweet potato as treats.',
            amount: '10% of daily intake max',
            timing: 'Between meals or training',
            safety: 'safe'
          },
          {
            foodType: 'Table Scraps',
            description: 'Most human food is not suitable for dogs.',
            amount: 'Avoid completely',
            timing: 'Never',
            safety: 'danger'
          }
        ],
        forbidden: ['Chocolate', 'Grapes', 'Onions', 'Garlic', 'Macadamia nuts', 'Alcohol']
      },
      senior: {
        title: 'Senior Dog Nutrition (7+ years)',
        dailyMeals: '2-3 smaller meals per day',
        waterIntake: '1-1.5 ounces per pound (kidney support)',
        items: [
          {
            foodType: 'Senior Formula Dog Food',
            description: 'Lower calories, higher fiber, joint support nutrients.',
            amount: '20% less than adult portions',
            timing: 'Smaller, frequent meals',
            safety: 'safe'
          },
          {
            foodType: 'Joint Support Supplements',
            description: 'Glucosamine, chondroitin for arthritis prevention.',
            amount: 'As directed by vet',
            timing: 'With meals',
            safety: 'safe'
          },
          {
            foodType: 'Easily Digestible Foods',
            description: 'Softer textures for dental issues.',
            amount: 'Normal portions, softer consistency',
            timing: 'Regular intervals',
            safety: 'safe'
          },
          {
            foodType: 'High-Calorie Foods',
            description: 'Only if weight loss is a concern.',
            amount: 'Vet recommended only',
            timing: 'Monitor closely',
            safety: 'moderate'
          }
        ],
        forbidden: ['High-sodium foods', 'Excessive treats', 'Hard chew toys', 'Rich fatty foods']
      }
    },
    cat: {
      puppy: {
        title: 'Kitten Nutrition (0-12 months)',
        dailyMeals: '3-4 meals per day',
        waterIntake: 'Fresh water always available',
        items: [
          {
            foodType: 'Kitten Formula Food',
            description: '30-40% protein, 9-15% fat. Higher calories for growth.',
            amount: '1/4 to 1 cup daily',
            timing: 'Every 4-6 hours',
            safety: 'safe'
          },
          {
            foodType: 'Wet Kitten Food',
            description: 'Essential for hydration. Higher protein content.',
            amount: '2-4 small cans daily',
            timing: 'With each meal',
            safety: 'safe'
          },
          {
            foodType: 'Kitten Milk Replacer',
            description: 'Only for orphaned kittens under 4 weeks.',
            amount: 'Every 2-3 hours',
            timing: 'Until weaning',
            safety: 'safe'
          },
          {
            foodType: 'Adult Cat Food',
            description: 'Not nutritionally adequate for growing kittens.',
            amount: 'Avoid until 12 months',
            timing: 'Never for kittens',
            safety: 'caution'
          }
        ],
        forbidden: ['Milk', 'Tuna', 'Dog food', 'Raw fish', 'Onions', 'Chocolate']
      },
      adult: {
        title: 'Adult Cat Nutrition (1-7 years)',
        dailyMeals: '2-3 meals per day',
        waterIntake: '3.5-4.5 ounces per 5 lbs body weight',
        items: [
          {
            foodType: 'High-Quality Cat Food',
            description: '26-30% protein, 9-15% fat. Taurine essential.',
            amount: '1/3 to 1/2 cup dry + wet food',
            timing: 'Morning and evening',
            safety: 'safe'
          },
          {
            foodType: 'Wet Food',
            description: 'Critical for hydration. Prevents kidney issues.',
            amount: '2-3 cans daily',
            timing: 'Every meal',
            safety: 'safe'
          },
          {
            foodType: 'Cat Treats',
            description: 'Freeze-dried meat, commercial cat treats.',
            amount: 'Less than 10% of daily calories',
            timing: 'Training/bonding',
            safety: 'safe'
          },
          {
            foodType: 'Plant-Based Diet',
            description: 'Cats are obligate carnivores. Plants insufficient.',
            amount: 'Not recommended',
            timing: 'Never',
            safety: 'danger'
          }
        ],
        forbidden: ['Tuna (regular)', 'Raw fish', 'Milk', 'Onions', 'Garlic', 'Chocolate']
      },
      senior: {
        title: 'Senior Cat Nutrition (7+ years)',
        dailyMeals: '2-3 smaller meals per day',
        waterIntake: 'Increased water, monitor kidney function',
        items: [
          {
            foodType: 'Senior Cat Formula',
            description: 'Adjusted protein levels, kidney support nutrients.',
            amount: 'Maintain ideal body weight',
            timing: 'Consistent schedule',
            safety: 'safe'
          },
          {
            foodType: 'Kidney Support Diet',
            description: 'Lower phosphorus if kidney disease present.',
            amount: 'Veterinary prescription only',
            timing: 'As prescribed',
            safety: 'safe'
          },
          {
            foodType: 'Appetite Stimulants',
            description: 'Warmed food, strong-smelling options.',
            amount: 'Small, frequent portions',
            timing: 'When appetite decreases',
            safety: 'safe'
          },
          {
            foodType: 'High-Protein Foods',
            description: 'Unless kidney disease present.',
            amount: 'Monitor with vet',
            timing: 'Regular meals',
            safety: 'moderate'
          }
        ],
        forbidden: ['Low-quality foods', 'Excessive phosphorus', 'Dehydrating foods', 'Hard kibble only']
      }
    },
    rabbit: {
      puppy: {
        title: 'Young Rabbit Nutrition (0-6 months)',
        dailyMeals: 'Unlimited pellets + hay',
        waterIntake: '1-2 ounces per pound body weight',
        items: [
          {
            foodType: 'Timothy Hay (Unlimited)',
            description: 'Essential for dental health and digestion. Fresh daily.',
            amount: 'Body-size portion daily',
            timing: 'Always available',
            safety: 'safe'
          },
          {
            foodType: 'High-Quality Pellets',
            description: '18-20% protein, 14-18% fiber. Timothy hay-based.',
            amount: '1/4 to 1/2 cup per pound',
            timing: 'Morning and evening',
            safety: 'safe'
          },
          {
            foodType: 'Alfalfa Hay',
            description: 'High in calcium for growing rabbits.',
            amount: 'Small portions with timothy',
            timing: 'With main hay',
            safety: 'safe'
          },
          {
            foodType: 'Fresh Vegetables',
            description: 'Introduce gradually after 3 months old.',
            amount: 'Start with 1 tsp, increase slowly',
            timing: 'After hay and pellets',
            safety: 'moderate'
          }
        ],
        forbidden: ['Iceberg lettuce', 'Beans', 'Seeds', 'Nuts', 'Chocolate', 'Onions', 'Garlic', 'Avocado']
      },
      adult: {
        title: 'Adult Rabbit Nutrition (6 months - 5 years)',
        dailyMeals: '2 meals + unlimited hay',
        waterIntake: '2-4 ounces per pound body weight',
        items: [
          {
            foodType: 'Timothy Hay (Unlimited)',
            description: 'Primary food source. Critical for dental wear and gut health.',
            amount: 'Body-size portion daily',
            timing: 'Always available',
            safety: 'safe'
          },
          {
            foodType: 'Adult Pellets',
            description: '12-16% protein, 18-25% fiber. Timothy hay-based only.',
            amount: '1/4 cup per 5 pounds body weight',
            timing: 'Morning and evening portions',
            safety: 'safe'
          },
          {
            foodType: 'Leafy Greens',
            description: 'Dark leafy greens: kale, romaine, parsley, cilantro.',
            amount: '2-4 cups per 6 pounds daily',
            timing: 'Fresh daily, variety important',
            safety: 'safe'
          },
          {
            foodType: 'Fruit Treats',
            description: 'Apple, banana, berries. High sugar content.',
            amount: '1-2 tablespoons max daily',
            timing: 'Occasional treats only',
            safety: 'moderate'
          }
        ],
        forbidden: ['Alfalfa pellets', 'Seeds', 'Nuts', 'Beans', 'Potatoes', 'Rhubarb', 'Chocolate', 'Dairy']
      },
      senior: {
        title: 'Senior Rabbit Nutrition (5+ years)',
        dailyMeals: '2-3 smaller meals + unlimited hay',
        waterIntake: 'Monitor closely, may need more',
        items: [
          {
            foodType: 'High-Quality Timothy Hay',
            description: 'May need softer second-cut hay for easier chewing.',
            amount: 'Unlimited, monitor consumption',
            timing: 'Always available',
            safety: 'safe'
          },
          {
            foodType: 'Senior Rabbit Pellets',
            description: 'Higher protein (14-18%) if weight loss occurs.',
            amount: '1/4 to 1/2 cup per 5 pounds',
            timing: 'Adjusted based on body condition',
            safety: 'safe'
          },
          {
            foodType: 'Extra Vegetables',
            description: 'Increase variety and amount if losing weight.',
            amount: '3-5 cups per 6 pounds daily',
            timing: 'Multiple small servings',
            safety: 'safe'
          },
          {
            foodType: 'Critical Care Food',
            description: 'Syringe-feeding formula for appetite loss.',
            amount: 'As directed by exotic vet',
            timing: 'When not eating normally',
            safety: 'moderate'
          }
        ],
        forbidden: ['Hard pellets', 'Sugary treats', 'Low-quality hay', 'Sudden diet changes']
      }
    }
  }

  const getSafetyColor = (safety) => {
    switch(safety) {
      case 'safe': return styles.safeFood
      case 'moderate': return styles.moderateFood
      case 'caution': return styles.cautionFood
      default: return styles.dangerFood
    }
  }

  const getSafetyText = (safety) => {
    switch(safety) {
      case 'safe': return '✅ Recommended'
      case 'moderate': return '⚠️ With Care'
      case 'caution': return '⚠️ Caution'
      default: return '❌ Avoid'
    }
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pet Nutrition Guide</Text>
        <Text style={styles.headerSubtitle}>Feeding guidelines by age and species</Text>
      </View>

      {/* Animal Selection */}
      <View style={styles.animalSelector}>
        <TouchableOpacity 
          style={[styles.animalButton, selectedAnimal === 'dog' && styles.selectedAnimal]}
          onPress={() => setSelectedAnimal('dog')}
        >
          <Text style={[styles.animalButtonText, selectedAnimal === 'dog' && styles.selectedAnimalText]}>
            🐕 Dogs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.animalButton, selectedAnimal === 'cat' && styles.selectedAnimal]}
          onPress={() => setSelectedAnimal('cat')}
        >
          <Text style={[styles.animalButtonText, selectedAnimal === 'cat' && styles.selectedAnimalText]}>
            🐱 Cats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.animalButton, selectedAnimal === 'rabbit' && styles.selectedAnimal]}
          onPress={() => setSelectedAnimal('rabbit')}
        >
          <Text style={[styles.animalButtonText, selectedAnimal === 'rabbit' && styles.selectedAnimalText]}>
            🐰 Rabbits
          </Text>
        </TouchableOpacity>
      </View>

      {/* Age Selection */}
      <View style={styles.ageSelector}>
        <TouchableOpacity 
          style={[styles.ageButton, selectedAge === 'puppy' && styles.selectedAge]}
          onPress={() => setSelectedAge('puppy')}
        >
          <Text style={[styles.ageButtonText, selectedAge === 'puppy' && styles.selectedAgeText]}>
            Young
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.ageButton, selectedAge === 'adult' && styles.selectedAge]}
          onPress={() => setSelectedAge('adult')}
        >
          <Text style={[styles.ageButtonText, selectedAge === 'adult' && styles.selectedAgeText]}>
            Adult
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.ageButton, selectedAge === 'senior' && styles.selectedAge]}
          onPress={() => setSelectedAge('senior')}
        >
          <Text style={[styles.ageButtonText, selectedAge === 'senior' && styles.selectedAgeText]}>
            Senior
          </Text>
        </TouchableOpacity>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>
          {nutritionData[selectedAnimal][selectedAge].title}
        </Text>
        
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Daily Meals</Text>
            <Text style={styles.statValue}>{nutritionData[selectedAnimal][selectedAge].dailyMeals}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Water Intake</Text>
            <Text style={styles.statValue}>{nutritionData[selectedAnimal][selectedAge].waterIntake}</Text>
          </View>
        </View>
      </View>

      {/* Food Information */}
      <View style={styles.foodSection}>
        <Text style={styles.sectionTitle}>🍽️ Food Guidelines</Text>
        
        {nutritionData[selectedAnimal][selectedAge].items.map((item, index) => (
          <View key={index} style={styles.foodCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.foodTitle}>{item.foodType}</Text>
              <View style={[styles.safetyBadge, getSafetyColor(item.safety)]}>
                <Text style={styles.safetyText}>{getSafetyText(item.safety)}</Text>
              </View>
            </View>
            <Text style={styles.foodDescription}>{item.description}</Text>
            <View style={styles.foodDetails}>
              <Text style={styles.detailLabel}>Amount: <Text style={styles.detailValue}>{item.amount}</Text></Text>
              <Text style={styles.detailLabel}>Timing: <Text style={styles.detailValue}>{item.timing}</Text></Text>
            </View>
          </View>
        ))}
      </View>

      {/* Forbidden Foods */}
      <View style={styles.forbiddenSection}>
        <Text style={styles.forbiddenTitle}>🚫 Foods to Avoid</Text>
        <View style={styles.forbiddenGrid}>
          {nutritionData[selectedAnimal][selectedAge].forbidden.map((food, index) => (
            <View key={index} style={styles.forbiddenItem}>
              <Text style={styles.forbiddenText}>{food}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Tips Section */}
      <View style={styles.tipsSection}>
        <Text style={styles.tipsTitle}>💡 Feeding Tips</Text>
        <View style={styles.tipItem}>
          <Text style={styles.tipText}>• Always transition to new foods gradually over 7-10 days</Text>
        </View>
        <View style={styles.tipItem}>
          <Text style={styles.tipText}>• Monitor your pet's weight and adjust portions accordingly</Text>
        </View>
        <View style={styles.tipItem}>
          <Text style={styles.tipText}>• Fresh water should always be available</Text>
        </View>
        <View style={styles.tipItem}>
          <Text style={styles.tipText}>• Consult your vet before making major dietary changes</Text>
        </View>
        {selectedAnimal === 'rabbit' && (
          <>
            <View style={styles.tipItem}>
              <Text style={styles.tipText}>• Rabbits practice cecotrophy (eating soft feces) - this is normal</Text>
            </View>
            <View style={styles.tipItem}>
              <Text style={styles.tipText}>• Introduce new vegetables one at a time to check for allergies</Text>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef7f7',
  },
  header: {
    backgroundColor: '#ec4899',
    padding: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.9,
  },
  animalSelector: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  animalButton: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#f3e8ff',
  },
  selectedAnimal: {
    borderColor: '#ec4899',
    backgroundColor: '#fce7f3',
  },
  animalButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
  },
  selectedAnimalText: {
    color: '#ec4899',
  },
  ageSelector: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 8,
  },
  ageButton: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f3e8ff',
  },
  selectedAge: {
    borderColor: '#ec4899',
    backgroundColor: '#fce7f3',
  },
  ageButtonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  selectedAgeText: {
    color: '#ec4899',
  },
  statsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 15,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 14,
    color: '#1f2937',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  foodSection: {
    padding: 20,
  },
  foodCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  foodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
  },
  safetyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 10,
  },
  safetyText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  safeFood: {
    backgroundColor: '#10b981',
  },
  moderateFood: {
    backgroundColor: '#f59e0b',
  },
  cautionFood: {
    backgroundColor: '#f97316',
  },
  dangerFood: {
    backgroundColor: '#ef4444',
  },
  foodDescription: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
    marginBottom: 10,
  },
  foodDetails: {
    gap: 5,
  },
  detailLabel: {
    fontSize: 13,
    color: '#6b7280',
    fontWeight: '500',
  },
  detailValue: {
    color: '#1f2937',
    fontWeight: '600',
  },
  forbiddenSection: {
    backgroundColor: '#fee2e2',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  forbiddenTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 15,
  },
  forbiddenGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  forbiddenItem: {
    backgroundColor: '#fef2f2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  forbiddenText: {
    fontSize: 12,
    color: '#7f1d1d',
    fontWeight: '500',
  },
  tipsSection: {
    backgroundColor: '#f0f9ff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0f2fe',
    marginBottom: 40,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0c4a6e',
    marginBottom: 15,
  },
  tipItem: {
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#164e63',
    lineHeight: 20,
  },
})

export default Food