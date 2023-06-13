import { useEffect, useState } from "react";

const Student = ({ name }) => {
  const [avrScore, setAvrScore] = useState(0);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);

  const hesapla = () => {
    setAvrScore((score1 + score2 + score3) / 3);
  };

  useEffect(() => {
    hesapla();
  }, [score1, score2, score3]);

  return (
    <div>
      <h2>{name}</h2>
      <label>
        Sınav 1
        <input
          type="number"
          value={score1}
          onChange={(e) => {
            setScore1(parseInt(e.target.value));
            
          }}
        />
      </label>
      <br />
      <label>
        Sınav 2
        <input
          type="number"
          value={score2}
          onChange={(e) => {
            setScore2(parseInt(e.target.value));
          }}
        />
      </label>
      <br />
      <label>
        Final
        <input
          type="number"
          value={score3}
          onChange={(e) => {
            setScore3(parseInt(e.target.value));
          }}
        />
      </label>
      <div>Not: {avrScore.toFixed(2)} </div>
    </div>
  );
};

export default Student;
