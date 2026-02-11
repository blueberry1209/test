
import React from 'react';

const PrincipalIntro: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="relative">
            <img
              className="w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
              alt="교장선생님"
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              교장선생님 인사말
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              "바이브코딩 학교에 오신 것을 진심으로 환영합니다. 저희는 단순한 코딩 기술 교육을 넘어, 학생들이 <strong>미래 사회의 주역으로 성장할 수 있는 창의적 문제 해결 능력</strong>을 기르는 데 교육의 초점을 맞추고 있습니다."
            </p>
            <p className="mt-4 text-gray-600">
              학생 한 명 한 명의 잠재력을 소중히 여기며, 각자의 꿈을 향해 나아갈 수 있도록 든든한 동반자가 되겠습니다. 바이브코딩 학교는 끊임없이 변화하고 발전하며 학생들과 함께 성장하는 학교가 될 것을 약속드립니다.
            </p>
             <p className="mt-4 text-gray-600 font-semibold">
              - 바이브코딩 학교장
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalIntro;
