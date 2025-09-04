import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Admin({ user }) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState("");

  const handleSave = async () => {
    await addDoc(collection(db, "questions"), { question, answers, correct });
    setQuestion("");
    setAnswers(["", "", "", ""]);
    setCorrect("");
    alert("✅ Question ajoutée");
  };

  if (!user) return <p className="p-6">❌ Accès réservé à l’admin.</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">➕ Ajouter une question</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {answers.map((a, i) => (
        <input
          key={i}
          className="border p-2 w-full mb-2"
          placeholder={`Réponse ${i + 1}`}
          value={a}
          onChange={(e) => {
            const newAnswers = [...answers];
            newAnswers[i] = e.target.value;
            setAnswers(newAnswers);
          }}
        />
      ))}
      <input
        className="border p-2 w-full mb-2"
        placeholder="Bonne réponse"
        value={correct}
        onChange={(e) => setCorrect(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSave}
      >
        Sauvegarder
      </button>
    </div>
  );
}
