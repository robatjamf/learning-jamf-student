/* ============================================================
   QUIZ.JS — Full quiz logic with question bank
   ============================================================ */

'use strict';

// ============================================================
// QUESTION BANK
// type: 'mcq' | 'tf' | 'typed'
// For typed: acceptedKeywords = array of lowercase strings,
//   answer is "correct" if ANY keyword appears in user input
// ============================================================

const ALL_QUESTIONS = [

  // ---- DAY 1 — JAMF & MDM ----
  {
    id: 1, day: 1, topic: 'jamf',
    type: 'mcq',
    question: 'What is Jamf primarily designed to do?',
    options: ['Manage and secure Apple devices', 'Manage Windows servers', 'Build mobile applications', 'Provide cloud storage'],
    correct: 0,
    explanation: 'Jamf is a company focused entirely on solutions that help organisations manage and secure Apple devices — Macs, iPhones, iPads, and Apple TVs.'
  },
  {
    id: 2, day: 1, topic: 'jamf',
    type: 'tf',
    question: 'Jamf Pro is designed to replace all existing IT tools in an organisation.',
    correct: false,
    explanation: 'Jamf integrates with existing tools rather than replacing them. It works alongside identity providers, SIEM platforms, and ServiceNow — complementing your existing stack.'
  },
  {
    id: 3, day: 1, topic: 'jamf',
    type: 'mcq',
    question: 'What does MDM stand for?',
    options: ['Mobile Data Management', 'Mobile Device Management', 'Managed Device Module', 'Multi-Device Monitoring'],
    correct: 1,
    explanation: 'MDM stands for Mobile Device Management — a category of software that lets IT remotely manage, configure, and secure devices from a central console. Jamf Pro is an MDM solution.'
  },
  {
    id: 4, day: 1, topic: 'jamf',
    type: 'tf',
    question: 'Jamf Pro can only manage iPhones and iPads, not Mac computers.',
    correct: false,
    explanation: 'Jamf Pro manages the full range of Apple devices — Macs, iPhones, iPads, and Apple TVs — from a single management platform.'
  },

  // ---- DAY 1 — PERSONAS ----
  {
    id: 5, day: 1, topic: 'personas',
    type: 'mcq',
    question: 'Which persona was mapped in the Day 1 workshop exercise?',
    options: ['K-12 IT Coordinator', 'Enterprise IT Admin', 'Security Analyst', 'Help Desk Technician'],
    correct: 1,
    explanation: 'The Enterprise IT Admin persona was mapped. She was burdened with tasks outside her scope — manually entering new hire data and rewriting scripts deleted after every system update.'
  },
  {
    id: 6, day: 1, topic: 'personas',
    type: 'tf',
    question: 'The proposed system to help the Enterprise IT Admin would send HR data directly into Jamf Pro.',
    correct: false,
    explanation: 'The correct flow is: HR → Identity provider (stores permissions/records) → SIEM or ServiceNow → Jamf Pro. An Identity layer sits between HR and Jamf — not a direct connection.'
  },
  {
    id: 7, day: 1, topic: 'personas',
    type: 'typed',
    question: 'Name one major pain point of the Enterprise IT Admin persona.',
    acceptedKeywords: ['manual', 'script', 'new hire', 'onboard', 'update', 'deleted'],
    explanation: 'Pain points included: manually entering new hire data (should be automated via HR → Identity → Jamf), and rewriting scripts that got deleted after every system update.'
  },
  {
    id: 8, day: 1, topic: 'personas',
    type: 'mcq',
    question: 'In persona mapping, what is the main goal?',
    options: [
      'To list all the software an IT admin uses',
      'To understand the real problems, frustrations, and goals of a person in a role',
      'To design a new product from scratch',
      'To write a job description'
    ],
    correct: 1,
    explanation: 'Persona mapping is about developing empathy — understanding the real pain points, daily frustrations, and goals of someone in a role, so you can build things that genuinely help them.'
  },

  // ---- DAY 2 — APIs ----
  {
    id: 9, day: 2, topic: 'apis',
    type: 'mcq',
    question: 'In the restaurant analogy for APIs, what does the waiter represent?',
    options: ['The database', 'The client application', 'The API', 'The server'],
    correct: 2,
    explanation: 'The API is the waiter — it takes your request (order), carries it to the kitchen (server), and brings the response (food/data) back to you (the client).'
  },
  {
    id: 10, day: 2, topic: 'apis',
    type: 'tf',
    question: 'A POST request is used to retrieve existing data from a server.',
    correct: false,
    explanation: 'GET requests retrieve data. POST requests create new resources on the server. In the workshop, a POST request was used to create new categories in the Jamf Pro instance.'
  },
  {
    id: 11, day: 2, topic: 'apis',
    type: 'mcq',
    question: 'What did the POST request create in the Jamf Pro workshop exercise?',
    options: ['A new device record', 'A new user account', 'A new category', 'A new policy'],
    correct: 2,
    explanation: 'The workshop exercise used the Jamf Pro API to send POST requests that created new categories in the Jamf Pro instance.'
  },
  {
    id: 12, day: 2, topic: 'apis',
    type: 'mcq',
    question: 'Which HTTP method would you use to update an existing resource on a server?',
    options: ['GET', 'POST', 'PUT', 'DELETE'],
    correct: 2,
    explanation: 'PUT (or PATCH) is used to update an existing resource. GET retrieves, POST creates, DELETE removes. Knowing the right verb is essential when working with REST APIs.'
  },
  {
    id: 13, day: 2, topic: 'apis',
    type: 'tf',
    question: 'An API key is included in the request body when authenticating to most REST APIs.',
    correct: false,
    explanation: 'API keys and Bearer tokens are typically sent in the request headers — specifically the Authorization header (e.g., Authorization: Bearer <token>), not in the request body.'
  },

  // ---- DAY 2 — VMs ----
  {
    id: 14, day: 2, topic: 'vms',
    type: 'tf',
    question: 'A virtual machine uses its own dedicated hardware, separate from the host machine.',
    correct: false,
    explanation: 'A VM shares the hardware of the host machine — CPU, RAM, and storage are all virtualised. It is software emulating a complete computer on top of the host operating system.'
  },
  {
    id: 15, day: 2, topic: 'vms',
    type: 'mcq',
    question: 'Which tool was used to create the macOS virtual machine in the workshop?',
    options: ['VirtualBox', 'VMware Fusion', 'Virtual Buddy', 'Parallels Desktop'],
    correct: 2,
    explanation: 'Virtual Buddy was used to create the macOS VM, which was then enrolled into a Jamf Pro instance to demonstrate device management.'
  },
  {
    id: 16, day: 2, topic: 'vms',
    type: 'mcq',
    question: 'What is a hypervisor?',
    options: [
      'A tool for monitoring network traffic',
      'Software that creates and manages virtual machines by abstracting hardware resources',
      'A type of cloud storage service',
      'A monitoring dashboard for servers'
    ],
    correct: 1,
    explanation: 'A hypervisor is the software layer that creates and manages VMs. It abstracts the physical hardware (CPU, RAM, disk) and divides it among guest operating systems. Examples: VMware, Parallels, QEMU/Tart.'
  },

  // ---- DAY 2 — WEBHOOKS ----
  {
    id: 17, day: 2, topic: 'webhooks',
    type: 'mcq',
    question: 'What is a webhook?',
    options: [
      'A tool for regularly polling a server for updates',
      'An automated HTTP request sent when a specific event occurs',
      'A type of API authentication method',
      'A method for caching API responses'
    ],
    correct: 1,
    explanation: 'A webhook is an automated HTTP POST request sent from one system to another when a specific event occurs. It\'s event-driven — the server pushes data to you the moment something happens, rather than you asking repeatedly.'
  },
  {
    id: 18, day: 2, topic: 'webhooks',
    type: 'tf',
    question: 'The webhook payload received from Jamf Pro in the workshop was formatted as JSON.',
    correct: false,
    explanation: 'The payload was formatted as XML — which looks visually similar to HTML. The device ID was visible inside the XML structure. This hands-on experience made the XML vs JSON difference concrete.'
  },
  {
    id: 19, day: 2, topic: 'webhooks',
    type: 'typed',
    question: 'In one sentence, what is the difference between push and pull when delivering data between systems?',
    acceptedKeywords: ['push send', 'pull request', 'pull fetch', 'push notif', 'server sends', 'client ask', 'poll', 'event'],
    explanation: 'Pull: the client requests data from the server on its schedule (polling). Push: the server sends data to the client the moment an event happens (event-driven). Webhooks are push — Jamf fires a request to your endpoint the instant a device event occurs.'
  },
  {
    id: 20, day: 2, topic: 'webhooks',
    type: 'mcq',
    question: 'Which is more efficient for real-time updates: polling every 5 seconds, or using a webhook?',
    options: [
      'Polling — it gives you more control',
      'Webhook — it only sends data when something actually happens',
      'They are equally efficient',
      'Polling — webhooks are not reliable'
    ],
    correct: 1,
    explanation: 'Webhooks are more efficient for real-time updates because they only fire when an event occurs. Polling sends requests continuously whether or not anything has changed, wasting bandwidth and processing.'
  },

  // ---- DAY 3 — CLAUDE CODE & AI ----
  {
    id: 21, day: 3, topic: 'claudecode',
    type: 'mcq',
    question: 'What is the Compound Engineering loop used in Day 3?',
    options: [
      'Code → Test → Deploy → Monitor',
      'Plan → Work → Review → Compound',
      'Design → Build → Ship → Iterate',
      'Think → Write → Debug → Refactor'
    ],
    correct: 1,
    explanation: 'The Compound Engineering loop is: Plan → Work → Review → Compound. It is a structured approach to building with AI that ensures each session builds on the previous one, with decisions captured in COMPOUND.md.'
  },
  {
    id: 22, day: 3, topic: 'claudecode',
    type: 'tf',
    question: 'CLAUDE.md is where session history, decisions, and tradeoffs accumulate over time.',
    correct: false,
    explanation: 'CLAUDE.md is for project setup, structure, and current state — kept lean. COMPOUND.md is where rich session history, decisions, tradeoffs, dead ends, and reasoning accumulate. Two files, two roles.'
  },
  {
    id: 23, day: 3, topic: 'claudecode',
    type: 'typed',
    question: 'What slash command initialises a new project context in Claude Code?',
    acceptedKeywords: ['/init', 'init'],
    explanation: 'Running /init in Claude Code creates the initial CLAUDE.md file for the project, setting up the context that Claude uses for all future interactions in that directory.'
  },
  {
    id: 24, day: 3, topic: 'ai',
    type: 'mcq',
    question: 'What is the main purpose of a system prompt when working with an LLM?',
    options: [
      'To set the user\'s UI preferences',
      'To define the AI\'s role, context, and constraints before the conversation starts',
      'To store the conversation history',
      'To configure the model\'s response speed'
    ],
    correct: 1,
    explanation: 'A system prompt sets the context, role, and constraints for the AI before the conversation begins — shaping how the model responds throughout the entire session. In Claude Code, CLAUDE.md functions similarly.'
  },
  {
    id: 25, day: 3, topic: 'ai',
    type: 'tf',
    question: 'An LLM generates responses by looking up answers in a knowledge database.',
    correct: false,
    explanation: 'LLMs generate responses by predicting the most probable next token based on patterns learned during training. They do not look up answers — they generate them probabilistically. This is why hallucinations happen.'
  },
  {
    id: 26, day: 3, topic: 'ai',
    type: 'mcq',
    question: 'What does "context window" mean in the context of an LLM?',
    options: [
      'The browser window where you chat with the AI',
      'The maximum amount of text (tokens) the model can process in one session',
      'The time window during which the model was trained',
      'The number of GPUs used during inference'
    ],
    correct: 1,
    explanation: 'The context window is the maximum amount of text (measured in tokens) the model can hold in "memory" at once — including the system prompt, conversation history, and current input. Exceeding it means earlier content gets dropped.'
  },
  {
    id: 27, day: 3, topic: 'claudecode',
    type: 'mcq',
    question: 'What does the /compact slash command do in Claude Code?',
    options: [
      'Compresses files in your project',
      'Summarises the conversation to reduce context usage',
      'Minifies your CSS and JS',
      'Archives old branches in git'
    ],
    correct: 1,
    explanation: '/compact summarises the current conversation context into a condensed form, freeing up context window space so you can continue working without losing important session history.'
  }
];

