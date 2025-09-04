export type Option = {
  id: string
  text: string
  isCorrect?: boolean
}

export type Question = {
  id: string
  text: string
  mediaUrl?: string
  mediaType?: 'image' | 'video'
  options: Option[]
  multipleAnswers?: boolean
  order?: number
}

export type Quiz = {
  id: string
  title: string
  description?: string
  public?: boolean
  publicUrlId?: string
}
