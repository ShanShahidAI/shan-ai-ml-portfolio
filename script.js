/*
  Shan — personal portfolio
  Edit the PROJECTS array to update project cards and details.
  No private repository data is embedded in this site.
*/
const PROJECTS = [
  {
    id: 'smartpark-trace',
    number: '01',
    title: 'SmartPark TRACE',
    subtitle: 'Explainable Multi-Level Parking Intelligence',
    description: 'An in-development DSA semester project exploring intelligent parking allocation, graph routing, and explainable decision-making.',
    category: 'software',
    label: 'DATA STRUCTURES / C++',
    status: 'In development',
    featured: true,
    art: 'TRACE',
    tags: ['C++', 'Graphs', 'BFS / DFS', 'AVL Trees'],
    details: [
      'Multi-building and multi-floor parking logic with vehicle-size and slot compatibility constraints.',
      'Graph-based routing concepts using BFS/DFS and handling blocked lanes.',
      'Priority-based waiting, searchable parking history, and data structure visualizers within the approved project scope.',
      'Semester project currently being developed; the features listed are project goals, not claims of a completed deployment.'
    ],
    source: null
  },
  {
    id: 'dinesense', number: '02', title: 'DineSense AI',
    subtitle: 'Restaurant Experience Analyzer',
    description: 'An AI academic project in development, designed to explore aspect-based sentiment in restaurant reviews and visualize useful feedback.',
    category: 'ai', label: 'NLP / AI PROJECT', status: 'In development', art: 'NLP',
    tags: ['NLP', 'Sentiment Analysis', 'Python', 'Dashboards'],
    details: ['Investigating positive and negative review sentiment across restaurant experience aspects.', 'Exploring practical dashboard views for review insights and recommendations.', 'Academic project; results and a public code repository will be linked once verified.'], source: null
  },
  {
    id: 'spam-classifier', number: '03', title: 'Spam Email Classification',
    subtitle: 'Programming for AI — Model Evaluation',
    description: 'Compared classification algorithms on the Spambase dataset; logistic regression achieved around 92.3% cross-validation accuracy in coursework.',
    category: 'ai', label: 'MACHINE LEARNING / LAB', status: 'Lab completed', art: '0/1',
    tags: ['Python', 'scikit-learn', 'Classification', 'Evaluation'],
    details: ['Evaluated logistic regression, decision tree, k-nearest neighbors, Gaussian Naive Bayes, and a majority baseline.', 'Used cross-validation, a held-out test set, and confusion matrix to interpret model performance.', 'The 92.3% value refers to mean cross-validation accuracy in the academic lab, not a production performance claim.'], source: null
  },
  {
    id: 'concrete-regression', number: '04', title: 'Concrete Strength Prediction',
    subtitle: 'Regression Modeling Study',
    description: 'A regression lab comparing baselines and linear models on concrete strength data, with a multiple regression test R² of 0.628.',
    category: 'ai', label: 'DATA SCIENCE / LAB', status: 'Lab completed', art: 'R²',
    tags: ['Python', 'Regression', 'pandas', 'Model Metrics'],
    details: ['Compared mean baseline, simple linear regression, and multiple linear regression.', 'Evaluated model quality using MAE, RMSE, and R² on a held-out test set.', 'Multiple linear regression used all eight available inputs; reported test R² was 0.628.'], source: null
  },
  {
    id: 'house-rental', number: '05', title: 'House Rental System',
    subtitle: 'Programming Fundamentals Project',
    description: 'A C++ console application with house search, an administrator panel, rental calculations, booking confirmation, and basic history.',
    category: 'software', label: 'C++ / CONSOLE APPLICATION', status: 'Completed', art: 'C++',
    tags: ['C++', 'Arrays', 'Functions', 'Console UI'],
    details: ['Built user and administrator menus for searching and maintaining property listings.', 'Calculates estimated rental cost with a deposit and illustrative tax calculation.', 'Handles booking agreement acceptance and in-memory booking history.', 'Academic prototype: sample credentials and illustrative agreement terms are not production-ready.'],
    source: 'https://github.com/zahidmehar/Shan-72387-BSAI-PF-LAB-TASKs..'
  },
  {
    id: 'library-system', number: '06', title: 'Library Management System',
    subtitle: 'Data Structures Mini Project',
    description: 'An academic book management project focused on singly linked lists, linear searching, bubble sorting, and safe deletion.',
    category: 'software', label: 'C++ / DSA', status: 'Completed', art: 'LIST',
    tags: ['C++', 'Linked Lists', 'Linear Search', 'Bubble Sort'],
    details: ['Add, list, search, and remove book records in a menu-driven program.', 'Singly linked list operations and safe pointer updates while deleting books.', 'Linear search and bubble sort used for managing books.', 'A public source link has not yet been verified for this project.'], source: null
  },
  {
    id: 'student-system', number: '07', title: 'Student Management System',
    subtitle: 'Object-Oriented Programming Project',
    description: 'A student-record management academic project built to practice object-oriented design, program structure, and logical thinking.',
    category: 'software', label: 'OOP / ACADEMIC PROJECT', status: 'Completed', art: 'OOP',
    tags: ['OOP', 'Classes & Objects', 'Record Management'],
    details: ['Academic focus on managing and organizing student records.', 'Applied object-oriented programming concepts from coursework.', 'Code repository for the standalone final project has not been publicly verified; this card is based on the academic project description.'], source: null
  },
  {
    id: 'smart-dustbin', number: '08', title: 'Arduino Smart Dustbin',
    subtitle: 'Digital Logic Design — Hardware Prototype',
    description: 'An Arduino-based academic prototype exploring how programmed control logic and electronic components work together.',
    category: 'hardware', label: 'ARDUINO / HARDWARE', status: 'Completed', art: 'I/O',
    tags: ['Arduino', 'Electronics', 'Automation', 'Hardware'],
    details: ['Designed and assembled an academic hardware prototype around the smart-dustbin concept.', 'Explored microcontroller-based automation and software-hardware integration.', 'No specific sensor configuration or public source is claimed until project photos/code are added.'], source: null
  },
  {
    id: 'python-labs', number: '09', title: 'Python for AI Labs',
    subtitle: 'Programming Exercises & Notebooks',
    description: 'An evolving public GitHub collection of Python lab exercises, introductory programs, control flow, and a Jupyter notebook.',
    category: 'software', label: 'PYTHON / GITHUB', status: 'Ongoing', art: 'PY',
    tags: ['Python', 'Jupyter', 'Loops', 'Problem Solving'],
    details: ['Organized Week 1 and Week 2 exercises in the connected public repository.', 'Practice includes user input, arithmetic, conditions, loops, comprehension, and simple traffic signal logic.', 'The repository is a learning log rather than a packaged software product.'],
    source: 'https://github.com/zahidmehar/Shan-72387-Programing-for-AI'
  }
];