// ============================================================
// TOPIC DEFINITIONS
// ============================================================
const TOPICS = [
  { id: 'all',       label: 'All Topics',    days: [1,2,3], topics: null },
  { id: 'day1',      label: 'Day 1',         days: [1],     topics: null },
  { id: 'day2',      label: 'Day 2',         days: [2],     topics: null },
  { id: 'day3',      label: 'Day 3',         days: [3],     topics: null },
  { id: 'jamf',      label: 'Jamf & MDM',    days: null,    topics: ['jamf'] },
  { id: 'personas',  label: 'Personas',      days: null,    topics: ['personas'] },
  { id: 'apis',      label: 'APIs',          days: null,    topics: ['apis'] },
  { id: 'vms',       label: 'VMs',           days: null,    topics: ['vms'] },
  { id: 'webhooks',  label: 'Webhooks',      days: null,    topics: ['webhooks'] },
  { id: 'claudecode',label: 'Claude Code',   days: null,    topics: ['claudecode'] },
  { id: 'ai',        label: 'AI & LLMs',     days: null,    topics: ['ai'] },
];

// ============================================================
// STATE
// ============================================================
let state = {
  selectedTopicIds: [],
  mode: null,          // 'immediate' | 'review'
  questions: [],
  currentIndex: 0,
  answers: [],         // { questionId, userAnswer, correct }
  answered: false,
  complete: false,
};

