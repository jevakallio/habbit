export const typeDefs = /* GraphQL */ `type Activity {
  id: ID!
  user: User!
  habit: Habit!
  timestamp: Int!
}

type ActivityConnection {
  pageInfo: PageInfo!
  edges: [ActivityEdge]!
  aggregate: AggregateActivity!
}

input ActivityCreateInput {
  user: UserCreateOneInput!
  habit: HabitCreateOneInput!
  timestamp: Int!
}

type ActivityEdge {
  node: Activity!
  cursor: String!
}

enum ActivityOrderByInput {
  id_ASC
  id_DESC
  timestamp_ASC
  timestamp_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActivityPreviousValues {
  id: ID!
  timestamp: Int!
}

type ActivitySubscriptionPayload {
  mutation: MutationType!
  node: Activity
  updatedFields: [String!]
  previousValues: ActivityPreviousValues
}

input ActivitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityWhereInput
  AND: [ActivitySubscriptionWhereInput!]
  OR: [ActivitySubscriptionWhereInput!]
  NOT: [ActivitySubscriptionWhereInput!]
}

input ActivityUpdateInput {
  user: UserUpdateOneRequiredInput
  habit: HabitUpdateOneRequiredInput
  timestamp: Int
}

input ActivityUpdateManyMutationInput {
  timestamp: Int
}

input ActivityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  habit: HabitWhereInput
  timestamp: Int
  timestamp_not: Int
  timestamp_in: [Int!]
  timestamp_not_in: [Int!]
  timestamp_lt: Int
  timestamp_lte: Int
  timestamp_gt: Int
  timestamp_gte: Int
  AND: [ActivityWhereInput!]
  OR: [ActivityWhereInput!]
  NOT: [ActivityWhereInput!]
}

input ActivityWhereUniqueInput {
  id: ID
}

type AggregateActivity {
  count: Int!
}

type AggregateAvatar {
  count: Int!
}

type AggregateHabit {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Avatar {
  id: ID!
  name: String!
  color: String!
}

type AvatarConnection {
  pageInfo: PageInfo!
  edges: [AvatarEdge]!
  aggregate: AggregateAvatar!
}

input AvatarCreateInput {
  name: String!
  color: String!
}

type AvatarEdge {
  node: Avatar!
  cursor: String!
}

enum AvatarOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  color_ASC
  color_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AvatarPreviousValues {
  id: ID!
  name: String!
  color: String!
}

type AvatarSubscriptionPayload {
  mutation: MutationType!
  node: Avatar
  updatedFields: [String!]
  previousValues: AvatarPreviousValues
}

input AvatarSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AvatarWhereInput
  AND: [AvatarSubscriptionWhereInput!]
  OR: [AvatarSubscriptionWhereInput!]
  NOT: [AvatarSubscriptionWhereInput!]
}

input AvatarUpdateInput {
  name: String
  color: String
}

input AvatarUpdateManyMutationInput {
  name: String
  color: String
}

input AvatarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  AND: [AvatarWhereInput!]
  OR: [AvatarWhereInput!]
  NOT: [AvatarWhereInput!]
}

input AvatarWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Habit {
  id: ID!
  task: String!
  active: Boolean!
  avatarName: String!
  avatarColor: String!
  frequency: HabitFrequency!
  weeklyCount: Int
  weeklySchedule: [HabitSchedule!]!
  health: Float!
  user: User!
}

type HabitConnection {
  pageInfo: PageInfo!
  edges: [HabitEdge]!
  aggregate: AggregateHabit!
}

input HabitCreateInput {
  task: String!
  active: Boolean
  avatarName: String!
  avatarColor: String!
  frequency: HabitFrequency!
  weeklyCount: Int
  weeklySchedule: HabitCreateweeklyScheduleInput
  health: Float
  user: UserCreateOneWithoutHabitsInput!
}

input HabitCreateManyWithoutUserInput {
  create: [HabitCreateWithoutUserInput!]
  connect: [HabitWhereUniqueInput!]
}

input HabitCreateOneInput {
  create: HabitCreateInput
  connect: HabitWhereUniqueInput
}

input HabitCreateweeklyScheduleInput {
  set: [HabitSchedule!]
}

input HabitCreateWithoutUserInput {
  task: String!
  active: Boolean
  avatarName: String!
  avatarColor: String!
  frequency: HabitFrequency!
  weeklyCount: Int
  weeklySchedule: HabitCreateweeklyScheduleInput
  health: Float
}

type HabitEdge {
  node: Habit!
  cursor: String!
}

enum HabitFrequency {
  DAILY
  WEEKLY
  DAYS_PER_WEEK
  COUNT_PER_WEEK
}

enum HabitOrderByInput {
  id_ASC
  id_DESC
  task_ASC
  task_DESC
  active_ASC
  active_DESC
  avatarName_ASC
  avatarName_DESC
  avatarColor_ASC
  avatarColor_DESC
  frequency_ASC
  frequency_DESC
  weeklyCount_ASC
  weeklyCount_DESC
  health_ASC
  health_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type HabitPreviousValues {
  id: ID!
  task: String!
  active: Boolean!
  avatarName: String!
  avatarColor: String!
  frequency: HabitFrequency!
  weeklyCount: Int
  weeklySchedule: [HabitSchedule!]!
  health: Float!
}

input HabitScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  task: String
  task_not: String
  task_in: [String!]
  task_not_in: [String!]
  task_lt: String
  task_lte: String
  task_gt: String
  task_gte: String
  task_contains: String
  task_not_contains: String
  task_starts_with: String
  task_not_starts_with: String
  task_ends_with: String
  task_not_ends_with: String
  active: Boolean
  active_not: Boolean
  avatarName: String
  avatarName_not: String
  avatarName_in: [String!]
  avatarName_not_in: [String!]
  avatarName_lt: String
  avatarName_lte: String
  avatarName_gt: String
  avatarName_gte: String
  avatarName_contains: String
  avatarName_not_contains: String
  avatarName_starts_with: String
  avatarName_not_starts_with: String
  avatarName_ends_with: String
  avatarName_not_ends_with: String
  avatarColor: String
  avatarColor_not: String
  avatarColor_in: [String!]
  avatarColor_not_in: [String!]
  avatarColor_lt: String
  avatarColor_lte: String
  avatarColor_gt: String
  avatarColor_gte: String
  avatarColor_contains: String
  avatarColor_not_contains: String
  avatarColor_starts_with: String
  avatarColor_not_starts_with: String
  avatarColor_ends_with: String
  avatarColor_not_ends_with: String
  frequency: HabitFrequency
  frequency_not: HabitFrequency
  frequency_in: [HabitFrequency!]
  frequency_not_in: [HabitFrequency!]
  weeklyCount: Int
  weeklyCount_not: Int
  weeklyCount_in: [Int!]
  weeklyCount_not_in: [Int!]
  weeklyCount_lt: Int
  weeklyCount_lte: Int
  weeklyCount_gt: Int
  weeklyCount_gte: Int
  health: Float
  health_not: Float
  health_in: [Float!]
  health_not_in: [Float!]
  health_lt: Float
  health_lte: Float
  health_gt: Float
  health_gte: Float
  AND: [HabitScalarWhereInput!]
  OR: [HabitScalarWhereInput!]
  NOT: [HabitScalarWhereInput!]
}

enum HabitSchedule {
  MONDAY
  TUESDAY
  WEDNESDAY
  THURSDAY
  FRIDAY
  SATURDAY
  SUNDAY
}

type HabitSubscriptionPayload {
  mutation: MutationType!
  node: Habit
  updatedFields: [String!]
  previousValues: HabitPreviousValues
}

input HabitSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: HabitWhereInput
  AND: [HabitSubscriptionWhereInput!]
  OR: [HabitSubscriptionWhereInput!]
  NOT: [HabitSubscriptionWhereInput!]
}

input HabitUpdateDataInput {
  task: String
  active: Boolean
  avatarName: String
  avatarColor: String
  frequency: HabitFrequency
  weeklyCount: Int
  weeklySchedule: HabitUpdateweeklyScheduleInput
  health: Float
  user: UserUpdateOneRequiredWithoutHabitsInput
}

input HabitUpdateInput {
  task: String
  active: Boolean
  avatarName: String
  avatarColor: String
  frequency: HabitFrequency
  weeklyCount: Int
  weeklySchedule: HabitUpdateweeklyScheduleInput
  health: Float
  user: UserUpdateOneRequiredWithoutHabitsInput
}

input HabitUpdateManyDataInput {
  task: String
  active: Boolean
  avatarName: String
  avatarColor: String
  frequency: HabitFrequency
  weeklyCount: Int
  weeklySchedule: HabitUpdateweeklyScheduleInput
  health: Float
}

input HabitUpdateManyMutationInput {
  task: String
  active: Boolean
  avatarName: String
  avatarColor: String
  frequency: HabitFrequency
  weeklyCount: Int
  weeklySchedule: HabitUpdateweeklyScheduleInput
  health: Float
}

input HabitUpdateManyWithoutUserInput {
  create: [HabitCreateWithoutUserInput!]
  delete: [HabitWhereUniqueInput!]
  connect: [HabitWhereUniqueInput!]
  disconnect: [HabitWhereUniqueInput!]
  update: [HabitUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [HabitUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [HabitScalarWhereInput!]
  updateMany: [HabitUpdateManyWithWhereNestedInput!]
}

input HabitUpdateManyWithWhereNestedInput {
  where: HabitScalarWhereInput!
  data: HabitUpdateManyDataInput!
}

input HabitUpdateOneRequiredInput {
  create: HabitCreateInput
  update: HabitUpdateDataInput
  upsert: HabitUpsertNestedInput
  connect: HabitWhereUniqueInput
}

input HabitUpdateweeklyScheduleInput {
  set: [HabitSchedule!]
}

input HabitUpdateWithoutUserDataInput {
  task: String
  active: Boolean
  avatarName: String
  avatarColor: String
  frequency: HabitFrequency
  weeklyCount: Int
  weeklySchedule: HabitUpdateweeklyScheduleInput
  health: Float
}

input HabitUpdateWithWhereUniqueWithoutUserInput {
  where: HabitWhereUniqueInput!
  data: HabitUpdateWithoutUserDataInput!
}

input HabitUpsertNestedInput {
  update: HabitUpdateDataInput!
  create: HabitCreateInput!
}

input HabitUpsertWithWhereUniqueWithoutUserInput {
  where: HabitWhereUniqueInput!
  update: HabitUpdateWithoutUserDataInput!
  create: HabitCreateWithoutUserInput!
}

input HabitWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  task: String
  task_not: String
  task_in: [String!]
  task_not_in: [String!]
  task_lt: String
  task_lte: String
  task_gt: String
  task_gte: String
  task_contains: String
  task_not_contains: String
  task_starts_with: String
  task_not_starts_with: String
  task_ends_with: String
  task_not_ends_with: String
  active: Boolean
  active_not: Boolean
  avatarName: String
  avatarName_not: String
  avatarName_in: [String!]
  avatarName_not_in: [String!]
  avatarName_lt: String
  avatarName_lte: String
  avatarName_gt: String
  avatarName_gte: String
  avatarName_contains: String
  avatarName_not_contains: String
  avatarName_starts_with: String
  avatarName_not_starts_with: String
  avatarName_ends_with: String
  avatarName_not_ends_with: String
  avatarColor: String
  avatarColor_not: String
  avatarColor_in: [String!]
  avatarColor_not_in: [String!]
  avatarColor_lt: String
  avatarColor_lte: String
  avatarColor_gt: String
  avatarColor_gte: String
  avatarColor_contains: String
  avatarColor_not_contains: String
  avatarColor_starts_with: String
  avatarColor_not_starts_with: String
  avatarColor_ends_with: String
  avatarColor_not_ends_with: String
  frequency: HabitFrequency
  frequency_not: HabitFrequency
  frequency_in: [HabitFrequency!]
  frequency_not_in: [HabitFrequency!]
  weeklyCount: Int
  weeklyCount_not: Int
  weeklyCount_in: [Int!]
  weeklyCount_not_in: [Int!]
  weeklyCount_lt: Int
  weeklyCount_lte: Int
  weeklyCount_gt: Int
  weeklyCount_gte: Int
  health: Float
  health_not: Float
  health_in: [Float!]
  health_not_in: [Float!]
  health_lt: Float
  health_lte: Float
  health_gt: Float
  health_gte: Float
  user: UserWhereInput
  AND: [HabitWhereInput!]
  OR: [HabitWhereInput!]
  NOT: [HabitWhereInput!]
}

input HabitWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createActivity(data: ActivityCreateInput!): Activity!
  updateActivity(data: ActivityUpdateInput!, where: ActivityWhereUniqueInput!): Activity
  updateManyActivities(data: ActivityUpdateManyMutationInput!, where: ActivityWhereInput): BatchPayload!
  upsertActivity(where: ActivityWhereUniqueInput!, create: ActivityCreateInput!, update: ActivityUpdateInput!): Activity!
  deleteActivity(where: ActivityWhereUniqueInput!): Activity
  deleteManyActivities(where: ActivityWhereInput): BatchPayload!
  createAvatar(data: AvatarCreateInput!): Avatar!
  updateAvatar(data: AvatarUpdateInput!, where: AvatarWhereUniqueInput!): Avatar
  updateManyAvatars(data: AvatarUpdateManyMutationInput!, where: AvatarWhereInput): BatchPayload!
  upsertAvatar(where: AvatarWhereUniqueInput!, create: AvatarCreateInput!, update: AvatarUpdateInput!): Avatar!
  deleteAvatar(where: AvatarWhereUniqueInput!): Avatar
  deleteManyAvatars(where: AvatarWhereInput): BatchPayload!
  createHabit(data: HabitCreateInput!): Habit!
  updateHabit(data: HabitUpdateInput!, where: HabitWhereUniqueInput!): Habit
  updateManyHabits(data: HabitUpdateManyMutationInput!, where: HabitWhereInput): BatchPayload!
  upsertHabit(where: HabitWhereUniqueInput!, create: HabitCreateInput!, update: HabitUpdateInput!): Habit!
  deleteHabit(where: HabitWhereUniqueInput!): Habit
  deleteManyHabits(where: HabitWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  activity(where: ActivityWhereUniqueInput!): Activity
  activities(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity]!
  activitiesConnection(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityConnection!
  avatar(where: AvatarWhereUniqueInput!): Avatar
  avatars(where: AvatarWhereInput, orderBy: AvatarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Avatar]!
  avatarsConnection(where: AvatarWhereInput, orderBy: AvatarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AvatarConnection!
  habit(where: HabitWhereUniqueInput!): Habit
  habits(where: HabitWhereInput, orderBy: HabitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Habit]!
  habitsConnection(where: HabitWhereInput, orderBy: HabitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HabitConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  activity(where: ActivitySubscriptionWhereInput): ActivitySubscriptionPayload
  avatar(where: AvatarSubscriptionWhereInput): AvatarSubscriptionPayload
  habit(where: HabitSubscriptionWhereInput): HabitSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String
  name: String!
  timezone: String
  habits(where: HabitWhereInput, orderBy: HabitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Habit!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  name: String!
  timezone: String
  habits: HabitCreateManyWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutHabitsInput {
  create: UserCreateWithoutHabitsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutHabitsInput {
  email: String
  name: String!
  timezone: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  timezone_ASC
  timezone_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  name: String!
  timezone: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  name: String
  timezone: String
  habits: HabitUpdateManyWithoutUserInput
}

input UserUpdateInput {
  email: String
  name: String
  timezone: String
  habits: HabitUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  timezone: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutHabitsInput {
  create: UserCreateWithoutHabitsInput
  update: UserUpdateWithoutHabitsDataInput
  upsert: UserUpsertWithoutHabitsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutHabitsDataInput {
  email: String
  name: String
  timezone: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutHabitsInput {
  update: UserUpdateWithoutHabitsDataInput!
  create: UserCreateWithoutHabitsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  timezone: String
  timezone_not: String
  timezone_in: [String!]
  timezone_not_in: [String!]
  timezone_lt: String
  timezone_lte: String
  timezone_gt: String
  timezone_gte: String
  timezone_contains: String
  timezone_not_contains: String
  timezone_starts_with: String
  timezone_not_starts_with: String
  timezone_ends_with: String
  timezone_not_ends_with: String
  habits_every: HabitWhereInput
  habits_some: HabitWhereInput
  habits_none: HabitWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`