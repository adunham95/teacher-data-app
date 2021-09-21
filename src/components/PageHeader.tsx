import React from 'react';

interface PageHeaderProps{
    title: string,
    className: string,
    textColor: string,
    bgColor: string
}

const PageHeader = ({
  title, className = '', textColor = 'text-gray-900', bgColor = 'bg-white',
}: PageHeaderProps) => (
  <header
    className={`${bgColor} border-b-2 ${className}`}
  >
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className={`text-3xl font-bold ${textColor}`}>{title}</h1>
    </div>
  </header>
);

export default PageHeader;
