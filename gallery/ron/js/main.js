/* ============================================================
   MAIN.JS — Theme toggle, nav active state, mobile nav
   ============================================================ */

(function () {
  'use strict';

  // --- THEME ---
  const THEME_KEY = 'ron-theme';
  const root = document.documentElement;

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btn.querySelector('.icon-sun')?.classList.toggle('hidden', theme === 'dark');
      btn.querySelector('.icon-moon')?.classList.toggle('hidden', theme === 'light');
    }
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    applyTheme(saved || getSystemTheme());
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme') || getSystemTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  // Listen for system preference change (only if user hasn't overridden)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // --- NAV ACTIVE STATE ---
  function setActiveNav() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === filename || (filename === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // --- MOBILE NAV ---
  function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('open');
      }
    });
  }

  // --- TABS ---
  function initTabs() {
    document.querySelectorAll('.tab-bar').forEach(bar => {
      bar.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.tab;
          const container = btn.closest('.tab-container') || btn.closest('.card') || document;

          // Deactivate all
          bar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

          // Activate clicked
          btn.classList.add('active');
          const panel = container.querySelector(`.tab-panel[data-tab="${target}"]`);
          if (panel) panel.classList.add('active');
        });
      });
    });
  }

  // --- INIT ---
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setActiveNav();
    initMobileNav();
    initTabs();

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  });
})();
