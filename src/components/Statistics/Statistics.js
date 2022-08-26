import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <div>
      <h2 className={s.title}>Statistics</h2>
      <ul className={s.feedbackList}>
        <li className={s.feedbackItem}>Good: {good} </li>
        <li className={s.feedbackItem}>Neutral: {neutral} </li>
        <li className={s.feedbackItem}>Bad: {bad} </li>
        <li className={s.feedbackItem}>Total: {total} </li>
        <li className={s.feedbackItem}>
          Positive feedback: {positiveFeedback}%{' '}
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

export default Statistics;
