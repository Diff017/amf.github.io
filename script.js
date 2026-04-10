<script>
  // Tab switching logic
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  function switchTab(tabId) {
    panels.forEach(panel => {
      panel.classList.remove('active-panel');
    });
    const activePanel = document.getElementById(tabId);
    if (activePanel) activePanel.classList.add('active-panel');
    
    tabs.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      }
    });
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-tab');
      switchTab(tabName);
    });
  });

  const quickCover = document.getElementById('quickCover');
  if (quickCover) {
    quickCover.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('cover');
    });
  }

  // Set default home
  switchTab('home');

  // Optional: if you want to replace placeholder with actual photo from second file, you can uncomment next lines:
  // const homeImg = document.getElementById('homePhoto');
  // if (homeImg) homeImg.src = "c:\\Users\\user\\Downloads\\PERSONAL DETAIL\\hensem pic.jpeg";  // your local path (won't work cross-browser for security, but demo)
  // For demo, we keep placeholders but design is fully aligned.
</script>