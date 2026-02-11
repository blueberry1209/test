
import React from 'react';
import PrincipalIntro from '../components/PrincipalIntro';
import Timeline from '../components/Timeline';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center">
                학교소개
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto text-center">
                바이브코딩 학교가 걸어온 길과 교육 철학을 소개합니다.
            </p>
        </div>
      <PrincipalIntro />
      <Timeline />
    </div>
  );
};

export default AboutPage;
