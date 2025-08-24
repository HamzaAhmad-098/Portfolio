document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
  });
  const skillBarObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.bar-fill').forEach(bar => {
          if (!bar.classList.contains('animated')) {
            const targetWidth = bar.getAttribute('data-width');
            if (targetWidth) {
              bar.style.width = targetWidth + "%";
              bar.classList.add('animated');
            }
          }
        });
      }
    });
  }, { threshold: 0.3 });

  const skillsSection = document.querySelector('#experience .skills-bars');
  if (skillsSection) {
    skillBarObserver.observe(skillsSection);
  }
  const projectData = {
    "voice-robot": {
      title: "Voice Controlled Robot",
      description: "Arduino-based robot with voice commands using HC-06 Bluetooth module.",
      usage: "1. Connect HC-06 to Arduino.\n2. Upload code.\n3. Use mobile app to send voice commands.",
      screenshots: [
        "voice-robot-1.jpg"
      ],
      video: "voice-robot-demo.mp4",
      zip: "voice-robot.zip"
    },
    "finance-tracker": {
      title: "Finance Tracker App",
      description: "Windows Forms app using C# and MySQL to manage event finances.",
      usage: "1. Install dependencies.\n2. Set up MySQL database using provided script.\n3. Run the app and connect to the DB.",
      zip: "https://1drv.ms/u/c/f5913ab9f1d9a5b5/EReSjwG-JUFGupzPIKcMmc0BdU3I_86tRSnV_vWE-oXBpg?e=gdVJ30"
    },
    "orange-train-app": {
      title: "Orange Train Application",
      description: "Purchase online tickets for Lahore's Orange Train. Built in C# with a user-friendly interface for quick bookings.",
      usage: "1. Download and extract ZIP.\n2. Open solution in Visual Studio.\n3. Build and run the application.",
      screenshots: [],
      video: "train.mp4",
      zip: "https://1drv.ms/u/c/f5913ab9f1d9a5b5/EWWQnlR2UpZMnM0OCnnsgRAB-LVoT-FsgpyybM3nZDm25w?e=gN4fH9"
    },
    "number-system-encryptor": {
      title: "Number System Converter & Encryption Tool",
      description: "Convert between number systems, encrypt/decrypt commands using custom keys or bitwise operations. All-in-one C# console app.",
      usage: "1. Compile the project.\n2. Run the executable in terminal.\n3. Follow menu instructions.",
      screenshots: [],
      video: "base.mp4",
      zip: "https://1drv.ms/u/c/f5913ab9f1d9a5b5/ERAtUezw2FNJlHuhEw5ioa4BAZJ36pN87ZuWW8qH3EcCNw?e=xhTQiS"
    },
    "path-finders-duel": {
      title: "Path Finder's Duel (C++ Console Game)",
      description: "ASCII-based 2-player pathfinding duel. Use arrow keys to compete and find the best path!",
      usage: "1. Compile using a C++ compiler.\n2. Run the executable.\n3. Enjoy two-player gameplay.",
      screenshots: [],
      video: "path.mp4",
      zip: "https://1drv.ms/u/c/f5913ab9f1d9a5b5/EdiXIav-PElKm_A8z6K8sG8BqhqgaDhRXPIi39yB5M_OiQ?e=SEO9Wt"
    },
    "tic-tac-toe-cpp": {
      title: "Tic Tac Toe (C++ Console Game)",
      description: "Classic tic-tac-toe game for the console, made with C++ and ASCII graphics.",
      usage: "1. Compile using a C++ compiler.\n2. Run the executable.\n3. Play the game.",
      screenshots: [],
      video: "tic.mp4",
      zip: "https://1drv.ms/u/c/f5913ab9f1d9a5b5/EWuyNMIzGIRMv2OvDxOe2yQBbDfOxxSoREw0ipUKAp0qUw?e=hzBDZV"
    },
    "math-solver-kit": {
      title: "Math Solver Kit App",
      description: "A comprehensive Windows Forms application in C# for solving math problems, equations, and more. User-friendly UI for students and professionals.",
      usage: "1. Download and extract ZIP.\n2. Open solution in Visual Studio.\n3. Build and run the application.",
      screenshots: [],
      video: "kit.mp4",
      zip: "https://1drv.ms/u/c/f5913ab9f1d9a5b5/ERSTcI_fJg9CsRMtWKQChaMBuba6JMnwaAVEZqf3tMYQEA?e=pPOh5p"
    },
    "sneezegame": {
      title: "SneezeGame",
      description: "A fun game implemented in both Python and Processing IDE. Dodge and sneeze through obstacles to score high!",
      usage: "1. Open project files in Python or Processing IDE.\n2. Run the appropriate script.\n3. Play and enjoy!",
      screenshots: [],
      video: "sneeze.mp4",
      zip: "https://1drv.ms/u/c/f5913ab9f1d9a5b5/EQ3cE5m1WTBIhiDrbatcdg4BzXC2lTKbJUSJD_9FftNnOg?e=o5qmTQ"
    },
    "bike-factory-app": {
      title: "Bike Factory App",
      description: "A management system for a bike manufacturing factory. Includes inventory, orders, and staff modules. Developed with C# and SQL.",
      usage: "1. Download and extract ZIP.\n2. Open solution in Visual Studio.\n3. Build and run the application.",
      screenshots: [],
      video: "bike.mp4",
      zip: "https://1drv.ms/u/c/f5913ab9f1d9a5b5/ET2_NgQRaPBMrVpAwQiqrGUBNjXBNK3KEq6aOCpSnuI06Q?e=gQZZw4"
    }
  };
  document.querySelectorAll('.project-details-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const projectKey = this.getAttribute('data-project');
      const data = projectData[projectKey];
      if (!data) return;
      let html = `<h2>${data.title}</h2>
        <p>${data.description}</p>
        <h4>Usage Instructions</h4>
        <pre style="white-space:pre-wrap;">${data.usage}</pre>
        ${data.screenshots && data.screenshots.length ? '<h4>Screenshots</h4>' + data.screenshots.map(img => `<img src="${img}" alt="screenshot">`).join('') : ''}
        ${data.video ? `<h4>Workflow Video</h4><video class="project-video" controls src="${data.video}"></video>` : ''}
        ${data.zip ? `<a href="${data.zip}" class="modal-download" download>Download ZIP</a>` : ''}`;
      document.getElementById('modal-body').innerHTML = html;
      document.getElementById('project-modal').style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });
  document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('project-modal').style.display = "none";
    document.body.style.overflow = "";
  });
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('project-modal')) {
      document.getElementById('project-modal').style.display = "none";
      document.body.style.overflow = "";
    }
  });
  const feedbackForm = document.getElementById('feedback-form');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(feedbackForm);
      fetch(feedbackForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          document.getElementById('feedback-message').textContent = 'Thank you for your feedback!';
          feedbackForm.reset();
        } else {
          document.getElementById('feedback-message').textContent = 'Oops! Something went wrong.';
        }
      })
      .catch(() => {
        document.getElementById('feedback-message').textContent = 'Network error. Please try again.';
      });
    });
  }
});
