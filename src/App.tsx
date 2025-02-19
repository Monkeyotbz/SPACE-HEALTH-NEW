import { Calendar, Clock, FileText, Stethoscope } from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import LoadingScreen from './components/LoadingScreen';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';
import RegisterScreen from './components/RegisterScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleContinue = () => {
    setIsLoading(false);
  };

  const handleRegister = () => {
    setIsRegistering(true);
  };

  const handleCancelRegister = () => {
    setIsRegistering(false);
  };

  const services = [
    {
      title: "Consultas Virtuales",
      description: "Atención médica primaria desde la comodidad de su hogar",
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      link: "#consultas"
    },
    {
      title: "Revisión de Exámenes",
      description: "Análisis y seguimiento de resultados médicos",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      link: "#examenes"
    },
    {
      title: "Programación de Citas",
      description: "Reserve su cita presencial o virtual",
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      link: "#citas"
    },
    {
      title: "Cirugías Programadas",
      description: "Coordine y programe procedimientos quirúrgicos",
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      link: "#cirugias"
    }
  ];

  if (isLoading) {
    return <LoadingScreen onContinue={handleContinue} />;
  }

  if (isRegistering) {
    return <RegisterScreen onContinue={handleCancelRegister} />;
  }

  return (
    <div className="min-h-screen main-container">
      <Navbar onRegister={handleRegister} />
      
      {/* Hero Section */}
      <div className="relative bg-white bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <div className="inline-block bg-blue-600 bg-opacity-60 p-2 rounded flex items-center justify-center mb-8 shadow-md border border-blue-300">
                <img src="/LOGO.png" alt="Space Health Logo" className="inline-block w-46 h-40 mr-5 animate-move-rotate" />
                <span className="block text-white">Space Health</span>
              </div>
              <span className="block text-white">El futuro de la salud </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Acceda a servicios médicos de calidad desde cualquier lugar. Consultas virtuales, revisión de exámenes y programación de citas en un solo lugar.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#servicios" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  Comenzar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="servicios" className="py-12 bg-gray-50 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-lg text-black">
              Todo lo que necesita para cuidar su salud en un solo lugar
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Section */}
      <div className="bg-white bg-opacity-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Nuestro Médico Fundador
            </h2>
            <div className="mt-8">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                <img
                  src="/drdiegocarvajal2.jpg"
                  alt="Dr. Diego Carvajal"
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-900">Dr. Diego Carvajal</h3>
                <p className="text-blue-600 font-medium mb-4">Médico Cirujano Especialista</p>
                <p className="text-gray-600">
                  Especialista en medicina general con amplia experiencia en atención primaria y telemedicina.
                  Comprometido con brindar atención médica de calidad a través de nuestra plataforma virtual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Section */}
      <div className="bg-white bg-opacity-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Desarrollador y Cofundador
            </h2>
            <div className="mt-8">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                <img
                  src="/Gabriel.jpg" // Asegúrate de reemplazar esto con la ruta correcta de tu foto
                  alt="Tu Nombre"
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-gray-900">Gabriel Abad Carvajal Gutierréz</h3>
                <p className="text-blue-600 font-medium mb-4">Desarrollador y Cofundador</p>
                <p className="text-gray-600">
                  Desarrollador de software con experiencia en la creación de aplicaciones web y móviles. Apasionado por la tecnología y comprometido con la innovación en el sector salud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 bg-opacity-80">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-white">24/7</div>
              <div className="mt-2 text-lg font-medium text-blue-100">
                Atención Disponible
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-white">+1000</div>
              <div className="mt-2 text-lg font-medium text-blue-100">
                Pacientes Atendidos
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-white">+50</div>
              <div className="mt-2 text-lg font-medium text-blue-100">
                Especialistas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">Space Health</h3>
              <p className="mt-2">Hecho en Colombia y Venezuela para el mundo</p>
              <p className="mt-2">© 2025 Space Health. Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-white hover:text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-white hover:text-blue-500" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-white hover:text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;