export const questions= [
    {
      question: "What kind of therapy are you looking for?",
      id: 0,
      select: "Select one",
      type: "option",
      options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
      ],
    },
    {
      "question": "How do you prefer your therapist identify as?",
      "id": 1,
      "select": "Select one",
      "type": "option",
      options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
      ],
      "required": true
    },
    {
      "question": "Which do you prefer your therapist identify as?",
      "id": 2,
      "select": "Select one",
      "type": "option",
      options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
      ],
      "required": true
    },
    {
      "question": "Do you have an age preference for your therapist?",
      "id": 3,
      "select": "Select one",
      "type": "option",
      options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
      ],
      "required": true
    },
    {
      "question": "How important is your therapist’s gender, sexual,ethnic, religious or political identity?",
      "id": 4,
      "select": "Select one",
      "type": "option",
      "options": [
        { "value": "0", "label": "Important" },
        { "value": "1", "label": "Not Important" }
      ],
      "required": true
    },
    {
      "question": "Would you like to use insurance for therapy?",
      "id": 5,
      "select": "Select one",
      "type": "option",
      "options": [
        { "value": "0", "label": "Yes" },
        { "value": "1", "label": "No" }
      ],
      "required": true,
      "child": true,
      "Children": {
        "id": "0",
        "question": "Who is your insurance provider?",
        "type": "select",
        "select": "Select one",
        options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
        ],
        "required": "true"
      }
    },
    {
      "question": "What are you comfortable paying for each session?",
      "id": 6,
      "select": "Select one",
      "type": "option",
      options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
      ],
      "required": true
    },
    {
      "question": "What state are you in?",
      "id": 7,
      "select": "Select one",
      "type": "select",
      "placeholder": "Select State",
      "options": [
        { "id": "0", "label": "Florida", "value": "Florida" },
        { "id": "1", "label": "California", "value": "California" },
        { "id": "2", "label": "Alaska", "value": "Alaska" },
        { "id": "3", "label": "Texas", "value": "Texas" },
        { "id": "4", "label": "Ohio", "value": "Ohio" },
        { "id": "5", "label": "Hawaii", "value": "Hawaii" }
      ],
      "required": true
    },
    {
      "question": "What's your email?",
      "id": 8,
      "select": "Select one",
      "type": "input",
      "placeholder": "hello@gmail.com",
      "required": true
    },
    {
      "question": "We found some matches. Do you want to see them or move on to our personality questions �for more accurate results?",
      "id": 9,
      "select": "Select one",
      "type": "option",
      "options": [
        { "id": "0", "name": "Let’s see some therapists! " },
        { "id": "1", "name": "Let’s get to know each other better" }
      ],
      "required": true
    },
    {
      "question": "My Future...?",
      "id": 10,
      "select": "Select one",
      "type": "option",
      "options": [
        { "id": "0", "name": "Is looking good!" },
        { "id": "1", "name": "Isn't so clear to me" },
        { "id": "2", "name": "Looking like it can get bad" },
        { "id": "3", "name": "Really Sucks" }
      ],
      "required": true
    },
    {
      "question": "Are you the nervous type?",
      "id": 11,
      "select": "Select one",
      "type": "option",
      "options": [
        { "id": "0", "name": "Not Really" },
        { "id": "1", "name": "Only when something bothers me" },
        { "id": "2", "name": "Yes, but I don’t have panic attacks" },
        { "id": "3", "name": "Yes, but I have panic attacks" }
      ],
      "required": true
    },
    {
      "question": "How tired are you?",
      "id": 12,
      "select": "Select one",
      "type": "option",
      options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
      ],
      "required": true
    },
    {
      "question": "If you had to solve a puzzle during an �interview to get your dream job..",
      "id": 13,
      "select": "Select one",
      "type": "option",
      options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
      ],
      "required": true
    },
    {
      "question": "How often do you feel lonely?",
      "id": 14,
      "select": "Select one",
      "type": "option",
      options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
      ],
      "required": true
    },
    {
      "question": "How long before you download �the next trending app?",
      "id": 15,
      "select": "Select one",
      "type": "option",
      options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
      ],
      "required": true
    },
    {
      "question": "How do you feel about someone who has sex�on the first date with someone they met online?",
      "id": 16,
      "select": "Select one",
      "type": "option",
      options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
      ],
      "required": true
    },
    {
      "question": "If you were stuck in an elevator, who�would you rather speak with?",
      "id": 17,
      "select": "Select one",
      "type": "option",
      options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
      ],
      "required": true
    },
    {
      "question": "What excites you the most?",
      "id": 18,
      "select": "Select one",
      "type": "option",
      options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
      ],
      "required": true
    },
    {
      "question": "What communication style do you like the most?",
      "id": 19,
      "select": "Select one",
      "type": "option",
      options: [
        { value: "mujahid", label: "Mujahid" },
        { value: "mzamil", label: "Mzamil" },
        { value: "MLamil", label: "Mzamil" },
        { value: "Mail", label: "Mzamil" },
        { value: "Mza", label: "Mzamil" },
        { value: "mil", label: "MzamilMzamil" },
      ],
      "required": true
    },
    {
      question: "I’m kind to people even if they’ve betrayed me.",
      id: 20,
      select: "Select one",
      type: "mcq",
      options :[
        {
          value: 1,
          label: 'one'
        },
        {
          value: 2,
          label: 'two'
        }, {
          value: 3,
          label: 'three'
        }, {
          value: 4,
          label: 'four'
        }, {
          value: 5,
          label: 'five'
        },
       
      ],
      required: true
    },
    {
      "question": "I really like being prepared for every�single activity in my life",
      "id": 21,
      "select": "Select one",
      "type": "mcq",
      options :[
        {
          value: 1,
          label: 'one'
        },
        {
          value: 2,
          label: 'two'
        }, {
          value: 3,
          label: 'three'
        }, {
          value: 4,
          label: 'four'
        }, {
          value: 5,
          label: 'five'
        },
       
      ],
      "required": true
    },
    {
      "question": "Meeting new people at parties excites me...",
      "id": 22,
      "select": "Select one",
      "type": "mcq",
      options :[
        {
          value: 1,
          label: 'one'
        },
        {
          value: 2,
          label: 'two'
        }, {
          value: 3,
          label: 'three'
        }, {
          value: 4,
          label: 'four'
        }, {
          value: 5,
          label: 'five'
        },
       
      ],
      "required": true
    },
    {
      "question": "I’m always curious to learn about other people’s opinions, even if they upset me...",
      "id": 23,
      "select": "Select one",
      "type": "mcq",
      options :[
        {
          value: 1,
          label: 'one'
        },
        {
          value: 2,
          label: 'two'
        }, {
          value: 3,
          label: 'three'
        }, {
          value: 4,
          label: 'four'
        }, {
          value: 5,
          label: 'five'
        },
       
      ],
      "required": true
    },
    {
      "question": "I can stay composed even when being verbally criticized...",
      "id": 24,
      "select": "Select one",
      "type": "mcq",
      options :[
        {
          value: 1,
          label: 'one'
        },
        {
          value: 2,
          label: 'two'
        }, {
          value: 3,
          label: 'three'
        }, {
          value: 4,
          label: 'four'
        }, {
          value: 5,
          label: 'five'
        },
       
      ],
      "required": true
    },
    {
      "question": "What issues are you facing?",
      "id": 25,
      "select": "Select one",
      "type": "multi",
      "placeholder": "Select State",
      options : [
        { name: "multiselect-ract-dropdo", id: 0 },
        { name: "multiselect-reropdo", id: 1 },
        { name: "multiselecteact-dropdo", id: 2 },
        { name: "multi-react-dropdo", id: 3 },
      ],
      "required": true
    }
  ]