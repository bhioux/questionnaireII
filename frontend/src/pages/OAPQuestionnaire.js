import React from 'react';
import QuestionnaireForm from '../components/QuestionnaireForm';

export default function OAPQuestionnaire() {
  const sectionData = [
    {
      title: 'Section A: Demographic Information',
      questions: [
        { field: 'age', question: 'Age:', type: 'radio', options: ['18–24 years', '25–34 years', '35–44 years', '45–54 years', '55 years and above'] },
        { field: 'gender', question: 'Gender:', type: 'radio', options: ['Male', 'Female'] },
        { field: 'experience', question: 'Years of on-air experience:', type: 'radio', options: ['Less than 1 year', '1–3 years', '4–6 years', '7–10 years', 'More than 10 years'] },
        { field: 'platform', question: 'Type of Media Platform:', type: 'checkbox', options: ['Television', 'Radio', 'Online', 'Other'] },
        { field: 'audienceSize', question: "How would you rate your programme's audience size?", type: 'radio', options: ['Very large', 'Large', 'Average', 'Small', 'Very small'] },
        { field: 'contentFocus', question: 'Main Content Focus:', type: 'checkbox', options: ['News', 'Entertainment', 'Educational', 'Sports', 'Talk Show', 'Other'] },
        { field: 'education', question: 'What best describes your educational background?', type: 'radio', options: ['No formal tertiary education', 'Diploma', "Bachelor's degree", 'Postgraduate degree'] },
        { field: 'formalTraining', question: 'Did you receive formal education in journalism, mass communication, or a related media field?', type: 'radio', options: ['Yes', 'No'] }
      ]
    },
    {
      title: 'Section B: Content Production',
      questions: [
        { field: 'contentFormats', question: 'Which content formats do you most often use?', type: 'radio', options: ['Text only', 'Audio only', 'Video only', 'Mixed formats'] },
        { field: 'circulationPlatforms', question: 'Which platforms do your messages most often circulate beyond your primary broadcast?', type: 'checkbox', options: ['Radio only', 'Television only', 'Facebook', 'X (Twitter)', 'YouTube', 'WhatsApp', 'Multiple platforms'] },
        { field: 'topicDomains', question: 'Which topics have dominated your on-air commentary?', type: 'checkbox', options: ['Politics', 'Security', 'Economy', 'Religion', 'Health', 'Ethnic or tribal issues', 'Elections'] },
        { field: 'narrativeStyle', question: 'When discussing sensitive national issues, which narrative style best describes your approach?', type: 'radio', options: ['Presenting verified facts', 'Raising public concern', 'Assigning responsibility or blame', 'Warning audiences of potential risk', 'Offering reassurance'] }
      ]
    },
    {
      title: 'Section C: Influence on Dissemination',
      questions: [
        { field: 'encounterFalse', question: 'How often do you encounter false information in your broadcasts?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'sharedFalse', question: 'Have you ever unintentionally shared false information?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'verification', question: 'How do you verify the information before broadcasting?', type: 'checkbox', options: ['Multiple sources', 'Fact-checking services', 'Internal editorial process', 'Other'] },
        { field: 'externalSources', question: 'How often do you rely on external sources (e.g., social media) for news stories?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'confidence', question: 'How confident are you in your ability to distinguish between true and false information?', type: 'radio', options: ['Very confident', 'Confident', 'Not confident', 'Not confident at all'] }
      ]
    },
    {
      title: 'Section D: Impact on National Integration',
      questions: [
        { field: 'impactUnity', question: 'In your opinion, does the spread of falsehoods affect national unity?', type: 'radio', options: ['Very significantly', 'Significantly', 'Insignificantly', 'Very insignificantly'] },
        { field: 'discussAccuracy', question: 'How often do you discuss the importance of accurate information with your audience?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'influence', question: 'How do you perceive your influence on public opinion regarding national issues?', type: 'radio', options: ['Very strong', 'Strong', 'Weak', 'Very weak'] },
        { field: 'promoteUnity', question: 'How often do you consciously frame your on-air messages to promote national unity?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] }
      ]
    },
    {
      title: 'Section E: AI Solutions',
      questions: [
        { field: 'familiarAI', question: 'Are you familiar with AI-based tools used to identify false or misleading information?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'usedAI', question: 'Have you ever used any AI-based tool in your content preparation or broadcast work?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'aiEffectiveness', question: 'How effective do you believe AI tools are in identifying falsehoods?', type: 'radio', options: ['Very effective', 'Effective', 'Ineffective', 'Very ineffective'] },
        { field: 'likelyUseAI', question: 'How likely are you to rely on AI tools for fact-checking before airing sensitive information?', type: 'radio', options: ['Very likely', 'Likely', 'Unlikely', 'Very unlikely'] }
      ]
    }
  ];

  return <QuestionnaireForm title="On-Air Personalities Questionnaire" section="oap" sectionData={sectionData} logoSection="OAP" />;
}
