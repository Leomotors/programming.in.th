import type { NextApiRequest, NextApiResponse } from 'next'

import { unstable_getServerSession } from 'next-auth'

import checkUserPermissionOnTask from '@/lib/api/queries/checkUserPermissionOnTask'
import { getInfiniteSubmissions } from '@/lib/api/queries/getInfiniteSubmissions'
import {
  AssessmentSubmissionSchema,
  SubmissionFilterEnum as Filter,
  SubmitSchema
} from '@/lib/api/schema/submissions'
import { compressCode } from '@/lib/codeTransformer'
import prisma from '@/lib/prisma'
import {
  unauthorized,
  methodNotAllowed,
  ok,
  forbidden,
  badRequest
} from '@/utils/response'

import { authOptions } from '../../auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const session = await unstable_getServerSession(req, res, authOptions)

    const { query } = req

    const parsedQuery = AssessmentSubmissionSchema.safeParse(query)

    if (!parsedQuery.success) {
      return badRequest(res)
    }

    const { taskId, cursor, limit, filter, id: assignmentId } = parsedQuery.data

    if (!session) {
      return unauthorized(res)
    }

    if (filter === Filter.enum.task) {
      const infiniteSubmission = await getInfiniteSubmissions(
        cursor,
        limit,
        taskId,
        assignmentId,
        session.user.id!
      )

      return ok(res, infiniteSubmission)
    }

    return badRequest(res)
  } else if (req.method === 'POST') {
    const session = await unstable_getServerSession(req, res, authOptions)

    if (!session) {
      return unauthorized(res)
    }

    const { body, query } = req

    const parsedBody = SubmitSchema.safeParse(body)
    const parsedQuery = AssessmentSubmissionSchema.safeParse(query)

    if (!parsedBody.success) {
      return badRequest(res)
    }

    if (!parsedQuery.success) {
      return badRequest(res)
    }

    const { taskId, language, code } = parsedBody.data
    const { id: assignmentId } = parsedQuery.data

    const task = await prisma.task.findUnique({
      where: { id: taskId }
    })

    if (task) {
      if (await checkUserPermissionOnTask(session.user.id!, task.id)) {
        return forbidden(res)
      }

      const compressedCode = await compressCode(JSON.stringify(code))

      const submission = await prisma.submission.create({
        data: {
          task: { connect: task },
          code: compressedCode,
          language,
          user: { connect: { id: session.user.id! } },
          groups: [],
          private: true,
          assessment: { connect: { id: assignmentId } }
        }
      })

      return ok(res, submission)
    }

    return badRequest(res)
  }

  return methodNotAllowed(res, ['GET', 'POST'])
}
