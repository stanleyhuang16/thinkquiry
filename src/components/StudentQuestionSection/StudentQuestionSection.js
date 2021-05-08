import React, { useState, useEffect } from 'react';
import { Button } from '../../globalStyles';
import { SiGooglescholar } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  QuestionInput,
  MultipleChoiceContainer,
  MultipleChoiceItem,
  RadioButtonLabel,
  RadioButton,
} from './StudentQuestionSection.elements';

function StudentQuestionSection({
  roomName,
  studentQuestionData,
  studentName,
  socket,
}) {
  const [shortAnswer, setShortAnswer] = useState('');
  const [editingAnswer, setEditingAnswer] = useState(true);
  const [select, setSelect] = useState('optionA');

  useEffect(() => {
    setEditingAnswer(true);
  }, [studentQuestionData.currentQuestion]);

  function handleSubmitAnswer(e) {
    e.preventDefault();
    setEditingAnswer(false);

    //INSERT WEBSOCKET SENDING HERE

    if (studentQuestionData.questionType === 'multiple choice') {
      socket.emit('answerSubmitted', {
        roomName,
        studentName,
        studentAnswer: select,
        question: studentQuestionData.currentQuestion,
      });
    } else {
      socket.emit('answerSubmitted', {
        roomName,
        studentName,
        studentAnswer: shortAnswer,
        question: studentQuestionData.currentQuestion,
      });
    }
  }

  function handleChangeShortAnswer(e) {
    setShortAnswer(e.target.value);
  }

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  return (
    <IconContext.Provider value={{ color: '#575a89', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Room: {roomName}</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiGooglescholar />
                </PricingCardIcon>
                <PricingCardCost>Question</PricingCardCost>
                <PricingCardPlan>
                  {studentQuestionData.currentQuestion}
                </PricingCardPlan>
                {studentQuestionData.questionType === 'multiple choice' ? (
                  <MultipleChoiceContainer>
                    <MultipleChoiceItem>
                      <RadioButton
                        type="radio"
                        name="radio"
                        value="A"
                        checked={select === 'A'}
                        onChange={(event) => handleSelectChange(event)}
                      />
                      <RadioButtonLabel />
                      <div>{studentQuestionData.multipleChoiceText[0]}</div>
                    </MultipleChoiceItem>
                    <MultipleChoiceItem>
                      <RadioButton
                        type="radio"
                        name="radio"
                        value="B"
                        checked={select === 'B'}
                        onChange={(event) => handleSelectChange(event)}
                      />
                      <RadioButtonLabel />
                      <div>{studentQuestionData.multipleChoiceText[1]}</div>
                    </MultipleChoiceItem>
                    <MultipleChoiceItem>
                      <RadioButton
                        type="radio"
                        name="radio"
                        value="C"
                        checked={select === 'C'}
                        onChange={(event) => handleSelectChange(event)}
                      />
                      <RadioButtonLabel />
                      <div>{studentQuestionData.multipleChoiceText[2]}</div>
                    </MultipleChoiceItem>
                    <MultipleChoiceItem>
                      <RadioButton
                        type="radio"
                        name="radio"
                        value="D"
                        checked={select === 'D'}
                        onChange={(event) => handleSelectChange(event)}
                      />
                      <RadioButtonLabel />
                      <div>{studentQuestionData.multipleChoiceText[3]}</div>
                    </MultipleChoiceItem>
                  </MultipleChoiceContainer>
                ) : (
                  <QuestionInput
                    type="text"
                    name="studentShortAnswer"
                    placeholder="Answer Here"
                    value={shortAnswer}
                    onChange={handleChangeShortAnswer}
                  />
                )}
                {editingAnswer ? (
                  <Button onClick={handleSubmitAnswer}>Submit Answer</Button>
                ) : (
                  <Button primary>
                    Answer Submitted, Waiting For Next Question...
                  </Button>
                )}
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default StudentQuestionSection;
