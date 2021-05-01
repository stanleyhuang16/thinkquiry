import styled from 'styled-components';

function StudentAnswerContainer(props) {

const QuestionDisplay = styled.div`
  border: solid red;
`

const ResponseDisplayShort = styled.div`
  border: solid blue;
`

const ResponseDisplayMultiple = styled.div`
  border: solid yellow;
`

  return (
    <div>
      Student Answer Container
      <QuestionDisplay>
        <h4>Current Question</h4>
        <h4>{props.roomData.currentQuestion}</h4>
      </QuestionDisplay>
      { props.roomData.questionType === 'multiple' ? 
        <ResponseDisplayMultiple>
          <h4>Multiple Choice</h4>
        </ResponseDisplayMultiple>  :
        <ResponseDisplayShort>
          <h4>Short Answer</h4>
        </ResponseDisplayShort>
        }
        <button>
          Submit
        </button>
    </div>
  );
}

export default StudentAnswerContainer;
