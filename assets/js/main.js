const menuToggle = document.getElementById('menu-toggle');
  const mobileSidebar = document.getElementById('mobile-sidebar');

  menuToggle.addEventListener('click', () => {
    mobileSidebar.classList.toggle('open');
  });

  // Close the sidebar when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!mobileSidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      mobileSidebar.classList.remove('open');
    }
  });