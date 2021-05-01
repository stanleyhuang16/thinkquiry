import styled from "styled-components";

function TeacherQuestionContainer(props) {
  const EnterQuestionShort = styled.div`
    border: solid blue;
  `;

  const EnterQuestionMultiple = styled.div`
    border: solid yellow;
  `;

  return (
    <div>
      Teacher Question Container
      {props.roomData.questionType === "multiple" ? (
        <EnterQuestionMultiple>
          <h4>Teacher Enter Multiple Choice</h4>
        </EnterQuestionMultiple>
      ) : (
        <EnterQuestionShort>
          <h4>Teacher Enter Short</h4>
        </EnterQuestionShort>
      )}
    </div>
  );
}

export default TeacherQuestionContainer;
