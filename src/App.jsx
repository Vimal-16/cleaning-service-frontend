import maid from './assets/maid.png';
import BookingForm from './BookingForm';
import { Routes, Route } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'




function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

 useEffect(() => {
  // Check if user is logged in
  const checkAuth = () => {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user');
    
    if (token && user) {
      setIsLoggedIn(true);
      setUserName(JSON.parse(user).name);
    }
  };
  
  checkAuth();
}, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/';
  };
  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToBooking = () => {
    document.getElementById('booking-form').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };


  return (
    <>
      {/*navbar*/}
      <nav className="bg-blue-600 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">CleanPro</h1>
          
          <ul className="flex gap-8 font-medium text-2l justify-around w-1/2 text-white items-center">
            <li>Home</li>
            <li onClick={scrollToServices}>Services</li>
            <li>Contact</li>
            <li>About Us</li>
            
            {isLoggedIn ? (
              <>
                <li className="text-white">Welcome, {userName}!</li>
                <li>
                  <button 
                    onClick={handleLogout}
                    className="px-6 py-2 bg-red-500 text-white rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                   <Link to="/login">
                    <button className="px-6 py-2 bg-white text-blue-600 rounded">
                      Log In
                    </button>
                  </Link>
                </li>
                <li>
                   <Link to="/signup">
                    <button className="px-6 py-2 bg-green-500 text-white rounded">
                      Sign Up
                    </button>
                   </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      
      
 
 {/* hero section */}
<div className="bg-gray-100 py-20 px-4">
  <div className="max-w-6xl mx-auto flex items-center gap-8">
    
    {/* Left side - Text */}
    <div className="w-1/2">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Professional Cleaning Services
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        We make your space sparkle. Book trusted cleaners in minutes.
      </p>
      <button onClick={scrollToBooking} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700">
        Book Now
      </button>
    </div>

    {/* Right side - Image */}
    <div className="w-1/2">
      <img 
        src={maid}
        alt="Cleaning service" 
        className="rounded-lg shadow-sm w-full h-auto"
      />
    </div>

  </div>
</div>

{/*Services */}

     <div id="services" className='bg-gray-100 py-20 px-4 '>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800  text-center mb-8'>Our services</h1>
        <div className='grid grid-cols-3  gap-16 text-center '>
          {/*Basic clean*/}
          <div className='bg-white p-6 mt-4  rounded-lg shadow-lg '>
            <h3 className='font-bold text-2xl mb-4'>Basic clean</h3>
            <p className='text-gray-600 mb-4'>Essential cleaning for your home</p>
            <p className="text-3xl font-bold text-blue-600 mb-4">₹699</p>
            <button onClick={scrollToBooking} className="bg-blue-600 text-white px-6 py-2 rounded w-full">Book Now</button>
          </div>
             {/* Deep Clean Card */}
      <div className="bg-white p-6 mb-4 rounded-lg shadow-xl shadow-blue-300/50">
        <h3 className="text-2xl font-bold mb-4">Deep Clean</h3>
        <p className="text-gray-600 mb-4">Thorough cleaning from top to bottom</p>
        <p className="text-3xl font-bold text-blue-600 mb-4">₹1,499</p>
        <button onClick={scrollToBooking} className="bg-blue-600 text-white px-6 py-2 rounded w-full">
          Book Now
        </button>
      </div>

      {/* Office Clean Card */}
      <div className="bg-white p-6  mt-4 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Office Clean</h3>
        <p className="text-gray-600 mb-4">Professional workspace cleaning</p>
        <p className="text-3xl font-bold text-blue-600 mb-4">₹1,699</p>
        <button onClick={scrollToBooking} className="bg-blue-600 text-white px-6 py-2 rounded w-full">
          Book Now
        </button>
      </div>

        </div>
      </div>

     </div>
   
    {/* How It Works Section */}
<div className="bg-gray-100 py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
    
    <div className="grid grid-cols-3 gap-8">
      
      {/* Step 1 */}
      <div className="text-center">
        <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          1
        </div>
        <h3 className="text-xl font-bold mb-2">Book Online</h3>
        <p className="text-gray-600">
          Choose your service and pick a convenient time slot in minutes
        </p>
      </div>

      {/* Step 2 */}
      <div className="text-center">
        <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          2
        </div>
        <h3 className="text-xl font-bold mb-2">We Clean</h3>
        <p className="text-gray-600">
          Our professional team arrives and makes your space sparkle
        </p>
      </div>

      {/* Step 3 */}
      <div className="text-center">
        <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          3
        </div>
        <h3 className="text-xl font-bold mb-2">Relax & Enjoy</h3>
        <p className="text-gray-600">
          Sit back and enjoy your fresh, clean space hassle-free
        </p>
      </div>

    </div>
  </div>
</div>

{/* Testimonials Section */}
<div className="py-20 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
    
    <div className="grid grid-cols-3 gap-8">
      
      {/* Testimonial 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="Customer" 
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h4 className="font-bold">Sarah Johnson</h4>
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
        <p className="text-gray-600">
          "Absolutely amazing service! My home has never looked this clean. Highly professional and detail-oriented team."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Customer" 
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h4 className="font-bold">Mike Chen</h4>
            <div className="text-yellow-500">⭐⭐⭐⭐</div>
          </div>
        </div>
        <p className="text-gray-600">
          "Great experience from booking to finish. They were punctual, thorough, and very affordable. Will definitely use again!"
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <img 
            src="https://randomuser.me/api/portraits/women/68.jpg" 
            alt="Customer" 
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h4 className="font-bold">Priya Sharma</h4>
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
        <p className="text-gray-600">
          "Best cleaning service I've used! They cleaned my office thoroughly and were very careful with equipment. Exceptional work!"
        </p>
      </div>

    </div>
  </div>
</div>

{/* Booking Form */}
<div id="booking-form">
  <BookingForm />
</div>
{/* Footer */}
<footer className="bg-gray-900 text-white py-12 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8">
    
    {/* Company Info */}
    <div>
      <h3 className="text-2xl font-bold mb-4">CleanPro</h3>
      <p className="text-gray-400">
        Professional cleaning services you can trust. Making homes and offices sparkle since 2020.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-bold mb-4">Quick Links</h4>
      <ul className="space-y-2 text-gray-400">
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h4 className="text-lg font-bold mb-4">Our Services</h4>
      <ul className="space-y-2 text-gray-400">
        <li>Basic Clean</li>
        <li>Deep Clean</li>
        <li>Office Clean</li>
        <li>Move In/Out</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-lg font-bold mb-4">Contact Us</h4>
      <ul className="space-y-2 text-gray-400">
        <li>📧 info@cleanpro.com</li>
        <li>📞 +1 (555) 123-4567</li>
        <li>📍 123 Main St, New York, NY</li>
      </ul>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
    <p>&copy; 2026 CleanPro. All rights reserved.</p>
  </div>
</footer>

    </>
  )
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
