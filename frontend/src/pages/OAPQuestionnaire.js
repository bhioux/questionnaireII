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
        { field: 'platform', question: 'Type of Media Platform:', type: 'checkbox', options: ['Television', 'Radio', 'Online', 'Other'], otherField: 'platformOther', otherLabel: 'Media platform (please specify)' },
        { field: 'primaryLanguage', question: 'Primary Language Used:', type: 'select', options: ['English', 'Pidgin', 'Hausa', 'Yoruba', 'Igbo', 'Other'], otherField: 'primaryLanguageOther', otherLabel: 'Please specify', required: false },
        { field: 'audienceSize', question: "How would you rate your programme's audience size?", type: 'radio', options: ['Very large', 'Large', 'Average', 'Small', 'Very small'] },
        { field: 'contentFocus', question: 'Main Content Focus:', type: 'checkbox', options: ['News', 'Entertainment', 'Educational', 'Sports', 'Talk Show', 'Other'], otherField: 'contentFocusOther', otherLabel: 'Content focus (please specify)' },
        { field: 'education', question: 'What best describes your educational background?', type: 'radio', options: ['No formal tertiary education', 'Diploma', "Bachelor's degree", 'Postgraduate degree'] },
        { field: 'formalTraining', question: 'Did you receive formal education in journalism, mass communication, or a related media field?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'formalTrainingPath', question: 'If yes, what type of media training did you receive?', type: 'checkbox', options: ['University degree programme', 'Polytechnic or college diploma', 'In-house media organisation training', 'Short-term workshop or seminar'], showIf: { field: 'formalTraining', equals: 'Yes' } },
        { field: 'skillsAcquisitionPath', question: 'If no formal media training, how did you acquire your on-air skills?', type: 'checkbox', options: ['Self-learning', 'Mentorship', 'On-the-job experience', 'Religious or advocacy background', 'Other'], showIf: { field: 'formalTraining', equals: 'No' }, otherField: 'skillsAcquisitionPathOther', otherLabel: 'Please specify' }
      ]
    },
    {
      title: 'Section B: Content Production',
      questions: [
        { field: 'contentFormats', question: 'Which content formats do you most often use?', type: 'radio', options: ['Text only', 'Audio only', 'Video only', 'Mixed formats'] },
        { field: 'circulationPlatforms', question: 'Which platforms do your messages most often circulate beyond your primary broadcast?', type: 'checkbox', options: ['Radio only', 'Television only', 'Facebook', 'X (Twitter)', 'YouTube', 'WhatsApp', 'Multiple platforms'] },
        { field: 'topicDomains', question: 'Which topics have dominated your on-air commentary?', type: 'checkbox', options: ['Politics', 'Security', 'Economy', 'Religion', 'Health', 'Ethnic or tribal issues', 'Elections', 'Other'], otherField: 'topicDomainsOther', otherLabel: 'Please specify' },
        { field: 'narrativeStyle', question: 'When discussing sensitive national issues, which narrative style best describes your approach?', type: 'radio', options: ['Presenting verified facts', 'Raising public concern', 'Assigning responsibility or blame', 'Warning audiences of potential risk', 'Offering reassurance'] }
      ]
    },
    {
      title: 'Section C: Influence on Dissemination',
      questions: [
        { field: 'encounterFalse', question: 'How often do you encounter false information in your broadcasts?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'sharedFalse', question: 'Have you ever unintentionally shared false information?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'verification', question: 'How do you verify the information before broadcasting?', type: 'checkbox', options: ['Multiple sources', 'Fact-checking services', 'Internal editorial process', 'Other'], otherField: 'verificationOther', otherLabel: 'Please specify' },
        { field: 'externalSources', question: 'How often do you rely on external sources (e.g., social media) for news stories?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'educateAudienceStrategies', question: 'What strategies do you use to educate your audience about falsehoods?', type: 'checkbox', options: ['Explaining sources and evidence on air', 'Correcting false information during programmes', 'Encouraging audience fact-checking', 'Inviting experts or credible guests', 'I do not actively educate my audience on falsehoods'] },
        { field: 'feedbackComplaintsFreq', question: 'How frequently do you receive feedback or complaints about misleading content?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'counterFalsehoodOnAirFreq', question: 'How often do you actively take steps on air to counter or correct falsehoods?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'oapResponsibilityImportance', question: 'How important is it for OAPs to take responsibility for the content they share?', type: 'radio', options: ['Very important', 'Important', 'Unimportant', 'Very unimportant'] },
        { field: 'confidence', question: 'How confident are you in your ability to distinguish between true and false information?', type: 'radio', options: ['Very confident', 'Confident', 'Not confident', 'Not confident at all'] },
        { field: 'awareFactCheckingOrg', question: 'Are you familiar with any fact-checking organization?', type: 'radio', options: ['Yes', 'No'] }
      ]
    },
    {
      title: 'Section D: Emotion, Framing, and Cohesion Awareness',
      questions: [
        { field: 'dominantTone', question: 'How would you describe the dominant tone of your commentary on sensitive national issues?', type: 'radio', options: ['Concerned', 'Critical', 'Alarm-focused', 'Reassuring'] },
        { field: 'tensionConsiderationFreq', question: 'How often do you consider whether your words could heighten ethnic, religious, or regional tension?', type: 'radio', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'withheldClaimForHarm', question: 'Have you ever altered or withheld a claim because of potential social harm?', type: 'radio', options: ['Yes', 'No'] }
      ]
    },
    {
      title: 'Section E: Impact on National Integration',
      questions: [
        { field: 'impactUnity', question: 'In your opinion, does the spread of falsehoods affect national unity?', type: 'radio', options: ['Very significantly', 'Significantly', 'Insignificantly', 'Very insignificantly'] },
        { field: 'discussAccuracy', question: 'How often do you discuss the importance of accurate information with your audience?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'influence', question: 'How do you perceive your influence on public opinion regarding national issues?', type: 'radio', options: ['Very strong', 'Strong', 'Weak', 'Very weak'] },
        { field: 'promoteUnity', question: 'How often do you consciously frame your on-air messages to promote national unity?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] },
        { field: 'accuracyInitiatives', question: 'What initiatives do you support that prioritize information accuracy?', type: 'text', multiline: true }
      ]
    },
    {
      title: 'Section F: Use of Artificial Intelligence in Broadcast Practice',
      questions: [
        { field: 'familiarAI', question: 'Are you familiar with AI-based tools used to identify false or misleading information?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'usedAI', question: 'Have you ever used any AI-based tool in your content preparation or broadcast work?', type: 'radio', options: ['Yes', 'No'] },
        { field: 'aiEffectiveness', question: 'How effective do you believe AI tools are in identifying falsehoods?', type: 'radio', options: ['Very effective', 'Effective', 'Ineffective', 'Very ineffective'] },
        { field: 'likelyUseAI', question: 'How likely are you to rely on AI tools for fact-checking before airing sensitive information?', type: 'radio', options: ['Very likely', 'Likely', 'Unlikely', 'Very unlikely'] },
        { field: 'aiChallenges', question: 'What challenges do you face when using or attempting to use AI tools in your broadcast work?', type: 'checkbox', options: ['Limited access to AI tools or infrastructure', 'High cost of AI tools or subscriptions', 'Lack of training or technical skills', 'Difficulty understanding AI outputs', 'Limited relevance to local/contextual issues', 'Concerns about accuracy/reliability', 'Ethical or editorial concerns', 'Time constraints in workflows', 'I do not face any major challenges'] },
        { field: 'aiDesiredFunctions', question: 'What functionalities would you want in an AI tool designed to help combat falsehoods in broadcasting?', type: 'checkbox', options: ['Real-time fact-checking', 'Automatic alerts for misleading claims', 'Source verification and credibility scoring', 'Local language and cultural context support', 'Detection of manipulated/fabricated media', 'Integration with broadcast workflows', 'Clear explanations of flags', 'User-friendly interface', 'Archiving and tracking of corrections'] }
      ]
    },
    {
      title: 'Section G: Peer-Perception',
      questions: [
        { field: 'peerPreparedness', question: 'In your view, how prepared are most on-air personalities to handle sensitive national issues accurately?', type: 'radio', options: ['Very well prepared', 'Fairly prepared', 'Poorly prepared', 'Not prepared at all'] },
        { field: 'observePeerInaccuracyFreq', question: 'How often do you observe colleagues sharing information that later turns out to be inaccurate or misleading?', type: 'radio', options: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Never'] }
      ]
    }
  ];

  return <QuestionnaireForm title="On-Air Personalities Questionnaire" section="oap" sectionData={sectionData} logoSection="OAP" />;
}
