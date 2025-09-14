import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  Heart, 
  Stethoscope,
  Ambulance,
  Shield,
  User,
  Calendar,
  FileText,
  Send,
  Star,
  Navigation,
  Activity
} from 'lucide-react';

export default function EmergencyVetUI() {
  const [emergencyForm, setEmergencyForm] = useState({
    petName: '',
    ownerName: '',
    phone: '',
    emergency: '',
    symptoms: '',
    arrivalTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const emergencyTypes = [
    'Severe Injury/Trauma',
    'Difficulty Breathing',
    'Poisoning/Toxicity',
    'Seizures',
    'Severe Bleeding',
    'Loss of Consciousness',
    'Severe Pain',
    'Other Emergency'
  ];

  const handleInputChange = (field, value) => {
    setEmergencyForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Emergency form submitted! We will contact you immediately.');
    }, 2000);
  };

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Emergency Header */}
      <div className="bg-pink-600 text-white py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="w-8 h-8 mr-3 text-pink-200" />
              <div>
                <h1 className="text-2xl font-bold">24/7 Emergency Pet Care</h1>
                <p className="text-pink-100">Compassionate emergency care when your pet needs it most</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-pink-100">Emergency Hotline</div>
              <div className="text-xl font-bold">+1 (555) 911-PETS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Actions Bar */}
      <div className="bg-pink-500 text-white py-3 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={handleEmergencyCall}
              className="flex items-center px-6 py-2 bg-pink-700 rounded-lg hover:bg-pink-800 transition-colors font-semibold shadow-md"
            >
              <Phone className="w-5 h-5 mr-2" />
              CALL NOW
            </button>
            <div className="flex items-center px-4 py-2 bg-pink-600 rounded-lg">
              <MapPin className="w-5 h-5 mr-2" />
              123 Pet Care Ave, City
            </div>
            <div className="flex items-center px-4 py-2 bg-pink-600 rounded-lg">
              <Clock className="w-5 h-5 mr-2" />
              Open 24/7
            </div>
            <button className="flex items-center px-4 py-2 bg-rose-500 rounded-lg hover:bg-rose-600 transition-colors">
              <Navigation className="w-5 h-5 mr-2" />
              Get Directions
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Emergency Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl p-6 border-l-4 border-pink-500">
              <div className="flex items-center mb-6">
                <Activity className="text-pink-500 w-7 h-7 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Emergency Registration</h2>
              </div>

              <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-6">
                <div className="flex items-center">
                  <AlertTriangle className="text-pink-500 w-5 h-5 mr-2" />
                  <p className="text-sm text-pink-800">
                    <strong>Life-threatening emergency?</strong> Call immediately: <span className="font-bold text-pink-700">+1 (555) 911-PETS</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1 text-pink-500" />
                      Pet Name *
                    </label>
                    <input
                      type="text"
                      value={emergencyForm.petName}
                      onChange={(e) => handleInputChange('petName', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                      placeholder="Enter pet's name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Owner Name *
                    </label>
                    <input
                      type="text"
                      value={emergencyForm.ownerName}
                      onChange={(e) => handleInputChange('ownerName', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1 text-pink-500" />
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      value={emergencyForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-1 text-pink-500" />
                      Expected Arrival
                    </label>
                    <input
                      type="time"
                      value={emergencyForm.arrivalTime}
                      onChange={(e) => handleInputChange('arrivalTime', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type of Emergency *
                  </label>
                  <select
                    value={emergencyForm.emergency}
                    onChange={(e) => handleInputChange('emergency', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select emergency type</option>
                    {emergencyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FileText className="w-4 h-4 inline mr-1 text-pink-500" />
                    Symptoms & Details *
                  </label>
                  <textarea
                    value={emergencyForm.symptoms}
                    onChange={(e) => handleInputChange('symptoms', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors h-32 resize-none"
                    placeholder="Describe what happened, symptoms observed, when it started, etc."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-pink-700 transition-colors disabled:bg-gray-400 flex items-center justify-center shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Submitting...' : 'Submit Emergency Form'}
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-pink-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-pink-500" />
                Emergency Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-pink-50 rounded-lg border border-pink-200">
                  <Phone className="w-5 h-5 text-pink-600 mr-3" />
                  <div>
                    <div className="font-semibold text-pink-800">Emergency Line</div>
                    <div className="text-pink-600">+1 (555) 911-PETS</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-rose-50 rounded-lg border border-rose-200">
                  <MapPin className="w-5 h-5 text-rose-600 mr-3" />
                  <div>
                    <div className="font-semibold text-rose-800">Location</div>
                    <div className="text-rose-600 text-sm">123 Pet Care Ave<br />Veterinary District, City 12345</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-pink-50 rounded-lg border border-pink-200">
                  <Clock className="w-5 h-5 text-pink-600 mr-3" />
                  <div>
                    <div className="font-semibold text-pink-800">Hours</div>
                    <div className="text-pink-600">24/7 Emergency Care</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Tips */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-pink-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Stethoscope className="w-6 h-6 mr-2 text-pink-500" />
                Emergency Tips
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                  <div className="font-semibold text-pink-800 mb-1">Stay Calm</div>
                  <div className="text-pink-700">Keep your pet as calm and still as possible</div>
                </div>
                <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                  <div className="font-semibold text-rose-800 mb-1">Transport Safely</div>
                  <div className="text-rose-700">Use a carrier or wrap in blanket for transport</div>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                  <div className="font-semibold text-pink-800 mb-1">Bring Records</div>
                  <div className="text-pink-700">Bring vaccination records and medications</div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-pink-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-2 text-pink-500" />
                Emergency Services
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center p-2 bg-pink-50 rounded">
                  <Star className="w-4 h-4 text-pink-500 mr-2" />
                  <span>Critical Care & ICU</span>
                </div>
                <div className="flex items-center p-2 bg-rose-50 rounded">
                  <Star className="w-4 h-4 text-rose-500 mr-2" />
                  <span>Emergency Surgery</span>
                </div>
                <div className="flex items-center p-2 bg-pink-50 rounded">
                  <Star className="w-4 h-4 text-pink-500 mr-2" />
                  <span>Trauma Treatment</span>
                </div>
                <div className="flex items-center p-2 bg-rose-50 rounded">
                  <Star className="w-4 h-4 text-rose-500 mr-2" />
                  <span>Poison Control</span>
                </div>
                <div className="flex items-center p-2 bg-pink-50 rounded">
                  <Star className="w-4 h-4 text-pink-500 mr-2" />
                  <span>Digital X-Ray & Ultrasound</span>
                </div>
                <div className="flex items-center p-2 bg-rose-50 rounded">
                  <Star className="w-4 h-4 text-rose-500 mr-2" />
                  <span>Blood Work & Lab Tests</span>
                </div>
              </div>
            </div>

            {/* Veterinarian on Duty */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-pink-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Ambulance className="w-6 h-6 mr-2 text-pink-500" />
                On-Call Team
              </h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-3">
                    <Stethoscope className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Dr. Sarah Johnson</div>
                    <div className="text-sm text-pink-600">Emergency Veterinarian</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mr-3">
                    <Heart className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Emergency Staff</div>
                    <div className="text-sm text-rose-600">24/7 Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Warning */}
        <div className="mt-8 bg-pink-100 border-2 border-pink-400 rounded-xl p-6">
          <div className="flex items-start">
            <AlertTriangle className="w-8 h-8 text-pink-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-pink-800 mb-2">Important Notice</h3>
              <p className="text-pink-700 mb-3">
                If your pet is experiencing a life-threatening emergency such as difficulty breathing, 
                severe bleeding, loss of consciousness, or poisoning, please call our emergency hotline 
                immediately or bring your pet directly to our clinic.
              </p>
              <div className="bg-pink-200 p-3 rounded-lg">
                <p className="text-pink-800 font-semibold text-center">
                  Emergency Hotline: +1 (555) 911-PETS | Available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}