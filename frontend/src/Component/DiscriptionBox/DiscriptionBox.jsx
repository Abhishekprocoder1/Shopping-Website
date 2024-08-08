import React, { useState } from 'react';
import './DiscriptionBox.css';

const DiscriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='discriptionbox'>
      <div className="descriptionBox-navigator">
        <div 
          className={`description-nav-box ${activeTab === 'description' ? 'active' : ''}`} 
          onClick={() => handleTabClick('description')}
        >
          Description
        </div>
        <div 
          className={`description-nav-reviwe ${activeTab === 'reviews' ? 'active' : ''}`} 
          onClick={() => handleTabClick('reviews')}
        >
          Reviews (122)
        </div>
      </div>
      <div className="descriptionBox-content">
        {activeTab === 'description' ? (
          <div className="descriptionBox-paragraph">
            <p>Business-to-administration (B2A) refers to transactions conducted online between companies and public administration or government bodies. Many branches of government are dependent on various types of e-services or products. These products and services often pertain.</p>
            <p>E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer (C2C), or consumer-to-business (C2B).</p>
          </div>
        ) : (
          <div className="descriptionBox-reviews">
            <p>User reviews and ratings will be displayed here. This section can be populated with user-generated content or a list of reviews retrieved from a database.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscriptionBox;