const q = (s, scope = document) => scope.querySelector(s);
const qa = (s, scope = document) => [...scope.querySelectorAll(s)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js');

function createProjectCard(project) {
  const article = document.createElement('article');
  article.className = `project-card reveal ${project.featured ? 'featured ' : ''}`;
  article.dataset.category = project.category;
  article.dataset.id = project.id;
  const statusClass = project.status.toLowerCase().includes('development') || project.status === 'Ongoing' ? 'in-progress' : 'completed';
  const tags = project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('');
  article.innerHTML = `
    <div class="project-art project-art--${project.category}" aria-hidden="true">
      <span class="art-corner">SHAN / PROJECT ${project.number}</span>
      <div class="art-circles"></div><span class="art-core">${escapeHTML(project.art)}</span>
      <span class="art-bottom">BUILD • LEARN • ITERATE</span>
    </div>
    <div class="project-body">
      <div class="project-topline"><span>${escapeHTML(project.label)}</span><span class="project-status ${statusClass}">${escapeHTML(project.status.toUpperCase())}</span></div>
      <h3 class="project-title">${escapeHTML(project.title)}</h3>
      <p class="project-description">${escapeHTML(project.description)}</p>
      <div class="project-tags">${tags}</div>
      <div class="project-links"><button class="details-button" data-project="${project.id}" type="button">Project details <span aria-hidden="true">↗</span></button>
      ${project.source ? `<a class="project-source" href="${project.source}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHTML(project.title)} source repository">GITHUB ↗</a>` : '<span class="project-source" aria-hidden="true">ACADEMIC WORK</span>'}</div>
    </div>`;
  return article;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}

function renderProjects() {
  const grid = q('#projectsGrid');
  PROJECTS.forEach(project => grid.appendChild(createProjectCard(project)));
  q('#allCount').textContent = String(PROJECTS.length).padStart(2,'0');
  qa('.filter').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    qa('.filter').forEach(b => {const active = b === button;b.classList.toggle('active', active);b.setAttribute('aria-pressed',String(active));});
    qa('.project-card').forEach(card => {card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);});
  }));
  grid.addEventListener('click', event => {
    const button = event.target.closest('[data-project]');
    if (button) openProject(button.dataset.project);
  });
}

