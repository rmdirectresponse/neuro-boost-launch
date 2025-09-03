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
              src="/lovable-uploads/3f0fe036-d245-4f89-82eb-ba9aab355837.png"
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