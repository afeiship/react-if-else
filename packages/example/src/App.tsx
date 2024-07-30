import Ife from '@jswork/react-if-else/src';
import '@jswork/react-if-else/src/style.scss';
import { useState } from 'react';

function App() {
  const [v1, setV1] = useState(false);
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <div className="y-5">
        <Ife value={v1}>
          <button className="btn btn-sm btn-primary">Yes</button>
        </Ife>
        <Ife value={!v1}>
          <button className="btn btn-sm btn-secondary">No-----:(</button>
        </Ife>
        <div className="bg-slate-200 p-2">
          <Ife value={v1}>
            <span className="bg-green-500 text-white rounded">Yes</span>
            <span className="bg-red-500 text-white rounded">No</span>
          </Ife>
        </div>
      </div>
      <button className="btn btn-primary mt-2" onClick={() => setV1(!v1)}>Toggle</button>
    </div>
  );
}

export default App;
