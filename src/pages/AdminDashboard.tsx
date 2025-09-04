import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { nanoid } from 'nanoid'

export default function AdminDashboard(){
  const [quizzes, setQuizzes] = useState<any[]>([])
  const navigate = useNavigate()
  
  useEffect(()=>{
    (async ()=>{
      const snap = await getDocs(collection(db, 'quizzes'))
      const arr: any[] = []
      snap.forEach(d => arr.push({ id: d.id, ...(d.data() as any) }))
      setQuizzes(arr)
    })()
  },[])
  
  const createQuiz = async () => {
    const id = nanoid(8)
    const q = await addDoc(collection(db,'quizzes'), {
      title: 'Nouveau quiz',
      description: '',
      createdAt: serverTimestamp(),
      public: false,
      publicUrlId: id
    })
    navigate(`/admin/edit/${q.id}`)
  }
  
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Gestion des quizzes</h2>
        <button onClick={createQuiz} className="btn">Nouveau quiz</button>
      </div>
      <div className="space-y-3">
        {quizzes.map(q=> (
          <div key={q.id} className="bg-white p-3 rounded shadow-sm flex justify-between items-center">
            <div>
              <div className="font-medium">{q.title || '(sans titre)'}</div>
              <div className="text-xs text-gray-500">id: {q.id} — publicId: {q.publicUrlId}</div>
            </div>
            <div>
              <Link to={`/admin/edit/${q.id}`} className="text-sm text-blue-600">Éditer</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
