'use strict';
// Content and links remain available without JavaScript.
const tools = document.querySelector('.project-tools');
const cards = [...document.querySelectorAll('.project-card')];
const filters = [...document.querySelectorAll('[data-filter]')];
const search = document.querySelector('#project-search');
const count = document.querySelector('#project-count');
let selected = 'security';
function updateProjects() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matches = (selected === 'all' || card.dataset.category === selected) &&
      card.textContent.toLowerCase().includes(query);
    card.hidden = !matches;
    if (matches) visible++;
  });
  filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === selected)));
  count.textContent = `${visible} of ${cards.length} projects · ${selected === 'all' ? 'all categories' : selected}${query ? ' · search results' : ''}`;
  document.querySelector('#no-results').hidden = visible !== 0;
}
filters.forEach(button => button.addEventListener('click', () => {
  selected = button.dataset.filter;
  updateProjects();
}));
search.addEventListener('input', () => {
  // Typing searches the entire portfolio, including currently hidden categories.
  selected = 'all';
  updateProjects();
});
document.querySelector('[data-show-automation]').addEventListener('click', () => {
  selected = 'automation';
  search.value = '';
  updateProjects();
});
tools.hidden = false;
updateProjects();
const menu = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-navigation');
const mobile = window.matchMedia('(max-width:760px)');
function resetMenu() {
  navigation.hidden = mobile.matches;
  menu.setAttribute('aria-expanded', String(!navigation.hidden));
}
menu.addEventListener('click', () => {
  navigation.hidden = !navigation.hidden;
  menu.setAttribute('aria-expanded', String(!navigation.hidden));
});
navigation.addEventListener('click', event => {
  if (mobile.matches && event.target.closest('a')) resetMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && !navigation.hidden) {
    resetMenu();
    menu.focus();
  }
});
mobile.addEventListener('change', resetMenu);
resetMenu();
