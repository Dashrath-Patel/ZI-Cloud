import React from "react";

const OsloChat = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b bg-white">
        <div className="flex items-center gap-2">
          <button className="text-xl font-bold text-[#F9B233]">★</button>
          <span className="text-lg font-semibold">Untitled List</span>
          <button className="ml-2 text-gray-400 hover:text-gray-600">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-1/2 flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
              <div className="bg-[#F9B233] h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <span className="text-sm font-medium text-gray-700">Who</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-sm text-gray-400">What/Why</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-sm text-gray-400">Where</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-sm text-gray-400">When</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-500">Save</button>
          <button className="bg-[#F9B233] text-white px-4 py-2 rounded">Make Campaign</button>
        </div>
      </header>
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-16 bg-white border-r flex flex-col items-center py-4 gap-4">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-10 h-10 rounded-full mb-4" />
          <button className="text-[#F9B233]">★</button>
          <button className="text-gray-400 hover:text-[#F9B233]">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>
          </button>
          <button className="text-gray-400 hover:text-[#F9B233]">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
          </button>
          <button className="text-gray-400 hover:text-[#F9B233]">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12H8"/><path d="M12 16V8"/></svg>
          </button>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex">
          {/* Chat Section */}
          <section className="flex-1 flex flex-col px-12 py-8">
            <h2 className="text-2xl font-semibold mb-6 text-[#F9B233]">★ Oslo chat</h2>
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <p className="text-gray-700 mb-2">Hello I’m Oslo. Tell me what’s on your mind</p>
              <div className="flex gap-2 text-gray-400 text-xs">
                <button>□</button>
                <button>↻</button>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <button className="bg-[#F9F9F9] border border-[#F9B233] text-[#3B3B3B] px-6 py-2 rounded shadow">Create leads on Tech targets</button>
            </div>
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <p className="text-gray-700 mb-2">ICP updated to target Tech Companies. If you want to specify roles, locations, or other criteria for decision-makers, please let me know</p>
              <div className="flex gap-2 text-gray-400 text-xs">
                <button>□</button>
                <button>↻</button>
              </div>
            </div>
            <div className="mt-auto">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow">
                <input className="flex-1 border-none outline-none bg-transparent" placeholder="Type a message..." />
                <button className="text-[#F9B233] ml-2">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
                </button>
              </div>
            </div>
          </section>
          {/* Right Panel */}
          <aside className="w-[420px] bg-white border-l px-8 py-8 overflow-y-auto">
            <h3 className="text-xl font-semibold mb-2">Let’s define your <span className="text-[#F9B233]">targets</span></h3>
            <p className="text-gray-400 text-sm mb-6">Focus on the most relevant fields to shape your ICP — all fields are optional</p>
            <div className="mb-8">
              <h4 className="font-semibold mb-2">Company Profile</h4>
              <div className="mb-4">
                <label className="block text-gray-500 text-xs mb-1">Company Headcount</label>
                <select className="w-full border rounded px-3 py-2 text-gray-700">
                  <option>1-10..</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-500 text-xs mb-1">Company HQ Locations</label>
                <select className="w-full border rounded px-3 py-2 text-gray-700">
                  <option>India..</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-500 text-xs mb-1">Revenue range</label>
                <select className="w-full border rounded px-3 py-2 text-gray-700">
                  <option>50L - 1Cr..</option>
                </select>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Prospect Profile</h4>
              <div className="mb-4">
                <label className="block text-gray-500 text-xs mb-1">Department</label>
                <input className="w-full border rounded px-3 py-2 text-gray-700" placeholder="Search department..." />
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default OsloChat;
