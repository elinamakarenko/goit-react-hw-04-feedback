import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = value => {
    console.log(value);
    switch (value) {
      case 'good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;
      case 'neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;
      case 'bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;
      default:
        break;
    }
  };

  countTotalFeedback = countTotal => {
    const values = Object.values(this.state);
    for (const value of values) {
      countTotal += value;
    }
    return countTotal;
  };

  countPositiveFeedbackPercentage = (countPositive, countTotal) => {
    const positive = this.state.good;
    if (countTotal) {
      countPositive = Math.round((positive / countTotal) * 100);
    }
    return countPositive;
  };

  render() {
    const countTotal = 0;
    const countPositive = 0;

    return (
      <>
        <Section>
          <FeedbackOptions addFeedback={this.incrementFeedback} />
        </Section>
        <Section>
          {this.countTotalFeedback(countTotal) ? (
            <Statistics
              feedback={this.state}
              total={this.countTotalFeedback(countTotal)}
              positiveFeedback={this.countPositiveFeedbackPercentage(
                countPositive,
                this.countTotalFeedback(countTotal)
              )}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