function openProject(id) {
  const project = PROJECTS.find(item => item.id === id);
  if (!project) return;
  const dialog = q('#projectDialog');
  q('#dialogEyebrow').textContent = `${project.label} / ${project.status.toUpperCase()}`;
  q('#dialogTitle').textContent = project.title;
  q('#dialogSummary').textContent = project.description;
  q('#dialogPoints').replaceChildren(...project.details.map(point => {const li = document.createElement('li');li.textContent = point;return li;}));
  q('#dialogTech').replaceChildren(...project.tags.map(tag => {const item = document.createElement('span');item.textContent = tag;return item;}));
  const links = q('#dialogLinks'); links.replaceChildren();
  if (project.source) {const link = document.createElement('a');link.href = project.source;link.target = '_blank';link.rel = 'noopener noreferrer';link.textContent = 'View source on GitHub ↗';links.appendChild(link);}
  else {const note=document.createElement('span');note.textContent='Source/demo link will be added when available.';note.style.cssText='color:var(--subtle);font-size:.73rem';links.appendChild(note);}
  if (typeof dialog.showModal === 'function') dialog.showModal();
}

function setupDialog() {
  const dialog = q('#projectDialog');
  q('#dialogClose').addEventListener('click',() => dialog.close());
  dialog.addEventListener('click',event => {if (event.target === dialog) dialog.close();});
}

function setupNav() {
  const header=q('.site-header');
  const toggle=q('#menuToggle');const nav=q('#mobileNav');
  const close=()=>{toggle.setAttribute('aria-expanded','false');toggle.classList.remove('open');toggle.setAttribute('aria-label','Open navigation');nav.hidden=true;};
  toggle.addEventListener('click',()=>{const isOpen=toggle.getAttribute('aria-expanded')==='true';if(isOpen)close();else{toggle.setAttribute('aria-expanded','true');toggle.classList.add('open');toggle.setAttribute('aria-label','Close navigation');nav.hidden=false;}});
  qa('a',nav).forEach(link=>link.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape' && !nav.hidden)close();});
  document.addEventListener('click',e=>{if(!nav.hidden && !e.target.closest('.site-header'))close();});
  const indicator=q('#scrollProgress');
  let queued=false;
  const update=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;indicator.style.width=(max?window.scrollY/max*100:0)+'%';header.classList.toggle('scrolled',window.scrollY>16);queued=false;};
  window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update);}}, {passive:true});update();
  if ('IntersectionObserver' in window) {
    const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){qa('.desktop-nav a').forEach(link=>link.classList.toggle('active',link.dataset.nav===entry.target.id));}})},{rootMargin:'-25% 0px -60% 0px'});
    qa('main section[id]').forEach(s=>observer.observe(s));
  }
}

function setupReveals() {
  const elements=qa('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {elements.forEach(el=>el.classList.add('visible'));return;}
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.08,rootMargin:'0px 0px -25px 0px'});
  elements.forEach(el=>observer.observe(el));
}