// ============================================================
// HELPERS
// ============================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getQuestions(topicIds) {
  if (!topicIds.length) return [];
  let qs = [];
  topicIds.forEach(tid => {
    const def = TOPICS.find(t => t.id === tid);
    if (!def) return;
    ALL_QUESTIONS.forEach(q => {
      if (!qs.find(x => x.id === q.id)) {
        if (def.topics === null && def.days === null) {
          qs.push(q);
        } else if (def.days && def.days.includes(q.day)) {
          qs.push(q);
        } else if (def.topics && def.topics.includes(q.topic)) {
          qs.push(q);
        }
      }
    });
  });
  return shuffle(qs);
}

function checkTypedAnswer(q, userInput) {
  const lower = userInput.toLowerCase();
  return q.acceptedKeywords.some(kw => lower.includes(kw));
}

function svgChevron() {
  return `<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
}

// ============================================================
// RENDER HELPERS
// ============================================================
function badgeForTopic(q) {
  const day = `<span class="badge badge-neutral">Day ${q.day}</span>`;
  const topicMap = {
    jamf: 'Jamf', personas: 'Personas', apis: 'APIs', vms: 'VMs',
    webhooks: 'Webhooks', claudecode: 'Claude Code', ai: 'AI & LLMs'
  };
  const topic = `<span class="badge badge-accent">${topicMap[q.topic] || q.topic}</span>`;
  const typeMap = { mcq: 'Multiple Choice', tf: 'True / False', typed: 'Short Answer' };
  const type = `<span class="badge badge-neutral">${typeMap[q.type]}</span>`;
  return `${day} ${topic} ${type}`;
}

function renderProgressBar() {
  const pct = state.questions.length ? (state.currentIndex / state.questions.length) * 100 : 0;
  return `
    <div class="progress-bar-wrap">
      <div class="progress-bar" style="width:${pct}%"></div>
    </div>
  `;
}

function renderFeedback(correct, explanation, userAnswer, correctAnswer) {
  if (correct) {
    return `<div class="feedback-box correct-fb">
      <div class="fb-title">Correct</div>
      <p>${explanation}</p>
    </div>`;
  } else {
    const correctLine = correctAnswer !== undefined
      ? `<p><strong>Correct answer:</strong> ${correctAnswer}</p>`
      : '';
    return `<div class="feedback-box incorrect-fb">
      <div class="fb-title">Not quite</div>
      ${correctLine}
      <p>${explanation}</p>
    </div>`;
  }
}

// ============================================================
// SETUP SCREEN
// ============================================================
function renderSetup() {
  const checkboxes = TOPICS.map(t => `
    <label class="checkbox-label" data-topic-id="${t.id}">
      <input type="checkbox" value="${t.id}">
      ${t.label}
    </label>
  `).join('');

  document.getElementById('quizRoot').innerHTML = `
    <div class="quiz-setup">
      <div class="page-header">
        <h1>Quiz</h1>
        <p>Test yourself on what you covered across the 3-day workshop.</p>
      </div>

      <div class="card">
        <div class="card-header"><h3>1. Choose topics</h3></div>

        <div class="input-group mt-md">
          <div class="checkbox-group" id="topicCheckboxes">
            ${checkboxes}
          </div>
        </div>

        <div class="card-header mt-xl"><h3>2. Choose a quiz mode</h3></div>

        <div class="radio-group mt-md" id="modeRadios">
          <label class="radio-card" data-mode="immediate">
            <input type="radio" name="mode" value="immediate">
            <strong>Immediate Feedback</strong>
            <p>See whether you got each answer right or wrong, with an explanation, before moving to the next question.</p>
          </label>
          <label class="radio-card" data-mode="review">
            <input type="radio" name="mode" value="review">
            <strong>End Review</strong>
            <p>Answer all questions first, then see your full results with explanations for any you got wrong.</p>
          </label>
        </div>

        <div class="mt-xl">
          <button class="btn btn-primary btn-lg" id="startBtn" disabled>Start Quiz</button>
          <span class="text-secondary mt-sm" id="setupHint" style="display:block;font-size:0.85rem;margin-top:8px;">
            Select at least one topic and a mode to begin.
          </span>
        </div>
      </div>
    </div>
  `;

  // Topic checkboxes
  document.querySelectorAll('.checkbox-label').forEach(label => {
    label.addEventListener('click', () => {
      const cb = label.querySelector('input[type="checkbox"]');
      cb.checked = !cb.checked;
      label.classList.toggle('checked', cb.checked);
      state.selectedTopicIds = Array.from(
        document.querySelectorAll('.checkbox-label input:checked')
      ).map(i => i.value);
      updateStartBtn();
    });
  });

  // Mode radio cards
  document.querySelectorAll('.radio-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.radio-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      card.querySelector('input').checked = true;
      state.mode = card.dataset.mode;
      updateStartBtn();
    });
  });

  document.getElementById('startBtn').addEventListener('click', startQuiz);
}

function updateStartBtn() {
  const btn = document.getElementById('startBtn');
  const hint = document.getElementById('setupHint');
  const ready = state.selectedTopicIds.length > 0 && state.mode;
  btn.disabled = !ready;
  if (state.selectedTopicIds.length === 0) {
    hint.textContent = 'Select at least one topic and a mode to begin.';
  } else if (!state.mode) {
    hint.textContent = 'Now choose a quiz mode.';
  } else {
    const count = getQuestions(state.selectedTopicIds).length;
    hint.textContent = `${count} question${count !== 1 ? 's' : ''} ready.`;
  }
}

// ============================================================
// QUIZ RUNNER
// ============================================================
function startQuiz() {
  state.questions = getQuestions(state.selectedTopicIds);
  if (!state.questions.length) return;
  state.currentIndex = 0;
  state.answers = [];
  state.complete = false;
  renderQuestion();
}

function renderQuestion() {
  if (state.currentIndex >= state.questions.length) {
    renderResults();
    return;
  }

  const q = state.questions[state.currentIndex];
  state.answered = false;
  const num = state.currentIndex + 1;
  const total = state.questions.length;

  let answerHTML = '';
  if (q.type === 'mcq') {
    const opts = q.options.map((opt, i) => `
      <li>
        <button class="option-btn" data-index="${i}">${opt}</button>
      </li>
    `).join('');
    answerHTML = `<ul class="options-list">${opts}</ul>`;
  } else if (q.type === 'tf') {
    answerHTML = `
      <div class="tf-buttons">
        <button class="tf-btn" data-answer="true">True</button>
        <button class="tf-btn" data-answer="false">False</button>
      </div>
    `;
  } else if (q.type === 'typed') {
    answerHTML = `
      <div class="typed-area">
        <input type="text" class="input" id="typedInput" placeholder="Type your answer here..." autocomplete="off">
        <button class="btn btn-primary" id="submitTyped">Submit Answer</button>
      </div>
    `;
  }

  document.getElementById('quizRoot').innerHTML = `
    <div class="quiz-area">
      ${renderProgressBar()}
      <div class="question-card">
        <div class="question-meta">
          ${badgeForTopic(q)}
          <span class="question-progress">${num} / ${total}</span>
        </div>
        <div class="question-text">${q.question}</div>
        ${answerHTML}
        <div id="feedbackArea"></div>
      </div>
      <div id="nextArea"></div>
    </div>
  `;

  // Bind answer handlers
  if (q.type === 'mcq') {
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => handleMCQ(q, parseInt(btn.dataset.index)));
    });
  } else if (q.type === 'tf') {
    document.querySelectorAll('.tf-btn').forEach(btn => {
      btn.addEventListener('click', () => handleTF(q, btn.dataset.answer === 'true'));
    });
  } else if (q.type === 'typed') {
    const submitBtn = document.getElementById('submitTyped');
    const input = document.getElementById('typedInput');

    submitBtn.addEventListener('click', () => {
      if (input.value.trim()) handleTyped(q, input.value.trim());
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && input.value.trim()) handleTyped(q, input.value.trim());
    });
  }
}

function handleMCQ(q, selectedIndex) {
  if (state.answered) return;
  state.answered = true;
  const correct = selectedIndex === q.correct;

  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('reveal');
    if (i === selectedIndex && !correct) btn.classList.add('incorrect');
  });

  recordAnswer(q, selectedIndex, correct);
  showFeedbackAndNext(q, correct, q.options[q.correct]);
}

function handleTF(q, userBool) {
  if (state.answered) return;
  state.answered = true;
  const correct = userBool === q.correct;

  document.querySelectorAll('.tf-btn').forEach(btn => {
    btn.disabled = true;
    const btnVal = btn.dataset.answer === 'true';
    if (btnVal === q.correct) btn.classList.add('reveal');
    if (btnVal === userBool && !correct) btn.classList.add('incorrect');
  });

  recordAnswer(q, userBool, correct);
  showFeedbackAndNext(q, correct, q.correct ? 'True' : 'False');
}

function handleTyped(q, userInput) {
  if (state.answered) return;
  state.answered = true;
  const correct = checkTypedAnswer(q, userInput);

  const input = document.getElementById('typedInput');
  const btn = document.getElementById('submitTyped');
  if (input) input.disabled = true;
  if (btn) btn.disabled = true;

  recordAnswer(q, userInput, correct);
  showFeedbackAndNext(q, correct, null);
}

function recordAnswer(q, userAnswer, correct) {
  state.answers.push({ questionId: q.id, question: q.question, userAnswer, correct, explanation: q.explanation, q });
}

function showFeedbackAndNext(q, correct, correctAnswer) {
  const feedbackArea = document.getElementById('feedbackArea');
  const nextArea = document.getElementById('nextArea');

  if (state.mode === 'immediate') {
    feedbackArea.innerHTML = renderFeedback(correct, q.explanation, null, correctAnswer);
  }

  const isLast = state.currentIndex >= state.questions.length - 1;
  nextArea.innerHTML = `
    <button class="btn btn-primary" id="nextBtn">
      ${isLast ? 'See Results' : 'Next Question'}
    </button>
  `;
  document.getElementById('nextBtn').addEventListener('click', () => {
    state.currentIndex++;
    renderQuestion();
  });
}

// ============================================================
// RESULTS SCREEN
// ============================================================
function renderResults() {
  const total = state.answers.length;
  const correct = state.answers.filter(a => a.correct).length;
  const pct = total ? Math.round((correct / total) * 100) : 0;

  let scoreClass = 'badge-error';
  if (pct >= 80) scoreClass = 'badge-success';
  else if (pct >= 50) scoreClass = 'badge-warning';

  const reviewItems = state.answers.map(a => {
    const cls = a.correct ? 'review-correct' : 'review-incorrect';
    const label = a.correct ? 'Correct' : 'Incorrect';
    const badge = a.correct
      ? '<span class="badge badge-success">Correct</span>'
      : '<span class="badge badge-error">Incorrect</span>';

    const explanationBlock = !a.correct
      ? `<div class="review-explanation">${a.explanation}</div>`
      : '';

    return `
      <div class="review-item ${cls}">
        <div class="review-q">${badge} ${a.question}</div>
        <div class="review-answer">Your answer: <em>${a.userAnswer !== null && a.userAnswer !== undefined ? String(a.userAnswer) : '—'}</em></div>
        ${explanationBlock}
      </div>
    `;
  }).join('');

  document.getElementById('quizRoot').innerHTML = `
    <div class="quiz-area">
      <div class="results-card">
        <div class="score-circle">
          <span class="score-number">${pct}%</span>
          <span class="score-label">${correct}/${total}</span>
        </div>
        <h2>Quiz Complete</h2>
        <p class="mt-md">${pct >= 80 ? 'Great work.' : pct >= 50 ? 'Good effort — review the explanations below.' : 'Keep reviewing — the explanations below will help.'}</p>
        <div class="mt-lg">
          <button class="btn btn-primary" id="retakeBtn">Retake Quiz</button>
          <button class="btn btn-secondary mt-sm" id="newQuizBtn" style="margin-left:8px">New Quiz</button>
        </div>
      </div>

      <div class="review-list">
        <h3 class="mb-md">Question Review</h3>
        ${reviewItems}
      </div>
    </div>
  `;

  document.getElementById('retakeBtn').addEventListener('click', () => {
    state.currentIndex = 0;
    state.answers = [];
    state.questions = shuffle(state.questions);
    renderQuestion();
  });

  document.getElementById('newQuizBtn').addEventListener('click', () => {
    state = { selectedTopicIds: [], mode: null, questions: [], currentIndex: 0, answers: [], answered: false, complete: false };
    renderSetup();
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('quizRoot');
  if (root) renderSetup();
});
