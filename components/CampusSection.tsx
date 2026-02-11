
import React from 'react';

const CampusSection: React.FC = () => {
  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">학교 공간 소개</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            안정적인 교육 환경, 배움의 신뢰를 더합니다
          </p>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            학생들이 학습에 몰입하고 창의성을 마음껏 발휘할 수 있는 최적의 공간을 제공합니다.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop" alt="최첨단 코딩 실습실" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">최첨단 코딩 실습실</h3>
                <p className="mt-3 text-base text-gray-500">
                  최신 장비와 쾌적한 환경에서 코딩 능력을 마음껏 펼칠 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop" alt="협업 공간" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">협업과 창의의 공간</h3>
                <p className="mt-3 text-base text-gray-500">
                  자유로운 분위기에서 팀 프로젝트와 스터디를 통해 함께 성장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
