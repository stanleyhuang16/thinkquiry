import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
  padding: 20px 0 40px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #b5f3d3;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #000000;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled.div`
  background: #ffefd5;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 700px;
  height: 700px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: black;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;
`;

export const PricingCardCost = styled.h4`
  font-size: 30px;
  padding-bottom: 10px;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: 1px solid gray;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 20px;
  padding: 2px;
  margin: 20px 5px;
  align-items: center;
  color: black;
`;

export const ToggleText = styled.h3`
  margin-bottom: 5px;
  font-size: 17px;
  padding: 5px;
  margin: 5px;
`;

export const QuestionInput = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  width: 80%;
  height: 100px;
  background: papayawhip;
  border: 1px solid gray;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const MultipleChoiceContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

export const MultipleChoiceItem = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;

  &:checked + ${MultipleChoiceItem} {
    background: palevioletred;
    border: 2px solid palevioletred;
  }
  &:checked + ${RadioButtonLabel} {
    background: palevioletred;
    border: 1px solid palevioletred;
  }
`;
