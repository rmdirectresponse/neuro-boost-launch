const NeuroHeader = () => {
  return (
    <header className="w-full">
      {/* Top Orange Bar */}
      <div className="h-2 bg-primary w-full"></div>
      
      {/* Logo Section */}
      <div className="bg-white pt-4 pb-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <img
              src="/lovable-uploads/3c50eaf7-d93a-4946-8379-c2578b731c17.png"
              alt="NeuroActivo - Programa de Ejercicios Mentales"
              className="h-24 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NeuroHeader;