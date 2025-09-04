import { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../firebase'
import type { Quiz, Question } from '../types/models'


export function useQuizById(quizId?: string) {
  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])

  useEffect(() => {
    if (!quizId) return
    const qRef = doc(db, 'quizzes', quizId)
    const unsubQuiz = onSnapshot(qRef, snap => {
      if (snap.exists()) setQuiz({ id: snap.id, ...(snap.data() as any) })
    })
    
    const qsRef = collection(db, 'quizzes', quizId, 'questions')
    const unsubQs = onSnapshot(qsRef, snap => {
      const arr: Question[] = []
      snap.forEach(d => arr.push({ id: d.id, ...(d.data() as any) }))
      arr.sort((a, b) => (a.order || 0) - (b.order || 0))
      setQuestions(arr)
    })
  
    return () => {
      unsubQuiz(); unsubQs()
    }
  }, [quizId])
  
return { quiz, questions }
}
