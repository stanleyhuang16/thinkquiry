import { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuestionDisplay = styled.div`
	border: solid red;
`;

const ResponseDisplayShort = styled.div`
	border: solid blue;
`;

const ResponseDisplayMultiple = styled.div`
	border: solid yellow;
`;

const SubmitButton = styled.button`
	color: violet;
`;

const AnswerBox = styled.div`
	border: solid green;
`;

function StudentAnswerContainer(props) {
	const {
		question,
		setQuestion,
		questionType,
		setQuestionType,
		mcChoices,
		setMCChoices,
		mcAnswers,
		setMCAnswers,
		mcAnswer,
		setMCAnswer,
		shortAnswer,
		setShortAnswer,
		shortAnswers,
		setShortAnswers,
		roomType,
		setRoomType,
		submitAnswer,
	} = props;

	function handleChangeMultiple(e) {
		setMCAnswer(e.target.value);
	}

	function handleChangeShort(e) {
		e.preventDefault();
		setShortAnswer(e.target.value);
	}

	function handleSubmitAnswer(e) {
		e.preventDefault();
		submitAnswer();
	}

	return (
		<>
			Student Answer Container
			<QuestionDisplay>
				<h4>Current Question</h4>
				<h4>{question}</h4>
			</QuestionDisplay>
			{questionType === 'multiple choice' ? (
				<ResponseDisplayMultiple>
					<h4>Multiple Choice</h4>
					<form onSubmit={handleSubmitAnswer}>
						<AnswerBox>
							{mcChoices['A']}
							<label>
								<input
									type="radio"
									value="A"
									checked={mcAnswer === 'A'}
									onChange={handleChangeMultiple}
								/>
								A
							</label>
						</AnswerBox>
						<AnswerBox>
							{mcChoices['B']}
							<label>
								<input
									type="radio"
									value="B"
									checked={mcAnswer === 'B'}
									onChange={handleChangeMultiple}
								/>
								B
							</label>
						</AnswerBox>
						<AnswerBox>
							{mcChoices['C']}
							<label>
								<input
									type="radio"
									value="C"
									checked={mcAnswer === 'C'}
									onChange={handleChangeMultiple}
								/>
								C
							</label>
						</AnswerBox>
						<AnswerBox>
							{mcChoices['D']}
							<label>
								<input
									type="radio"
									value="D"
									checked={mcAnswer === 'D'}
									onChange={handleChangeMultiple}
								/>
								D
							</label>
						</AnswerBox>
						<input type="submit" value="Submit Multiple Choice Answer" />
					</form>
				</ResponseDisplayMultiple>
			) : (
				<ResponseDisplayShort>
					<h4>Short Answer</h4>
					<form onSubmit={handleSubmitAnswer}>
						<label>
							Enter Answer
							<input
								type="text"
								value={shortAnswer}
								onChange={handleChangeShort}
							></input>
						</label>
						<input type="submit" value="Submit Short Answer" />
					</form>
				</ResponseDisplayShort>
			)}
		</>
	);
}

export default StudentAnswerContainer;
