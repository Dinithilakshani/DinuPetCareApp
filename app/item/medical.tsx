// Path: /medical.tsx
import React, { useState } from 'react'

interface MedicalItem {
  condition: string
  description: string
  urgency: 'high' | 'medium' | 'low' | 'routine'
}

interface MedicalCategory {
  title: string
  items: MedicalItem[]
}

interface MedicalData {
  dog: {
    puppy: MedicalCategory
    adult: MedicalCategory
    senior: MedicalCategory
  }
  cat: {
    puppy: MedicalCategory
    adult: MedicalCategory
    senior: MedicalCategory
  }
  rabbit: {
    puppy: MedicalCategory
    adult: MedicalCategory
    senior: MedicalCategory
  }
}

const medicalData: MedicalData = {
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
  },
  rabbit: {
    puppy: {
      title: 'Young Rabbit Care (0-6 months)',
      items: [
        {
          condition: 'Initial Vet Exam',
          description: 'Within first week. Check for congenital issues and establish baseline health.',
          urgency: 'routine'
        },
        {
          condition: 'Spay/Neuter Scheduling',
          description: 'Plan surgery for 4-6 months old. Prevents reproductive cancers.',
          urgency: 'routine'
        },
        {
          condition: 'GI Stasis Prevention',
          description: 'Monitor appetite and fecal output daily. Critical in young rabbits.',
          urgency: 'high'
        },
        {
          condition: 'Proper Diet Introduction',
          description: 'Gradual introduction of vegetables. Watch for diarrhea or soft stools.',
          urgency: 'medium'
        },
        {
          condition: 'Parasite Screening',
          description: 'Check for coccidia and other intestinal parasites common in young rabbits.',
          urgency: 'medium'
        }
      ]
    },
    adult: {
      title: 'Adult Rabbit Care (6 months - 5 years)',
      items: [
        {
          condition: 'Annual Wellness Exam',
          description: 'Yearly check-up with exotic veterinarian. Include dental and weight assessment.',
          urgency: 'routine'
        },
        {
          condition: 'Dental Health Monitoring',
          description: 'Watch for overgrown teeth, drooling, or difficulty eating. Provide unlimited timothy hay.',
          urgency: 'high'
        },
        {
          condition: 'Spay/Neuter',
          description: 'Essential for health and behavior. Prevents uterine/testicular cancer.',
          urgency: 'routine'
        },
        {
          condition: 'GI Health Maintenance',
          description: 'Monitor cecotrophy behavior and maintain high-fiber diet. Watch for gas or bloating.',
          urgency: 'high'
        },
        {
          condition: 'Nail Trimming',
          description: 'Trim every 4-6 weeks to prevent overgrowth and injury.',
          urgency: 'routine'
        },
        {
          condition: 'Vaccinations',
          description: 'RHDV2 vaccine recommended. Consult exotic vet about regional disease risks.',
          urgency: 'medium'
        }
      ]
    },
    senior: {
      title: 'Senior Rabbit Care (5+ years)',
      items: [
        {
          condition: 'Bi-annual Checkups',
          description: 'Every 6 months with blood work. Monitor kidney and liver function.',
          urgency: 'routine'
        },
        {
          condition: 'Arthritis Management',
          description: 'Soft flooring, easy access to food/water. Pain medication if needed.',
          urgency: 'medium'
        },
        {
          condition: 'Dental Disease Monitoring',
          description: 'More frequent dental checks. Watch for tooth root abscesses and malocclusion.',
          urgency: 'high'
        },
        {
          condition: 'Weight Management',
          description: 'Monitor for weight loss or obesity. Adjust diet as metabolism changes.',
          urgency: 'medium'
        },
        {
          condition: 'Kidney Function',
          description: 'Regular blood chemistry panels to detect early kidney disease.',
          urgency: 'high'
        },
        {
          condition: 'Mobility Support',
          description: 'Lower litter box sides, soft bedding, gentle exercise to maintain mobility.',
          urgency: 'low'
        }
      ]
    }
  }
}

