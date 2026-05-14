import aiml      from './Certifacte/AIML.pdf'
import fsd       from './Certifacte/FSD-1.pdf'
import dbms      from './Certifacte/DBMS.pdf'
import ds        from './Certifacte/DS.pdf'
import javaIntro from './Certifacte/java certificate coursera.pdf'
import aiApp     from './Certifacte/Ai.pdf'
import postman   from './Certifacte/Postman.pdf'
import aws       from './Certifacte/AWS.pdf'
import mlPython  from './Certifacte/Machine Learning with Python.pdf'
import psychology from './Certifacte/Psychology.pdf'
import dotnet    from './Certifacte/.Net.pdf'

export const certificates = [
    { name: 'Exploratory Data Analysis for Machine Learning',        issuer: 'IBM',                      link: aiml      },
    { name: 'HTML, CSS, and JavaScript for Web Developers',          issuer: 'Johns Hopkins University',  link: fsd       },
    { name: 'Database Design and Basic SQL in PostgreSQL',           issuer: 'University of Michigan',    link: dbms      },
    { name: 'Inheritance and Data Structures in Java',               issuer: 'University of Pennsylvania', link: ds       },
    { name: 'Introduction to Java',                                  issuer: 'Learn Quest',               link: javaIntro },
    { name: 'Building Generative AI-Powered Applications with Python', issuer: 'IBM',                    link: aiApp     },
    { name: 'Postman API Fundamentals Student Expert',               issuer: 'Postman',                   link: postman   },
    { name: 'AWS Cloud Technical Essentials',                        issuer: 'AWS',                       link: aws       },
    { name: 'Machine Learning with Python',                          issuer: 'IBM',                       link: mlPython  },
    { name: 'Introduction to Psychology',                            issuer: 'Yale University',           link: psychology },
    { name: 'Back-End Development with .NET',                        issuer: 'Microsoft',                 link: dotnet    },
];
