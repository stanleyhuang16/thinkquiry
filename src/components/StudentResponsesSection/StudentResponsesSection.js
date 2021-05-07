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
  Table,
  Cell,
  StyledTh,
} from './StudentResponsesSection.elements';

function StudentResponsesSection({ studentResponses }) {
  const responses = studentResponses
    .sort((a, b) =>
      a.participant.toLowerCase() > b.participant.toLowerCase() ? 1 : -1
    )
    .map((obj) => {
      return (
        <li>
          {obj.participant}: {obj.answer}
        </li>
      );
    });

  const rows = responses;
  const cols = ['Student Name', 'Student Response'];
  return (
    <IconContext.Provider value={{ color: '#575a89', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiGooglescholar />
                </PricingCardIcon>
                <PricingCardCost>Student Responses</PricingCardCost>

                <Table>
                  <thead>
                    <tr>
                      {cols.map((col) => (
                        <StyledTh id={col} key={col}>
                          {col}
                        </StyledTh>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {studentResponses.map((row, rowId) => (
                      <tr key={rowId}>
                        {Object.entries(row).map(([key, value], idx) => (
                          <Cell key={idx}>{value}</Cell>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default StudentResponsesSection;
