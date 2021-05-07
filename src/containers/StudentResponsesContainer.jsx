function StudentResponsesContainer({ studentResponses }) {
  const dummyAnswers = [
    { participant: 'paul', answer: 'A' },
    { participant: 'ccc', answer: 'C' },
    { participant: 'd', answer: 'D' },
    { participant: 'dd', answer: 'D' },
    { participant: 'ddd', answer: 'D' },
    { participant: 'dddd', answer: 'D' },
    { participant: 'stanley', answer: 'A' },
    { participant: 'Nhan', answer: 'A' },
    { participant: 'aaa', answer: 'B' },
    { participant: 'bbb', answer: 'B' },
  ];
  const dummyAnswers2 = [
    { participant: 'paul', answer: 'Aaaaaaaaaaaaa' },
    { participant: 'stanley', answer: 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
    { participant: 'Nhan', answer: 'Aaaaaaaaaaaaaaaaaaaaaaaaa' },
    { participant: 'aaa', answer: 'Baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
    { participant: 'bbb', answer: 'Baaaaaaaaaaaa' },
    {
      participant: 'ccc',
      answer: 'Caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
    { participant: 'd', answer: 'Daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
    { participant: 'dd', answer: 'Daaaaaaaaaaaaaaaaaaaaaaaa' },
    { participant: 'ddd', answer: 'Daaaaaaaaaaaa' },
    { participant: 'dddd', answer: 'Daaaaaaaaaaaaaaaaaaaaaaaa' },
  ];

  const questionType = 'multiple choice';
  // const questionType=""
  const responses = dummyAnswers
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

  return <ul>{responses}</ul>;
}
export default StudentResponsesContainer;
