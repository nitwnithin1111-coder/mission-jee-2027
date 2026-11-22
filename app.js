// State Management
let currentSubject = 'all';
let currentChapter = 'all';
let searchQuery = '';
let bookmarkedOnly = false;
let bookmarks = JSON.parse(localStorage.getItem('jee_formula_bookmarks') || '[]');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateBookmarkCount();
  renderChapterPills();
  renderCards();
});

// KaTeX auto-render helper
function triggerKaTeX() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.getElementById('cardsGrid'), {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  }
}

function initKaTeX() {
  triggerKaTeX();
}

// Update Bookmarks Count in Header
function updateBookmarkCount() {
  const countEl = document.getElementById('bookmarkCount');
  if (countEl) countEl.textContent = bookmarks.length;
}

// Toggle Bookmark
function toggleBookmark(id, event) {
  if (event) event.stopPropagation();
  const index = bookmarks.indexOf(id);
  if (index > -1) {
    bookmarks.splice(index, 1);
  } else {
    bookmarks.push(id);
  }
  localStorage.setItem('jee_formula_bookmarks', JSON.stringify(bookmarks));
  updateBookmarkCount();
  renderCards();
}

// Toggle Bookmarked Only filter
function toggleBookmarkedOnly() {
  bookmarkedOnly = !bookmarkedOnly;
  const btn = document.getElementById('bookmarkedOnlyBtn');
  if (bookmarkedOnly) {
    btn.classList.add('bg-amber-500/20', 'border-amber-500/50', 'text-amber-300');
    btn.classList.remove('bg-slate-800/60', 'border-slate-700', 'text-slate-300');
  } else {
    btn.classList.remove('bg-amber-500/20', 'border-amber-500/50', 'text-amber-300');
    btn.classList.add('bg-slate-800/60', 'border-slate-700', 'text-slate-300');
  }
  renderCards();
}

// Set Active Subject Tab
function setSubject(subject) {
  currentSubject = subject;
  currentChapter = 'all';

  // Update tabs UI
  ['all', 'physics', 'chemistry', 'math'].forEach(s => {
    const tab = document.getElementById(`tab-${s}`);
    if (s === subject) {
      tab.className = 'flex-1 py-1.5 text-xs font-semibold rounded-lg transition bg-indigo-600 text-white shadow';
    } else {
      tab.className = 'flex-1 py-1.5 text-xs font-semibold rounded-lg transition text-slate-400 hover:text-white';
    }
  });

  renderChapterPills();
  renderCards();
}

// Render Chapter Filter Pills
function renderChapterPills() {
  const container = document.getElementById('chapterPillsContainer');
  container.innerHTML = '';

  let list = FORMULAS_DATA;
  if (currentSubject !== 'all') {
    list = list.filter(f => f.subject === currentSubject);
  }

  const chapters = ['all', ...new Set(list.map(f => f.chapter))];

  chapters.forEach(ch => {
    const pill = document.createElement('button');
    const isSelected = currentChapter === ch;
    pill.className = `px-2.5 py-1 rounded-md text-[11px] font-medium transition ${
      isSelected
        ? 'bg-slate-200 text-slate-900 font-bold'
        : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
    }`;
    pill.textContent = ch === 'all' ? 'All Chapters' : ch;
    pill.onclick = () => {
      currentChapter = ch;
      renderChapterPills();
      renderCards();
    };
    container.appendChild(pill);
  });
}

// Search input handler
function handleSearch() {
  const input = document.getElementById('searchInput');
  searchQuery = input.value.toLowerCase().trim();
  renderCards();
}

// Reset filters
function resetFilters() {
  currentSubject = 'all';
  currentChapter = 'all';
  searchQuery = '';
  bookmarkedOnly = false;
  document.getElementById('searchInput').value = '';
  setSubject('all');
}

