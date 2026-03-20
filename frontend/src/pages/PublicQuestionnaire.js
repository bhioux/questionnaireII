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
        { field: 'occupation', question: 'Occupation:', type: 'radio', options: ['Student', 'Civil servant', 'Private sector employee', 'Self-employed', 'Academic or researcher', 'Media practitioner', 'Unemployed', 'Other'], otherField: 'occupationOther', otherLabel: 'Occupation (please specify)' },
        { field: 'socialMediaFreq', question: 'How often do you use social media?', type: 'radio', options: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'] },
        { field: 'platforms', question: 'Which online media platforms do you use?', type: 'checkbox', options: ['Facebook', 'X (Twitter)', 'Instagram', 'YouTube', 'TikTok', 'Radio', 'Television', 'WhatsApp', 'LinkedIn', 'Snapchat', 'Other'], otherField: 'platformsOther', otherLabel: 'Platform (please specify)' },
        { field: 'onlineYears', question: 'How long have you been active online?', type: 'radio', options: ['Less than a year', '1-2 years', '3-5 years', 'More than 5 years'] },
        { field: 'hoursPerDay', question: 'On average, how many hours per day do you spend online?', type: 'radio', options: ['Less than 1 hour', '1-2 hours', '3-4 hours', '5 or more hours'] },
        { field: 'platformMotivation', question: 'What motivates you to choose specific social media platforms? (Select all that apply)', type: 'checkbox', options: ['Friends', 'Family', 'Trends', 'Work/Professional', 'Entertainment'] },
        { field: 'contentMostEngaged', question: 'What type of content do you engage with the most?', type: 'radio', options: ['News', 'Entertainment', 'Lifestyle', 'Politics', 'Education', 'Others'], otherField: 'contentMostEngagedOther', otherLabel: 'Content type (please specify)', otherTrigger: 'Others' },
        { field: 'digitalLiteracyLevel', question: 'How would you rate your overall digital literacy?', type: 'radio', options: ['Very high', 'High', 'Average', 'Low', 'Very low'] },
        { field: 'followSpecificPeople', question: 'Do you follow any specific OAPs or social media influencers?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'favouriteOAPs', question: 'If yes, list up to five OAPs (name and handle/URL).', type: 'text', multiline: true, showIf: { field: 'followSpecificPeople', equals: 'Yes' } },
        { field: 'favouriteInfluencers', question: 'If yes, list up to five social media influencers (name and handle/URL).', type: 'text', multiline: true, showIf: { field: 'followSpecificPeople', equals: 'Yes' } },
        { field: 'sharedFromFavorites', question: 'Have you shared posts from your favourite OAP or influencer?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'sharedFromFavoritesFreq', question: 'If yes, how often?', type: 'radio', options: ['Rarely', 'Sometimes', 'Often', 'Always'], showIf: { field: 'sharedFromFavorites', equals: 'Yes' } },
        { field: 'infoSourcesFirst', question: 'What information sources do you use first?', type: 'checkbox', options: ['Social media', 'Television', 'Newspapers', 'Online news websites', 'Radio'] },
        { field: 'engageWithInfluencerContentFreq', question: 'How often do you engage with content from OAPs or influencers?', type: 'radio', options: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'] },
        { field: 'credibleSourcesImportance', question: 'How important is it for you to follow credible sources?', type: 'radio', options: ['Very important', 'Important', 'Unimportant', 'Very unimportant'] },
        { field: 'infoEncounterReliability', question: 'How do you rate information encountered online?', type: 'radio', options: ['Very reliable', 'Reliable', 'Unreliable', 'Very unreliable'] },
        { field: 'promotionsExposureFreq', question: 'How often do you see promotions or ads from OAPs or influencers?', type: 'radio', options: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'] },
        { field: 'credibilitySignals', question: 'What influences your perception of information credibility?', type: 'checkbox', options: ['Likes/Shares', 'Source reputation', 'Content type', 'Other'], otherField: 'credibilitySignalsOther', otherLabel: 'Please specify' },
        { field: 'factCheckBeforeShare', question: 'How often do you fact-check information before believing or sharing it?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] }
      ]
    },
    {
      title: 'Section 2: Understanding Falsehoods',
      questions: [
        { field: 'familiarTerms', question: 'Which of the following terms are you familiar with?', type: 'checkbox', options: ['Falsehood', 'Misinformation', 'Disinformation', 'Fake news', 'Malinformation', 'Manipulated Media', 'Rumour', 'Propaganda'] },
        { field: 'encounterFreq', question: 'How often do you encounter false information in your social media feeds?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'confidence', question: 'How confident are you in distinguishing between false and true information online?', type: 'radio', options: ['Very confident', 'Confident', 'Not confident', 'Not confident at all'] },
        { field: 'determineTruthMethods', question: 'How do you determine whether information online is true or false?', type: 'checkbox', options: ['Check source reputation', 'Cross-check multiple sources', 'Use fact-checking websites', 'Ask trusted friends/family', 'Other'], otherField: 'determineTruthMethodsOther', otherLabel: 'Please specify' },
        { field: 'sharedFalse', question: 'Have you ever shared a post that was later revealed to be false?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'intentionalMisleadFreq', question: 'How often do you believe false information is used intentionally to mislead?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'concernLevel', question: 'Rate your level of concern regarding falsehood spreading on social media.', type: 'radio', options: ['Very concerned', 'Concerned', 'Unconcerned', 'Very unconcerned'] },
        { field: 'discussFalsehoodFreq', question: 'How often do you discuss issues of falsehood with friends or family?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'politicalFalsehoodFeeling', question: 'How do you feel about the prevalence of falsehood in political discussions?', type: 'radio', options: ['Very concerned', 'Concerned', 'Neutral', 'Unconcerned', 'Very unconcerned'] },
        { field: 'harmfulFalsehoodTypes', question: 'What types of falsehood do you think are most harmful? (Select all that apply)', type: 'checkbox', options: ['Political falsehoods', 'Ethnic or religious falsehoods', 'Health-related falsehoods', 'Security-related falsehoods', 'Other'], otherField: 'harmfulFalsehoodTypesOther', otherLabel: 'Please specify' },
        { field: 'impactedNationalView', question: 'Have you ever felt falsehood impacted your view on a national issue?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'shareControversialLikelihood', question: 'How likely are you to share a post that appears controversial or shocking?', type: 'radio', options: ['Very likely', 'Likely', 'Unlikely', 'Very unlikely'] },
        { field: 'deliberateHarmExtent', question: 'To what extent do you think falsehood is a deliberate act of causing harm?', type: 'radio', options: ['Very large extent', 'Large extent', 'Small extent', 'Very small extent'] }
      ]
    },
    {
      title: 'Section 3: Impact on National Integration',
      questions: [
        { field: 'threatLevel', question: 'How significant do you think falsehood is threatening national unity?', type: 'radio', options: ['Very significant', 'Significant', 'Insignificant', 'Very insignificant'] },
        { field: 'exacerbateDivisions', question: 'Do you believe that falsehood can exacerbate societal divisions?', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'publicUnrest', question: 'How often do you notice a relationship between falsehood and public unrest?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'tribePerceptionInfluence', question: 'In your opinion, how does false information influence how people perceive your tribe?', type: 'radio', options: ['Very positively', 'Positively', 'Negatively', 'Very negatively'] },
        { field: 'accurateInfoImportance', question: 'How important is accurate information in fostering national integration?', type: 'radio', options: ['Very important', 'Important', 'Unimportant', 'Very unimportant'] },
        { field: 'trustInGov', question: 'How does falsehood affect your trust in information from your government or institutions?', type: 'radio', options: ['Very positively', 'Positively', 'Negatively', 'Very negatively'] },
        { field: 'distrustAmongTribes', question: 'Rate your agreement: falsehood leads to distrust among tribes.', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'unityConversationsFreq', question: 'How often do conversations about national unity occur on social media?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'negativeConflictConversationsFreq', question: 'How often do negative conversations about inter-tribal conflicts appear on your feeds?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'challengeFalsehoodLikelihood', question: 'How likely are you to engage in discussions that challenge falsehoods?', type: 'radio', options: ['Very likely', 'Likely', 'Unlikely', 'Very unlikely'] },
        { field: 'nationalImpactAwareness', question: 'How would you describe general awareness about the impact of falsehoods on national issues?', type: 'radio', options: ['Very high', 'High', 'Low', 'Very low'] },
        { field: 'relyInfluencerUpdates', question: 'I rely on influencers for updates on national issues.', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'believeOAPShareFalse', question: 'I believe OAPs often share false information.', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'believeInfluencerShareFalse', question: 'I believe social media influencers often share false information.', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'relyOAPUpdates', question: 'I rely on OAPs for updates on national issues.', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'postsShapeNationalOpinion', question: 'Posts by OAPs or influencers shape my opinion on national issues.', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'postsShapeIntergroupOpinion', question: 'Posts by OAPs or influencers shape my opinion on intergroup relations.', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] }
      ]
    },
    {
      title: 'Section 4: AI Solutions',
      questions: [
        { field: 'familiarAI', question: 'Are you familiar with AI tools or initiatives aimed at combating falsehoods?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'familiarAIList', question: 'If yes, list the AI tools or initiatives you know.', type: 'text', multiline: true, required: false, showIf: { field: 'familiarAI', equals: 'Yes' } },
        { field: 'aiEffectiveness', question: 'How effective do you believe AI would be in identifying false or misleading information?', type: 'radio', options: ['Very effective', 'Effective', 'Ineffective', 'Very ineffective'] },
        { field: 'useAITools', question: 'How often do you use tools or apps that help verify information online?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'relyAIToolsLikelihood', question: 'How likely are you to rely on AI tools for fact-checking before sharing content?', type: 'radio', options: ['Very likely', 'Likely', 'Unlikely', 'Very unlikely'] },
        { field: 'oapInfluencerShouldUseAI', question: 'Do you believe OAPs and influencers should use AI to improve information quality?', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'aiFeatures', question: 'What features should an effective AI falsehood tool have? (Select all that apply)', type: 'checkbox', options: ['User-friendly interface', 'Fast response time', 'Reliable sources', 'Comprehensive database', 'Other'], otherField: 'aiFeaturesOther', otherLabel: 'Please specify' },
        { field: 'aiLiteracyImportance', question: 'How important is digital literacy in effectively using AI tools against falsehoods?', type: 'radio', options: ['Very important', 'Important', 'Unimportant', 'Very unimportant'] },
        { field: 'aiOptimism', question: 'How optimistic are you about the future role of AI in combating falsehoods?', type: 'radio', options: ['Very optimistic', 'Optimistic', 'Pessimistic', 'Very pessimistic'] },
        { field: 'aiEthicsSignificance', question: 'How significant are ethical considerations around AI in curbing falsehoods?', type: 'radio', options: ['Very significant', 'Significant', 'Insignificant', 'Very insignificant'] }
      ]
    },
    {
      title: 'Section 5: Additional Comments',
      questions: [
        { field: 'challenges', question: 'What challenges do you face when discerning fact from fiction online?', type: 'text', multiline: true },
        { field: 'publicAwareness', question: 'How aware do you believe the general public is about falsehoods?', type: 'radio', options: ['Very aware', 'Somewhat aware', 'Somewhat unaware', 'Very unaware'] },
        { field: 'eduTraining', question: 'Should educational institutions provide training on digital literacy and falsehoods?', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'govTraining', question: 'Should government institutions provide training on digital literacy and falsehoods?', type: 'radio', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
        { field: 'communityEngagementRole', question: 'How can community engagement help combat falsehoods?', type: 'text', multiline: true },
        { field: 'personalExp', question: 'Share any personal experience related to falsehoods that impacted your views on national issues:', type: 'text', multiline: true },
        { field: 'communityResourcesNeeded', question: 'What type of resources would help your community combat falsehoods?', type: 'text', multiline: true },
        { field: 'influencerContribution', question: 'How can influencers contribute positively to national unity through accurate information?', type: 'text', multiline: true },
        { field: 'platformResponsibilityViews', question: 'How do you feel about the responsibility of social media platforms in controlling fake news?', type: 'text', multiline: true },
        { field: 'futureResearch', question: 'Would you like to participate in future research regarding falsehoods?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'additionalFeedback', question: 'Any other comments or feedback for improving understanding of falsehoods and its impacts?', type: 'text', multiline: true, required: false }
      ]
    }
  ];

  return <QuestionnaireForm title="Public Questionnaire" section="public" sectionData={sectionData} logoSection="Public" />;
}
