import React, { useState } from 'react';
import { MapPin, Calendar, Users, ChevronRight, Send, Menu, X, Check, Plus, Trash } from 'lucide-react';

// Import images
import image6 from './assets/image6.jpg';
import image11 from './assets/image11.jpg';
import image14 from './assets/image14.jpg';
import image21 from './assets/image21.jpg';
import image24 from './assets/image24.png';

const CustomLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 76.75 76.75">
    <path
      fill="#F26622"
      d="M52.16,0h-27.57c0,13.58-11.01,24.59-24.59,24.59v27.57c13.58,0,24.59,11.01,24.59,24.59h27.57c0-13.58,11.01-24.59,24.59-24.59v-27.57c-13.58,0-24.59-11.01-24.59-24.59ZM52.03,38.28c0,7.38-5.98,13.36-13.36,13.36-.46,0-.92-.02-1.37-.07-6.74-.68-11.99-6.37-11.99-13.29h0c0-7.38,5.98-13.36,13.36-13.36s13.36,5.98,13.36,13.36h0Z"
    />
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'register' | 'todo' | 'details'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    childName: '',
    address: '',
    birthdate: '',
    hasAllergies: '',
    allergiesDetails: '',
    isVegetarian: '',
    hasMedication: '',
    medicationDetails: '',
    canSwim: '',
    photoConsent: '',
    parentName: '',
    phone: '',
    email: '',
    donation: ''
  });
  
  const [todos, setTodos] = useState([
    { id: 1, text: 'Pullover/Weste, Trainingsanzug', completed: false },
    { id: 2, text: 'E-Card (in der Tasche sicher verwahren)', completed: false },
    { id: 3, text: 'T-Shirts', completed: false },
    { id: 4, text: 'lange/ kurze Hosen', completed: false },
    { id: 5, text: 'Impfpasskopie', completed: false },
    { id: 6, text: 'Unterwäsche und Socken', completed: false },
    { id: 7, text: 'Trinkflasche', completed: false },
    { id: 8, text: 'Pyjama', completed: false },
    { id: 9, text: 'beschrifteter Trinkbecher', completed: false },
    { id: 10, text: 'Hausschuhe (oben im Koffer einpacken!)', completed: false },
    { id: 11, text: 'Rucksack', completed: false },
    { id: 12, text: 'Badesachen', completed: false },
    { id: 13, text: 'Taschenlampe', completed: false },
    { id: 14, text: 'Handtuch', completed: false },
    { id: 15, text: 'Sonnencreme', completed: false },
    { id: 16, text: 'Badetuch', completed: false },
    { id: 17, text: 'Taschengeld (5 € ausreichend)', completed: false },
    { id: 18, text: 'Sonnenschutz (Kopfbedeckung!)', completed: false },
    { id: 19, text: 'Weißes T- Shirt (zum Bemalen)', completed: false },
    { id: 20, text: '2 Paar feste Schuhe/ Sportschuhe (wasserfeste Schuhe/Gummistiefel)', completed: false },
    { id: 21, text: '(kleine Gesellschaftsspiele)', completed: false },
    { id: 22, text: '(Regen-)Jacke', completed: false },
    { id: 23, text: 'Polster + Überzug', completed: false },
    { id: 24, text: 'Schlafsack', completed: false },
    { id: 25, text: 'Leintuch', completed: false },
    { id: 26, text: 'Toilettsachen (Zahnbürste, …)', completed: false },
  ]);
  
  const [newTodo, setNewTodo] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const [showThankYouPage, setShowThankYouPage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmSubmit = () => {
    console.log('Form submitted:', formData);
    setShowConfirmation(false);
    setShowThankYouPage(true);
    // Here you would typically send the data to a server
  };

  const handleNewRegistration = () => {
    // Preserve parental information and address
    const parentName = formData.parentName;
    const phone = formData.phone;
    const email = formData.email;
    const address = formData.address;
    
    // Reset all form data
    setFormData({
      childName: '',
      address: address,
      birthdate: '',
      hasAllergies: '',
      allergiesDetails: '',
      isVegetarian: '',
      hasMedication: '',
      medicationDetails: '',
      canSwim: '',
      photoConsent: '',
      parentName: parentName,
      phone: phone,
      email: email,
      donation: ''
    });
    
    // Return to registration form
    setShowThankYouPage(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
    
    // Check if all todos are completed after this toggle
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    
    if (updatedTodos.every(todo => todo.completed)) {
      setShowCompletionPopup(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white h-[8vh] relative z-50">
        <div className="max-w-[1800px] mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-2 sm:gap-3 flex-1">
              <div className="p-1 sm:p-2 shrink-0">
                <CustomLogo />
              </div>
              <h1 className="text-sm sm:text-base md:text-xl font-semibold text-black truncate">
                Pfarrgemeinde Urfahr-St. Leopold
              </h1>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors ml-2 shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => setActiveTab('home')}
                className={`${activeTab === 'home' ? 'tab-active-dark' : 'text-black/70 hover:text-black'}`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`${activeTab === 'details' ? 'tab-active-dark' : 'text-black/70 hover:text-black'}`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab('register')}
                className={`${activeTab === 'register' ? 'tab-active-dark' : 'text-black/70 hover:text-black'}`}
              >
                Anmeldung
              </button>
              <button
                onClick={() => setActiveTab('todo')}
                className={`${activeTab === 'todo' ? 'tab-active-dark' : 'text-black/70 hover:text-black'}`}
              >
                Packliste
              </button>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`
              fixed inset-0 bg-black/50 md:hidden transition-opacity duration-300 z-40
              ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div 
              className={`
                fixed top-[8vh] right-0 w-64 bg-white shadow-xl rounded-bl-2xl z-50
                transition-transform duration-300 ease-in-out origin-top-right
                ${mobileMenuOpen ? 'scale-100' : 'scale-95'}
              `}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col p-4 space-y-2">
                <button
                  onClick={() => {
                    setActiveTab('home');
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    py-3 px-4 rounded-xl text-left transition-all
                    ${activeTab === 'home' 
                      ? 'bg-black/5 text-black font-medium' 
                      : 'text-black/70 hover:bg-black/5 hover:text-black'
                    }
                  `}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setActiveTab('details');
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    py-3 px-4 rounded-xl text-left transition-all
                    ${activeTab === 'details' 
                      ? 'bg-black/5 text-black font-medium' 
                      : 'text-black/70 hover:bg-black/5 hover:text-black'
                    }
                  `}
                >
                  Details
                </button>
                <button
                  onClick={() => {
                    setActiveTab('register');
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    py-3 px-4 rounded-xl text-left transition-all
                    ${activeTab === 'register' 
                      ? 'bg-black/5 text-black font-medium' 
                      : 'text-black/70 hover:bg-black/5 hover:text-black'
                    }
                  `}
                >
                  Anmeldung
                </button>
                <button
                  onClick={() => {
                    setActiveTab('todo');
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    py-3 px-4 rounded-xl text-left transition-all
                    ${activeTab === 'todo' 
                      ? 'bg-black/5 text-black font-medium' 
                      : 'text-black/70 hover:bg-black/5 hover:text-black'
                    }
                  `}
                >
                  Packliste
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1800px] mx-auto px-4 h-[92vh] md:landscape:overflow-hidden">
        {activeTab === 'home' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full py-4">
            {/* Header Text */}
            <div className="col-span-1 md:col-span-2 flex items-center justify-center h-[30vh] md:h-[45vh]">
              <h2 className="flex flex-col text-4xl sm:text-5xl lg:text-[min(5.5rem,8vw)] font-extralight text-black leading-[0.9] tracking-tight w-full">
                <span className="text-center w-full">JUNGSCHAR</span>
                <span className="text-center w-full">LAGER'2025</span>
              </h2>
            </div>

            {/* Image Collage */}
            <div className="col-span-1 md:col-span-2 relative h-[30vh] md:h-[45vh]">
              <div className="image-collage">
                <img 
                  src={image6}
                  alt="Jungschar Lager Aktivität" 
                  className="image-1 torn-paper"
                />
                <img 
                  src={image11}
                  alt="Jungschar Lager Outdoor" 
                  className="image-2 torn-paper"
                />
                <img 
                  src={image14}
                  alt="Jungschar Lager Natur" 
                  className="image-3 torn-paper"
                />
                <img 
                  src={image21}
                  alt="Jungschar Lager Gruppe" 
                  className="image-4 torn-paper"
                />
                <img 
                  src={image24}
                  alt="Jungschar Lager Erlebnis" 
                  className="image-5 torn-paper"
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-[25vh] z-10 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col">
                <MapPin className="w-6 h-6 text-black mb-2" />
                <h3 className="text-lg font-semibold mb-2 text-black">Lagerort</h3>
                <p className="text-black/80 text-sm">
                  Pfarrhof Sindelburg, Sindelburg 1, 3313 Wallsee
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col">
                <Calendar className="w-6 h-6 text-black mb-2" />
                <h3 className="text-lg font-semibold mb-2 text-black">Lagerzeit</h3>
                <p className="text-black/80 text-sm">
                  24. August 2025 (13:45 Uhr) bis 30. August 2025 (ca. 11:30 Uhr)
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col">
                <Users className="w-6 h-6 text-black mb-2" />
                <h3 className="text-lg font-semibold mb-2 text-black">Kosten</h3>
                <p className="text-black/80 text-sm">
                  190,00 € pro Kind (Geschwisterrabatt auf Anfrage)
                </p>
              </div>

              <div 
                onClick={() => setActiveTab('details')}
                style={{ backgroundColor: '#F26622' }}
                className="p-4 rounded-2xl shadow-xl cursor-pointer hover:brightness-110 transition-all flex flex-col"
              >
                <ChevronRight className="w-6 h-6 text-white mb-2" />
                <h3 className="text-lg font-semibold mb-2 text-white">Weiter</h3>
                <p className="text-white/90 text-sm">
                  Alle wichtigen Informationen zum Jungscharlager 2025
                </p>
              </div>
            </div>

            {/* Mobile Spacer */}
            <div className="h-16 md:hidden col-span-full"></div>
          </div>
        ) : activeTab === 'register' ? (
          <div className="max-w-2xl mx-auto py-4 h-full overflow-auto">
            {!showThankYouPage ? (
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 text-black">Anmeldung zum Jungscharlager 2025</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <p className="text-black/80 mb-4">
                      Ich, <input type="text" name="childName" value={formData.childName} onChange={handleChange} className="form-input-dark inline-block w-64" required /> <span className="text-red-500">*</span>
                      nehme am Jungscharlager 2024 von Sonntag, 24. August 2025 bis Samstag, 30. August 2025 im Pfadfinderheim "Alter Pfarrhof" teil.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-black mb-1">
                      Adresse: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address || ''}
                      onChange={handleChange}
                      className="form-input-dark"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="birthdate" className="block text-sm font-medium text-black mb-1">
                      Geburtsdatum: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="birthdate"
                      name="birthdate"
                      value={formData.birthdate || ''}
                      onChange={handleChange}
                      className="form-input-dark"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Allergien: <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center space-x-6 mb-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          id="allergiesYes"
                          name="hasAllergies"
                          value="yes"
                          checked={formData.hasAllergies === 'yes'}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-[#F26622] border-gray-300 focus:ring-[#F26622]"
                          required
                        />
                        <span className="ml-2 text-black">JA</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          id="allergiesNo"
                          name="hasAllergies"
                          value="no"
                          checked={formData.hasAllergies === 'no'}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-[#F26622] border-gray-300 focus:ring-[#F26622]"
                          required
                        />
                        <span className="ml-2 text-black">NEIN</span>
                      </label>
                    </div>
                    {formData.hasAllergies === 'yes' && (
                      <div>
                        <label htmlFor="allergiesDetails" className="block text-sm font-medium text-black mb-1">
                          Wenn ja, welche: <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="allergiesDetails"
                          name="allergiesDetails"
                          value={formData.allergiesDetails || ''}
                          onChange={handleChange}
                          className="form-input-dark"
                          required
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Vegetarier: <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          id="vegetarianYes"
                          name="isVegetarian"
                          value="yes"
                          checked={formData.isVegetarian === 'yes'}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-[#F26622] border-gray-300 focus:ring-[#F26622]"
                          required
                        />
                        <span className="ml-2 text-black">JA</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          id="vegetarianNo"
                          name="isVegetarian"
                          value="no"
                          checked={formData.isVegetarian === 'no'}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-[#F26622] border-gray-300 focus:ring-[#F26622]"
                          required
                        />
                        <span className="ml-2 text-black">NEIN</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Medikamente: <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center space-x-6 mb-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          id="medicationYes"
                          name="hasMedication"
                          value="yes"
                          checked={formData.hasMedication === 'yes'}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-[#F26622] border-gray-300 focus:ring-[#F26622]"
                          required
                        />
                        <span className="ml-2 text-black">JA</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          id="medicationNo"
                          name="hasMedication"
                          value="no"
                          checked={formData.hasMedication === 'no'}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-[#F26622] border-gray-300 focus:ring-[#F26622]"
                          required
                        />
                        <span className="ml-2 text-black">NEIN</span>
                      </label>
                    </div>
                    {formData.hasMedication === 'yes' && (
                      <div>
                        <label htmlFor="medicationDetails" className="block text-sm font-medium text-black mb-1">
                          Wenn ja, welche: <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="medicationDetails"
                          name="medicationDetails"
                          value={formData.medicationDetails || ''}
                          onChange={handleChange}
                          className="form-input-dark"
                          required
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Ich darf schwimmen gehen: <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          id="swimmingYes"
                          name="canSwim"
                          value="yes"
                          checked={formData.canSwim === 'yes'}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-[#F26622] border-gray-300 focus:ring-[#F26622]"
                          required
                        />
                        <span className="ml-2 text-black">JA</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          id="swimmingNo"
                          name="canSwim"
                          value="no"
                          checked={formData.canSwim === 'no'}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-[#F26622] border-gray-300 focus:ring-[#F26622]"
                          required
                        />
                        <span className="ml-2 text-black">NEIN</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Ich bin einverstanden, dass Fotos, die am JS-Lager u. a. von mir gemacht werden, veröffentlicht werden (Pfarrblatt, Pfarrhomepage, Lagerzeitung): <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          id="photoConsentYes"
                          name="photoConsent"
                          value="yes"
                          checked={formData.photoConsent === 'yes'}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-[#F26622] border-gray-300 focus:ring-[#F26622]"
                          required
                        />
                        <span className="ml-2 text-black">JA</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          id="photoConsentNo"
                          name="photoConsent"
                          value="no"
                          checked={formData.photoConsent === 'no'}
                          onChange={handleChange}
                          className="form-radio h-5 w-5 text-[#F26622] border-gray-300 focus:ring-[#F26622]"
                          required
                        />
                        <span className="ml-2 text-black">NEIN</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-black">Kontaktdaten meiner Eltern/Erziehungsberechtigten zur Zeit des Lagers:</h3>
                    
                    <div className="mb-4">
                      <label htmlFor="parentName" className="block text-sm font-medium text-black mb-1">
                        Name: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="form-input-dark"
                      required
                    />
                  </div>

                    <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
                        Tel.- Nr.: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input-dark"
                      required
                    />
                  </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                        E-Mail (bitte dringend angeben!): <span className="text-red-500">*</span>
                    </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                      onChange={handleChange}
                      className="form-input-dark"
                      required
                      />
                    </div>
                </div>

                <div>
                    <label htmlFor="donation" className="block text-sm font-medium text-black mb-1">
                      Sachspende (optional):
                  </label>
                  <textarea
                      id="donation"
                      name="donation"
                      value={formData.donation || ''}
                    onChange={handleChange}
                    rows={3}
                    className="form-input-dark"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    style={{ backgroundColor: '#F26622' }}
                    className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl font-semibold hover:brightness-110 transition-all w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4" />
                      Anmeldung Absenden
                  </button>
                </div>
              </form>
                
                {/* Confirmation Modal */}
                {showConfirmation && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl">
                      <h3 className="text-xl font-bold mb-4 text-black">Bestätigung der Anmeldung</h3>
                      <p className="text-black/80 mb-4">
                        Mit dem Absenden dieser Anmeldung bestätigen Sie als Erziehungsberechtigter, dass alle angegebenen Informationen korrekt sind und Sie mit der Teilnahme Ihres Kindes am Jungscharlager 2025 einverstanden sind.
                      </p>
                      <p className="text-black/80 mb-6">
                        Diese elektronische Übermittlung gilt als Ihre Unterschrift und ist verbindlich.
                      </p>
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={() => setShowConfirmation(false)}
                          className="px-4 py-2 rounded-lg border border-gray-300 text-black hover:bg-gray-100 transition-colors"
                        >
                          Abbrechen
                        </button>
                        <button
                          onClick={confirmSubmit}
                          style={{ backgroundColor: '#F26622' }}
                          className="px-4 py-2 rounded-lg text-white hover:brightness-110 transition-colors"
                        >
                          Bestätigen und Absenden
                        </button>
                      </div>
            </div>
          </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-black">Vielen Dank für deine Anmeldung!</h2>
                  <p className="text-black/70 mb-6">
                    Die Anmeldung für {formData.childName} wurde erfolgreich übermittelt.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-xl mb-6 text-left">
                  <h3 className="text-lg font-semibold mb-3 text-black">Nächste Schritte:</h3>
                  <ul className="space-y-2 text-black/80">
                    <li className="flex items-start">
                      <span className="text-[#F26622] mr-2">•</span>
                      <span>Du erhältst in Kürze eine Bestätigungs-E-Mail an {formData.email}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F26622] mr-2">•</span>
                      <span>Bitte überweise den Betrag von 190,00 € bis spätestens 10. Juli 2025</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F26622] mr-2">•</span>
                      <span>Nutze unsere Packliste, um dich auf das Lager vorzubereiten</span>
                    </li>
                  </ul>
              </div>
              
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setActiveTab('todo')}
                    className="px-6 py-3 rounded-xl border border-gray-300 text-black hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Zur Packliste
                  </button>
                  <button
                    onClick={() => setActiveTab('home')}
                    style={{ backgroundColor: '#F26622' }}
                    className="px-6 py-3 rounded-xl text-white hover:brightness-110 transition-colors flex items-center justify-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    Zurück zur Startseite
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleNewRegistration}
                    className="px-6 py-3 rounded-xl border border-[#F26622] text-[#F26622] hover:bg-[#F26622]/10 transition-colors flex items-center justify-center gap-2 mx-auto"
                  >
                    <Plus className="w-4 h-4" />
                    Weitere Anmeldung senden
                  </button>
                  <p className="text-sm text-black/60 mt-2 text-center">
                    Deine Kontaktdaten werden beibehalten
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : activeTab === 'todo' ? (
          <div className="max-w-2xl mx-auto py-4 h-full overflow-auto relative pb-20">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-black">Packliste für das Lager</h2>
                <p className="text-black/70">Behalten Sie den Überblick über alles, was Sie für das Lager vorbereiten müssen.</p>
              </div>
              
              <div className="space-y-2">
                {todos.map(todo => (
                  <div 
                    key={todo.id} 
                    className={`flex items-center p-3 rounded-xl border ${
                      todo.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'
                    }`}
                  >
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                        todo.completed 
                          ? 'bg-green-500 text-white' 
                          : 'border-2 border-gray-300 text-transparent hover:border-gray-400'
                      }`}
                    >
                      {todo.completed && <Check className="w-4 h-4" />}
                    </button>
                    <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}>
                      {todo.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Fixed Progress Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50">
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-black">
                    {todos.filter(todo => todo.completed).length} von {todos.length} gepackt
                  </span>
                  <span className="text-sm font-medium text-black">
                    {Math.round((todos.filter(todo => todo.completed).length / todos.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full transition-all duration-300" 
                    style={{ 
                      width: `${(todos.filter(todo => todo.completed).length / todos.length) * 100}%`,
                      backgroundColor: '#F26622'
                    }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Completion Popup */}
            {showCompletionPopup && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl">
                  <h3 className="text-xl font-bold mb-4 text-black">Glückwunsch! 🎉</h3>
                  <p className="text-black/80 mb-6">
                    Du hast alle Gegenstände für das Lager gepackt! Du bist bestens vorbereitet für ein unvergessliches Jungscharlager.
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowCompletionPopup(false)}
                      style={{ backgroundColor: '#F26622' }}
                      className="px-4 py-2 rounded-lg text-white hover:brightness-110 transition-colors"
                    >
                      Super!
                    </button>
                  </div>
                </div>
                  </div>
                )}
              </div>
        ) : (
          <div className="max-w-4xl mx-auto py-4 h-full overflow-auto relative">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-black">Detaillierte Informationen zum Jungscharlager 2025</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Über das Lager</h3>
                  <p className="text-black/80">
                    Die Jungschar der Pfarrgemeinde Urfahr-St. Leopold fährt auch heuer wieder auf Jungscharlager.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Zeit und Ort</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-black mb-1">Wann</h4>
                      <p className="text-black/80">
                        Sonntag, 24. August 2025 um 13.45 Uhr bis Samstag, 30. August 2025 ca. 11.30 Uhr
                      </p>
                      <p className="text-black/80 mt-2">
                        <strong>Treffpunkt:</strong> bei der Pfarre St. Leopold
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-black mb-1">Wo</h4>
                      <p className="text-black/80">
                        Pfarrhof Sindelburg, Sindelburg 1, 3313 Wallsee
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Anmeldung</h3>
                  <p className="text-black/80 mb-2">
                    Bitte die Anmeldung eingescannt per Mail zukommen lassen an:
                  </p>
                  <p className="text-black/80 font-medium mb-2">
                    jungschar.leopold@gmail.com
                  </p>
                  <p className="text-black/80">
                    Oder: Das im QR-Code angehängte Formular vollständig ausfüllen!
                  </p>
                  <p className="text-black/80 mt-2">
                    <strong>Anmeldeschluss:</strong> Sonntag, 06. Juli 2025
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Kosten und Zahlung</h3>
                  <p className="text-black/80 mb-2">
                    <strong>Kosten:</strong> 190,00 € pro Kind
                  </p>
                  <p className="text-black/80 mb-2">
                    <strong>Zahlungsfrist:</strong> bis spätestens 10. Juli 2025
                  </p>
                  <p className="text-black/80 mb-2">
                    <strong>Bankverbindung:</strong>
                  </p>
                  <ul className="list-disc pl-5 text-black/80 mb-2">
                    <li>Empfänger: Pfarre St. Leopold – Jungschar</li>
                    <li>IBAN: AT90 1860 0000 1072 3823</li>
                    <li>Verwendungszweck: vollständiger Name des Kindes</li>
                  </ul>
                  <p className="text-black/80">
                    <strong>Geschwisterrabatt:</strong> auf Anfrage
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Spenden</h3>
                  <p className="text-black/80 mb-2">
                    Wir sind auch dankbar, wenn jene Familien, die es sich gut leisten können, eine zusätzliche Spende überweisen.
                  </p>
                  <p className="text-black/80 mb-2">
                    Außerdem freuen wir uns über Sachspenden wie z.B.:
                  </p>
                  <ul className="list-disc pl-5 text-black/80 mb-2">
                    <li>Kuchen</li>
                    <li>Nutella</li>
                    <li>Frühstückscerealien</li>
                    <li>etc.</li>
                  </ul>
                  <p className="text-black/80">
                    Aus organisatorischen Gründen bitten wir um eine kurze Info, wenn Sachspenden beigesteuert werden können.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Kontakt</h3>
                  <p className="text-black/80 mb-2">
                    Bei Fragen zum Lager könnt ihr uns gerne per Mail kontaktieren:
                  </p>
                  <p className="text-black/80 font-medium mb-2">
                    jungschar.leopold@gmail.com
                  </p>
                  <p className="text-black/80">
                    Auf Deine Teilnahme freut sich das gesamte Jungscharteam der Pfarre.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Button */}
            <button
              onClick={() => setActiveTab('register')}
              style={{ backgroundColor: '#F26622' }}
              className="fixed bottom-6 right-6 px-6 py-3 rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center justify-center z-50"
            >
              <div className="flex items-center gap-2">
                <Send className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Zur Anmeldung</span>
              </div>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;