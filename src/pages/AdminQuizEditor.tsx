import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import QRGenerator from '../components/QRGenerator'
import QuestionEditor from '../components/QuestionEditor'

export default function AdminQuizEditor(){
  const { quizId } = useParams()
  const [quiz, setQuiz] = useState<any>(null)
  
  useEffect(()=>{
    if(!quizId) return
    (async ()=>{
      const d = await getDoc(doc(db,'quizzes',quizId))
      if(d.exists()) setQuiz({ id: d.id, ...(d.data() as any) })
    })()
  },[quizId])
  
  if(!quiz) return
