import React, { useState } from 'react';
import WaterModal from './aboutWaterEdit';

const App = () => {
  const [showModal, setShowModal] = useState(false); 
  const [waterIntake, setWaterIntake] = useState([]); 

  const handleAddWaterIntake = (_id, amount, time) => { 
    setWaterIntake([...waterIntake, { _id, amount, time }]);
    setShowModal(false);
  };

  return (
    <div className="app">
      <button onClick={() => setShowModal(true)}>Add Water Intake</button>
      {showModal && (
        <WaterModal
          onSave={handleAddWaterIntake}
          initialValue={waterIntake.length > 0 ? waterIntake[waterIntake.length - 1].amount : null}
          initialTime={waterIntake.length > 0 ? waterIntake[waterIntake.length - 1].time : null}
        />
      )}
    </div>
  );
};

export default App;