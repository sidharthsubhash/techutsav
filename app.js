/**
 * Tech Utsav Hackathon - Problem Statements Portal
 * Supports 2nd Year & 3rd Year Tracks (15 Problem Statements each)
 */

// Global Configuration
const CONFIG = {
  hackathonTitle: "TECH UTSAV 2026",
  eventDates: "Sept 15 - 16, 2026",
  itemsPerPage: 8,
};

// Icons mapping for visual variety matching the design
const ICONS = [
  "map-pin",      // 01: Location/Nav
  "book-open",    // 02: AI Study Buddy
  "leaf",         // 03: Waste/Eco
  "shield-check", // 04: Safe Commute
  "users",        // 05: Campus Connect
  "activity",     // 06: Health Track
  "calendar",     // 07: Event Flow
  "sprout",       // 08: Green Graph
  "cpu",          // 09: IoT/Smart Hardware
  "lock",         // 10: Cyber Security
  "wallet",       // 11: FinTech & Payments
  "bot",          // 12: GenAI Automation
  "globe",        // 13: Web3 / Distributed
  "sparkles",     // 14: AR / VR Innovation
  "database"      // 15: Big Data Analytics
];

const DOMAINS_2ND_YEAR = [
  "Campus Automation",
  "Smart Education & AI",
  "Environmental & Sustainability",
  "Student Safety & Mobility",
  "Community & Social Tech",
  "Health & Wellness",
  "Event & Operations Tech",
  "Carbon Footprint & Eco",
  "Smart IoT Solutions",
  "Cybersecurity & Privacy",
  "Digital Payments / FinTech",
  "AI Workflow Automation",
  "Next-Gen Web Platforms",
  "Interactive Media & AR",
  "Data Insights & Analytics"
];

const DOMAINS_3RD_YEAR = [
  "Enterprise Cloud & Microservices",
  "Agentic AI & LLM Systems",
  "Smart City & Edge Computing",
  "Zero-Trust Security & DevSecOps",
  "Decentralized Systems & Web3",
  "Predictive Healthcare Intelligence",
  "Supply Chain & Real-Time Logistics",
  "CleanTech & Energy Optimization",
  "Autonomous Robotics & Computer Vision",
  "FinTech Fraud Detection & Compliance",
  "Natural Language & Voice Interfaces",
  "Scalable Distributed Databases",
  "Augmented Reality Industrial Tech",
  "Cross-Platform Collaborative Tools",
  "Real-Time Analytics & Streaming AI"
];

// Generate 15 Problem Statements for a given year
function generateProblemStatements(yearPrefix, domainList) {
  const problems = [];
  for (let i = 1; i <= 15; i++) {
    const paddedIndex = i.toString().padStart(2, "0");
    const domain = domainList[i - 1] || "Technology Innovation";
    const icon = ICONS[(i - 1) % ICONS.length];
    
    problems.push({
      id: i,
      code: `PS-${yearPrefix === "2nd" ? "2Y" : "3Y"}-${paddedIndex}`,
      title: `Problem Statement ${i}`,
      subtitle: `Domain: ${domain}`,
      category: domain,
      icon: icon,
      year: yearPrefix,
      shortDescription: `Description placeholder for Problem Statement ${i}. Teams will build an end-to-end working prototype solving key bottlenecks in ${domain.toLowerCase()}.`,
      fullDescription: `
        <h3>Challenge Overview</h3>
        <p>This is the detailed specification for <strong>Problem Statement ${i} (${yearPrefix} Year Track)</strong>. Your objective is to formulate an innovative, scalable, and technically sound solution addressing challenges in <em>${domain}</em>.</p>
        
        <div class="modal-section-box">
          <h4>Key Objectives & Deliverables</h4>
          <ul>
            <li>Design and build a fully functioning prototype demonstrating the core concept.</li>
            <li>Implement robust architecture, clean codebase, and an intuitive user interface.</li>
            <li>Provide real-time data handling, mock APIs or live integrations where applicable.</li>
            <li>Include test cases, comprehensive documentation, and a slide deck for final evaluation.</li>
          </ul>
        </div>

        <div class="modal-section-box">
          <h4>Suggested Tech Stack & Tools</h4>
          <p>Participants are free to choose their preferred stack. Suggested: Modern Web (React / Next.js / Vue), Backend (Node.js / Python / Go / Java), Databases (PostgreSQL / MongoDB), Cloud / Containerization (Docker, AWS, Vercel).</p>
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
      tags: [yearPrefix + " Year", domain.split(" ")[0], "Hackathon 2026"]
    });
  }
  return problems;
}

// Data Store
const DATA = {
  "2nd": generateProblemStatements("2nd", DOMAINS_2ND_YEAR),
  "3rd": generateProblemStatements("3rd", DOMAINS_3RD_YEAR)
};

// Application State
let currentYear = "2nd";
let currentPage = 1;
let isViewAll = false;
let searchQuery = "";

// Active problem code in modal
let activeProblemCode = "";

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
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

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
      : `<span>View All 15 Problem Statements</span> <i data-lucide="arrow-right"></i>`;
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
window.goToPage = function(page) {
  currentPage = page;
  renderProblemStatements();
  const section = document.getElementById("problem-statements-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Open Detailed Problem Modal
window.openProblemModal = function(year, id) {
  const list = DATA[year] || [];
  const problem = list.find(p => p.id === id);
  if (!problem) return;

  const modal = document.getElementById("problem-modal");
  const modalTitle = document.getElementById("modal-ps-title");
  const modalCode = document.getElementById("modal-ps-code");
  const modalDomain = document.getElementById("modal-ps-domain");
  const modalBody = document.getElementById("modal-ps-body");

  activeProblemCode = problem.code;
  modalTitle.textContent = problem.title;
  modalCode.textContent = problem.code;
  modalDomain.textContent = `${problem.year} Year Track • ${problem.category}`;
  modalBody.innerHTML = problem.fullDescription;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
};

// Copy Problem Code to Clipboard
window.copyProblemCode = function() {
  if (!activeProblemCode) return;
  navigator.clipboard.writeText(activeProblemCode).then(() => {
    showToast(`Copied ${activeProblemCode} to clipboard!`);
  }).catch(() => {
    showToast(`Problem Code: ${activeProblemCode}`);
  });
};

// Close Modal
function closeModal() {
  const modal = document.getElementById("problem-modal");
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
