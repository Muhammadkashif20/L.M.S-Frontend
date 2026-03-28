import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col justify-between px-5 py-6">

      {/* Top */}
      <div>

        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
            SMIT LMS
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">

          <div className="px-4 py-2 rounded-lg bg-gray-100 text-gray-900 text-sm font-medium">
            Dashboard
          </div>

          <div className="px-4 py-2 rounded-lg text-gray-500 text-sm hover:bg-gray-50 transition">
            Courses
          </div>

          <div className="px-4 py-2 rounded-lg text-gray-500 text-sm hover:bg-gray-50 transition">
            Attendance
          </div>

          <div className="px-4 py-2 rounded-lg text-gray-500 text-sm hover:bg-gray-50 transition">
            Progress
          </div>

          <div className="px-4 py-2 rounded-lg text-gray-500 text-sm hover:bg-gray-50 transition">
            Assignments
          </div>

          <div className="px-4 py-2 rounded-lg text-gray-500 text-sm hover:bg-gray-50 transition">
            Announcements
          </div>

          <div className="px-4 py-2 rounded-lg text-gray-500 text-sm hover:bg-gray-50 transition">
            Profile
          </div>

        </nav>
      </div>

      {/* Bottom */}
      <div className="border-t pt-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-medium">
            S
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Student</p>
            <p className="text-xs text-gray-400">Active</p>
          </div>
        </div>

        <button className="text-sm text-gray-400 hover:text-red-500 transition">
          Logout
        </button>

      </div>

    </div>
  );
};

export default Sidebar;