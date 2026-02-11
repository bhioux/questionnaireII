import React from 'react';
import QuestionnaireForm from '../components/QuestionnaireForm';

export default function InfluencerQuestionnaire() {
  const sectionData = [
    {
      title: 'Section A: Demographic Information',
      questions: [
        { field: 'age', question: 'Age:', type: 'radio', options: ['18–24', '25–34', '35–44', '45–54', '55+'] },
        { field: 'education', question: 'Highest Educational Background:', type: 'radio', options: ['No formal education', 'Primary education', 'Secondary education', 'Diploma or equivalent', "Bachelor's degree", "Master's degree", 'Doctorate or equivalent'] },
        { field: 'gender', question: 'Gender:', type: 'radio', options: ['Male', 'Female'] },
        { field: 'followers', question: 'Follower Count:', type: 'radio', options: ['1k–10k', '10k–50k', '50k–100k', '100k+'] },
        { field: 'platforms', question: 'Primary Social Media Platform:', type: 'checkbox', options: ['Facebook', 'Instagram', 'X (Twitter)', 'TikTok', 'YouTube', 'Snapchat', 'LinkedIn', 'Podcast platforms'] },
        { field: 'engagement', question: 'Average Engagement Rate:', type: 'radio', options: ['Below 1 percent', '1–3 percent', '3–5 percent', 'above 5 percent'] },
        { field: 'contentType', question: 'Type of Content Shared:', type: 'checkbox', options: ['Informational', 'Entertainment', 'Political', 'Educational', 'Other'] },
        { field: 'postingFreq', question: 'Frequency of Posting:', type: 'radio', options: ['Daily', 'Bi Weekly', 'Weekly', 'Monthly'] },
        { field: 'experience', question: 'Content Creation Experience (Years):', type: 'radio', options: ['Less than 1 year', '1–3 years', '4–6 years', '7–10 years', 'More than 10 years'] }
      ]
    },
    {
      title: 'Section B: Influence on Dissemination',
      questions: [
        { field: 'encounterMisleading', question: 'How often do you encounter misleading information in your feeds?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'sharedDebunked', question: 'Have you ever shared information that was later debunked?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'verification', question: 'How do you verify the information you share?', type: 'checkbox', options: ['Multiple sources', 'Trusted media outlets', 'Fact-checking tools', 'Other'] },
        { field: 'feedbackFreq', question: 'How often do you get feedback from followers regarding content accuracy?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'confidence', question: 'How confident are you in your ability to distinguish accurate information from false information?', type: 'radio', options: ['Very confident', 'Confident', 'Neither confident nor unconfident', 'Unconfident', 'Very unconfident'] },
        { field: 'adjustStrategy', question: 'How often do you adjust your content strategy to promote accurate information?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] }
      ]
    },
    {
      title: 'Section C: Impact on National Integration',
      questions: [
        { field: 'impactCohesion', question: 'How does the spread of falsehoods affect social cohesion?', type: 'radio', options: ['Very significantly', 'Significantly', 'Insignificantly', 'Very insignificantly'] },
        { field: 'influenceUnity', question: 'To what extent do you think your content influences public perceptions of national unity?', type: 'radio', options: ['Very large extent', 'Large extent', 'Moderate extent', 'Small extent', 'No extent'] },
        { field: 'correctFalsehoods', question: 'How often do you create content aimed at correcting falsehoods?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'responsibility', question: 'Do you think social media influencers have a responsibility to promote accurate information?', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'intergroupRelations', question: 'In your opinion, how do falsehoods affect intergroup relations?', type: 'radio', options: ['Very significantly', 'Significantly', 'Insignificantly', 'Very insignificantly'] }
      ]
    },
    {
      title: 'Section D: AI Solutions',
      questions: [
        { field: 'familiarAI', question: 'How familiar are you with AI tools designed to detect or combat falsehoods?', type: 'radio', options: ['Very familiar', 'Familiar', 'Somewhat familiar', 'Not familiar', 'Not familiar at all'] },
        { field: 'likelyUseAI', question: 'How likely are you to use AI-based tools for fact-checking before sharing content?', type: 'radio', options: ['Very likely', 'Likely', 'Unlikely', 'Very unlikely'] },
        { field: 'aiEffectiveness', question: 'To what extent do you think AI tools are effective in helping influencers promote accurate information?', type: 'radio', options: ['Very effective', 'Effective', 'Moderately effective', 'Ineffective', 'Very ineffective'] },
        { field: 'usedAI', question: 'Have you used AI tools in your content creation process?', type: 'radio', options: ['Yes, regularly', 'Yes, occasionally', 'Yes, once or twice', 'No, but I am aware of such tools', 'No, not at all'] },
        { field: 'digitalLiteracy', question: 'How important is digital literacy for effectively using AI tools to counter falsehoods?', type: 'radio', options: ['Very important', 'Important', 'Unimportant', 'Very unimportant'] }
      ]
    }
  ];

  return <QuestionnaireForm title="Social Media Influencers Questionnaire" section="influencer" sectionData={sectionData} logoSection="Influencer" />;
}
