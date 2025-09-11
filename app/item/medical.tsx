import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Medical = () => {
  const [selectedAge, setSelectedAge] = useState('puppy')
  const [selectedAnimal, setSelectedAnimal] = useState('dog')

  const medicalData = {
    dog: {
      puppy: {
        title: 'Puppy Care (0-12 months)',
        items: [
          {
            condition: 'Vaccination Schedule',
            description: 'DHPP series at 6, 9, 12 weeks. Rabies at 12-16 weeks.',
            urgency: 'routine'
          },
          {
            condition: 'Deworming',
            description: 'Every 2-3 weeks until 6 months old.',
            urgency: 'routine'
          },
          {
            condition: 'Teething Issues',
            description: 'Provide appropriate chew toys. Monitor for retained baby teeth.',
            urgency: 'low'
          },
          {
            condition: 'Diarrhea',
            description: 'Common due to diet changes. Monitor hydration.',
            urgency: 'medium'
          }
        ]
      },
      adult: {
        title: 'Adult Dog Care (1-7 years)',
        items: [
          {
            condition: 'Annual Checkup',
            description: 'Yearly physical exam, vaccinations, and dental cleaning.',
            urgency: 'routine'
          },
          {
            condition: 'Heartworm Prevention',
            description: 'Monthly preventive medication year-round.',
            urgency: 'high'
          },
          {
            condition: 'Joint Care',
            description: 'Monitor for limping or stiffness. Maintain healthy weight.',
            urgency: 'medium'
          },
          {
            condition: 'Dental Health',
            description: 'Regular teeth brushing and dental treats.',
            urgency: 'routine'
          }
        ]
      },
      senior: {
        title: 'Senior Dog Care (7+ years)',
        items: [
          {
            condition: 'Bi-annual Checkups',
            description: 'Every 6 months with blood work and organ function tests.',
            urgency: 'routine'
          },
          {
            condition: 'Arthritis Management',
            description: 'Joint supplements, weight management, gentle exercise.',
            urgency: 'medium'
          },
          {
            condition: 'Cognitive Changes',
            description: 'Mental stimulation, consistent routine, night lights.',
            urgency: 'low'
          },
          {
            condition: 'Heart Monitoring',
            description: 'Regular cardiac screening for murmurs or irregularities.',
            urgency: 'high'
          }
        ]
      }
    },
    cat: {
      puppy: {
        title: 'Kitten Care (0-12 months)',
        items: [
          {
            condition: 'Vaccination Schedule',
            description: 'FVRCP series at 6, 9, 12 weeks. Rabies at 12-16 weeks.',
            urgency: 'routine'
          },
          {
            condition: 'Spay/Neuter',
            description: 'Recommended between 4-6 months of age.',
            urgency: 'routine'
          },
          {
            condition: 'Litter Training',
            description: 'Most kittens learn naturally. Keep box clean and accessible.',
            urgency: 'low'
          },
          {
            condition: 'Upper Respiratory',
            description: 'Common in young cats. Watch for sneezing and discharge.',
            urgency: 'medium'
          }
        ]
      },
      adult: {
        title: 'Adult Cat Care (1-7 years)',
        items: [
          {
            condition: 'Annual Wellness',
            description: 'Yearly exam with core vaccinations and parasite screening.',
            urgency: 'routine'
          },
          {
            condition: 'Dental Care',
            description: 'Regular dental cleanings to prevent periodontal disease.',
            urgency: 'routine'
          },
          {
            condition: 'Urinary Health',
            description: 'Monitor litter box habits. Ensure adequate water intake.',
            urgency: 'high'
          },
          {
            condition: 'Weight Management',
            description: 'Indoor cats prone to obesity. Monitor food portions.',
            urgency: 'medium'
          }
        ]
      },
      senior: {
        title: 'Senior Cat Care (7+ years)',
        items: [
          {
            condition: 'Kidney Function',
            description: 'Regular blood work to monitor kidney health.',
            urgency: 'high'
          },
          {
            condition: 'Thyroid Screening',
            description: 'Check for hyperthyroidism with annual blood tests.',
            urgency: 'routine'
          },
          {
            condition: 'Arthritis Care',
            description: 'Soft bedding, easy litter box access, pain management.',
            urgency: 'medium'
          },
          {
            condition: 'Dental Disease',
            description: 'More common in seniors. Professional cleaning may be needed.',
            urgency: 'medium'
          }
        ]
      }
    }
  }

  const getUrgencyColor = (urgency) => {
    switch(urgency) {
      case 'high': return styles.highUrgency
      case 'medium': return styles.mediumUrgency
      case 'low': return styles.lowUrgency
      default: return styles.routineUrgency
    }
  }

  const getUrgencyText = (urgency) => {
    switch(urgency) {
      case 'high': return 'High Priority'
      case 'medium': return 'Moderate'
      case 'low': return 'Low Priority'
      default: return 'Routine Care'
    }
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pet Medical Care</Text>
        <Text style={styles.headerSubtitle}>Health guidance by age and species</Text>
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

      {/* Medical Information */}
      <View style={styles.medicalSection}>
        <Text style={styles.sectionTitle}>
          {medicalData[selectedAnimal][selectedAge].title}
        </Text>
        
        {medicalData[selectedAnimal][selectedAge].items.map((item, index) => (
          <View key={index} style={styles.medicalCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.conditionTitle}>{item.condition}</Text>
              <View style={[styles.urgencyBadge, getUrgencyColor(item.urgency)]}>
                <Text style={styles.urgencyText}>{getUrgencyText(item.urgency)}</Text>
              </View>
            </View>
            <Text style={styles.conditionDescription}>{item.description}</Text>
          </View>
        ))}
      </View>

      {/* Emergency Contact */}
      <View style={styles.emergencySection}>
        <Text style={styles.emergencyTitle}>🚨 Emergency Contact</Text>
        <Text style={styles.emergencyText}>
          If your pet shows signs of severe illness, difficulty breathing, 
          or injury, contact your veterinarian immediately or visit the 
          nearest emergency animal hospital.
        </Text>
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
  medicalSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 20,
  },
  medicalCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
  conditionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
  },
  urgencyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 10,
  },
  urgencyText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  highUrgency: {
    backgroundColor: '#ef4444',
  },
  mediumUrgency: {
    backgroundColor: '#f59e0b',
  },
  lowUrgency: {
    backgroundColor: '#10b981',
  },
  routineUrgency: {
    backgroundColor: '#6366f1',
  },
  conditionDescription: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
  emergencySection: {
    backgroundColor: '#fee2e2',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 10,
  },
  emergencyText: {
    fontSize: 14,
    color: '#7f1d1d',
    lineHeight: 20,
  },
})

export default Medical