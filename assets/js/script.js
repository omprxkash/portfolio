'use strict';

// Utility — toggle "active" class
const elementToggleFunc = (elem) => elem.classList.toggle('active');

// Sidebar toggle (mobile)
const sidebar    = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
sidebarBtn?.addEventListener('click', () => elementToggleFunc(sidebar));

// Page navigation
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages    = document.querySelectorAll('article[data-page]');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const target = link.textContent.trim().toLowerCase();
    pages.forEach((page) => {
      page.classList.toggle('active', page.dataset.page === target);
    });
    navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
    window.scrollTo(0, 0);
  });
});

// Portfolio filter — shared apply function
const filterBtns  = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

const applyFilter = (selectedValue) => {
  filterItems.forEach((item) => {
    const match = selectedValue === 'all' || item.dataset.category === selectedValue;
    item.classList.toggle('active', match);
  });
};

// Desktop button filters
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.textContent.trim().toLowerCase();
    applyFilter(value);
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Mobile select dropdown
const selectBox      = document.querySelector('[data-select]');
const selectItems    = document.querySelectorAll('[data-select-item]');
const selectValueEl  = document.querySelector('[data-select-value]');

selectBox?.addEventListener('click', () => elementToggleFunc(selectBox));

selectItems.forEach((item) => {
  item.addEventListener('click', () => {
    const value = item.textContent.trim().toLowerCase();
    if (selectValueEl) selectValueEl.textContent = item.textContent.trim();
    elementToggleFunc(selectBox);
    applyFilter(value);
  });
});

// Form validation
const form       = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn    = document.querySelector('[data-form-btn]');

formInputs.forEach((input) => {
  input.addEventListener('input', () => {
    formBtn.disabled = !form.checkValidity();
  });
});
