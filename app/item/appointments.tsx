// import React, { useState } from 'react';
// import { Calendar, Clock, User, Heart, Edit3, Trash2, Save, Plus } from 'lucide-react';

// export default function AppointmentForm() {
//   const [appointments, setAppointments] = useState([
//     {
//       id: 1,
//       petName: "Buddy",
//       appointmentType: "Check-up",
//       date: "2025-09-20",
//       time: "10:00",
//       note: "Annual wellness exam. Buddy seems healthy and active.",
//       isEditing: false
//     }
//   ]);
  
//   const [newAppointment, setNewAppointment] = useState({
//     petName: "",
//     appointmentType: "",
//     date: "",
//     time: "",
//     note: ""
//   });
  
//   const [showForm, setShowForm] = useState(false);

//   const appointmentTypes = [
//     "Check-up", "Vaccination", "Grooming", "Dental Care", 
//     "Surgery", "Emergency", "Follow-up", "Consultation"
//   ];

//   const handleInputChange = (field, value) => {
//     setNewAppointment(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleSaveNew = () => {
//     if (newAppointment.petName && newAppointment.appointmentType && newAppointment.date) {
//       const newId = Math.max(...appointments.map(a => a.id), 0) + 1;
//       setAppointments(prev => [...prev, {
//         ...newAppointment,
//         id: newId,
//         isEditing: false
//       }]);
//       setNewAppointment({
//         petName: "",
//         appointmentType: "",
//         date: "",
//         time: "",
//         note: ""
//       });
//       setShowForm(false);
//     }
//   };

//   const handleEdit = (id) => {
//     setAppointments(prev => 
//       prev.map(apt => 
//         apt.id === id ? { ...apt, isEditing: true } : { ...apt, isEditing: false }
//       )
//     );
//   };

//   const handleSave = (id) => {
//     setAppointments(prev => 
//       prev.map(apt => 
//         apt.id === id ? { ...apt, isEditing: false } : apt
//       )
//     );
//   };

//   const handleDelete = (id) => {
//     setAppointments(prev => prev.filter(apt => apt.id !== id));
//   };

//   const handleFieldUpdate = (id, field, value) => {
//     setAppointments(prev => 
//       prev.map(apt => 
//         apt.id === id ? { ...apt, [field]: value } : apt
//       )
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-4">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-8">
//           <div className="flex items-center justify-center mb-4">
//             <Heart className="text-pink-500 w-8 h-8 mr-2" />
//             <h1 className="text-3xl font-bold text-gray-800">Pet Care Appointments</h1>
//           </div>
//           <p className="text-gray-600">Manage your pet's healthcare appointments and notes</p>
//         </div>

//         <div className="mb-6">
//           <button
//             onClick={() => setShowForm(!showForm)}
//             className="flex items-center px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-md"
//           >
//             <Plus className="w-5 h-5 mr-2" />
//             New Appointment
//           </button>
//         </div>

//         {showForm && (
//           <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-pink-100">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Schedule New Appointment</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   <User className="w-4 h-4 inline mr-1" />
//                   Pet Name
//                 </label>
//                 <input
//                   type="text"
//                   value={newAppointment.petName}
//                   onChange={(e) => handleInputChange('petName', e.target.value)}
//                   className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
//                   placeholder="Enter pet's name"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Appointment Type
//                 </label>
//                 <select
//                   value={newAppointment.appointmentType}
//                   onChange={(e) => handleInputChange('appointmentType', e.target.value)}
//                   className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
//                 >
//                   <option value="">Select type</option>
//                   {appointmentTypes.map(type => (
//                     <option key={type} value={type}>{type}</option>
//                   ))}
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   <Calendar className="w-4 h-4 inline mr-1" />
//                   Date
//                 </label>
//                 <input
//                   type="date"
//                   value={newAppointment.date}
//                   onChange={(e) => handleInputChange('date', e.target.value)}
//                   className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   <Clock className="w-4 h-4 inline mr-1" />
//                   Time
//                 </label>
//                 <input
//                   type="time"
//                   value={newAppointment.time}
//                   onChange={(e) => handleInputChange('time', e.target.value)}
//                   className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
//                 />
//               </div>
//             </div>
            
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Appointment Notes
//               </label>
//               <textarea
//                 value={newAppointment.note}
//                 onChange={(e) => handleInputChange('note', e.target.value)}
//                 className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 h-24 resize-none"
//                 placeholder="Add any special notes or instructions..."
//               />
//             </div>
            
