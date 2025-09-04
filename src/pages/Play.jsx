import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Play() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, "questions"));
      setQuestions(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[current].correct) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  if (!questions.length) return <p className="p-6">Chargement...</p>;

  if (finished)
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl">✅ Quiz terminé !</h2>
        <p>Ton score : {score} / {questions.length}</p>
      </div>
    );

  return (
    <div className="p-6 text-center">
      <h2 className="text-lg font-bold">{questions[current].question}</h2>
      <div className="flex flex-col gap-2 mt-4">
        {questions[current].answers.map((a, i) => (
          <button
            key={i}
            className="p-2 border rounded bg-gray-200 hover:bg-gray-300"
            onClick={() => handleAnswer(a)}
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}
