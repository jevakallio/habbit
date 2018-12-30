import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import Bird from "../../components/Bird";
import BirdCage from "../../components/BirdCage";
import Button from "../../components/Button";

const CreateActivityMutation = gql`
  mutation CreateActivity($user: ID!, $habit: ID!) {
    createActivity(user: $user, habit: $habit) {
      id
      timestamp
    }
  }
`;

interface HabitDetailsProps {
  habit: {};
}

const HabitDetails = ({ habit }: HabitDetailsProps) => (
  <div>
    <BirdCage>
      <div className="BirdContainer">
        <Bird
          style={{ height: "40vh", marginTop: "5vh" }}
          color={habit.avatarColor}
        />
      </div>
    </BirdCage>
    <Mutation mutation={CreateActivityMutation}>
      {(createActivity, { data, error, loading }) => (
        <div className="ButtonContainer">
          <Button
            disabled={loading}
            onClick={() =>
              createActivity({
                variables: { user: habit.user.id, habit: habit.id }
              })
            }
            extraWide
          >
            I did the thing!
          </Button>
          {error ? <div>{error.message}</div> : null}
        </div>
      )}
    </Mutation>
    <style jsx>{`
      .BirdContainer {
        display: flex;
        justify-content: center;
      }
      .ButtonContainer {
        display: flex;
        justify-content: center;
        position: relative;
        margin-top: -25px;
      }
    `}</style>
  </div>
);

export default HabitDetails;
