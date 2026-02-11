
import React from 'react';
import ImageSlider from '../components/ImageSlider';
import CampusSection from '../components/CampusSection';
import CurriculumSection from '../components/CurriculumSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <ImageSlider />
      <CampusSection />
      <CurriculumSection />
    </div>
  );
};

export default HomePage;
