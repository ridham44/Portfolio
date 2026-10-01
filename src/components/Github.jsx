import { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, BookOpen, Zap, Package } from 'lucide-react';
import { useTheme } from '../context/useTheme';

export default function GithubSection() {
    const { theme: siteTheme } = useTheme();
    const colorScheme = siteTheme === 'sepia' ? 'light' : 'dark';
    const barColor = colorScheme === 'dark' ? '#3b82f6' : '#1e3a8a';
    
    const [stats, setStats] = useState({
        stars: 0,
        forks: 0,
        commits: 0,
        prs: 0,
        repos: 0
    });
    const [languages, setLanguages] = useState([]);
    const [featuredRepo, setFeaturedRepo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                // Fetch Repos for stars, forks, languages, featured
                const reposRes = await fetch('https://api.github.com/users/ridham44/repos?per_page=100');
                const repos = await reposRes.json();
                
                let totalStars = 0;
                let totalForks = 0;
                let langMap = {};
                let topRepo = null;

                if (Array.isArray(repos)) {
                    repos.forEach(repo => {
                        totalStars += repo.stargazers_count || 0;
                        totalForks += repo.forks_count || 0;
                        
                        if (repo.language) {
                            langMap[repo.language] = (langMap[repo.language] || 0) + 1;
                        }
                        
                        if (!topRepo || (repo.stargazers_count > topRepo.stargazers_count && !repo.fork)) {
                            topRepo = repo;
                        }
                    });

                    // Format Languages
                    const totalLangs = Object.values(langMap).reduce((a, b) => a + b, 0);
                    const formattedLangs = Object.entries(langMap)
                        .map(([name, count]) => ({ name, percentage: Math.round((count / totalLangs) * 100) }))
                        .sort((a, b) => b.percentage - a.percentage)
                        .slice(0, 5);
                    
                    // Distribute remaining to 'Other' if < 100
                    const currentTotal = formattedLangs.reduce((acc, curr) => acc + curr.percentage, 0);
                    if (currentTotal < 100 && formattedLangs.length === 5) {
                        formattedLangs.push({ name: 'Other', percentage: 100 - currentTotal });
                    }

                    setLanguages(formattedLangs);
                    setFeaturedRepo(topRepo);
                }

                // Fetch Pull Requests
                let prsCount = 0;
                try {
                    const prsRes = await fetch('https://api.github.com/search/issues?q=author:ridham44+type:pr');
                    const prData = await prsRes.json();
                    prsCount = prData.total_count || 0;
                } catch (e) { console.error('Error fetching PRs', e); }

                // Fetch Commits
                let commitsCount = 0;
                try {
                    const commitsRes = await fetch('https://api.github.com/search/commits?q=author:ridham44', {
                        headers: { Accept: 'application/vnd.github.cloak-preview' }
                    });
                    const commitsData = await commitsRes.json();
                    commitsCount = commitsData.total_count || 0;
                } catch (e) { console.error('Error fetching Commits', e); }

                setStats({
                    stars: totalStars,
                    forks: totalForks,
                    commits: commitsCount,
                    prs: prsCount,
                    repos: Array.isArray(repos) ? repos.length : 0
                });

            } catch (error) {
                console.error('Error fetching GitHub snapshot data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGithubData();
    }, []);

    const calendarTheme = {
        light: ['#e8eefc', '#93c5fd', '#60a5fa', '#3b82f6', '#1e40af'],
        dark: ['#15233d', '#1e3a8a', '#2563eb', '#60a5fa', '#93c5fd'],
    };




    return (
        <section className="github-developer-snapshot">
            {/* Header */}
            <div className="github-snapshot-header">
                <div className="header-titles">
                    <h3>GitHub Activity</h3>
                    <p>Consistency over the last year</p>
                </div>

                <div className="github-header-actions">
                    <a
                        href="https://github.com/ridham44"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-accent"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        View My GitHub Profile
                    </a>

                    <div className="compact-activity-summary">
                        <div className="summary-item">
                            <Star size={14} /> <span>{stats.stars} Stars</span>
                        </div>
                        {stats.commits > 0 && (
                            <div className="summary-item">
                                <Zap size={14} /> <span>{stats.commits} Commits</span>
                            </div>
                        )}
                        {stats.repos > 0 && (
                            <div className="summary-item">
                                <Package size={14} /> <span>{stats.repos} Repos</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Contribution Graph */}
            <div className="github-card heatmap-card">
                <div className="heatmap-scroll-container">
                    <GitHubCalendar 
                        username="ridham44" 
                        colorScheme={colorScheme} 
                        theme={calendarTheme} 
                        hideColorLegend={false} 
                        hideMonthLabels={false} 
                        style={{ margin: '0 auto' }}
                    />
                </div>
            </div>

            {/* Bottom Row: Top Languages & Featured Repo */}
            {!loading && (
                <div className="github-bottom-row">
                    {/* Top Languages */}
                    {languages.length > 0 && (
                        <motion.div 
                            className="github-card languages-card"
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h4 className="card-subtitle"><BookOpen size={16} /> Top Languages</h4>
                            <div className="language-bar-chart">
                                {languages.map((lang, idx) => (
                                    <div key={lang.name} className="lang-chart-row">
                                        <div className="lang-chart-label">{lang.name}</div>
                                        <div className="lang-chart-bar-container">
                                            <motion.div 
                                                className="lang-chart-bar-fill" 
                                                style={{ backgroundColor: barColor }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${lang.percentage}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.1 + (idx * 0.1) }}
                                            />
                                        </div>
                                        <div className="lang-chart-percent">{lang.percentage}%</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Featured Repository */}
                    {featuredRepo && (
                        <motion.div 
                            className="github-card featured-repo-card"
                            initial={{ opacity: 0, x: 15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -4 }}
                        >
                            <div className="repo-header">
                                <h4 className="card-subtitle"><Star size={16} fill="currentColor" /> Featured Repository</h4>
                            </div>
                            <h3 className="repo-title">{featuredRepo.name.replace(/-/g, ' ')}</h3>
                            {featuredRepo.description && <p className="repo-desc">{featuredRepo.description}</p>}
                            
                            <div className="repo-meta">
                                {featuredRepo.language && <span className="repo-lang">{featuredRepo.language}</span>}
                                <span className="repo-stat"><Star size={14} /> {featuredRepo.stargazers_count}</span>
                                <span className="repo-stat"><GitFork size={14} /> {featuredRepo.forks_count}</span>
                            </div>
                            
                            <div className="repo-footer">
                                <span className="repo-updated">
                                    Updated {new Date(featuredRepo.updated_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                                </span>
                                <a 
                                    href={featuredRepo.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="repo-link"
                                    aria-label={`View ${featuredRepo.name} repository on GitHub`}
                                >
                                    View Repository <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </div>
            )}
        </section>
    );
}
