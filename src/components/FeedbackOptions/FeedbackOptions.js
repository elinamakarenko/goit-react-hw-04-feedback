import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ addFeedback }) {
  return (
    <div className={s.feedback}>
      <h2 className={s.title}>Please leave feedback</h2>
      <ul className={s.buttonList}>
        <li className={s.buttonItem}>
          <button
            className={s.button}
            type="button"
            onClick={() => addFeedback('good')}
          >
            Good
          </button>
        </li>
        <li className={s.buttonItem}>
          <button
            className={s.button}
            type="button"
            onClick={() => addFeedback('neutral')}
          >
            Neutral
          </button>
        </li>
        <li className={s.buttonItem}>
          <button
            className={s.button}
            type="button"
            onClick={() => addFeedback('bad')}
          >
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  addFeedback: PropTypes.func,
};

export default FeedbackOptions;
