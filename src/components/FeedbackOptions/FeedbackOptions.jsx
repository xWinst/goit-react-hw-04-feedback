import React from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const colors = ['#00ff00', '#00ffee', '#ff0000'];

    return (
        <div className={s.container}>
            {options.map((option, index) => (
                <button
                    key={option}
                    className={s.button}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}
                    style={{ backgroundColor: colors[index] }}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
