import React, { useState } from 'react';
import { Button } from '../../globalStyles';
import { GiTeacher } from 'react-icons/gi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';

import ToggleSwitch from '../ToggleSwitch';
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
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  Input,
  ToggleContainer,
  ToggleText,
  QuestionInput,
  MultipleChoiceContainer,
  MultipleChoiceInput,
} from './TeacherQuestionSection.elements';

function TeacherQuestionSection({ socket, roomName, setStudentResponses }) {
  const [questionType, setQuestionType] = useState('short answer');
  const [multipleA, setMultipleA] = useState('A');
  const [multipleB, setMultipleB] = useState('B');
  const [multipleC, setMultipleC] = useState('C');
  const [multipleD, setMultipleD] = useState('D');
  const [question, setQuestion] = useState('');
  const [editingQuestion, setEditingQuestion] = useState(true);

  function handleSubmitQuestion(e) {
    e.preventDefault();

    setEditingQuestion(false);

    //send all the state via websocket here. QuestionType, question, and multiple choice array if applicable.

    socket.emit('questionSubmitted', {
      roomName,
      question,
      questionType,
      mcChoices: [multipleA, multipleB, multipleC, multipleD],
    });
  }

  function handleChangeQuestion(e) {
    setQuestion(e.target.value);
  }

  function handleChangeMultiple(setMultiple, e) {
    setMultiple(e.target.value);
  }

  function handleAskAnotherQuestion() {
    setQuestion('');
    setEditingQuestion(true);
    setStudentResponses([]);
  }

  function handleToggleChange(e) {
    if (questionType === 'short answer') {
      setQuestionType('multiple choice');
    } else if (questionType === 'multiple choice') {
      setQuestionType('short answer');
    }
  }

  return (
    <IconContext.Provider value={{ color: '#575a89', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>{roomName}</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaChalkboardTeacher />
                </PricingCardIcon>
                <PricingCardCost>Teacher Dashboard</PricingCardCost>
                <ToggleContainer>
                  <ToggleText>Short Answer</ToggleText>
                  <ToggleSwitch handleToggleChange={handleToggleChange} />
                  <ToggleText>Multiple Choice</ToggleText>
                </ToggleContainer>
                <QuestionInput
                  type="text"
                  name="shortQuestion"
                  placeholder="Question Text"
                  value={question}
                  onChange={handleChangeQuestion}
                />
                {questionType === 'multiple choice' && (
                  <MultipleChoiceContainer>
                    <MultipleChoiceInput
                      type="text"
                      name="choiceA"
                      value={multipleA}
                      placeholder="Choice A"
                      onChange={(e) => handleChangeMultiple(setMultipleA, e)}
                    />
                    <MultipleChoiceInput
                      type="text"
                      name="choiceB"
                      value={multipleB}
                      placeholder="Choice B"
                      onChange={(e) => handleChangeMultiple(setMultipleB, e)}
                    />

                    <MultipleChoiceInput
                      type="text"
                      name="choiceC"
                      value={multipleC}
                      placeholder="Choice C"
                      onChange={(e) => handleChangeMultiple(setMultipleC, e)}
                    />
                    <MultipleChoiceInput
                      type="text"
                      name="choiceD"
                      value={multipleD}
                      placeholder="Choice D"
                      onChange={(e) => handleChangeMultiple(setMultipleD, e)}
                    />
                  </MultipleChoiceContainer>
                )}
                {editingQuestion ? (
                  <Button onClick={handleSubmitQuestion}>
                    Submit Question
                  </Button>
                ) : (
                  <Button onClick={handleAskAnotherQuestion}>
                    Ask Another Question
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
export default TeacherQuestionSection;
