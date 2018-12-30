// @TODO, convert to a .graphql file
export const typeDefs = `
scalar DateTime

type User {
  id: ID!
  name: String!
  email: String
  timezone: String
  habits: [Habit!]!
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

enum HabitFrequency {
  DAILY
  WEEKLY
  DAYS_PER_WEEK
  COUNT_PER_WEEK
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
  health: Float! # 0...1
  user: User! # habit belongs to a user
  activity: [Activity!]!
}

type Activity {
  id: ID!
  timestamp: DateTime!
}

type Avatar {
  id: ID!
  name: String!
  color: String!
}`;
