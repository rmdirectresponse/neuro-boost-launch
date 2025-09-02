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
              src="/lovable-uploads/8d0391ba-b8b1-4993-affe-b43ca306eabc.png"
              alt="NeuroActive - Mental Exercise Program"
              className="h-24 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NeuroHeader;