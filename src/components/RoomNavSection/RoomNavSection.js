import React, { useState } from 'react';
import { Button } from '../../globalStyles';
import { GiTeacher } from 'react-icons/gi';
import { FaChalkboardTeacher } from 'react-icons/fa';
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
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  Input,
} from './RoomNavSection.elements';

function Pricing({
  inputState,
  setInputState,
  handleChange,
  handleJoinAsStudent,
  handleJoinAsAdmin,
  handleCreateRoom,
}) {
  return (
    <IconContext.Provider value={{ color: '#575a89', size: 64 }}>
      <PricingSection id="roomNav">
        <PricingWrapper>
          <PricingHeading>Join or Create a Room</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiGooglescholar />
                </PricingCardIcon>
                <PricingCardPlan>Students</PricingCardPlan>
                <PricingCardCost>Join a Room</PricingCardCost>
                <Input
                  type="text"
                  name="joinStudentRoomName"
                  placeholder="Room Name"
                  value={inputState.joinStudentRoomName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="joinStudentName"
                  placeholder="Student Name"
                  value={inputState.joinStudentName}
                  onChange={handleChange}
                />
                <Button onClick={handleJoinAsStudent}>Join Room</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaChalkboardTeacher />
                </PricingCardIcon>
                <PricingCardPlan>Teachers</PricingCardPlan>
                <PricingCardCost>Join as Admin</PricingCardCost>
                <Input
                  type="text"
                  name="joinAdminRoomName"
                  placeholder="Room Name"
                  value={inputState.joinAdminRoomName}
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  name="joinAdminPassword"
                  placeholder="password"
                  value={inputState.joinAdminPassword}
                  onChange={handleChange}
                />
                <Button onClick={handleJoinAsAdmin}>Join Room</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiTeacher />
                </PricingCardIcon>
                <PricingCardPlan>Teachers</PricingCardPlan>
                <PricingCardCost>Create a Room</PricingCardCost>
                <Input
                  type="text"
                  name="createRoomName"
                  placeholder="Room Name"
                  value={inputState.createRoomName}
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  name="createPassword"
                  placeholder="password "
                  value={inputState.createPassword}
                  onChange={handleChange}
                />
                <Button onClick={handleCreateRoom}>Create Room</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
