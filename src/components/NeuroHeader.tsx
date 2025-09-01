const NeuroHeader = () => {
  return (
    <header className="w-full">
      {/* Top Orange Bar */}
      <div className="h-2 bg-primary w-full"></div>
      
      {/* Logo Section */}
      <div className="bg-white pt-2 pb-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <img
              src="/lovable-uploads/435bd054-6cea-4b81-9980-6918bd55d17b.png"
              alt="NeuroActivo - Programa de Ejercicios Mentales"
              className="h-20 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NeuroHeader;