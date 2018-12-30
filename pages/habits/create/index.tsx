import { Mutation } from "react-apollo";

import gql from "graphql-tag";
import Router from "next/router";
import { Formik, Field } from "formik";
import withPageContext from "../../../client/withPageContext";

import Layout from "../../../components/Layout";
import {
  TextInput,
  RadioButton,
  FormGroup,
  FormError,
  CheckBox
} from "../../../components/Forms";
import Button from "../../../components/Button";

const initialFormState = {
  task: "",
  avatarName: null,
  avatarColor: null,
  frequency: null,
  weeklyCount: null,
  weeklySchedule: []
};

const frequencies = {
  DAILY: "Every day!",
  WEEKLY: "Once a week.",
  COUNT_PER_WEEK: "More than once a week.",
  DAYS_PER_WEEK: "On specific weekdays"
};

const schedules = {
  MONDAY: "Mondays",
  TUESDAY: "Tuesdays",
  WEDNESDAY: "Wednesdays",
  THURSDAY: "Thursdays",
  FRIDAY: "Fridays",
  SATURDAY: "Saturdays",
  SUNDAY: "Sundays"
};

const dayCounts = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven"
};

// Synchronous validation
const validate = values => {
  let errors = {};

  if (!values.task) {
    errors.task = "Required";
  }

  if (values.task && values.task.length < 5) {
    errors.task = "Must be at least 5 characters";
  }

  if (!values.frequency) {
    errors.frequency = "Required";
  } else if (!frequencies[values.frequency]) {
    errors.frequency = "Invalid value. Not sure how you managed that!";
  }

  if (values.frequency === "COUNT_PER_WEEK" && !values.weeklyCount) {
    errors.weeklyCount = "Please choose one";
  }

  if (
    values.frequency === "DAYS_PER_WEEK" &&
    values.weeklySchedule.filter(Boolean).length === 0
  ) {
    errors.weeklySchedule = "Please pick at least one day";
  }

  return errors;
};

// cjq6mfok7sb260a985wz7qsn5
const CreateHabit = gql`
  mutation CreateHabit($input: HabitCreateInput!) {
    createHabit(data: $input) {
      id
    }
  }
`;

const zipSchedule = formValues => {
  // match selected fields to their values (there's probably a better way)
  const sched = Object.keys(schedules);
  return formValues
    .map((value, i) => (value ? sched[i] : null))
    .filter(Boolean);
};

const Index = withPageContext(() => (
  <Layout>
    <Mutation mutation={CreateHabit}>
      {(createHabit, { data, errors, loading }) => (
        <Formik
          initialValues={initialFormState}
          validate={validate}
          onSubmit={(values, actions) => {
            // @TODO
            const NOT_IMPLEMENTED_FIELDS = {
              user: "cjq6mfok7sb260a985wz7qsn5",
              avatarColor: "#0000ff",
              avatarName: "Habbit"
            };

            // lol
            const input = {
              ...NOT_IMPLEMENTED_FIELDS,
              task: values.task,
              frequency: values.frequency,
              weeklyCount:
                values.frequency === "COUNT_PER_WEEK"
                  ? parseInt(values.weeklyCount, 10)
                  : null,
              weeklySchedule:
                values.frequency === "DAYS_PER_WEEK"
                  ? zipSchedule(values.weeklySchedule)
                  : null
            };

            createHabit({ variables: { input } })
              .then(({ data }) => {
                Router.push(`/habit?id=${data.createHabit.id}&new=true`);
              })
              .catch(e => {
                actions.setSubmitting(false);
                actions.setErrors({ network: e.message });
                actions.setStatus({ msg: "Creating your habit failed :(" });
              });
          }}
          render={({
            values,
            errors,
            status,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit} autocomplete="off">
              <FormGroup
                name="task"
                label="What habit do you want to track?"
                errors={errors}
                touched={touched}
                enabled={true}
              >
                <TextInput
                  name="task"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.task}
                  placeholder={`e.g. "go to the gym", or "practice juggling"`}
                />
              </FormGroup>

              <FormGroup
                name="frequency"
                label={`How often do you want to ${values.task || "..."}?`}
                errors={errors}
                touched={touched}
                enabled={touched.task && values.task && !errors.task}
              >
                {Object.keys(frequencies).map(freq => (
                  <RadioButton
                    name="frequency"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={freq}
                    checked={values.frequency === freq}
                  >
                    {frequencies[freq]}
                  </RadioButton>
                ))}
              </FormGroup>

              {values.frequency === "COUNT_PER_WEEK" && (
                <FormGroup
                  name="weeklyCount"
                  label={`How many days per week?`}
                  errors={errors}
                  touched={touched}
                  enabled={
                    touched.frequency && values.frequency && !errors.frequency
                  }
                >
                  {Object.keys(dayCounts).map(day => (
                    <RadioButton
                      name="weeklyCount"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={day}
                      checked={values.weeklyCount === day}
                    >
                      {dayCounts[day]}
                    </RadioButton>
                  ))}
                </FormGroup>
              )}

              {values.frequency === "DAYS_PER_WEEK" && (
                <FormGroup
                  name="weeklySchedule"
                  label={`Which weekdays?`}
                  errors={errors}
                  touched={touched}
                  enabled={
                    touched.frequency && values.frequency && !errors.frequency
                  }
                >
                  {Object.keys(schedules).map((sched, index) => (
                    <Field
                      name={`weeklySchedule[${index}]`}
                      render={({ field }) => (
                        <CheckBox key={sched} {...field}>
                          {schedules[sched]}
                        </CheckBox>
                      )}
                    />
                  ))}
                </FormGroup>
              )}

              {status && status.msg && <FormError>{status.msg}</FormError>}

              <Button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </form>
          )}
        />
      )}
    </Mutation>
  </Layout>
));

export default Index;
