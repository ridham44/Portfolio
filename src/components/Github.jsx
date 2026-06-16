import { GitHubCalendar } from 'react-github-calendar';

export default function GithubSection() {
    const theme = {
        light: [
            "#e8eefc",// empty
            '#93c5fd',
            '#60a5fa',
            '#3b82f6',
            '#1e40af',
        ],
        dark: [
            '#15233d', // empty
            '#1e3a8a',
            '#2563eb',
            '#60a5fa',
            '#93c5fd',
        ],
    };

    return (
        <div className="github-card">
            <div className="github-header">
                <h3>GitHub Activity</h3>
                <p>Consistency over the last year</p>
            </div>

            <GitHubCalendar username="ridham44" colorScheme="dark" theme={theme} hideColorLegend={false} hideMonthLabels={false} />
        </div>
    );
}
