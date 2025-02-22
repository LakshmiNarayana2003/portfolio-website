document.addEventListener('DOMContentLoaded', function() {
    // Project data
    const projectData = {
        figam: [
            {
                title: "Chatbot-pdf-analyzer",
                description: "Chatbot PDF Analyzer, which combines the functionality of a conversational assistant with the ability to analyze PDF documents",
                url: "https://github.com/LakshmiNarayana2003/Chatbot-pdf-analyzer"
            },
            {
                title: "Hand-Free-Touch",
                description: "Project implements a gesture-based scrolling on YouTube Shorts via webcam, OpenCV",
                url: "https://github.com/LakshmiNarayana2003/Hand-Free-Touch-"
            },
            {
                title: "Cation-generation",
                description: "This project focuses on developing an image captioning model using a (CNN) and (RNN) architecture",
                url: "https://github.com/LakshmiNarayana2003/Image-Cation-generation"
            }
        ],
        aiml: [
            {
                title: "Fitness app",
                description: "I designed a Fitness App using Figma that focuses on tracking and visualizing user progress",
                url: "https://www.figma.com/design/2gGEpRSYDxG3WQiua94nnQ/%5BFREE%5D-MetaPeople-3D-Avatar-(Community)?node-id=4305-34&p=f&t=n7MW42smOCBoc72u-0"
            },
            {
                title: "Front-End Design",
                description: "Front-end design for a Grocery Store website, focusing on an intuitive and user-friendly interface",
                url: "https://www.figma.com/design/2gGEpRSYDxG3WQiua94nnQ/%5BFREE%5D-MetaPeople-3D-Avatar-(Community)?node-id=4191-2&p=f&t=n7MW42smOCBoc72u-0"
            },
            {
                title: "Finance Tracker Design",
                description: "Personal Finance Tracker application design that helps users manage their finances effectively.",
                url: "https://www.figma.com/design/2gGEpRSYDxG3WQiua94nnQ/%5BFREE%5D-MetaPeople-3D-Avatar-(Community)?node-id=4110-3&p=f&t=n7MW42smOCBoc72u-0"
            }
        ],
        python: [
            {
                title: "File Organizer",
                description: "The script automates the process of organizing files from the Downloads folder into categorized folders based on their file types.",
                url: "https://github.com/LakshmiNarayana2003/File-Organizer-Automation"
            },
            {
                title: "YouTube extract subtitle",
                description: "It automates tasks such as downloading YouTube audio, transcribing it, and saving the transcription as a JSON",
                url: "https://github.com/LakshmiNarayana2003/YT--extract-subtitles"
            },
            {
                title: "Web Scraper",
                description: "Developed a Web Scraper to efficiently extract and process data from websites.",
                url: "https://github.com/LakshmiNarayana2003?tab=repositories"
            }
        ],
        other: [
            {
                title: "Price Prediction",
                description: "Project focuses on predicting real estate prices in Bangalore using machine learning techniques",
                url: "https://github.com/LakshmiNarayana2003/real_estate_price_prediction"
            },
            {
                title: "First Website",
                description: "This is my first website, created using HTML, CSS, and JS. The project demonstrates my foundational skills in web development",
                url: "https://github.com/LakshmiNarayana2003/My-website"
            },
            {
                title: "Weather App",
                description: "Real-time weather information display application.",
                url: "https://github.com/LakshmiNarayana2003?tab=repositories"
            }
        ]
    };

    // Get all sections and nav links
    const sections = document.querySelectorAll('.container section');
    const navLinks = document.querySelectorAll('.nav-links a');
    let isScrolling = false;
    let currentSectionIndex = 0;

    // Function to switch pages
    function switchToPage(index) {
        if (index < 0 || index >= sections.length) return;
        
        sections.forEach(section => section.style.display = 'none');
        navLinks.forEach(link => link.classList.remove('active'));
        
        sections[index].style.display = 'block';
        navLinks[index].classList.add('active');
        currentSectionIndex = index;

        // If switching to projects section, ensure projects are displayed
        if (sections[index].id === 'projects-section') {
            const activeCategory = document.querySelector('.project-btn.active')?.dataset.category || 'figam';
            displayProjects(activeCategory);
        }
    }

    // Handle navbar clicks
    document.querySelector('.nav-links').addEventListener('click', function(e) {
        e.preventDefault();
        const link = e.target.closest('a');
        if (!link) return;

        const index = Array.from(navLinks).indexOf(link);
        if (index !== -1) {
            switchToPage(index);
        }
    });

    // Handle mouse wheel scrolling
    document.addEventListener('wheel', function(e) {
        if (isScrolling) return;
        isScrolling = true;

        // Determine scroll direction
        if (e.deltaY > 0) {
            // Scrolling down
            switchToPage(currentSectionIndex + 1);
        } else {
            // Scrolling up
            switchToPage(currentSectionIndex - 1);
        }

        // Prevent multiple scroll events
        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }, { passive: false });

    // Function to create a single project card
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.url}" class="project-link" target="_blank" rel="noopener noreferrer">🔗 Link</a>
        `;
        return card;
    }

    // Function to display projects for a category
    function displayProjects(category) {
        const container = document.querySelector('.project-cards-container');
        if (!container || !projectData[category]) return;

        container.innerHTML = '';
        projectData[category].forEach((project, index) => {
            const card = createProjectCard(project);
            card.style.animationDelay = `${index * 0.1}s`;
            container.appendChild(card);
        });
    }

    // Set up project button handlers
    const projectButtons = document.querySelectorAll('.project-btn');
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            projectButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            displayProjects(this.dataset.category);
        });
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            switchToPage(currentSectionIndex + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            switchToPage(currentSectionIndex - 1);
        }
    });

    // Initialize the page
    switchToPage(0);
    displayProjects('figam');

    // Log initialization
    console.log('Website script initialized');
});