const MedicalPage: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState<'puppy' | 'adult' | 'senior'>('puppy')
  const [selectedAnimal, setSelectedAnimal] = useState<'dog' | 'cat' | 'rabbit'>('dog')

  const getUrgencyColor = (urgency: string): string => {
    switch (urgency) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-indigo-500'
    }
  }

  const getUrgencyText = (urgency: string): string => {
    switch (urgency) {
      case 'high': return 'High Priority'
      case 'medium': return 'Moderate'
      case 'low': return 'Low Priority'
      default: return 'Routine Care'
    }
  }

  return (
    <div className="flex-1 bg-pink-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-pink-500 p-5 pt-12">
        <h1 className="text-3xl font-bold text-white text-center">Pet Medical Care</h1>
        <p className="text-base text-white text-center mt-1 opacity-90">Health guidance by age and species</p>
      </div>

      {/* Animal Selection */}
      <div className="flex px-5 py-5 gap-2">
        <button
          className={`flex-1 bg-white py-4 rounded-xl border-2 border-purple-100 text-gray-500 font-semibold text-center ${
            selectedAnimal === 'dog' ? 'border-pink-500 bg-pink-100 text-pink-500' : ''
          } focus:outline-none focus:ring-2 focus:ring-pink-500`}
          onClick={() => setSelectedAnimal('dog')}
        >
          🐕 Dogs
        </button>
        <button
          className={`flex-1 bg-white py-4 rounded-xl border-2 border-purple-100 text-gray-500 font-semibold text-center ${
            selectedAnimal === 'cat' ? 'border-pink-500 bg-pink-100 text-pink-500' : ''
          } focus:outline-none focus:ring-2 focus:ring-pink-500`}
          onClick={() => setSelectedAnimal('cat')}
        >
          🐱 Cats
        </button>
        <button
          className={`flex-1 bg-white py-4 rounded-xl border-2 border-purple-100 text-gray-500 font-semibold text-center ${
            selectedAnimal === 'rabbit' ? 'border-pink-500 bg-pink-100 text-pink-500' : ''
          } focus:outline-none focus:ring-2 focus:ring-pink-500`}
          onClick={() => setSelectedAnimal('rabbit')}
        >
          🐰 Rabbits
        </button>
      </div>

      {/* Age Selection */}
      <div className="flex px-5 pb-5 gap-2">
        <button
          className={`flex-1 bg-white py-3 rounded-lg border border-purple-100 text-gray-500 font-medium text-center ${
            selectedAge === 'puppy' ? 'border-pink-500 bg-pink-100 text-pink-500' : ''
          } focus:outline-none focus:ring-2 focus:ring-pink-500`}
          onClick={() => setSelectedAge('puppy')}
        >
          Young
        </button>
        <button
          className={`flex-1 bg-white py-3 rounded-lg border border-purple-100 text-gray-500 font-medium text-center ${
            selectedAge === 'adult' ? 'border-pink-500 bg-pink-100 text-pink-500' : ''
          } focus:outline-none focus:ring-2 focus:ring-pink-500`}
          onClick={() => setSelectedAge('adult')}
        >
          Adult
        </button>
        <button
          className={`flex-1 bg-white py-3 rounded-lg border border-purple-100 text-gray-500 font-medium text-center ${
            selectedAge === 'senior' ? 'border-pink-500 bg-pink-100 text-pink-500' : ''
          } focus:outline-none focus:ring-2 focus:ring-pink-500`}
          onClick={() => setSelectedAge('senior')}
        >
          Senior
        </button>
      </div>

      {/* Medical Information */}
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">{medicalData[selectedAnimal][selectedAge].title}</h2>
        {medicalData[selectedAnimal][selectedAge].items.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-4 mb-4 shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-800 flex-1">{item.condition}</h3>
              <span className={`px-2 py-1 rounded-md text-white text-xs font-semibold ${getUrgencyColor(item.urgency)}`}>
                {getUrgencyText(item.urgency)}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-5">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-100 m-5 p-5 rounded-xl border border-red-200 mb-10">
        <h3 className="text-lg font-bold text-red-600 mb-2">🚨 Emergency Contact</h3>
        <p className="text-sm text-red-800 leading-5 mb-3">
          If your pet shows signs of severe illness, difficulty breathing, or injury, contact your veterinarian
          immediately or visit the nearest emergency animal hospital.
        </p>
        {selectedAnimal === 'rabbit' && (
          <div className="bg-red-50 p-3 rounded-lg border border-red-300 mt-3">
            <p className="text-xs text-red-700 font-medium">
              <strong>Rabbit Emergency Signs:</strong> Not eating for 12+ hours, no fecal pellets for 12+ hours, 
              difficulty breathing, head tilt, dragging limbs, or seizures require immediate exotic vet care.
            </p>
          </div>
        )}
      </div>

      {/* Rabbit-Specific Care Tips */}
      {selectedAnimal === 'rabbit' && (
        <div className="bg-blue-100 m-5 p-5 rounded-xl border border-blue-200 mb-10">
          <h3 className="text-lg font-bold text-blue-600 mb-3">🐰 Rabbit Care Essentials</h3>
          <div className="space-y-2">
            <p className="text-sm text-blue-800">• <strong>Find an Exotic Vet:</strong> Rabbits require specialized veterinary care</p>
            <p className="text-sm text-blue-800">• <strong>Daily Health Checks:</strong> Monitor appetite, fecal output, and behavior</p>
            <p className="text-sm text-blue-800">• <strong>GI Stasis:</strong> The #1 killer of pet rabbits - seek immediate help if rabbit stops eating</p>
            <p className="text-sm text-blue-800">• <strong>Spay/Neuter:</strong> Prevents reproductive cancers (80%+ risk in unaltered females)</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default MedicalPage