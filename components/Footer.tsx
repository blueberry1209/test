
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div>
            <h3 className="text-lg font-bold text-gray-800">바이브코딩 학교</h3>
            <p className="mt-1 text-sm text-gray-500">
              미래를 코딩하는 인재 양성소
            </p>
          </div>
          <div className="text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Vibecoding School. All rights reserved.</p>
            <p>문의: contact@vibecoding.school</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