// Copy Formula to Clipboard
function copyFormula(latex, btnId) {
  navigator.clipboard.writeText(latex).then(() => {
    const btn = document.getElementById(btnId);
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ Copied';
      btn.classList.add('text-emerald-400');
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.classList.remove('text-emerald-400');
      }, 1500);
    }
  });
}

// Filter and Render Cards
function renderCards() {
  const grid = document.getElementById('cardsGrid');
  const emptyState = document.getElementById('emptyState');
  const visibleCountEl = document.getElementById('visibleCount');

  let filtered = FORMULAS_DATA.filter(f => {
    // Subject filter
    if (currentSubject !== 'all' && f.subject !== currentSubject) return false;
    // Chapter filter
    if (currentChapter !== 'all' && f.chapter !== currentChapter) return false;
    // Bookmark filter
    if (bookmarkedOnly && !bookmarks.includes(f.id)) return false;
    // Search query filter
    if (searchQuery) {
      const textToSearch = `${f.title} ${f.chapter} ${f.story} ${f.funNote} ${f.latex}`.toLowerCase();
      if (!textToSearch.includes(searchQuery)) return false;
    }
    return true;
  });

  visibleCountEl.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  grid.innerHTML = filtered.map(f => {
    const isBookmarked = bookmarks.includes(f.id);

    // Subject badge styles
    const badgeColors = {
      physics: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      chemistry: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      math: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    };

    const subjectIcons = {
      physics: '⚡ Physics',
      chemistry: '🧪 Chemistry',
      math: '📐 Math'
    };

    return `
      <article class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition shadow-lg relative group">
        <div>
          <!-- Header: Subject + Chapter + Star -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <div class="flex items-center space-x-1.5 flex-wrap gap-y-1">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold border ${badgeColors[f.subject]}">
                ${subjectIcons[f.subject]}
              </span>
              <span class="text-[11px] text-slate-400 font-medium">
                • ${f.chapter}
              </span>
            </div>

            <button onclick="toggleBookmark('${f.id}', event)" class="p-1 rounded-md text-slate-400 hover:text-amber-400 transition" title="Bookmark for revision">
              ${isBookmarked ? '⭐' : '☆'}
            </button>
          </div>

          <!-- Formula Title -->
          <h3 class="text-base font-bold text-white mb-2 leading-snug">
            ${f.title}
          </h3>

          <!-- Formula Box (LaTeX) -->
          <div class="formula-box bg-slate-950/80 border border-slate-800 rounded-xl p-3 my-2 text-center text-indigo-300 font-mono text-sm relative group/code shadow-inner">
            $$${f.latex}$$
            <button 
              id="btn-${f.id}" 
              onclick="copyFormula('${f.latex.replace(/\\/g, '\\\\')}', 'btn-${f.id}')"
              class="absolute top-2 right-2 text-[10px] bg-slate-800/80 hover:bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded opacity-0 group-hover/code:opacity-100 transition"
              title="Copy LaTeX">
              Copy
            </button>
          </div>

          <!-- Visual Diagram (if present) -->
          ${f.diagram ? `<div class="bg-slate-950/50 rounded-xl p-2 my-2 border border-slate-800/60 flex items-center justify-center">${f.diagram}</div>` : ''}

          <!-- The Intuitive Story Explanation -->
          <div class="mt-3 text-xs text-slate-300 leading-relaxed bg-slate-800/30 p-3 rounded-xl border border-slate-800/50">
            <span class="text-indigo-400 font-semibold block mb-1">💡 The Intuition & Story:</span>
            ${f.story}
          </div>

          <!-- Exam Trap / Kota Gossip Note -->
          <div class="mt-2 text-[11px] text-amber-300/90 leading-relaxed bg-amber-500/5 p-2.5 rounded-xl border border-amber-500/20">
            <span class="font-bold text-amber-400">⚠️ Exam Trap:</span> ${f.funNote}
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Re-render KaTeX on new cards
  triggerKaTeX();
}
