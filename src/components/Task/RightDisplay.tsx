import { Task } from '@prisma/client'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import MySubmissionsTab from './Tabs/MySubmissions'
import SolutionTab from './Tabs/Solution'
import StatementTab from './Tabs/Statement'
import SubmissionsTab from './Tabs/Submissions'
import SubmitTab from './Tabs/Submit'

const component = (
  type: string,
  task: Task,
  solution: MDXRemoteSerializeResult
) => {
  switch (type) {
    case 'statement':
      return <StatementTab task={task} />
    case 'submit':
      return <SubmitTab task={task} />
    case 'submissions':
      return <SubmissionsTab task={task} />
    case 'mySubmissions':
      return <MySubmissionsTab task={task} />
    case 'solution':
      return <SolutionTab solution={solution} />
  }
}

export const RightDisplay = ({
  task,
  solution,
  type
}: {
  task: Task
  submissionID: null | number
  solution: MDXRemoteSerializeResult
  type: string
}) => {
  return (
    <div className="flex w-full flex-col gap-8">
      {component(type, task, solution)}
    </div>
  )
}
