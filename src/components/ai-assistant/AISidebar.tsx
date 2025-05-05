
import React from 'react';
import AICapabilitiesCard from './AICapabilitiesCard';
import AIUsageGuideCard from './AIUsageGuideCard';

const AISidebar = () => {
  return (
    <div className="md:col-span-1 space-y-6">
      <AICapabilitiesCard />
      <AIUsageGuideCard />
    </div>
  );
};

export default AISidebar;
