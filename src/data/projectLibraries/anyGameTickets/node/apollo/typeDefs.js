const code = `export default \`
type TaskType {
  key: String!
  isComplete: Boolean
  recentlyCompleted: Boolean
  subject: String
  description: String
  merchantKey: String
  assignmentKey: String
}

type Mutation {
  updateTask(key: String!, updates: TaskType): TaskType
}

type Query {
  tasks: [TaskType]
}
\`;`;

const links = [];

export default {
  code,
  links,
};
