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
        { field: 'age', question: '1. Age, please specify:', type: 'radio', options: ['18–24', '25–34', '35–44', '45–54', '55+'] },
        { field: 'education', question: '2. Highest Educational Background:', type: 'radio', options: ['No formal education', 'Primary education', 'Secondary education', 'Diploma or equivalent', "Bachelor's degree", "Master's degree", 'Doctorate or equivalent'] },
        { field: 'gender', question: '3. Gender:', type: 'radio', options: ['Male', 'Female'] },
        { field: 'region', question: '4. Region:', type: 'radio', options: ['North-Central', 'North-East', 'North-West', 'South-East', 'South-South', 'South-west'] },
        { field: 'state', question: '5. State:', type: 'select', options: NIGERIAN_STATES },
        { field: 'occupation', question: '6. Occupation:', type: 'radio', options: ['Student', 'Civil servant', 'Private sector employee', 'Self-employed', 'Academic or researcher', 'Media practitioner', 'Unemployed', 'Other'], otherField: 'occupationOther', otherLabel: 'Occupation (please specify)' },
        { field: 'socialMediaFreq', question: '7. How often do you use social media?', type: 'radio', options: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'] },
        { field: 'platforms', question: '8. Which online media platforms do you use? (Select all that apply)', type: 'checkbox', options: ['Facebook', 'Twitter', 'Instagram', 'YouTube', 'TikTok', 'Radio', 'Television', 'Vlog', 'WhatsApp', 'LinkedIn', 'Snapchat', 'Other'], otherField: 'platformsOther', otherLabel: 'Platform (please specify)' },
        { field: 'onlineYears', question: '9. How long have you been active online?', type: 'radio', options: ['Less than a year', '1-2 years', '3-5 years', 'More than 5 years'] },
        { field: 'hoursPerDay', question: '10. On average, how many hours per day do you spend online?', type: 'radio', options: ['Less than 1 hour', '1-2 hours', '3-4 hours', '5 or more hours'] },
        { field: 'platformMotivation', question: '11. What motivates you to choose specific social media platforms? (Select all that apply)', type: 'checkbox', options: ['Friends', 'Trends', 'Family', 'Work/Professional', 'Entertainment'] },
        { field: 'contentMostEngaged', question: '12. What type of content do you engage with the most?', type: 'radio', options: ['News', 'Entertainment', 'Lifestyle', 'Politics', 'Education', 'Others'], otherField: 'contentMostEngagedOther', otherLabel: 'Content type (please specify)', otherTrigger: 'Others' },
        { field: 'digitalLiteracyLevel', question: '13. How would you rate your overall digital literacy?', type: 'radio', options: ['Very high', 'High', 'Average', 'Low', 'Very low'] },
        { field: 'followSpecificPeople', question: '14. Do you follow any specific OAPs or social media influencers?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'favouriteOAPs', question: '15. If yes, list up to five OAPs. Provide name and handle or URL.', type: 'text', multiline: true, showIf: { field: 'followSpecificPeople', equals: 'Yes' } },
        { field: 'favouriteInfluencers', question: '16. If yes, list up to five Social Media Influencers. Provide name and handle or URL.', type: 'text', multiline: true, showIf: { field: 'followSpecificPeople', equals: 'Yes' } },
        { field: 'sharedFromFavorites', question: '17. Have you shared posts from any of your favourite OAP or Influencer?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'sharedFromFavoritesFreq', question: '18. If yes, how often?', type: 'radio', options: ['Rarely', 'Sometimes', 'Often', 'Always'], showIf: { field: 'sharedFromFavorites', equals: 'Yes' } },
        { field: 'infoSourcesFirst', question: '19. What information sources do you use first?', type: 'checkbox', options: ['Social media', 'Television', 'Newspapers', 'Online news websites', 'Radio'] },
        { field: 'engageWithInfluencerContentFreq', question: '20. How often do you engage with content from OAPs or influencers?', type: 'radio', options: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'] },
        { field: 'credibleSourcesImportance', question: '21. How important is it for you to follow credible sources?', type: 'radio', options: ['Very important', 'Important', 'Unimportant', 'Very unimportant'] },
        { field: 'infoEncounterReliability', question: '22. How do you rate information encountered online?', type: 'radio', options: ['Very reliable', 'Reliable', 'Unreliable', 'Very unreliable'] },
        { field: 'promotionsExposureFreq', question: '23. How often do you see promotions or ads from OAPs or influencers?', type: 'radio', options: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'] },
        { field: 'credibilitySignals', question: '24. What influences your perception of information credibility?', type: 'checkbox', options: ['Likes/Shares', 'Source reputation', 'Content type', 'Other'], otherField: 'credibilitySignalsOther', otherLabel: 'Please specify' },
        { field: 'factCheckBeforeShare', question: '25. How often do you fact-check information before believing or sharing it?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] }
      ]
    },
    {
      title: 'Section 2: Understanding falsehoods and its patterns, such as, Misinformation, Disinformation, Fake News, malinformation, manipulated media (e.g memes and deep fakes), rumour and propaganda.',
      questions: [
        { field: 'familiarTerms', question: '26. Which of the following terms are you familiar with? (Select all that are applicable)', type: 'checkbox', options: ['falsehood', 'Misinformation', 'Disinformation', 'Fake news', 'Malinformation', 'Manipulated Media (e.g Deep fakes, altered images and Memes)', 'Rumour', 'Propaganda'] },
        { field: 'encounterFreq', question: '27. How often do you encounter false information in your social media feeds?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'confidence', question: '28. How confident are you in distinguishing between false and true information online?', type: 'radio', options: ['Very confident', 'Confident', 'Not confident', 'Not confident at all'] },
        { field: 'determineTruthMethods', question: '29. How do you determine whether information online is true or false?', type: 'checkbox', options: ['I check multiple sources', 'I rely on trusted media outlets', 'I verify through official government or organisational pages', 'I rely on opinions of friends or contacts', 'I use fact-checking platforms', 'I trust my personal judgement', 'Other'], otherField: 'determineTruthMethodsOther', otherLabel: 'Please specify' },
        { field: 'sharedFalse', question: '30. Have you ever shared a post that was later revealed to be false?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'sharedFalseDescribe', question: '31. If yes, please describe:', type: 'text', multiline: true, showIf: { field: 'sharedFalse', equals: 'Yes' } },
        { field: 'intentionalMisleadFreq', question: '32. How often do you believe that false information or content is used intentionally to mislead?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'concernLevel', question: '33. Rate your level of concern regarding falsehood spreading on social media.', type: 'radio', options: ['Very concerned', 'Concerned', 'Unconcerned', 'Very unconcerned'] },
        { field: 'discussFalsehoodFreq', question: '34. How often do you discuss issues of falsehood with friends or family?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'politicalFalsehoodFeeling', question: '35. How do you feel about the prevalence of falsehood in political discussions?', type: 'radio', options: ['Very positive', 'Positive', 'Negative', 'Very negative'] },
        { field: 'harmfulFalsehoodTypes', question: '36. What types of falsehood do you think are most harmful? (Select all that apply)', type: 'checkbox', options: ['Politically related', 'Health related', 'Socially related', 'Tribal related', 'Economically related', 'Environmentally related', 'Security related', 'Other'], otherField: 'harmfulFalsehoodTypesOther', otherLabel: 'Please specify' },
        { field: 'impactedNationalView', question: '37. Have you ever felt that falsehood has impacted your view on a national issue?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'impactedNationalViewDetails', question: '38. If yes, please provide details:', type: 'text', multiline: true, showIf: { field: 'impactedNationalView', equals: 'Yes' } },
        { field: 'shareControversialLikelihood', question: '39. How likely are you to share a post that appears controversial or shocking?', type: 'radio', options: ['Very likely', 'Likely', 'Unlikely', 'Very unlikely'] },
        { field: 'deliberateHarmExtent', question: '40. To what extent do you think falsehood is a deliberate act of causing harm?', type: 'radio', options: ['Very significant', 'Significant', 'Insignificant', 'Very insignificant'] },
        { field: 'checkSourcesBeforeBelieving', question: '41. How often do you check the sources of information before believing it?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'platformRegulationImportance', question: '42. How important is it for social media platforms to regulate false information?', type: 'radio', options: ['Very important', 'Important', 'Unimportant', 'Very unimportant'] },
        { field: 'reportFalseInfoFreq', question: '43. How often do you feel the need to report posts that contain false information?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'reportingChannels', question: '44. Which channels do you know that allow you to report false information?', type: 'checkbox', options: ['Report button on social media platforms', 'Community standards or safety pages on platforms', 'Fact-checking organisations', 'Government or regulatory reporting portals', 'Media outlet feedback channels', 'I do not know any reporting channels', 'Other'], otherField: 'reportingChannelsOther', otherLabel: 'Please specify' },
        { field: 'beliefAfterFalsehood', question: '45. How do you feel when you find out that information you believed was false?', type: 'radio', options: ['Very frustrated', 'Frustrated', 'Not frustrated', 'Not at all frustrated'] },
        { field: 'reportedFalseInfo', question: '46. Have you ever reported false information online?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'reportedFalseInfoReason', question: '47. If yes, what was the reason for reporting it?', type: 'checkbox', options: ['To prevent others from being misled', 'Because the content was harmful', 'Because it violated platform rules', 'Because it targeted individuals or groups', 'Other'], otherField: 'reportedFalseInfoReasonOther', otherLabel: 'Please specify', showIf: { field: 'reportedFalseInfo', equals: 'Yes' } },
        { field: 'reportedFalseInfoPlatform', question: '48. Which platform did you use to report it?', type: 'checkbox', options: ['Facebook', 'X', 'Instagram', 'WhatsApp', 'YouTube', 'TikTok', 'Other'], otherField: 'reportedFalseInfoPlatformOther', otherLabel: 'Please specify' },
        { field: 'publicOpinionImpact', question: '49. Do you believe that falsehood can significantly impact public opinion on national issues?', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'publicAwarenessLevel', question: '50. How aware do you think most people are of false information?', type: 'radio', options: ['Very aware', 'Somewhat aware', 'Somewhat unaware', 'Very unaware'] },
        { field: 'avoidSharingSteps', question: '51. What steps do you take to avoid sharing falsehood?', type: 'text', multiline: true }
      ]
    },
    {
      title: 'Section 3: Impact of falsehood on National Integration',
      questions: [
        { field: 'threatLevel', question: '52. How significant do you think falsehood is threatening national unity?', type: 'radio', options: ['Very significant', 'Significant', 'Insignificant', 'Very insignificant'] },
        { field: 'exacerbateDivisions', question: '53. Do you believe that falsehood can exacerbate societal divisions?', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'publicUnrest', question: '54. How often do you notice a relationship between falsehood and public unrest?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'tribePerceptionInfluence', question: '55. In your opinion, how does false information influence how people perceive your tribe?', type: 'radio', options: ['Very positively', 'Positively', 'Negatively', 'Very negatively'] },
        { field: 'accurateInfoImportance', question: '56. How important is accurate information in fostering national integration?', type: 'radio', options: ['Very important', 'Important', 'Unimportant', 'Very unimportant'] },
        { field: 'trustInGov', question: '57. How does falsehood affect your trust in information from your government or institutions?', type: 'radio', options: ['Very positively', 'Positively', 'Negatively', 'Very negatively'] },
        { field: 'distrustAmongTribes', question: '58. Rate your agreement with the statement: "falsehood leads to distrust among tribes."', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'unityConversationsFreq', question: '59. How often do you think conversations about national unity occur on social media?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'negativeConflictConversationsFreq', question: '60. How often do negative conversations about inter-tribal conflicts or differences appear on your online feeds?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'challengeFalsehoodLikelihood', question: '61. How likely are you to engage in discussions that challenge falsehoods?', type: 'radio', options: ['Very likely', 'Likely', 'Unlikely', 'Very unlikely'] },
        { field: 'nationalImpactAwareness', question: '62. How would you describe the general awareness about the impact of falsehoods on national issues in your community?', type: 'radio', options: ['Very high', 'High', 'Average', 'Low', 'Very low'] },
        { field: 'relyInfluencerUpdates', question: '63. I rely on influencers for updates on national issues.', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'believeOAPShareFalse', question: '64. I believe that OAPs often share false information.', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'believeInfluencerShareFalse', question: '65. Social media influencers often share false information.', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'relyOAPUpdates', question: '66. I rely on OAPs for updates on national issues.', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'postsShapeNationalOpinion', question: '67. Posts by OAPs or influencers shape my opinion on national issues.', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'postsShapeIntergroupOpinion', question: '68. Posts by OAPs or influencers shape my opinion on intergroup relations.', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] }
      ]
    },
    {
      title: 'Section 4: AI Solutions to Combat Falsehoods',
      questions: [
        { field: 'familiarAI', question: '69. Are you familiar with AI tools or initiatives aimed at combating falsehoods?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'familiarAIList', question: '70. If yes, please list:', type: 'text', multiline: true, required: false, showIf: { field: 'familiarAI', equals: 'Yes' } },
        { field: 'aiEffectiveness', question: '71. How effective do you believe AI would be in identifying false or misleading information?', type: 'radio', options: ['Very effective', 'Effective', 'Ineffective', 'Very ineffective'] },
        { field: 'useAITools', question: '72. How often do you use tools or apps that help verify information online?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'relyAIToolsLikelihood', question: '73. How likely are you to rely on AI tools for fact-checking before sharing content?', type: 'radio', options: ['Very likely', 'Likely', 'Unlikely', 'Very unlikely'] },
        { field: 'oapInfluencerShouldUseAI', question: '74. Do you believe OAPs and influencers should use AI to improve the quality of information they share?', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'aiFeatures', question: '75. What features do you believe an effective AI falsehoods tool should have? (Select all that apply)', type: 'checkbox', options: ['User-friendly interface', 'Fast response time', 'Reliable sources', 'Comprehensive database', 'Other'], otherField: 'aiFeaturesOther', otherLabel: 'Please specify' },
        { field: 'aiLiteracyImportance', question: '76. How important is digital literacy in effectively using AI tools against falsehoods?', type: 'radio', options: ['Very important', 'Important', 'Unimportant', 'Very unimportant'] },
        { field: 'aiOptimism', question: '77. How optimistic are you about the future role of AI in combating falsehoods?', type: 'radio', options: ['Very optimistic', 'Optimistic', 'Pessimistic', 'Very pessimistic'] },
        { field: 'aiEthicsSignificance', question: '78. How significant do you think the ethical considerations surrounding AI are in curbing falsehoods?', type: 'radio', options: ['Very significant', 'Significant', 'Insignificant', 'Very insignificant'] }
      ]
    },
    {
      title: 'Section 5: Additional Comments',
      questions: [
        { field: 'challenges', question: '79. What challenges do you face when discerning fact from fiction online?', type: 'text', multiline: true },
        { field: 'publicAwareness', question: '80. How aware do you believe the general public is about falsehoods?', type: 'radio', options: ['Very aware', 'Somewhat aware', 'Somewhat unaware', 'Very unaware'] },
        { field: 'eduTraining', question: '81. Should educational institutions provide training on digital literacy and falsehoods?', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'govTraining', question: '82. Should government institutions provide training on digital literacy and falsehoods?', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'communityEngagementRole', question: '83. How do you think community engagement can help combat falsehoods?', type: 'text', multiline: true },
        { field: 'personalExp', question: '84. Share (Highlight) any personal experience related to falsehoods that impacted your views on national issues:', type: 'text', multiline: true },
        { field: 'communityResourcesNeeded', question: '85. What type of resources would help your community in combating falsehoods?', type: 'text', multiline: true },
        { field: 'influencerContribution', question: '86. How can influencers contribute positively to national unity through accurate information?', type: 'text', multiline: true },
        { field: 'platformResponsibilityViews', question: '87. How do you feel about the responsibility of social media platforms in controlling fake news?', type: 'text', multiline: true },
        { field: 'futureResearch', question: '88. Would you like to participate in future research regarding falsehoods?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'additionalFeedback', question: '89. Any other comments or feedback for improving understanding of falsehoods and its impacts?', type: 'text', multiline: true, required: false }
      ]
    }
  ];

  return <QuestionnaireForm title="Public Questionnaire" section="public" sectionData={sectionData} logoSection="Public" />;
}
