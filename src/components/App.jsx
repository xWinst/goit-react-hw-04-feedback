import { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import 'modern-normalize/modern-normalize.css';

const App = () => {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

    const countFeedback = text => {
        setFeedback(state => ({ ...state, [text]: state[text] + 1 }));
    };

    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;
    const percent = Math.floor((good / total) * 100);
    return (
        <div style={{ height: '100vh', fontSize: 32, color: '#010101' }}>
            <Section title={'Please leave feedback'}>
                <FeedbackOptions
                    options={Object.keys(feedback)}
                    onLeaveFeedback={countFeedback}
                />
            </Section>
            <Section title={'Statistics'}>
                {total ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={percent}
                    />
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
        </div>
    );
};

export default App;
