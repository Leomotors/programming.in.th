import prisma from '@/lib/prisma'

export const getInfiniteSubmissions = async (
  limit?: number,
  cursor?: number,
  taskId?: string,
  assessmentId?: string,
  userId?: string
) => {
  const submissions = await prisma.submission.findMany({
    take: limit,
    ...(cursor && { skip: 1, cursor: { id: cursor } }),
    orderBy: [
      {
        id: 'desc'
      }
    ],
    where: {
      ...(taskId && { taskId }),
      ...(assessmentId && { assessmentId }),
      ...(!assessmentId && { private: false }),
      ...(userId && {
        user: { id: { equals: userId } }
      })
    },
    select: {
      id: true,
      score: true,
      user: {
        select: {
          username: true
        }
      },
      language: true,
      time: true,
      memory: true,
      submittedAt: true
    }
  })

  const nextCursor =
    submissions.length > 0 ? submissions[submissions.length - 1].id : null

  return { data: submissions, nextCursor }
}
