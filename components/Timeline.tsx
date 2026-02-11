
import React from 'react';

const historyData = [
  {
    stage: '창립기',
    year: '2015-2018',
    color: 'bg-green-100 text-green-800',
    events: [
      { year: '2015', description: '바이브코딩 설립, 코딩 교육 시작' },
      { year: '2017', description: '첫 졸업생 배출 및 프로젝트 발표회 개최' },
      { year: '2018', description: '초등/중등 과정 분리, 전문성 강화' },
    ],
  },
  {
    stage: '확장기',
    year: '2019-2022',
    color: 'bg-blue-100 text-blue-800',
    events: [
      { year: '2019', description: '온라인 교육 플랫폼 도입' },
      { year: '2020', description: '인공지능(AI) 교육 과정 신설' },
      { year: '2022', description: '전국 코딩 경진대회 수상' },
    ],
  },
  {
    stage: '전문화기',
    year: '2023-2026',
    color: 'bg-indigo-100 text-indigo-800',
    events: [
      { year: '2023', description: '기업 협력 프로젝트 과정 도입' },
      { year: '2024', description: '메타버스 및 창작 트랙 심화 과정 개설' },
      { year: '2026', description: '(예정) 글로벌 캠퍼스 확장' },
    ],
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            학교 연혁
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            끊임없이 성장하고 발전해 온 바이브코딩 학교의 발자취입니다.
          </p>
        </div>

        <div className="mt-12 flow-root">
          <div className="relative -mb-8">
            <div className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true"></div>
            {historyData.map((era, eraIndex) => (
              <div key={era.stage} className="relative pl-8 mb-12">
                <span className={`relative flex items-center justify-center w-8 h-8 ${era.color} rounded-full`}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                </span>
                <div className="min-w-0 flex-1 ml-4">
                    <div>
                        <div className="text-xl font-bold text-gray-900">{era.stage}</div>
                        <p className="text-sm text-gray-500">{era.year}</p>
                    </div>
                    <div className="mt-4 space-y-3">
                    {era.events.map((event) => (
                      <div key={event.year} className="relative pl-6">
                        <div className="absolute top-2 left-0 w-2 h-2 bg-gray-400 rounded-full" aria-hidden="true"></div>
                        <p className="text-md text-gray-700">
                          <span className="font-semibold">{event.year}</span>: {event.description}
                        </p>
                      </div>
                    ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