function setupTheme() {
  const button=q('#themeToggle');
  let stored='dark';try{stored=localStorage.getItem('shan-theme') || 'dark';}catch{}
  const apply=theme=>{document.documentElement.dataset.theme=theme;button.setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} theme`);button.title=`Switch to ${theme==='dark'?'light':'dark'} theme`;};
  apply(stored==='light'?'light':'dark');
  button.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';apply(next);try{localStorage.setItem('shan-theme',next)}catch{}});
}

let toastTimer;
function showToast(message) {
  const toast=q('#toast');toast.textContent=message;toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),2800);
}
function setupContact() {
  q('#contactForm').addEventListener('submit',event=>{
    event.preventDefault();
    const name=q('#contactName').value.trim();
    const sender=q('#contactSender').value.trim();
    const message=q('#contactMessage').value.trim();
    if (!name || !sender || !message || !q('#contactForm').reportValidity()) return;
    const subject=encodeURIComponent(`Portfolio contact from ${name}`);
    const body=encodeURIComponent(`Name: ${name}\nEmail: ${sender}\n\n${message}`);
    window.location.href=`mailto:shanstudent72387@gmail.com?subject=${subject}&body=${body}`;
    showToast('Opening your email app...');
  });
  q('#copyEmail').addEventListener('click',async()=>{
    const email=q('#copyEmail').dataset.email;
    try{await navigator.clipboard.writeText(email);showToast('Email copied to clipboard');}
    catch {const input=document.createElement('textarea');input.value=email;input.style.position='fixed';input.style.top='-1000px';document.body.appendChild(input);input.select();const success=document.execCommand('copy');input.remove();showToast(success?'Email copied to clipboard':`Email: ${email}`);}
  });
  q('#year').textContent=new Date().getFullYear();
  // Clock is explicitly shown in Pakistan time regardless of viewer location.
  const clock=q('#heroClock');
  const update=()=>{clock.textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Karachi',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date());};
  update();setInterval(update,60000);
}

function setupNeuralCanvas() {
  if (reduceMotion) return;
  const canvas=q('#neuralCanvas');if(!canvas)return;
  const ctx=canvas.getContext('2d');if(!ctx)return;
  let width=0,height=0,nodes=[],animationId;
  const resize=()=>{
    const rect=canvas.getBoundingClientRect();const dpr=Math.min(window.devicePixelRatio||1,2);width=rect.width;height=rect.height;
    canvas.width=Math.max(1,Math.round(width*dpr));canvas.height=Math.max(1,Math.round(height*dpr));ctx.setTransform(dpr,0,0,dpr,0,0);
    const count=Math.min(55,Math.max(18,Math.floor(width*height/13000)));
    nodes=Array.from({length:count},()=>({x:Math.random()*width,y:Math.random()*height,vx:(Math.random()-.5)*.23,vy:(Math.random()-.5)*.23,r:Math.random()*1.7+.4}));
  };
  let last=0;
  const draw=(time)=>{
    animationId=requestAnimationFrame(draw);if(time-last<30)return;last=time;
    ctx.clearRect(0,0,width,height);
    const light=document.documentElement.dataset.theme==='light';
    const color=light?'28,130,113':'130,236,213';
    nodes.forEach((a,i)=>{a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>width)a.vx*=-1;if(a.y<0||a.y>height)a.vy*=-1;
      for(let j=i+1;j<nodes.length;j++){const b=nodes[j];const dx=a.x-b.x,dy=a.y-b.y,dist=Math.hypot(dx,dy);if(dist<138){ctx.strokeStyle=`rgba(${color},${(1-dist/138)*.18})`;ctx.lineWidth=.65;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}
      ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,Math.PI*2);ctx.fillStyle=`rgba(${color},.46)`;ctx.fill();
    });
  };
  resize();draw(0);
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);else window.addEventListener('resize',resize);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(animationId);else{last=0;draw(0);}});
}

renderProjects();
setupDialog();
setupNav();
setupReveals();
setupTheme();
setupContact();
setupNeuralCanvas();
