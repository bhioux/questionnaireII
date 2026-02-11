import React from 'react';
import QuestionnaireForm from '../components/QuestionnaireForm';

export default function MediaProfessionalQuestionnaire() {
  const sectionData = [
    {
      title: 'Section A: Professional Profile',
      questions: [
        { field: 'age', question: 'Age group:', type: 'radio', options: ['25–34 years', '35–44 years', '45–54 years', '55–64 years', '65 years and above'] },
        { field: 'gender', question: 'Gender:', type: 'radio', options: ['Male', 'Female'] },
        { field: 'role', question: 'Current managerial role:', type: 'radio', options: ['Editor or Managing Editor', 'News Director', 'Producer or Executive Producer', 'Content or Platform Manager', 'Station or Organisation Head', 'Other managerial role'] },
        { field: 'experience', question: 'Years of experience in a managerial or decision-making role:', type: 'radio', options: ['Less than 3 years', '3–5 years', '6–10 years', 'More than 10 years'] },
        { field: 'orgType', question: 'Type of media organisation:', type: 'checkbox', options: ['Print', 'Broadcast', 'Digital-only', 'Multimedia or converged newsroom'] },
        { field: 'audienceReach', question: 'Estimated average audience reach:', type: 'radio', options: ['Below 50,000', '50,000–199,999', '200,000–499,999', '500,000 and above', 'Not sure'] },
        { field: 'editorialFocus', question: 'Primary editorial focus:', type: 'checkbox', options: ['General news', 'Political affairs', 'Investigative journalism', 'Business and economy', 'Public affairs and civic issues'] },
        { field: 'education', question: 'Highest educational background:', type: 'radio', options: ['Diploma or equivalent', "Bachelor's degree", "Master's degree", 'Doctorate or equivalent'] }
      ]
    },
    {
      title: 'Section B: Role in Dissemination',
      questions: [
        { field: 'factCheckingFreq', question: 'How frequently does your organisation require formal fact-checking?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'publishedFalse', question: 'Has your organisation published content later identified as false?', type: 'radio', options: ['Yes, on multiple occasions', 'Yes, on a few occasions', 'Yes, once', 'No', 'Not sure'] },
        { field: 'sourceAssessment', question: 'How does your organisation assess source credibility?', type: 'checkbox', options: ['Use of editorial guidelines', 'Multiple-source confirmation', 'Verification by senior editors', 'Consultation with subject experts', 'Reliance on official sources'] },
        { field: 'reductionStrategies', question: 'Which strategies are used to reduce falsehoods?', type: 'checkbox', options: ['Internal fact-checking desks', 'Editorial review committees', 'Corrections and retractions policy', 'Staff training on falsehoods', 'Collaboration with external fact-checkers'] },
        { field: 'confidence', question: 'How confident are you in your organisation\'s systems for identifying false information?', type: 'radio', options: ['Very confident', 'Confident', 'Moderately confident', 'Not confident', 'Not confident at all'] }
      ]
    },
    {
      title: 'Section C: Impact on National Integration',
      questions: [
        { field: 'undermineUnity', question: 'Do you think falsehoods undermine national unity?', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'addressFalsehoods', question: 'How frequently does your organisation approve content addressing falsehoods?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'promotingIntegration', question: 'What roles does your organisation play in promoting national integration?', type: 'checkbox', options: ['Promoting inclusive narratives', 'Ensuring balanced representation', 'Countering divisive falsehoods', 'Providing civic education', 'Facilitating public dialogue'] },
        { field: 'communityImpact', question: 'Does false information affect some communities more than others?', type: 'radio', options: ['Very significantly', 'Significantly', 'Insignificantly', 'Very insignificantly'] },
        { field: 'concernLevel', question: 'How concerned are you about the impact of falsehoods on public trust?', type: 'radio', options: ['Very concerned', 'Concerned', 'Unconcerned', 'Very unconcerned'] }
      ]
    },
    {
      title: 'Section D: AI Solutions',
      questions: [
        { field: 'familiarAI', question: 'How familiar are you with AI tools designed to detect or reduce falsehoods?', type: 'radio', options: ['Very familiar', 'Familiar', 'Somewhat familiar', 'Not familiar', 'Not familiar at all'] },
        { field: 'likelyAdopt', question: 'How likely is your organisation to adopt AI tools for fact-checking?', type: 'radio', options: ['Very likely', 'Likely', 'Unlikely', 'Very unlikely'] },
        { field: 'aiFunctionalities', question: 'Which AI functionalities are most useful?', type: 'checkbox', options: ['Real-time fact-checking', 'Source credibility scoring', 'Detection of coordinated falsehoods', 'Local language support', 'Audience falsehoods alerts'] },
        { field: 'aiEffectiveness', question: 'How effective do you think AI can be in improving news accuracy?', type: 'radio', options: ['Very effective', 'Effective', 'Moderately effective', 'Ineffective', 'Very ineffective'] },
        { field: 'challenges', question: 'What challenges limit organisational use of AI tools?', type: 'checkbox', options: ['Cost and infrastructure constraints', 'Limited staff expertise', 'Ethical or legal concerns', 'Lack of local data', 'Resistance to technological change'] }
      ]
    }
  ];

  return <QuestionnaireForm title="Media Professionals Questionnaire" section="media-professional" sectionData={sectionData} logoSection="Media Pro" />;
}