//             <div className="flex gap-3">
//               <button
//                 onClick={handleSaveNew}
//                 className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
//               >
//                 <Save className="w-4 h-4 mr-1" />
//                 Save Appointment
//               </button>
//               <button
//                 onClick={() => setShowForm(false)}
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="space-y-4">
//           {appointments.map((appointment) => (
//             <div key={appointment.id} className="bg-white rounded-xl shadow-lg p-6 border border-pink-100">
//               <div className="flex justify-between items-start mb-4">
//                 <div className="flex items-center">
//                   <Heart className="text-pink-400 w-6 h-6 mr-2" />
//                   {appointment.isEditing ? (
//                     <input
//                       type="text"
//                       value={appointment.petName}
//                       onChange={(e) => handleFieldUpdate(appointment.id, 'petName', e.target.value)}
//                       className="text-xl font-bold text-gray-800 bg-pink-50 border border-pink-200 rounded px-2 py-1"
//                     />
//                   ) : (
//                     <h3 className="text-xl font-bold text-gray-800">{appointment.petName}</h3>
//                   )}
//                 </div>
                
//                 <div className="flex gap-2">
//                   {appointment.isEditing ? (
//                     <button
//                       onClick={() => handleSave(appointment.id)}
//                       className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
//                       title="Save"
//                     >
//                       <Save className="w-4 h-4" />
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleEdit(appointment.id)}
//                       className="p-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors"
//                       title="Edit"
//                     >
//                       <Edit3 className="w-4 h-4" />
//                     </button>
//                   )}
//                   <button
//                     onClick={() => handleDelete(appointment.id)}
//                     className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
//                     title="Delete"
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <span className="text-sm text-gray-500">Type:</span>
//                   {appointment.isEditing ? (
//                     <select
//                       value={appointment.appointmentType}
//                       onChange={(e) => handleFieldUpdate(appointment.id, 'appointmentType', e.target.value)}
//                       className="block w-full mt-1 px-2 py-1 bg-pink-50 border border-pink-200 rounded text-sm"
//                     >
//                       {appointmentTypes.map(type => (
//                         <option key={type} value={type}>{type}</option>
//                       ))}
//                     </select>
//                   ) : (
//                     <p className="font-medium text-gray-800">{appointment.appointmentType}</p>
//                   )}
//                 </div>
                
//                 <div>
//                   <span className="text-sm text-gray-500">Date:</span>
//                   {appointment.isEditing ? (
//                     <input
//                       type="date"
//                       value={appointment.date}
//                       onChange={(e) => handleFieldUpdate(appointment.id, 'date', e.target.value)}
//                       className="block w-full mt-1 px-2 py-1 bg-pink-50 border border-pink-200 rounded text-sm"
//                     />
//                   ) : (
//                     <p className="font-medium text-gray-800">{appointment.date}</p>
//                   )}
//                 </div>
                
//                 <div>
//                   <span className="text-sm text-gray-500">Time:</span>
//                   {appointment.isEditing ? (
//                     <input
//                       type="time"
//                       value={appointment.time}
//                       onChange={(e) => handleFieldUpdate(appointment.id, 'time', e.target.value)}
//                       className="block w-full mt-1 px-2 py-1 bg-pink-50 border border-pink-200 rounded text-sm"
//                     />
//                   ) : (
//                     <p className="font-medium text-gray-800">{appointment.time}</p>
//                   )}
//                 </div>
//               </div>
              
//               <div>
//                 <span className="text-sm text-gray-500">Notes:</span>
//                 {appointment.isEditing ? (
//                   <textarea
//                     value={appointment.note}
//                     onChange={(e) => handleFieldUpdate(appointment.id, 'note', e.target.value)}
//                     className="block w-full mt-1 px-3 py-2 bg-pink-50 border border-pink-200 rounded text-sm h-20 resize-none"
//                   />
//                 ) : (
//                   <p className="mt-1 text-gray-700 bg-pink-50 p-3 rounded-lg">
//                     {appointment.note || "No notes added"}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {appointments.length === 0 && !showForm && (
//           <div className="text-center py-12">
//             <Heart className="w-16 h-16 text-pink-300 mx-auto mb-4" />
//             <p className="text-gray-500 text-lg">No appointments scheduled yet</p>
//             <p className="text-gray-400">Click "New Appointment" to get started</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }