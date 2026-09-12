/**
 * CATALYST 2030 Hackathon - Problem Statements Portal
 * Supports 2nd Year & 3rd Year Tracks (15 Problem Statements each)
 * All 30 SDG-aligned problem statements with real content.
 */

// Global Configuration
const CONFIG = {
  hackathonTitle: "CATALYST 2030",
  eventDates: "Sept 15 - 16, 2026",
  itemsPerPage: 8,
};

// ============================================================================
// ACTUAL PROBLEM STATEMENTS DATA
// ============================================================================

const PROBLEMS_2ND_YEAR = [
  {
    id: 1,
    code: "PS-2Y-01",
    title: "Smart Food Waste Predictor",
    subtitle: "SDG 2 — Zero Hunger",
    category: "Zero Hunger",
    icon: "utensils",
    year: "2nd",
    shortDescription: "Predict daily meal demand for college canteens using attendance and historical data to reduce food wastage.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Develop a web application that allows a college canteen to enter previous daily meal demand, attendance, and day-of-week information. The system should estimate the expected number of meals required for the next day and provide suggestions to reduce food wastage.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Basic Prediction</strong> — Build a simple prediction model using historical meal demand, attendance numbers, and day-of-week patterns to forecast tomorrow's meal count.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Dashboard + Database + Prediction Interface</strong> — Create a dashboard for canteen staff to input daily data, view predictions, and see waste-reduction suggestions. Persist historical data in a database.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Data entry interface for meal demand, attendance, and day-of-week.</li>
          <li>AI-driven prediction of next-day meal requirements.</li>
          <li>Actionable suggestions for reducing food wastage.</li>
          <li>Historical trends dashboard with visual charts.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 2", "Zero Hunger", "AI Prediction", "Hackathon 2026"]
  },
  {
    id: 2,
    code: "PS-2Y-02",
    title: "Food Donation Matcher",
    subtitle: "SDG 2 — Zero Hunger",
    category: "Zero Hunger",
    icon: "heart-handshake",
    year: "2nd",
    shortDescription: "Connect surplus food from organizations/individuals to nearby NGOs or communities using AI-based matching.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Build a platform connecting organizations/individuals with surplus food to nearby NGOs or communities requiring food. An AI-based matching system should recommend suitable recipients based on food type, quantity and location.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Recommendation / Matching</strong> — Implement an AI matching algorithm that recommends the best recipient based on food type, quantity, proximity, and urgency.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Listings + Search + Matching</strong> — Build interfaces for donors to list surplus food and for recipients to register needs. Include search, filtering, and an intelligent match display.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Donor listing interface for surplus food (type, quantity, expiry, location).</li>
          <li>Recipient registration and needs specification.</li>
          <li>AI-powered matching and recommendation engine.</li>
          <li>Real-time notifications for matched donations.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 2", "Zero Hunger", "AI Matching", "Hackathon 2026"]
  },
  {
    id: 3,
    code: "PS-2Y-03",
    title: "Student Wellness Assistant",
    subtitle: "SDG 3 — Good Health",
    category: "Good Health & Well-Being",
    icon: "heart-pulse",
    year: "2nd",
    shortDescription: "Analyze student lifestyle data (sleep, activity, water intake) and provide personalized wellness suggestions.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Develop a web application where students enter basic lifestyle information such as sleep duration, physical activity and water intake. The system should analyze the data and provide general wellness suggestions.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Simple Classification / Recommendation</strong> — Classify student wellness levels based on input parameters and generate personalized health recommendations.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>User Dashboard + Database</strong> — Build a user-friendly dashboard for daily lifestyle data entry, wellness score tracking, and historical trend visualization.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Daily lifestyle data input (sleep, activity, hydration).</li>
          <li>AI-generated wellness score and health suggestions.</li>
          <li>Progress tracking dashboard with visual charts.</li>
          <li>Persistent user profiles and historical data.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 3", "Good Health", "AI Classification", "Hackathon 2026"]
  },
  {
    id: 4,
    code: "PS-2Y-04",
    title: "Health Information Navigator",
    subtitle: "SDG 3 — Good Health",
    category: "Good Health & Well-Being",
    icon: "stethoscope",
    year: "2nd",
    shortDescription: "AI-assisted health concern categorization with general informational guidance and professional referral.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Create an AI-assisted web application where users describe common health concerns in text. The system should categorize the concern and provide general informational guidance, while clearly recommending professional medical help where appropriate.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>NLP Classification</strong> — Use natural language processing to classify user-described health concerns into categories and provide relevant informational responses.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Chat Interface + History</strong> — Build a conversational chat interface where users describe symptoms, view categorized responses, and access their query history.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Text-based health concern input with chat-style UI.</li>
          <li>NLP-powered categorization of health concerns.</li>
          <li>General informational guidance with medical disclaimers.</li>
          <li>Query history and conversation persistence.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 3", "Good Health", "NLP", "Hackathon 2026"]
  },
  {
    id: 5,
    code: "PS-2Y-05",
    title: "AI Study Resource Recommender",
    subtitle: "SDG 4 — Quality Education",
    category: "Quality Education",
    icon: "book-open",
    year: "2nd",
    shortDescription: "Quiz-based weak topic identification with personalized learning resource recommendations for students.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Build a platform where students select a subject and take a short quiz. Based on their performance, the system identifies weak topics and recommends relevant learning resources.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Recommendation</strong> — Analyze quiz performance to identify knowledge gaps and recommend targeted study materials from a curated resource pool.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Quiz + Student Dashboard</strong> — Build an interactive quiz engine with subject selection, real-time scoring, and a student dashboard showing performance analytics and recommended resources.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Subject-wise quiz creation and attempt system.</li>
          <li>AI-driven identification of weak topics per student.</li>
          <li>Personalized resource recommendations (videos, articles, practice sets).</li>
          <li>Student performance dashboard with progress tracking.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 4", "Education", "AI Recommendation", "Hackathon 2026"]
  },
  {
    id: 6,
    code: "PS-2Y-06",
    title: "Smart Question Generator",
    subtitle: "SDG 4 — Quality Education",
    category: "Quality Education",
    icon: "brain",
    year: "2nd",
    shortDescription: "Generate practice questions at varying difficulty levels using Generative AI, with score tracking.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Develop a web application where a student enters a topic and the system generates practice questions at different difficulty levels. Students should be able to attempt the questions and track their performance.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Generative AI / API</strong> — Use a generative AI model or API to dynamically create questions at easy, medium, and hard difficulty levels for any given topic.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Question Interface + Score Tracking</strong> — Build a clean interface for topic input, question display, answer submission, and a score tracking dashboard showing attempt history and performance trends.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Topic-based question generation using AI.</li>
          <li>Multiple difficulty levels (Easy, Medium, Hard).</li>
          <li>Interactive question attempt and scoring system.</li>
          <li>Performance tracking and historical score dashboard.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 4", "Education", "Generative AI", "Hackathon 2026"]
  },
  {
    id: 7,
    code: "PS-2Y-07",
    title: "Water Usage Analyzer",
    subtitle: "SDG 6 — Clean Water",
    category: "Clean Water & Sanitation",
    icon: "droplets",
    year: "2nd",
    shortDescription: "Dashboard for campus water consumption tracking with anomaly detection across locations.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Create a dashboard that allows users to enter daily water consumption data from different campus locations. The system should identify unusual consumption patterns and highlight locations that may require investigation.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Anomaly Detection / Basic Analytics</strong> — Implement anomaly detection algorithms to spot unusual water consumption spikes or patterns that deviate from historical norms.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Dashboard + Charts + Database</strong> — Build a multi-location dashboard with data entry, interactive charts visualizing consumption trends, and alert indicators for flagged anomalies.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Location-wise daily water consumption data entry.</li>
          <li>Anomaly detection to flag unusual usage patterns.</li>
          <li>Interactive charts and trend visualization.</li>
          <li>Alert system for locations requiring investigation.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 6", "Clean Water", "Anomaly Detection", "Hackathon 2026"]
  },
  {
    id: 8,
    code: "PS-2Y-08",
    title: "Campus Energy Advisor",
    subtitle: "SDG 7 — Affordable & Clean Energy",
    category: "Affordable & Clean Energy",
    icon: "zap",
    year: "2nd",
    shortDescription: "Analyze classroom/lab electricity usage patterns and recommend energy-saving actions.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Build a web application where users enter electricity consumption for classrooms/labs. The system should analyze usage patterns and recommend simple actions for reducing unnecessary energy consumption.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Pattern Analysis / Recommendation</strong> — Analyze electricity usage patterns to identify waste (off-hours consumption, idle periods) and generate actionable energy-saving recommendations.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Analytics Dashboard</strong> — Build an analytics dashboard with electricity data input per room/lab, visual consumption breakdowns, pattern highlights, and recommendation cards.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Room/lab-wise electricity consumption data entry.</li>
          <li>AI pattern analysis to detect energy waste.</li>
          <li>Actionable energy-saving recommendations.</li>
          <li>Visual analytics dashboard with consumption breakdowns.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 7", "Clean Energy", "Pattern Analysis", "Hackathon 2026"]
  },
  {
    id: 9,
    code: "PS-2Y-09",
    title: "Student Skill Matcher",
    subtitle: "SDG 8 — Decent Work",
    category: "Decent Work & Economic Growth",
    icon: "briefcase",
    year: "2nd",
    shortDescription: "Match student skills and interests with internship requirements using AI compatibility scoring.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Develop a platform where students enter their skills and interests and organizations enter internship requirements. The system should calculate a basic compatibility score and recommend suitable opportunities.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Matching / Recommendation</strong> — Calculate compatibility scores between student profiles and internship listings using skill matching algorithms and recommend the best-fit opportunities.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Student + Opportunity Interfaces</strong> — Build dual interfaces: one for students to create skill profiles and browse matched opportunities, and one for organizations to post internship requirements.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Student profile creation (skills, interests, experience).</li>
          <li>Organization internship listing interface.</li>
          <li>AI-powered compatibility scoring and ranking.</li>
          <li>Recommendation dashboard with match details.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 8", "Decent Work", "AI Matching", "Hackathon 2026"]
  },
  {
    id: 10,
    code: "PS-2Y-10",
    title: "Resume Skill Analyzer",
    subtitle: "SDG 8 — Decent Work",
    category: "Decent Work & Economic Growth",
    icon: "file-text",
    year: "2nd",
    shortDescription: "Analyze resumes against job descriptions to identify matching skills, gaps, and improvement areas.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Build a web application that accepts a resume and analyzes it against a selected job description. The system should identify matching skills, missing skills and suggest areas for improvement.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>NLP</strong> — Use natural language processing to extract skills from resumes, compare them against job description requirements, and identify gaps.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Resume Upload + Analysis Dashboard</strong> — Build a resume upload interface with job description selection, a visual skill-match dashboard showing matched/missing skills, and improvement suggestions.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Resume upload and parsing functionality.</li>
          <li>Job description selection or input.</li>
          <li>NLP-powered skill extraction and matching.</li>
          <li>Visual analysis dashboard with improvement suggestions.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 8", "Decent Work", "NLP", "Hackathon 2026"]
  },
  {
    id: 11,
    code: "PS-2Y-11",
    title: "Campus Problem-Solving Portal",
    subtitle: "SDG 9 — Industry & Innovation",
    category: "Industry, Innovation & Infrastructure",
    icon: "lightbulb",
    year: "2nd",
    shortDescription: "AI-powered portal to submit, categorize, and group campus/community problems to identify recurring issues.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Create a platform where students can submit real-world problems they observe around campus/community. AI should automatically categorize problems and group similar submissions to help identify recurring issues.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Text Classification / Clustering</strong> — Automatically categorize submitted problems into predefined categories and cluster similar submissions to surface recurring issues.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Submission + Admin Dashboard</strong> — Build a student-facing submission form and an admin dashboard showing categorized problems, clusters of similar issues, and trending concern areas.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Problem submission interface for students.</li>
          <li>AI-powered automatic categorization and clustering.</li>
          <li>Admin dashboard with issue trends and clusters.</li>
          <li>Identification and highlighting of recurring issues.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 9", "Innovation", "Text Classification", "Hackathon 2026"]
  },
  {
    id: 12,
    code: "PS-2Y-12",
    title: "Smart Parking Finder",
    subtitle: "SDG 11 — Sustainable Cities & Communities",
    category: "Sustainable Cities & Communities",
    icon: "car",
    year: "2nd",
    shortDescription: "Display available parking spaces, predict peak parking periods, and suggest alternatives using AI.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Develop a web application that displays available parking spaces based on user-provided or simulated parking data. The system should predict peak parking periods and suggest alternative spaces.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Basic Prediction</strong> — Predict peak parking occupancy periods based on historical or simulated data patterns and suggest optimal alternative parking locations.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Map / Dashboard + Database</strong> — Build an interactive map or grid view of parking spaces with real-time availability, peak-time predictions, and alternative parking suggestions.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Real-time parking availability display (map or grid).</li>
          <li>AI-based peak period prediction.</li>
          <li>Alternative parking space suggestions.</li>
          <li>Data persistence and historical trend analysis.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 11", "Sustainable Cities", "AI Prediction", "Hackathon 2026"]
  },
  {
    id: 13,
    code: "PS-2Y-13",
    title: "Circular Economy Tracker",
    subtitle: "SDG 12 — Responsible Consumption",
    category: "Responsible Consumption & Production",
    icon: "recycle",
    year: "2nd",
    shortDescription: "Design a smart circular economy tracker and reverse logistics network for consumer electronics to extend product lifespans and eliminate electronic waste (e-waste).",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Design a smart circular economy tracker and reverse logistics network for consumer electronics to extend product lifespans and eliminate electronic waste (e-waste).</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Smart Tracking & Prediction</strong> — Use AI to monitor device lifecycles, identify repair or reuse opportunities, and predict the best route for repair, refurbishment, recycling, or material recovery.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Lifecycle Dashboard + Reverse Logistics Network</strong> — Build a system that tracks electronic products across their lifecycle and maps reverse logistics workflows for collection, repair, resale, and recycling.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Lifecycle tracking for consumer electronics and components.</li>
          <li>AI-driven recommendations for repair, resale, remanufacturing, or recycling.</li>
          <li>Reverse logistics workflow and collection network model.</li>
          <li>Dashboard showing e-waste reduction, recovery, and product lifespan extension metrics.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 12", "Responsible Consumption", "Circular Economy", "Hackathon 2026"]
  },
  {
    id: 14,
    code: "PS-2Y-14",
    title: "Personal Carbon Calculator",
    subtitle: "SDG 13 — Climate Action",
    category: "Climate Action",
    icon: "leaf",
    year: "2nd",
    shortDescription: "Estimate personal carbon footprint from transportation, electricity, and lifestyle inputs with reduction tips.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Develop a web application that estimates a user's approximate carbon footprint based on transportation, electricity and lifestyle inputs. The system should provide personalized suggestions for reducing the estimated footprint.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Recommendation</strong> — Analyze the user's carbon footprint breakdown and generate personalized, actionable recommendations for reducing emissions in the highest-impact areas.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Calculator + Dashboard</strong> — Build an interactive carbon footprint calculator with category breakdowns (transport, electricity, diet, lifestyle), visual result dashboard, and personalized reduction tips.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Multi-category carbon footprint calculator.</li>
          <li>Visual breakdown of emissions by category.</li>
          <li>AI-powered personalized reduction suggestions.</li>
          <li>Progress tracking for emission reduction goals.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 13", "Climate Action", "AI Recommendation", "Hackathon 2026"]
  },
  {
    id: 15,
    code: "PS-2Y-15",
    title: "Eco-Report",
    subtitle: "SDG 14/15 — Life Below Water / Life on Land",
    category: "Life Below Water / Life on Land",
    icon: "trees",
    year: "2nd",
    shortDescription: "Upload environmental issue images (litter, damaged vegetation, pollution) for AI categorization and community mapping.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Create a platform where users can upload an image of an environmental issue such as litter, damaged vegetation or polluted water. AI should categorize the reported issue and display it on a community map.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Image / Text Classification</strong> — Use AI to classify uploaded environmental issue images into categories (litter, vegetation damage, water pollution, etc.) and extract relevant metadata.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Upload + Map + Reports</strong> — Build an image upload interface, a community map displaying all reported issues by location, and a reports view showing categorized issues and trends.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Environmental issue image upload with location tagging.</li>
          <li>AI-powered issue categorization.</li>
          <li>Interactive community map with issue markers.</li>
          <li>Reports dashboard with category trends and statistics.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["2nd Year", "SDG 14", "SDG 15", "Life on Land", "Image Classification", "Hackathon 2026"]
  }
];

const PROBLEMS_3RD_YEAR = [
  {
    id: 1,
    code: "PS-3Y-01",
    title: "Intelligent Food Demand Forecasting",
    subtitle: "SDG 2 — Zero Hunger",
    category: "Zero Hunger",
    icon: "chart-line",
    year: "3rd",
    shortDescription: "Forecast meal demand and estimate food wastage using regression/time-series models on historical canteen data.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Develop a web-based canteen management system that uses historical meal consumption, attendance and calendar information to forecast the next day's meal demand and estimate potential food wastage.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Regression / Time-Series Prediction</strong> — Build a time-series or regression model that learns from historical consumption patterns, attendance data, and calendar features to accurately forecast demand.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Analytics + Prediction Dashboard</strong> — Build a comprehensive dashboard with data management, forecasting visualizations, waste estimation graphs, and historical trend analysis.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Time-series model for meal demand forecasting.</li>
          <li>Food wastage estimation and reduction insights.</li>
          <li>Interactive analytics dashboard with prediction visualization.</li>
          <li>Historical data management and trend analysis.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 2", "Zero Hunger", "Time-Series", "Hackathon 2026"]
  },
  {
    id: 2,
    code: "PS-3Y-02",
    title: "Lifestyle Risk Pattern Detection",
    subtitle: "SDG 3 — Good Health",
    category: "Good Health & Well-Being",
    icon: "activity",
    year: "3rd",
    shortDescription: "Analyze anonymized lifestyle indicators to identify unhealthy patterns and generate preventive recommendations.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Build an application that analyzes a dataset of anonymized lifestyle indicators such as sleep, activity, nutrition and stress scores. The system should identify potentially unhealthy patterns and generate personalized preventive recommendations.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Classification / Clustering</strong> — Apply classification or clustering algorithms on multi-dimensional lifestyle data to detect risk patterns and group users into health-risk profiles.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Analytics Dashboard</strong> — Build a rich analytics dashboard with data upload, pattern visualization, risk-level indicators, and personalized preventive recommendation cards.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Multi-dimensional lifestyle data analysis.</li>
          <li>Pattern detection for unhealthy behaviors.</li>
          <li>Risk-profile clustering and classification.</li>
          <li>Personalized preventive health recommendations.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 3", "Good Health", "Clustering", "Hackathon 2026"]
  },
  {
    id: 3,
    code: "PS-3Y-03",
    title: "Mental Wellness Sentiment Analyzer",
    subtitle: "SDG 3 — Good Health",
    category: "Good Health & Well-Being",
    icon: "smile",
    year: "3rd",
    shortDescription: "Privacy-conscious text sentiment analysis for emotional pattern detection with appropriate wellness resources.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Develop a privacy-conscious application that analyzes user-provided text for broad emotional/sentiment patterns and provides appropriate wellness resources. It must not claim to diagnose mental-health conditions.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>NLP / Sentiment Analysis</strong> — Implement sentiment analysis on user-provided text to detect emotional patterns (positive, negative, neutral, stressed, anxious) while maintaining strict privacy standards.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Secure Interface + Analytics</strong> — Build a privacy-first text input interface with sentiment trend visualizations, wellness resource recommendations, and clear disclaimers. No personal data should be stored without explicit consent.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Privacy-conscious text input and analysis interface.</li>
          <li>Sentiment classification and emotional trend tracking.</li>
          <li>Curated wellness resource recommendations.</li>
          <li>Clear disclaimers — no diagnostic claims.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 3", "Good Health", "Sentiment Analysis", "NLP", "Hackathon 2026"]
  },
  {
    id: 4,
    code: "PS-3Y-04",
    title: "Adaptive Learning Engine",
    subtitle: "SDG 4 — Quality Education",
    category: "Quality Education",
    icon: "graduation-cap",
    year: "3rd",
    shortDescription: "Quiz platform with dynamically adjusting difficulty based on student performance, with learner profiling.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Create an online quiz platform where question difficulty dynamically changes according to a student's previous answers. The system should maintain a learner profile and recommend which topics should be studied next.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Adaptive Recommendation</strong> — Build an adaptive algorithm that adjusts question difficulty in real-time based on answer accuracy, maintains a learner proficiency model, and recommends optimal study topics.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Quiz Engine + Learner Dashboard</strong> — Build a dynamic quiz engine with real-time difficulty adaptation, a learner profile dashboard showing proficiency maps, and topic-wise study recommendations.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Dynamic difficulty adjustment during quizzes.</li>
          <li>Persistent learner proficiency profiles.</li>
          <li>Topic-wise strength/weakness mapping.</li>
          <li>Recommended next-study topics based on performance.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 4", "Education", "Adaptive AI", "Hackathon 2026"]
  },
  {
    id: 5,
    code: "PS-3Y-05",
    title: "AI Assignment Feedback System",
    subtitle: "SDG 4 — Quality Education",
    category: "Quality Education",
    icon: "file-check",
    year: "3rd",
    shortDescription: "Evaluate student short answers against expected concepts using semantic similarity, with structured feedback.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Build a platform where students submit short answers to predefined questions. The system should compare responses with expected concepts, identify missing concepts and provide structured feedback.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>NLP / Semantic Similarity</strong> — Use semantic similarity and NLP techniques to compare student answers against model answers, identify covered and missing concepts, and generate detailed feedback.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Submission + Evaluation Dashboard</strong> — Build a student submission interface for short answers and an evaluation dashboard showing concept coverage, similarity scores, and structured improvement feedback.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Short answer submission for predefined questions.</li>
          <li>Semantic similarity-based concept matching.</li>
          <li>Identification of missing key concepts.</li>
          <li>Structured feedback with improvement suggestions.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 4", "Education", "Semantic Similarity", "NLP", "Hackathon 2026"]
  },
  {
    id: 6,
    code: "PS-3Y-06",
    title: "Water Quality Risk Predictor",
    subtitle: "SDG 6 — Clean Water",
    category: "Clean Water & Sanitation",
    icon: "flask-conical",
    year: "3rd",
    shortDescription: "Classify water samples into risk categories using pH, temperature, turbidity, and other quality parameters.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Using a provided dataset containing parameters such as pH, temperature, turbidity and other water-quality measurements, develop a model that classifies water samples into risk categories and displays the results through a monitoring dashboard.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Classification</strong> — Build a classification model that takes water quality parameters as input and predicts risk levels (safe, moderate risk, high risk, unsafe) for each sample.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Data Upload + Visualization</strong> — Build a data upload interface for water quality datasets, a monitoring dashboard with risk-level visualizations, parameter breakdowns, and historical trend charts.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Water quality dataset upload and processing.</li>
          <li>ML classification model for risk prediction.</li>
          <li>Interactive monitoring dashboard with risk levels.</li>
          <li>Parameter-wise analysis and trend visualization.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 6", "Clean Water", "Classification", "ML", "Hackathon 2026"]
  },
  {
    id: 7,
    code: "PS-3Y-07",
    title: "Energy Demand Predictor",
    subtitle: "SDG 7 — Affordable & Clean Energy",
    category: "Affordable & Clean Energy",
    icon: "plug-zap",
    year: "3rd",
    shortDescription: "Predict short-term energy demand using historical consumption data with peak period identification.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Develop a web application that uses historical electricity-consumption data to predict short-term energy demand. The system should identify expected peak periods and recommend energy-saving actions.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Time-Series Forecasting</strong> — Build a time-series forecasting model using historical electricity data to predict upcoming demand, identify peak consumption windows, and flag conservation opportunities.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Prediction + Visualization</strong> — Build a prediction dashboard with historical data views, forecast charts, peak-period highlights, and actionable energy-saving recommendation cards.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Time-series model for short-term energy demand prediction.</li>
          <li>Peak period identification and alerts.</li>
          <li>Interactive forecast visualization dashboard.</li>
          <li>Energy-saving action recommendations.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 7", "Clean Energy", "Time-Series", "Forecasting", "Hackathon 2026"]
  },
  {
    id: 8,
    code: "PS-3Y-08",
    title: "Intelligent Career Gap Analyzer",
    subtitle: "SDG 8 — Decent Work",
    category: "Decent Work & Economic Growth",
    icon: "route",
    year: "3rd",
    shortDescription: "Compare resumes against job descriptions with skill-match scoring, gap identification, and learning roadmaps.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Develop an AI-powered platform that compares a student's resume with a selected job description, calculates a skill-match score, identifies missing skills and generates a prioritized learning roadmap.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>NLP + Semantic Matching</strong> — Use NLP and semantic matching to extract and compare skills between resumes and job descriptions, calculate granular match scores, and generate prioritized skill-gap learning paths.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Resume Parser + Dashboard</strong> — Build a resume upload and parsing system, job description input, a detailed match-score dashboard, and a visual learning roadmap with prioritized skill recommendations.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Resume parsing and skill extraction.</li>
          <li>Semantic skill-match scoring against job descriptions.</li>
          <li>Missing skill identification and gap analysis.</li>
          <li>Prioritized learning roadmap generation.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 8", "Decent Work", "NLP", "Semantic Matching", "Hackathon 2026"]
  },
  {
    id: 9,
    code: "PS-3Y-09",
    title: "Predictive Maintenance Dashboard",
    subtitle: "SDG 9 — Industry & Innovation",
    category: "Industry, Innovation & Infrastructure",
    icon: "settings",
    year: "3rd",
    shortDescription: "Predict equipment failures from sensor data (temperature, vibration, operating conditions) with alerts.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Using a provided machine-sensor dataset, develop a system that predicts whether equipment is likely to experience a failure based on parameters such as temperature, vibration and operating conditions.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Classification / Anomaly Detection</strong> — Build a classification or anomaly detection model on sensor data to predict imminent equipment failures and flag machines requiring preventive maintenance.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Monitoring Dashboard + Alerts</strong> — Build a real-time monitoring dashboard showing sensor readings, health scores, failure risk indicators, and an alert system for maintenance-needed equipment.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Sensor data processing and feature engineering.</li>
          <li>Predictive model for equipment failure detection.</li>
          <li>Real-time monitoring dashboard with health scores.</li>
          <li>Alert system for maintenance scheduling.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 9", "Innovation", "Anomaly Detection", "Predictive ML", "Hackathon 2026"]
  },
  {
    id: 10,
    code: "PS-3Y-10",
    title: "Innovation Idea Intelligence Platform",
    subtitle: "SDG 9 — Industry & Innovation",
    category: "Industry, Innovation & Infrastructure",
    icon: "rocket",
    year: "3rd",
    shortDescription: "Submit, categorize, and analyze tech ideas with AI-powered similarity detection and feasibility summaries.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Create a platform where users submit technological ideas. AI should categorize ideas, detect similar submissions, identify major problem domains and generate a basic feasibility/impact summary.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>NLP + Clustering</strong> — Use NLP to categorize submitted ideas, detect semantic duplicates and similar submissions via clustering, and generate automated feasibility/impact assessments.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Idea Portal + Admin Dashboard</strong> — Build a user-facing idea submission portal and an admin dashboard showing categorized ideas, similarity clusters, trending domains, and feasibility summaries.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Idea submission and categorization portal.</li>
          <li>AI-powered similarity and duplicate detection.</li>
          <li>Problem domain identification and trends.</li>
          <li>Automated feasibility/impact summary generation.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 9", "Innovation", "NLP", "Clustering", "Hackathon 2026"]
  },
  {
    id: 11,
    code: "PS-3Y-11",
    title: "Traffic Congestion Predictor",
    subtitle: "SDG 11 — Sustainable Cities & Communities",
    category: "Sustainable Cities & Communities",
    icon: "traffic-cone",
    year: "3rd",
    shortDescription: "Predict traffic congestion levels from historical data, visualize hotspots, and suggest alternative routes.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Develop a web application using a provided historical traffic dataset to predict congestion levels for selected roads/time periods. The system should visualize congestion hotspots and suggest alternative routes.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Prediction</strong> — Build a prediction model on historical traffic data to forecast congestion levels for specific roads and time windows, and identify recurring hotspot patterns.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Dashboard + Map Visualization</strong> — Build a dashboard with a map visualizing congestion hotspots (color-coded by severity), time-based prediction selectors, and alternative route suggestions.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Historical traffic data analysis and model training.</li>
          <li>Congestion level prediction by road and time period.</li>
          <li>Interactive map with congestion hotspot visualization.</li>
          <li>Alternative route recommendations.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 11", "Sustainable Cities", "Traffic Prediction", "Hackathon 2026"]
  },
  {
    id: 12,
    code: "PS-3Y-12",
    title: "Digital Product Passport & Reverse Logistics Engine",
    subtitle: "SDG 12 — Responsible Consumption",
    category: "Responsible Consumption & Production",
    icon: "trash-2",
    year: "3rd",
    shortDescription: "Design a trustless, automated Digital Product Passport (DPP) framework combined with a computer-vision-driven reverse logistics engine to maximize component-level recovery, remanufacturing, and cross-industry material circularity for consumer electronics.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Design a trustless, automated Digital Product Passport (DPP) framework combined with a computer-vision-driven reverse logistics engine to maximize component-level recovery, remanufacturing, and cross-industry material circularity for consumer electronics.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Computer Vision + Trustless Digital Tracking</strong> — Use AI-powered visual inspection to identify device condition, component usability, and material composition, while linking this data to a secure digital product passport for traceability and lifecycle decisions.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Passport Platform + Reverse Logistics Dashboard</strong> — Build a system that records product provenance, condition, and material data, then routes devices through repair, remanufacturing, or recycling flows based on automated intelligence.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Trustless or tamper-resistant product passport for consumer electronics.</li>
          <li>Computer-vision-based reverse logistics assessment of device condition and components.</li>
          <li>Component-level recovery and remanufacturing decision engine.</li>
          <li>Cross-industry material circularity and e-waste reduction analytics dashboard.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 12", "Responsible Consumption", "Computer Vision", "Circular Economy", "Hackathon 2026"]
  },
  {
    id: 13,
    code: "PS-3Y-13",
    title: "Local Air Quality Predictor",
    subtitle: "SDG 13 — Climate Action",
    category: "Climate Action",
    icon: "wind",
    year: "3rd",
    shortDescription: "Predict air quality categories from environmental and weather parameters with health recommendations.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Using a provided dataset containing air-quality and weather parameters, build a model that predicts the next air-quality category and displays health/environmental recommendations based on the prediction.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>ML / Time-Series</strong> — Build a machine learning or time-series model using air-quality parameters (AQI, PM2.5, PM10) and weather data to predict the next air-quality category (Good, Moderate, Unhealthy, Hazardous).</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Prediction Dashboard</strong> — Build a prediction dashboard showing current and forecasted AQI levels, parameter breakdowns, health advisory recommendations, and historical air quality trends.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Air quality dataset processing and model training.</li>
          <li>Next-category prediction with confidence scores.</li>
          <li>Health and environmental recommendations by AQI level.</li>
          <li>Interactive dashboard with historical trends.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 13", "Climate Action", "ML", "Time-Series", "Hackathon 2026"]
  },
  {
    id: 14,
    code: "PS-3Y-14",
    title: "Marine Pollution Image Analyzer",
    subtitle: "SDG 14 — Life Below Water",
    category: "Life Below Water",
    icon: "waves",
    year: "3rd",
    shortDescription: "Analyze water body images to classify visible pollution indicators and generate pollution reports.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Develop a computer-vision application that analyzes provided images of water bodies and classifies visible pollution indicators such as plastic waste or oil-like surface contamination. The application should generate a pollution report.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Computer Vision</strong> — Build or integrate a computer vision model to detect and classify pollution indicators in water body images — plastic debris, oil slicks, algal blooms, or other contamination.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Image Analysis + Reporting</strong> — Build an image upload and analysis interface, detection result overlays on images, and an automated pollution report generator with severity assessment and location tracking.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Water body image upload and analysis.</li>
          <li>Computer vision-based pollution indicator classification.</li>
          <li>Detection visualization overlaid on source images.</li>
          <li>Automated pollution severity report generation.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 14", "Life Below Water", "Computer Vision", "Hackathon 2026"]
  },
  {
    id: 15,
    code: "PS-3Y-15",
    title: "Biodiversity Intelligence Platform",
    subtitle: "SDG 15 — Life on Land",
    category: "Life on Land",
    icon: "scan-eye",
    year: "3rd",
    shortDescription: "Identify species from uploaded images using AI and maintain a biodiversity observation database with distribution maps.",
    fullDescription: `
      <h3>Challenge Overview</h3>
      <p>Build a web application where users upload images of plants/animals. The system should identify the species using an AI model/API and maintain a biodiversity database showing observations and distribution.</p>

      <div class="modal-section-box">
        <h4>🤖 AI Component</h4>
        <p><strong>Computer Vision</strong> — Use an AI image recognition model or API to identify plant and animal species from user-uploaded photographs and provide confidence-scored identifications.</p>
      </div>

      <div class="modal-section-box">
        <h4>🖥️ Full Stack Component</h4>
        <p><strong>Image Recognition + Database + Visualization</strong> — Build an image upload interface, a species identification result display, a biodiversity observation database, and a distribution map showing where species have been spotted.</p>
      </div>

      <div class="modal-section-box">
        <h4>Key Objectives & Deliverables</h4>
        <ul>
          <li>Image upload and species identification interface.</li>
          <li>AI-powered species recognition with confidence scores.</li>
          <li>Biodiversity observation database.</li>
          <li>Species distribution map and statistics visualization.</li>
        </ul>
      </div>

      <div class="modal-section-box">
        <h4>Evaluation Criteria</h4>
        <ul>
          <li><strong>Innovation & Originality:</strong> 25%</li>
          <li><strong>Technical Implementation & Architecture:</strong> 30%</li>
          <li><strong>UI / UX Design & Usability:</strong> 25%</li>
          <li><strong>Feasibility & Impact:</strong> 20%</li>
        </ul>
      </div>
    `,
    tags: ["3rd Year", "SDG 15", "Life on Land", "Computer Vision", "Image Recognition", "Hackathon 2026"]
  }
];

// The most technically demanding challenges are reserved for a separate handoff.
const REMOVED_PROBLEM_CODES = new Set([
  "PS-2Y-10",
  "PS-2Y-11",
  "PS-2Y-12",
  "PS-2Y-13",
  "PS-2Y-15",
  "PS-3Y-09",
  "PS-3Y-10",
  "PS-3Y-11",
  "PS-3Y-12",
  "PS-3Y-15"
]);

// Data Store
const DATA = {
  "2nd": PROBLEMS_2ND_YEAR
    .filter(problem => !REMOVED_PROBLEM_CODES.has(problem.code))
    .map((problem, index) => ({ ...problem, id: index + 1 })),
  "3rd": PROBLEMS_3RD_YEAR
    .filter(problem => !REMOVED_PROBLEM_CODES.has(problem.code))
    .map((problem, index) => ({ ...problem, id: index + 1 }))
};

// Application State
let currentYear = "2nd";
let currentPage = 1;
let isViewAll = false;
let searchQuery = "";

// Active problem in modal
let activeProblemCode = "";
let activeProblem = null;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  renderProblemStatements();
  lucide.createIcons();
});

// Setup DOM Event Listeners
function setupEventListeners() {
  // Year toggle tabs
  const tab2nd = document.getElementById("tab-2nd");
  const tab3rd = document.getElementById("tab-3rd");

  tab2nd.addEventListener("click", () => switchYear("2nd"));
  tab3rd.addEventListener("click", () => switchYear("3rd"));

  // View all toggle button
  const viewAllBtn = document.getElementById("view-all-btn");
  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", toggleViewAll);
  }

  // Search input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      currentPage = 1;
      renderProblemStatements();
    });
  }

  // Modal close handlers
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBackdrop = document.getElementById("modal-backdrop");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      // Only close if clicking the backdrop itself, not the modal content
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      if (typeof closeInfoModal === 'function') closeInfoModal();
    }
  });
}

// Switch Year Track (2nd Year vs 3rd Year)
function switchYear(year) {
  if (currentYear === year) return;
  currentYear = year;
  currentPage = 1;

  const tab2nd = document.getElementById("tab-2nd");
  const tab3rd = document.getElementById("tab-3rd");
  const sectionTitle = document.getElementById("section-title-year");
  const switcher = document.getElementById("year-switcher");

  if (year === "2nd") {
    tab2nd.classList.add("active");
    tab3rd.classList.remove("active");
    switcher.classList.remove("right-active");
    sectionTitle.textContent = "2nd Year";
  } else {
    tab3rd.classList.add("active");
    tab2nd.classList.remove("active");
    switcher.classList.add("right-active");
    sectionTitle.textContent = "3rd Year";
  }

  renderProblemStatements();
}

// Toggle View All Mode
function toggleViewAll() {
  isViewAll = !isViewAll;
  currentPage = 1;
  const viewAllBtn = document.getElementById("view-all-btn");
  if (viewAllBtn) {
    viewAllBtn.innerHTML = isViewAll
      ? `<span>Show Paginated View</span> <i data-lucide="grid"></i>`
      : `<span>View All 10 Problem Statements</span> <i data-lucide="arrow-right"></i>`;
  }
  renderProblemStatements();
}

// Filtered and Paginated Items
function getVisibleProblems() {
  let list = DATA[currentYear] || [];

  if (searchQuery) {
    list = list.filter(item =>
      item.title.toLowerCase().includes(searchQuery) ||
      item.subtitle.toLowerCase().includes(searchQuery) ||
      item.code.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery) ||
      item.shortDescription.toLowerCase().includes(searchQuery) ||
      item.id.toString() === searchQuery ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery))
    );
  }

  const totalItems = list.length;
  const totalPages = Math.ceil(totalItems / CONFIG.itemsPerPage) || 1;

  if (isViewAll) {
    return { items: list, totalPages: 1, totalItems };
  }

  const startIndex = (currentPage - 1) * CONFIG.itemsPerPage;
  const paginatedItems = list.slice(startIndex, startIndex + CONFIG.itemsPerPage);

  return { items: paginatedItems, totalPages, totalItems };
}

// Render Problem Cards & Pagination
function renderProblemStatements() {
  const container = document.getElementById("problems-grid");
  const paginationContainer = document.getElementById("pagination-container");
  const countBadge = document.getElementById("statements-count-badge");

  const { items, totalPages, totalItems } = getVisibleProblems();

  if (countBadge) {
    countBadge.textContent = `${totalItems} PROBLEM STATEMENTS`;
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i data-lucide="search-x"></i>
        <h3>No problem statements found</h3>
        <p>Try searching for a different number or keyword.</p>
      </div>
    `;
    paginationContainer.innerHTML = "";
    lucide.createIcons();
    return;
  }

  // Render cards
  container.innerHTML = items.map(item => {
    const paddedId = item.id.toString().padStart(2, "0");
    return `
      <div class="ps-card" onclick="openProblemModal('${currentYear}', ${item.id})" role="button" tabindex="0">
        <div class="ps-card-top">
          <span class="ps-number">${paddedId}</span>
          <div class="ps-arrow-btn" title="View details">
            <i data-lucide="arrow-right"></i>
          </div>
        </div>
        
        <div class="ps-card-body">
          <div class="ps-icon-wrapper">
            <i data-lucide="${item.icon}"></i>
          </div>
          <div class="ps-content">
            <h3 class="ps-title">${item.title}</h3>
            <p class="ps-subtitle">${item.subtitle}</p>
          </div>
        </div>

        <div class="ps-card-footer">
          <span class="ps-code-pill">${item.code}</span>
          <span class="ps-click-hint">Details <i data-lucide="chevron-right"></i></span>
        </div>
      </div>
    `;
  }).join("");

  // Render Pagination
  renderPagination(totalPages);

  // Refresh icons
  lucide.createIcons();
}

// Render Pagination Controls
function renderPagination(totalPages) {
  const container = document.getElementById("pagination-container");
  if (!container) return;

  if (isViewAll || totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  let html = `<div class="pagination-pills">`;

  for (let i = 1; i <= totalPages; i++) {
    html += `
      <button class="page-pill ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">
        ${i}
      </button>
    `;
  }

  if (currentPage < totalPages) {
    html += `
      <button class="page-pill next-pill" onclick="goToPage(${currentPage + 1})" title="Next Page">
        <i data-lucide="chevron-right"></i>
      </button>
    `;
  }

  html += `</div>`;
  container.innerHTML = html;
}

// Go to page
window.goToPage = function (page) {
  currentPage = page;
  renderProblemStatements();
  const section = document.getElementById("problem-statements-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Open Detailed Problem Modal
window.openProblemModal = function (year, id) {
  const list = DATA[year] || [];
  const problem = list.find(p => p.id === id);
  if (!problem) return;

  const modal = document.getElementById("modal-backdrop");
  const modalTitle = document.getElementById("modal-ps-title");
  const modalCode = document.getElementById("modal-ps-code");
  const modalDomain = document.getElementById("modal-ps-domain");
  const modalBody = document.getElementById("modal-ps-body");

  activeProblem = problem;
  activeProblemCode = problem.code;
  modalTitle.textContent = problem.title;
  modalCode.textContent = problem.code;
  modalDomain.textContent = `${problem.year} Year Track • ${problem.category}`;
  modalBody.innerHTML = problem.fullDescription;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
};

// Format Problem Details for Clipboard
function formatProblemForClipboard(problem) {
  if (!problem) return "";

  let output = `==================================================\n`;
  output += `${problem.code}: ${problem.title}\n`;
  output += `Track: ${problem.year} Year Track • ${problem.category}\n`;
  output += `SDG: ${problem.subtitle}\n`;
  output += `==================================================\n\n`;

  const tempEl = document.createElement("div");
  tempEl.innerHTML = problem.fullDescription;

  // Challenge Overview
  const p = tempEl.querySelector("p");
  if (p) {
    output += `CHALLENGE OVERVIEW:\n${p.textContent.trim()}\n\n`;
  }

  // Component breakdowns and criteria
  const boxes = tempEl.querySelectorAll(".modal-section-box");
  boxes.forEach(box => {
    const h4 = box.querySelector("h4");
    if (h4) {
      output += `${h4.textContent.trim().toUpperCase()}:\n`;
    }
    const ul = box.querySelector("ul");
    if (ul) {
      box.querySelectorAll("li").forEach(li => {
        output += `• ${li.textContent.trim()}\n`;
      });
      output += `\n`;
    } else {
      const bp = box.querySelector("p");
      if (bp) {
        output += `${bp.textContent.trim()}\n\n`;
      }
    }
  });

  return output.trim();
}

// Fallback clipboard copy using textarea element
function copyTextFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Fallback copy failed", err);
  }
  document.body.removeChild(textarea);
}

// Copy Problem Description to Clipboard
window.copyProblemCode = function () {
  if (!activeProblem) return;
  const fullText = formatProblemForClipboard(activeProblem);

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fullText).then(() => {
      showToast(`Copied full description for ${activeProblem.code} to clipboard!`);
    }).catch(() => {
      copyTextFallback(fullText);
      showToast(`Copied full description for ${activeProblem.code} to clipboard!`);
    });
  } else {
    copyTextFallback(fullText);
    showToast(`Copied full description for ${activeProblem.code} to clipboard!`);
  }
};

// Toggle Mobile Navigation Drawer
window.toggleMobileMenu = function () {
  const drawer = document.getElementById("mobile-nav-drawer");
  const icon = document.getElementById("hamburger-icon");
  if (!drawer) return;

  const isOpen = drawer.classList.toggle("open");
  if (icon) {
    icon.setAttribute("data-lucide", isOpen ? "x" : "menu");
    lucide.createIcons();
  }
};

window.closeMobileMenu = function () {
  const drawer = document.getElementById("mobile-nav-drawer");
  const icon = document.getElementById("hamburger-icon");
  if (drawer) drawer.classList.remove("open");
  if (icon) {
    icon.setAttribute("data-lucide", "menu");
    lucide.createIcons();
  }
};

// Close Modal
function closeModal() {
  const modal = document.getElementById("modal-backdrop");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

// Simple Toast Notification
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "cyber-toast";
  toast.innerHTML = `<i data-lucide="check-circle-2"></i> <span>${message}</span>`;
  document.body.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.classList.add("visible");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}
