import Layout from "../../../components/Layout";
import {
  TextInput,
  RadioButton,
  FormGroup,
  CheckBox
} from "../../../components/Forms";
import { Formik, Field } from "formik";

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

const Index = () => (
  <Layout>
    <Formik
      initialValues={initialFormState}
      onSubmit={(values, actions) => {
        // MyImaginaryRestApiCall(user.id, values).then(
        //   updatedUser => {
        //     actions.setSubmitting(false);
        //     updateUser(updatedUser);
        //     onClose();
        //   },
        //   error => {
        //     actions.setSubmitting(false);
        //     actions.setErrors(transformMyRestApiErrorsToAnObject(error));
        //     actions.setStatus({ msg: 'Set some arbitrary status or data' });
        //   }
        // );
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
      }) =>
        console.log(values) || (
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
                    render={({ field }) =>
                      console.log(field, values) || (
                        <CheckBox key={sched} {...field}>
                          {schedules[sched]}
                        </CheckBox>
                      )
                    }
                  />
                ))}
              </FormGroup>
            )}

            {status && status.msg && <div>{status.msg}</div>}

            <button type="submit" disabled>
              Submit
            </button>
          </form>
        )
      }
    />
  </Layout>
);

export default Index;
