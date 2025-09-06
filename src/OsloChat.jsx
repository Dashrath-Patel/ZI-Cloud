import React, { useState } from "react";

const OsloChat = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { id: 0, label: "Who", progress: 25 },
    { id: 1, label: "What/Why", progress: 50 },
    { id: 2, label: "Where", progress: 75 },
    { id: 3, label: "When", progress: 100 }
  ];

  const handleStepClick = (stepId) => {
    setCurrentStep(stepId);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      {/* Header */}
      <header className="flex items-center px-6 py-4 border-b bg-white ml-20">
        {/* Left Section with Untitled List */}
        <div className="flex items-center gap-3 min-w-0">
          <button className="text-gray-400 hover:text-gray-600">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <span className="text-lg font-medium">Untitled List</span>
          <button className="ml-2 text-gray-400 hover:text-gray-600">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/>
            </svg>
          </button>
        </div>
        
        {/* Center Progress Section */}
        <div className="flex-1 flex justify-center px-8">
          <div className="flex items-center gap-20">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className="flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
              >
                {/* Individual Progress Bar */}
                <div className="w-36 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
                      currentStep === step.id 
                        ? 'bg-[#F9B233] w-full' 
                        : 'bg-gray-200 w-0'
                    }`}
                  ></div>
                </div>
                
                {/* Step Label */}
                <span className={`text-base font-medium transition-colors duration-200 ${
                  currentStep === step.id 
                    ? 'text-[#F9B233]' 
                    : 'text-gray-400'
                }`}>
                  {step.label}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-gray-700 font-medium">Save</button>
          <button className="bg-[#F9B233] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#E8A42A] transition-colors">
            Make Campaign
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-20 bg-white border-r flex flex-col items-center pb-6">
          {/* Top Star Icon */}
          <button className="p-3 mb-4 text-[#F9B233] bg-[#FFF8E7] rounded mt-4">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </button>
          
          {/* Profile Avatar */}
          <div className="mb-6">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-12 h-12 rounded-full" />
          </div>
          
          {/* Navigation Icons */}
          <div className="flex flex-col gap-4 flex-1">
            {/* Home */}
            <button className="p-3 text-[#F9B233] bg-[#FFF8E7] rounded hover:bg-[#FFF0CC] transition-colors">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </button>
            
            {/* Rocket */}
            <button className="p-3 text-gray-400 hover:text-[#F9B233] hover:bg-[#FFF8E7] rounded transition-colors">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
            </button>
            
            {/* Document */}
            <button className="p-3 text-gray-400 hover:text-[#F9B233] hover:bg-[#FFF8E7] rounded transition-colors">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </button>
            
            {/* Users */}
            <button className="p-3 text-gray-400 hover:text-[#F9B233] hover:bg-[#FFF8E7] rounded transition-colors">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </button>
            
            {/* Pie Chart */}
            <button className="p-3 text-gray-400 hover:text-[#F9B233] hover:bg-[#FFF8E7] rounded transition-colors">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
                <path d="M22 12A10 10 0 0 0 12 2v10z"/>
              </svg>
            </button>
            
            {/* Mail */}
            <button className="p-3 text-gray-400 hover:text-[#F9B233] hover:bg-[#FFF8E7] rounded transition-colors">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </button>
          </div>
          
          {/* Bottom Icons */}
          <div className="flex flex-col gap-4 mt-auto pb-6">
            {/* Settings */}
            <button className="p-3 text-gray-400 hover:text-[#F9B233] hover:bg-[#FFF8E7] rounded transition-colors">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </button>
            
            {/* Logout */}
            <button className="p-3 text-gray-400 hover:text-[#F9B233] hover:bg-[#FFF8E7] rounded transition-colors">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16,17 21,12 16,7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Chat Section */}
          <section className="flex-1 bg-[#FAFAFA] flex flex-col max-w-[calc(100vw-450px)]">
            <div className="p-8 flex-1">
              <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <span className="text-[#F9B233]">⚡</span>
                Oslo chat
              </h2>
              
              <div className="space-y-6">
                {/* First Chat Message */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <p className="text-gray-700 mb-4 leading-relaxed">Hello I'm Oslo. Tell me what's on your mind</p>
                  <div className="flex gap-2 text-gray-400">
                    {/* Copy Button */}
                    <button className="p-1.5 hover:text-gray-600 hover:bg-gray-50 rounded transition-colors" title="Copy message">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                      </svg>
                    </button>
                    {/* Reload/Refresh Button */}
                    <button className="p-1.5 hover:text-gray-600 hover:bg-gray-50 rounded transition-colors" title="Regenerate response">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                        <path d="M21 3v5h-5"/>
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                        <path d="M3 21v-5h5"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Suggestion Button */}
                <div className="flex justify-end my-6">
                  <button className="bg-white border-2 border-[#F9B233] text-gray-700 px-6 py-3 rounded-xl shadow-sm hover:bg-[#FFF8E7] transition-all duration-200 hover:shadow-md">
                    Create leads on Tech targets
                  </button>
                </div>

                {/* Second Chat Message */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <p className="text-gray-700 mb-4 leading-relaxed">ICP updated to target Tech Companies. If you want to specify roles, locations, or other criteria for decision-makers, please let me know</p>
                  <div className="flex gap-2 text-gray-400">
                    {/* Copy Button */}
                    <button className="p-1.5 hover:text-gray-600 hover:bg-gray-50 rounded transition-colors" title="Copy message">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                        <path d="M4 16c-1.1 0-2-.9-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                      </svg>
                    </button>
                    {/* Reload/Refresh Button */}
                    <button className="p-1.5 hover:text-gray-600 hover:bg-gray-50 rounded transition-colors" title="Regenerate response">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                        <path d="M21 3v5h-5"/>
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                        <path d="M3 21v-5h5"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-8 pt-0">
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-sm border">
                <input 
                  className="flex-1 border-none outline-none bg-transparent text-gray-700 placeholder-gray-400" 
                  placeholder="Type a message..." 
                />
                <button className="text-[#F9B233] ml-4 p-1 hover:bg-[#FFF8E7] rounded">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22,2 15,22 11,13 2,9"/>
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* Right Panel */}
          <aside className="w-[480px] bg-white border-l flex flex-col">
            <div className="p-6 flex-1 overflow-y-auto">
              <h3 className="text-xl font-semibold mb-2">
                Let's define your <span className="text-[#F9B233]">targets</span>
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                Focus on the most relevant fields to shape your ICP — all fields are optional
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Company Profile</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-500 text-sm mb-2">Company Headcount</label>
                      <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F9B233] focus:border-transparent">
                        <option>1-10..</option>
                        <option>11-50</option>
                        <option>51-200</option>
                        <option>201-1000</option>
                        <option>1000+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-500 text-sm mb-2">Company HQ Locations</label>
                      <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F9B233] focus:border-transparent">
                        <option>India..</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Australia</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-500 text-sm mb-2">Revenue range</label>
                      <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F9B233] focus:border-transparent">
                        <option>50L - 1Cr..</option>
                        <option>1Cr - 10Cr</option>
                        <option>10Cr - 100Cr</option>
                        <option>100Cr+</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Prospect Profile</h4>
                  
                  <div>
                    <label className="block text-gray-500 text-sm mb-2">Department</label>
                    <input 
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9B233] focus:border-transparent" 
                      placeholder="Search department..." 
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default OsloChat;
