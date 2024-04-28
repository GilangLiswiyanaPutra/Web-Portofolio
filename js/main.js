document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
  
    const removeActiveClass = () => {
      navLinks.forEach(link => link.classList.remove('active'));
    };
  
    const setActiveClass = (link) => {
      removeActiveClass();
      link.classList.add('active');
    };
  
    window.addEventListener('scroll', () => {
      let currentSection = null;
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPos = window.scrollY;
  
        if (scrollPos >= sectionTop - 100 && scrollPos < sectionTop + sectionHeight) {
          currentSection = section;
        }
      });
  
      if (currentSection) {
        const activeLink = document.querySelector(`a[href="#${currentSection.id}"]`);
        if (activeLink) {
          setActiveClass(activeLink);
        }
      }
    });
  });
  