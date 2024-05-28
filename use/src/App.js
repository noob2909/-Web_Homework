import React, { useState } from 'react';

function App() {
  // 상태 변수 선언
  const [data, setData] = useState(null);

  // 버튼 클릭 이벤트 핸들러
  const handleClick = async () => {
    try {
       // JSON-SERVER에서 데이터 가져오기
      const response = await fetch('http://localhost:3002/web');
      const result = await response.json();
       // 데이터를 localStorage에 저장하고 상태 업데이트
      localStorage.setItem('webData', JSON.stringify(result));
      setData(result);
    } catch (error) {
      // 오류 처리
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
        {/* 버튼 추가 및 클릭 이벤트 연결 */}
      <button onClick={handleClick}>INU</button>
        {/* 데이터가 있는 경우에만 출력 */}
      {data && (
        <div>
           {/* 데이터 출력 */}
          <h3>Fetched Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;