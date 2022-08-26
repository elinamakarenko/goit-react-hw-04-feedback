import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export default function App() {
  const [stateGood, setStateGood] = useState(0);
  const [stateNeutral, setStateNeutral] = useState(0);
  const [stateBad, setStateBad] = useState(0);

  const incrementFeedback = value => {
    switch (value) {
      case 'good':
        setStateGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setStateNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setStateBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotal = 0;
  const countPositive = 0;

  const countTotalFeedback = countTotal => {
    countTotal = stateGood + stateNeutral + stateBad;
    return countTotal;
  };

  const countPositiveFeedbackPercentage = (countPositive, countTotal) => {
    if (countTotal) {
      countPositive = Math.round((stateGood / countTotal) * 100);
    }
    return countPositive;
  };

  return (
    <>
      <Section>
        <FeedbackOptions addFeedback={incrementFeedback} />
      </Section>
      <Section>
        {countTotalFeedback(countTotal) ? (
          <Statistics
            good={stateGood}
            neutral={stateNeutral}
            bad={stateBad}
            total={countTotalFeedback(countTotal)}
            positiveFeedback={countPositiveFeedbackPercentage(
              countPositive,
              countTotalFeedback(countTotal)
            )}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
