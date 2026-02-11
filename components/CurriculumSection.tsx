
import React from 'react';

const curriculumSteps = [
  {
    step: '1단계',
    title: '입문 과정',
    description: '코딩의 기초 개념과 원리를 배우고, 논리적 사고력을 기르는 첫 단계입니다. 프로그래밍에 대한 흥미를 유발하고 자신감을 심어줍니다.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-5.247-8.247l10.494 0M17.253 12l-10.494 0" />
      </svg>
    ),
  },
  {
    step: '2단계',
    title: '심화 과정',
    description: '주요 프로그래밍 언어와 알고리즘을 깊이 있게 학습합니다. 실제 문제 해결 능력을 키우고, 데이터 구조에 대한 이해를 높입니다.',
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" />
      </svg>
    ),
  },
  {
    step: '3단계',
    title: '프로젝트 과정',
    description: '팀을 이루어 실제 서비스를 기획하고 개발합니다. 협업, 문제 해결, 발표 능력을 종합적으로 향상시키는 최종 단계입니다.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5 0l-2.269-2.269m2.269 2.269l2.269 2.269M3 17.25l2.269-2.269m-2.269 2.269l2.269 2.269" />
      </svg>
    ),
  },
];

const CurriculumSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">핵심 교육 과정</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            체계적인 성장 로드맵
          </p>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            기초부터 전문가 수준까지, 단계별 학습을 통해 학생의 잠재력을 최대한 이끌어냅니다.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 hidden lg:block" aria-hidden="true"></div>
            
            <div className="flex flex-col lg:space-y-0 space-y-12">
              {curriculumSteps.map((item, index) => (
                <div key={item.title} className="relative flex items-center lg:justify-center">
                  <div className={`flex flex-col lg:flex-row items-center w-full lg:w-4/5 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="flex-shrink-0 w-24 h-24 rounded-full bg-green-600 flex items-center justify-center shadow-lg z-10">
                      {item.icon}
                    </div>
                    <div className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 lg:w-2/3 ${index % 2 === 0 ? 'lg:mr-10' : 'lg:ml-10'} mt-6 lg:mt-0`}>
                      <p className="text-sm font-semibold text-green-600 uppercase">{item.step}</p>
                      <h3 className="mt-2 text-2xl font-bold text-gray-900">{item.title}</h3>
                      <p className="mt-4 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
