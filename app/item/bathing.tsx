import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions,
  SafeAreaView,
  Image
} from 'react-native'
import React, { useState } from 'react'

const { width } = Dimensions.get('window')

const Bathing = () => {
  const [selectedPetType, setSelectedPetType] = useState('dog')
  const [completedSteps, setCompletedSteps] = useState([])
  const [currentStep, setCurrentStep] = useState(0)

  const petTypes = [
    { id: 'dog', name: 'Dogs', icon: '🐕', frequency: '4-6 weeks' },
    { id: 'cat', name: 'Cats', icon: '🐱', frequency: '6-8 weeks' },
    { id: 'rabbit', name: 'Rabbits', icon: '🐰', frequency: '2-3 months' }
  ]

  const bathingSteps = {
    dog: [
      {
        id: 1,
        title: 'Brush Before Bath',
        description: 'Remove loose fur and tangles to prevent clogging drains',
        icon: '🪮',
        duration: '5-10 min'
      },
      {
        id: 2,
        title: 'Prepare Water Temperature',
        description: 'Use lukewarm water (37-38°C). Test with your elbow',
        icon: '🌡️',
        duration: '2 min'
      },
      {
        id: 3,
        title: 'Wet Gradually',
        description: 'Start from legs and work up. Avoid face and ears initially',
        icon: '💧',
        duration: '3-5 min'
      },
      {
        id: 4,
        title: 'Apply Shampoo',
        description: 'Use pet-specific shampoo. Work into a gentle lather',
        icon: '🧴',
        duration: '5-8 min'
      },
      {
        id: 5,
        title: 'Rinse Thoroughly',
        description: 'Remove all soap residue. Leftover soap can cause irritation',
        icon: '🚿',
        duration: '5-10 min'
      },
      {
        id: 6,
        title: 'Dry Carefully',
        description: 'Use towels first, then blow dryer on cool setting',
        icon: '🏺',
        duration: '10-15 min'
      }
    ],
    cat: [
      {
        id: 1,
        title: 'Trim Nails First',
        description: 'Prevent scratching during the bath. Trim carefully',
        icon: '✂️',
        duration: '5 min'
      },
      {
        id: 2,
        title: 'Use Minimal Water',
        description: 'Fill tub with 2-3 inches of lukewarm water only',
        icon: '🛁',
        duration: '2 min'
      },
      {
        id: 3,
        title: 'Gentle Introduction',
        description: 'Lower slowly, speak softly, offer treats for comfort',
        icon: '🤲',
        duration: '3-5 min'
      },
      {
        id: 4,
        title: 'Quick Washing',
        description: 'Work quickly with cat shampoo. Focus on dirty areas',
        icon: '⚡',
        duration: '3-5 min'
      },
      {
        id: 5,
        title: 'Rinse Fast',
        description: 'Quick but thorough rinse. Minimize stress time',
        icon: '💨',
        duration: '3-5 min'
      },
      {
        id: 6,
        title: 'Wrap & Dry',
        description: 'Wrap in warm towel immediately. Air dry in warm room',
        icon: '🏠',
        duration: '15-20 min'
      }
    ],
    rabbit: [
      {
        id: 1,
        title: 'Spot Clean Only',
        description: 'Rabbits rarely need full baths. Clean soiled areas only',
        icon: '🎯',
        duration: '5 min'
      },
      {
        id: 2,
        title: 'Prepare Shallow Basin',
        description: 'Use very shallow lukewarm water in small basin',
        icon: '🥣',
        duration: '2 min'
      },
      {
        id: 3,
        title: 'Clean Bottom Area',
        description: 'Focus on hindquarters if soiled. Be very gentle',
        icon: '🧽',
        duration: '3-5 min'
      },
      {
        id: 4,
        title: 'Use Rabbit Shampoo',
        description: 'Only use rabbit-safe products. Avoid getting wet',
        icon: '🧴',
        duration: '2-3 min'
      },
      {
        id: 5,
        title: 'Rinse Carefully',
        description: 'Minimal water, focus on removing soap completely',
        icon: '💧',
        duration: '3-5 min'
      },
      {
        id: 6,
        title: 'Dry Thoroughly',
        description: 'Dry completely to prevent hypothermia. Keep warm',
        icon: '🔥',
        duration: '20-30 min'
      }
    ]
  }

  const supplies = [
    { name: 'Pet Shampoo', icon: '🧴', essential: true },
    { name: 'Towels (2-3)', icon: '🏺', essential: true },
    { name: 'Non-slip Mat', icon: '🟫', essential: true },
    { name: 'Cotton Balls', icon: '☁️', essential: false },
    { name: 'Brush/Comb', icon: '🪮', essential: true },
    { name: 'Treats', icon: '🦴', essential: false },
    { name: 'Hair Dryer', icon: '💨', essential: false },
    { name: 'Ear Cleaner', icon: '👂', essential: false }
  ]

  const toggleStepComplete = (stepId) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId))
    } else {
      setCompletedSteps([...completedSteps, stepId])
    }
  }

  const getProgressPercentage = () => {
    const totalSteps = bathingSteps[selectedPetType].length
    return (completedSteps.length / totalSteps) * 100
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Pet Bathing Guide</Text>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Text style={styles.bookmark}>🔖</Text>
          </TouchableOpacity>
        </View>

        {/* Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>🛁</Text>
          </View>
          <Text style={styles.logoTitle}>Bath Time</Text>
          <Text style={styles.logoSubtitle}>Keep your pets clean and healthy</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Progress</Text>
            <Text style={styles.progressText}>
              {completedSteps.length}/{bathingSteps[selectedPetType].length} steps
            </Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View 
              style={[
                styles.progressBar, 
                { width: `${getProgressPercentage()}%` }
              ]} 
            />
          </View>
        </View>

        {/* Pet Type Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Pet Type</Text>
          <View style={styles.petTypeContainer}>
            {petTypes.map((pet) => (
              <TouchableOpacity
                key={pet.id}
                style={[
                  styles.petTypeCard,
                  selectedPetType === pet.id && styles.selectedPetType
                ]}
                onPress={() => {
                  setSelectedPetType(pet.id)
                  setCompletedSteps([])
                }}
              >
                <Text style={styles.petIcon}>{pet.icon}</Text>
                <Text style={styles.petName}>{pet.name}</Text>
                <View style={styles.frequencyBadge}>
                  <Text style={styles.frequencyText}>{pet.frequency}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bathing Steps */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bathing Steps</Text>
          <View style={styles.stepsContainer}>
            {bathingSteps[selectedPetType].map((step, index) => (
              <TouchableOpacity
                key={step.id}
                style={[
                  styles.stepCard,
                  completedSteps.includes(step.id) && styles.completedStep
                ]}
                onPress={() => toggleStepComplete(step.id)}
              >
                <View style={styles.stepHeader}>
                  <View style={styles.stepNumberContainer}>
                    <Text style={styles.stepNumber}>{step.id}</Text>
                  </View>
                  <View style={styles.stepInfo}>
                    <Text style={styles.stepTitle}>{step.title}</Text>
                    <Text style={styles.stepDuration}>{step.duration}</Text>
                  </View>
                  <Text style={styles.stepIcon}>{step.icon}</Text>
                </View>
                <Text style={styles.stepDescription}>{step.description}</Text>
                <View style={styles.checkboxContainer}>
                  <View style={[
                    styles.checkbox,
                    completedSteps.includes(step.id) && styles.checkedBox
                  ]}>
                    {completedSteps.includes(step.id) && (
                      <Text style={styles.checkmark}>✓</Text>
                    )}
                  </View>
                  <Text style={styles.checkboxLabel}>Mark as completed</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Supplies Needed */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Supplies Needed</Text>
          <View style={styles.suppliesGrid}>
            {supplies.map((supply, index) => (
              <View key={index} style={styles.supplyCard}>
                <Text style={styles.supplyIcon}>{supply.icon}</Text>
                <Text style={styles.supplyName}>{supply.name}</Text>
                <View style={[
                  styles.essentialBadge,
                  supply.essential ? styles.essentialTrue : styles.essentialFalse
                ]}>
                  <Text style={[
                    styles.essentialText,
                    supply.essential ? styles.essentialTextTrue : styles.essentialTextFalse
                  ]}>
                    {supply.essential ? 'Essential' : 'Optional'}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Tips Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pro Tips</Text>
          <View style={styles.tipsContainer}>
            <View style={styles.tipCard}>
              <Text style={styles.tipIcon}>💡</Text>
              <Text style={styles.tipText}>
                Always reward your pet with treats and praise during and after bathing
              </Text>
            </View>
            <View style={styles.tipCard}>
              <Text style={styles.tipIcon}>⚠️</Text>
              <Text style={styles.tipText}>
                Never leave your pet unattended in water, even for a moment
              </Text>
            </View>
            <View style={styles.tipCard}>
              <Text style={styles.tipIcon}>🌡️</Text>
              <Text style={styles.tipText}>
                Water should be lukewarm - test with your elbow like baby's bath
              </Text>
            </View>
          </View>
        </View>

        {/* Emergency Section */}
        <View style={styles.emergencySection}>
          <View style={styles.emergencyHeader}>
            <Text style={styles.emergencyIcon}>📞</Text>
            <Text style={styles.emergencyTitle}>Emergency Help</Text>
          </View>
          <Text style={styles.emergencySubtitle}>
            If your pet shows signs of distress during bathing
          </Text>
          <TouchableOpacity style={styles.emergencyButton}>
            <Text style={styles.emergencyButtonText}>Contact Vet</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Spacing */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconActive}>🏠</Text>
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📊</Text>
          <Text style={styles.navLabel}>Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📅</Text>
          <Text style={styles.navLabel}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf2f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#fce7f3',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fce7f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 18,
    color: '#ec4899',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  bookmarkButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fce7f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookmark: {
    fontSize: 16,
  },
  logoSection: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#fce7f3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoIcon: {
    fontSize: 32,
  },
  logoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  logoSubtitle: {
    fontSize: 14,
    color: '#ec4899',
  },
  progressSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  progressText: {
    fontSize: 14,
    color: '#ec4899',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#fce7f3',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#ec4899',
    borderRadius: 4,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  petTypeContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  petTypeCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fce7f3',
  },
  selectedPetType: {
    borderColor: '#ec4899',
    backgroundColor: '#fef7ff',
  },
  petIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  petName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  frequencyBadge: {
    backgroundColor: '#fce7f3',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  frequencyText: {
    fontSize: 10,
    color: '#ec4899',
    fontWeight: '500',
  },
  stepsContainer: {
    gap: 16,
  },
  stepCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fce7f3',
  },
  completedStep: {
    backgroundColor: '#f0fdf4',
    borderColor: '#bbf7d0',
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stepNumberContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ec4899',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  stepNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  stepInfo: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  stepDuration: {
    fontSize: 12,
    color: '#ec4899',
  },
  stepIcon: {
    fontSize: 24,
  },
  stepDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
    lineHeight: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d1d5db',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkedBox: {
    backgroundColor: '#22c55e',
    borderColor: '#22c55e',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  suppliesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  supplyCard: {
    width: (width - 44) / 2,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fce7f3',
  },
  supplyIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  supplyName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  essentialBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  essentialTrue: {
    backgroundColor: '#fef3c7',
  },
  essentialFalse: {
    backgroundColor: '#e5e7eb',
  },
  essentialText: {
    fontSize: 10,
    fontWeight: '500',
  },
  essentialTextTrue: {
    color: '#d97706',
  },
  essentialTextFalse: {
    color: '#6b7280',
  },
  tipsContainer: {
    gap: 12,
  },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fce7f3',
    alignItems: 'flex-start',
  },
  tipIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: '#1f2937',
    lineHeight: 20,
  },
  emergencySection: {
    margin: 16,
    backgroundColor: '#ec4899',
    borderRadius: 16,
    padding: 16,
  },
  emergencyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  emergencyIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  emergencySubtitle: {
    fontSize: 14,
    color: '#fce7f3',
    marginBottom: 16,
    lineHeight: 20,
  },
  emergencyButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  emergencyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ec4899',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#fce7f3',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  navIconActive: {
    fontSize: 24,
    marginBottom: 4,
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
    opacity: 0.5,
  },
  navLabelActive: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ec4899',
  },
  navLabel: {
    fontSize: 12,
    color: '#9ca3af',
  },
})

export default Bathing