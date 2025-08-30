import { Brain } from "lucide-react";

const NeuroHeader = () => {
  return (
    <header className="w-full">
      {/* Top Orange Bar */}
      <div className="h-2 bg-primary w-full"></div>
      
      {/* Logo Section */}
      <div className="bg-white pt-4 pb-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-full">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              Neuro<span className="text-primary">Activo</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NeuroHeader;