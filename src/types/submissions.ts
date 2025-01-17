import { User } from '@prisma/client'

export interface IGeneralSubmission {
  id: number
  user: User
  score: number
  language: string
  time: number
  memory: number
  submittedAt: Date
  groups: JSON
  status: string
  code: string[]
}
