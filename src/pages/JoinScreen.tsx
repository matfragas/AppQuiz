// src/pages/JoinScreen.tsx
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { nanoid } from "nanoid";

export default function JoinScreen(){
  const { slug } = useParams();
  const [pseudo, setPseudo] = useState("");
  const navigate = useNavigate();

  const join = async () => {
    const playerId = nanoid(10);
    await setDoc(doc(db, "quizzes", slug!, "players", playerId), {
      pseudo,
      createdAt: serverTimestamp()
    });
    navigate(`/play/${slug}/${playerId}`);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold">Entrez votre pseudo</h2>
      <input value={pseudo} onChange={e=>setPseudo(e.target.value)} className="border p-2 w-full mt-2" />
      <button onClick={join} disabled={!pseudo} className="mt-3 btn">Jouer</button>
    </div>
  );
}
