import { useState } from 'react';
import { Camera, Plus, ChevronLeft, Sun, Wind, Droplets, Heart, Search, User, Calendar, Grid } from 'lucide-react';

export default function OOTDApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [showCamera, setShowCamera] = useState(false);

  // 데모 데이터
  const outfits = [
    {
      id: 1,
      date: '2025.05.15',
      image: '/api/placeholder/400/500',
      colors: ['#E6E6E6', '#A6A6A6', '#424242'],
      weather: { temp: '21°C', wind: '3m/s', humidity: '45%' }
    },
    {
      id: 2,
      date: '2025.05.14',
      image: '/api/placeholder/400/500',
      colors: ['#D4D1CB', '#8C7D70', '#333333'],
      weather: { temp: '19°C', wind: '4m/s', humidity: '60%' }
    }
  ];

  const recommendations = [
    '/api/placeholder/120/180',
    '/api/placeholder/120/180',
    '/api/placeholder/120/180'
  ];

  // 카메라 컴포넌트
  const CameraView = () => (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="p-4 flex justify-between items-center">
        <button onClick={() => setShowCamera(false)} className="p-2">
          <ChevronLeft size={24} />
        </button>
        <div className="text-sm text-gray-500">오늘의 OOTD 촬영</div>
        <div className="w-8"></div>
      </div>
      
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <div className="relative w-full max-w-md aspect-[3/4] bg-gray-200 flex items-center justify-center">
          <Camera size={48} className="text-gray-400" />
        </div>
      </div>
      
      <div className="p-6 flex justify-center">
        <button className="w-16 h-16 rounded-full border-4 border-gray-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gray-800"></div>
        </button>
      </div>
    </div>
  );

  // 홈 화면 컴포넌트
  const HomeScreen = () => (
    <div className="flex-1 bg-white overflow-y-auto">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">타임라인</h1>
          <Search size={20} />
        </div>
      </div>
      
      {outfits.map((outfit) => (
        <div key={outfit.id} className="p-4 border-b">
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-medium">{outfit.date}</div>
            <div className="flex items-center space-x-3 text-xs text-gray-500">
              <div className="flex items-center"><Sun size={14} className="mr-1" />{outfit.weather.temp}</div>
              <div className="flex items-center"><Wind size={14} className="mr-1" />{outfit.weather.wind}</div>
              <div className="flex items-center"><Droplets size={14} className="mr-1" />{outfit.weather.humidity}</div>
            </div>
          </div>
          
          <div className="aspect-[3/4] bg-gray-100 mb-3 rounded-md overflow-hidden">
            <img src={outfit.image} alt="OOTD" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {outfit.colors.map((color, index) => (
                <div key={index} className="w-6 h-6 rounded-full" style={{ backgroundColor: color }}></div>
              ))}
            </div>
            <button className="text-xs py-1 px-3 bg-gray-100 rounded-full">추천 받기</button>
          </div>
          
          {outfit.id === 1 && (
            <div className="mt-4">
              <div className="text-xs text-gray-500 mb-2">추천 스타일</div>
              <div className="flex space-x-2">
                {recommendations.map((img, index) => (
                  <div key={index} className="w-24 h-36 bg-gray-100 rounded-md overflow-hidden">
                    <img src={img} alt="추천" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-white text-gray-900 overflow-hidden">
      {/* 상태 표시줄 */}
      <div className="h-10 bg-white border-b flex items-center px-4 justify-end">
        <div className="text-xs">7G</div>
      </div>
      
      {/* 메인 콘텐츠 */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {activeTab === 'home' && <HomeScreen />}
        {activeTab === 'calendar' && (
          <div className="flex-1 flex flex-col bg-white">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-medium">2025년 5월</h1>
                <div className="flex space-x-4">
                  <button className="text-gray-400"><ChevronLeft size={20} /></button>
                  <button className="text-gray-400"><ChevronLeft size={20} className="rotate-180" /></button>
                </div>
              </div>
              
              {/* 미니멀 통계 카드 */}
              <div className="bg-gray-50 rounded-lg p-4 mb-2">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">총 OOTD</div>
                    <div className="text-lg font-medium">2장</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">주요 컬러</div>
                    <div className="flex space-x-1 mt-1">
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                      <div className="w-4 h-4 rounded-full bg-stone-400"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">평균 기온</div>
                    <div className="text-lg font-medium">20°C</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="grid grid-cols-7 mb-2">
                {['일', '월', '화', '수', '목', '금', '토'].map((day, i) => (
                  <div key={i} className="text-center text-xs text-gray-500">{day}</div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {/* 비어있는 이전 달 날짜 (4월 28-30) */}
                {[...Array(3)].map((_, i) => (
                  <div key={`prev-${i}`} className="aspect-square bg-gray-50 rounded-md"></div>
                ))}
                
                {/* 5월 1-31일 */}
                {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const hasPhoto = [14, 15].includes(day); // 예시: 14일과 15일에만 사진이 있음
                  
                  return (
                    <div key={`current-${i}`} className={`aspect-square rounded-md overflow-hidden relative ${hasPhoto ? '' : 'bg-gray-100'}`}>
                      {hasPhoto ? (
                        <>
                          <img 
                            src="/api/placeholder/100/100" 
                            alt={`5월 ${day}일`} 
                            className="w-full h-full object-cover" 
                          />
                          <div className="absolute bottom-1 right-1 text-xs text-white font-medium bg-black bg-opacity-30 px-1 rounded">
                            {day}
                          </div>
                        </>
                      ) : (
                        <div className="absolute top-1 left-1 text-xs text-gray-500">
                          {day}
                        </div>
                      )}
                    </div>
                  );
                })}
                
                {/* 비어있는 다음 달 날짜 (6월 1) */}
                {[...Array(1)].map((_, i) => (
                  <div key={`next-${i}`} className="aspect-square bg-gray-50 rounded-md"></div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === 'profile' && (
          <div className="flex-1 flex flex-col bg-white">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-medium">프로필</h1>
                <div className="text-sm text-gray-500">설정</div>
              </div>
            </div>
            
            {/* 프로필 정보 */}
            <div className="p-6 flex items-center border-b">
              <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                <img src="/api/placeholder/100/100" alt="프로필" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-medium">미니멀리스트</div>
                <div className="text-sm text-gray-500">@minimal_style</div>
                <div className="text-xs text-gray-400 mt-1">2025년 1월 가입</div>
              </div>
            </div>
            
            {/* 통계 */}
            <div className="p-4 border-b">
              <div className="text-sm font-medium mb-3">스타일 통계</div>
              
              <div className="space-y-4">
                {/* 시즌별 스타일 */}
                <div>
                  <div className="text-xs text-gray-500 mb-2">시즌별 스타일</div>
                  <div className="flex">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <div className="w-8 text-xs text-gray-400 text-right">봄</div>
                  </div>
                  <div className="flex mt-2">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <div className="w-8 text-xs text-gray-400 text-right">여름</div>
                  </div>
                  <div className="flex mt-2">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <div className="w-8 text-xs text-gray-400 text-right">가을</div>
                  </div>
                  <div className="flex mt-2">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <div className="w-8 text-xs text-gray-400 text-right">겨울</div>
                  </div>
                </div>
                
                {/* 컬러 팔레트 */}
                <div>
                  <div className="text-xs text-gray-500 mb-2">자주 사용하는 컬러</div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-600"></div>
                    <div className="w-8 h-8 rounded-full bg-stone-400"></div>
                    <div className="w-8 h-8 rounded-full bg-stone-600"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-400"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 최근 활동 */}
            <div className="p-4">
              <div className="text-sm font-medium mb-3">최근 활동</div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded mr-3 overflow-hidden">
                    <img src="/api/placeholder/50/50" alt="최근 OOTD" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm">5월 15일에 OOTD를 추가했습니다</div>
                    <div className="text-xs text-gray-500">오늘</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded mr-3 overflow-hidden">
                    <img src="/api/placeholder/50/50" alt="스타일 추천" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm">3개의 스타일 추천을 받았습니다</div>
                    <div className="text-xs text-gray-500">어제</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* 카메라 버튼 */}
        <button 
          onClick={() => setShowCamera(true)}
          className="absolute bottom-20 right-6 w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center shadow-lg"
        >
          <Plus size={24} className="text-white" />
        </button>
      </div>
      
      {/* 탭바 */}
      <div className="h-16 bg-white border-t flex items-center justify-around px-6">
        <button 
          onClick={() => setActiveTab('home')}
          className={`p-2 ${activeTab === 'home' ? 'text-gray-900' : 'text-gray-400'}`}
        >
          <Grid size={24} />
        </button>
        <button 
          onClick={() => setActiveTab('calendar')}
          className={`p-2 ${activeTab === 'calendar' ? 'text-gray-900' : 'text-gray-400'}`}
        >
          <Calendar size={24} />
        </button>
        <button 
          onClick={() => setActiveTab('profile')}
          className={`p-2 ${activeTab === 'profile' ? 'text-gray-900' : 'text-gray-400'}`}
        >
          <User size={24} />
        </button>
      </div>
      
      {/* 카메라 모드 */}
      {showCamera && <CameraView />}
    </div>
  );
}