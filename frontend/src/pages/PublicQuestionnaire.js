import React from 'react';
import QuestionnaireForm from '../components/QuestionnaireForm';

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River',
  'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina',
  'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
  'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT'
];

export default function PublicQuestionnaire() {
  const sectionData = [
    {
      title: 'Section A: Demographic Information',
      questions: [
        { field: 'age', question: 'Age, please specify:', type: 'radio', options: ['18–24', '25–34', '35–44', '45–54', '55+'] },
        { field: 'education', question: 'Highest Educational Background:', type: 'radio', options: ['No formal education', 'Primary education', 'Secondary education', 'Diploma or equivalent', "Bachelor's degree", "Master's degree", 'Doctorate or equivalent'] },
        { field: 'gender', question: 'Gender:', type: 'radio', options: ['Male', 'Female'] },
        { field: 'region', question: 'Region:', type: 'radio', options: ['North-Central', 'North-East', 'North-West', 'South-East', 'South-South', 'South-west'] },
        { field: 'state', question: 'State:', type: 'select', options: NIGERIAN_STATES },
        { field: 'occupation', question: 'Occupation:', type: 'radio', options: ['Student', 'Civil servant', 'Private sector employee', 'Self-employed', 'Academic or researcher', 'Media practitioner', 'Unemployed', 'Other'] },
        { field: 'socialMediaFreq', question: 'How often do you use social media?', type: 'radio', options: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'] },
        { field: 'platforms', question: 'Which online media platforms do you use?', type: 'checkbox', options: ['Facebook', 'X (Twitter)', 'Instagram', 'YouTube', 'TikTok', 'Radio', 'Television', 'WhatsApp', 'LinkedIn', 'Snapchat'] },
        { field: 'onlineYears', question: 'How long have you been active online?', type: 'radio', options: ['Less than a year', '1-2 years', '3-5 years', 'More than 5 years'] },
        { field: 'hoursPerDay', question: 'On average, how many hours per day do you spend online?', type: 'radio', options: ['Less than 1 hour', '1-2 hours', '3-4 hours', '5 or more hours'] }
      ]
    },
    {
      title: 'Section 2: Understanding Falsehoods',
      questions: [
        { field: 'familiarTerms', question: 'Which of the following terms are you familiar with?', type: 'checkbox', options: ['Falsehood', 'Misinformation', 'Disinformation', 'Fake news', 'Malinformation', 'Manipulated Media', 'Rumour', 'Propaganda'] },
        { field: 'encounterFreq', question: 'How often do you encounter false information in your social media feeds?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'confidence', question: 'How confident are you in distinguishing between false and true information online?', type: 'radio', options: ['Very confident', 'Confident', 'Not confident', 'Not confident at all'] },
        { field: 'sharedFalse', question: 'Have you ever shared a post that was later revealed to be false?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'concernLevel', question: 'Rate your level of concern regarding falsehood spreading on social media.', type: 'radio', options: ['Very concerned', 'Concerned', 'Unconcerned', 'Very unconcerned'] }
      ]
    },
    {
      title: 'Section 3: Impact on National Integration',
      questions: [
        { field: 'threatLevel', question: 'How significant do you think falsehood is threatening national unity?', type: 'radio', options: ['Very significant', 'Significant', 'Insignificant', 'Very insignificant'] },
        { field: 'exacerbateDivisions', question: 'Do you believe that falsehood can exacerbate societal divisions?', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'publicUnrest', question: 'How often do you notice a relationship between falsehood and public unrest?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'trustInGov', question: 'How does falsehood affect your trust in information from your government or institutions?', type: 'radio', options: ['Very positively', 'Positively', 'Negatively', 'Very negatively'] }
      ]
    },
    {
      title: 'Section 4: AI Solutions',
      questions: [
        { field: 'familiarAI', question: 'Are you familiar with AI tools or initiatives aimed at combating falsehoods?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'aiEffectiveness', question: 'How effective do you believe AI would be in identifying false or misleading information?', type: 'radio', options: ['Very effective', 'Effective', 'Ineffective', 'Very ineffective'] },
        { field: 'useAITools', question: 'How often do you use tools or apps that help verify information online?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'aiOptimism', question: 'How optimistic are you about the future role of AI in combating falsehoods?', type: 'radio', options: ['Very optimistic', 'Optimistic', 'Pessimistic', 'Very pessimistic'] }
      ]
    },
    {
      title: 'Section 5: Additional Comments',
      questions: [
        { field: 'challenges', question: 'What challenges do you face when discerning fact from fiction online?', type: 'text', multiline: true },
        { field: 'publicAwareness', question: 'How aware do you believe the general public is about falsehoods?', type: 'radio', options: ['Very aware', 'Somewhat aware', 'Somewhat unaware', 'Very unaware'] },
        { field: 'eduTraining', question: 'Should educational institutions provide training on digital literacy and falsehoods?', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'personalExp', question: 'Share any personal experience related to falsehoods that impacted your views on national issues:', type: 'text', multiline: true },
        { field: 'futureResearch', question: 'Would you like to participate in future research regarding falsehoods?', type: 'radio', options: ['Yes', 'No'] }
      ]
    }
  ];

  return <QuestionnaireForm title="Public Questionnaire" section="public" sectionData={sectionData} logoSection="Public" />;
}
