import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16">
        <div className="flex h-full items-center justify-between">
          <div className="flex-1 flex justify-start">
            <a href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              ChatGPT Ad Maker
            </a>
          </div>
          
          <nav className="flex-1 flex justify-center space-x-8">
            <a
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex-1 flex justify-end">
            {/* 将来的な機能のためのスペース */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 