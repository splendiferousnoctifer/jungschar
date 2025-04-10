import React, { useState } from 'react';
import { MapPin, Calendar, Users, ChevronRight, Send, Menu, X, Check, Plus, Trash } from 'lucide-react';

const CustomLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 76.75 76.75">
    <path
      fill="#F26622"
      d="M52.16,0h-27.57c0,13.58-11.01,24.59-24.59,24.59v27.57c13.58,0,24.59,11.01,24.59,24.59h27.57c0-13.58,11.01-24.59,24.59-24.59v-27.57c-13.58,0-24.59-11.01-24.59-24.59ZM52.03,38.28c0,7.38-5.98,13.36-13.36,13.36-.46,0-.92-.02-1.37-.07-6.74-.68-11.99-6.37-11.99-13.29h0c0-7.38,5.98-13.36,13.36-13.36s13.36,5.98,13.36,13.36h0Z"
    />
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState<'info' | 'register' | 'todo'>('info');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    parentName: '',
    email: '',
    phone: '',
    session: 'july',
    allergies: '',
  });
  
  const [todos, setTodos] = useState([
    { id: 1, text: 'Pack swimwear', completed: false },
    { id: 2, text: 'Bring sunscreen', completed: true },
    { id: 3, text: 'Prepare emergency contacts list', completed: false },
    { id: 4, text: 'Sign medical release form', completed: false },
    { id: 5, text: 'Pack comfortable shoes', completed: true },
  ]);
  
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    
    const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
    setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
    setNewTodo('');
  };
  
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
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
                onClick={() => setActiveTab('info')}
                className={`${activeTab === 'info' ? 'tab-active-dark' : 'text-black/70 hover:text-black'}`}
              >
                General Info
              </button>
              <button
                onClick={() => setActiveTab('register')}
                className={`${activeTab === 'register' ? 'tab-active-dark' : 'text-black/70 hover:text-black'}`}
              >
                Registration
              </button>
              <button
                onClick={() => setActiveTab('todo')}
                className={`${activeTab === 'todo' ? 'tab-active-dark' : 'text-black/70 hover:text-black'}`}
              >
                Checklist
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
                    setActiveTab('info');
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    py-3 px-4 rounded-xl text-left transition-all
                    ${activeTab === 'info' 
                      ? 'bg-black/5 text-black font-medium' 
                      : 'text-black/70 hover:bg-black/5 hover:text-black'
                    }
                  `}
                >
                  General Info
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
                  Registration
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
                  Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1800px] mx-auto px-4 h-[92vh] md:landscape:overflow-hidden">
        {activeTab === 'info' ? (
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
                  src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&fit=crop&w=600&q=80" 
                  alt="Kids at camp" 
                  className="image-1 torn-paper"
                />
                <img 
                  src="https://images.unsplash.com/photo-1520095972714-909e91b038e5?auto=format&fit=crop&w=600&q=80" 
                  alt="Camping" 
                  className="image-2 torn-paper"
                />
                <img 
                  src="https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&w=600&q=80" 
                  alt="Nature activities" 
                  className="image-3 torn-paper"
                />
                <img 
                  src="https://images.unsplash.com/photo-1533230050368-fbf55584f7d7?auto=format&fit=crop&w=600&q=80" 
                  alt="Camp activities" 
                  className="image-4 torn-paper"
                />
                <img 
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80" 
                  alt="Outdoor adventure" 
                  className="image-5 torn-paper"
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-[25vh] z-10">
              <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col">
                <MapPin className="w-6 h-6 text-black mb-2" />
                <h3 className="text-lg font-semibold mb-2 text-black">Beautiful Location</h3>
                <p className="text-black/80 text-sm">
                  Nestled in 100 acres of pristine wilderness, perfect for exploration and adventure.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col">
                <Calendar className="w-6 h-6 text-black mb-2" />
                <h3 className="text-lg font-semibold mb-2 text-black">Flexible Sessions</h3>
                <p className="text-black/80 text-sm">
                  Choose from multiple two-week sessions throughout July and August.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col">
                <Users className="w-6 h-6 text-black mb-2" />
                <h3 className="text-lg font-semibold mb-2 text-black">Expert Staff</h3>
                <p className="text-black/80 text-sm">
                  Experienced counselors trained in outdoor education and safety.
                </p>
              </div>

              <div 
                onClick={() => setActiveTab('register')}
                style={{ backgroundColor: '#F26622' }}
                className="p-4 rounded-2xl shadow-xl cursor-pointer hover:brightness-110 transition-all flex flex-col"
              >
                <ChevronRight className="w-6 h-6 text-white mb-2" />
                <h3 className="text-lg font-semibold mb-2 text-white">Register Now</h3>
                <p className="text-white/90 text-sm">
                  Secure your child's spot for an unforgettable summer experience.
                </p>
              </div>
            </div>

            {/* Mobile Spacer */}
            <div className="h-16 md:hidden col-span-full"></div>
          </div>
        ) : activeTab === 'register' ? (
          <div className="max-w-2xl mx-auto py-4 h-full overflow-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-black mb-1">
                      Child's Name
                    </label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      className="form-input-dark"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-black mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      min="5"
                      max="15"
                      className="form-input-dark"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-black mb-1">
                      Parent's Name
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

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                      Email Address
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

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
                      Phone Number
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

                  <div>
                    <label htmlFor="session" className="block text-sm font-medium text-black mb-1">
                      Session
                    </label>
                    <select
                      id="session"
                      name="session"
                      value={formData.session}
                      onChange={handleChange}
                      className="form-input-dark"
                      required
                    >
                      <option value="july">July 1-15</option>
                      <option value="july-end">July 16-31</option>
                      <option value="august">August 1-15</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="allergies" className="block text-sm font-medium text-black mb-1">
                    Allergies or Special Requirements
                  </label>
                  <textarea
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
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
                    Submit Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto py-4 h-full overflow-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-black">Camp Preparation Checklist</h2>
                <p className="text-black/70">Keep track of everything you need to prepare for camp.</p>
              </div>
              
              <div className="mb-6">
                <form onSubmit={addTodo} className="flex gap-2">
                  <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new item..."
                    className="form-input-dark flex-1"
                  />
                  <button
                    type="submit"
                    style={{ backgroundColor: '#F26622' }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-xl font-semibold hover:brightness-110 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </form>
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
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                
                {todos.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p>Your checklist is empty. Add some items to get started!</p>
                  </div>
                )}
              </div>
              
              {todos.length > 0 && (
                <div className="mt-6 text-sm text-gray-500 flex justify-between items-center">
                  <span>
                    {todos.filter(t => t.completed).length} of {todos.length} tasks completed
                  </span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-full"
                      style={{ 
                        width: `${Math.round((todos.filter(t => t.completed).length / todos.length) * 100)}%` 
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;