document.addEventListener('DOMContentLoaded', function() {
    const resources = [
        {
            id: 1,
            title: "Computer Science Textbook",
            image: "images/books/cs.jpg",
            pdf: "pdfs/computer-science.pdf",
            type: "E-book"
        },
        {
            id: 2,
            title: "Advanced Mathematics",
            image: "images/books/math.jpg",
            pdf: "pdfs/advanced-math.pdf",
            type: "E-book"
        },
        {
            id: 3,
            title: "Physics Laboratory Manual",
            image: "images/books/physics.jpg",
            pdf: "pdfs/physics-lab.pdf",
            type: "Manual"
        },
        {
            id: 4,
            title: "Chemistry Reference Guide",
            image: "images/books/chemistry.jpg",
            pdf: "pdfs/chemistry-guide.pdf",
            type: "Reference"
        },
        {
            id: 5,
            title: "Scientific Calculator Guide",
            image: "images/instruments/calculator.jpg",
            pdf: "pdfs/calculator-guide.pdf",
            type: "Instrument"
        },
        {
            id: 6,
            title: "Microscope User Manual",
            image: "images/instruments/microscope.jpg",
            pdf: "pdfs/microscope-manual.pdf",
            type: "Manual"
        },
        {
            id: 7,
            title: "Engineering Drawing Kit",
            image: "images/instruments/drawing-kit.jpg",
            pdf: "pdfs/drawing-kit.pdf",
            type: "Instrument"
        }
    ];

    const container = document.getElementById('resource-container');
    
    if (container) {
        container.innerHTML = resources.map(resource => `
            <div class="resource-card">
                <img src="${resource.image}" 
                     alt="${resource.title}" 
                     class="resource-image"
                     onerror="this.src='images/default.jpg'">
                
                <div class="resource-info">
                    <h3 class="resource-title">${resource.title}</h3>
                    <span class="resource-type">${resource.type}</span>
                    
                    <a href="${resource.pdf}" 
                       target="_blank"
                       class="view-btn">
                       Open PDF
                    </a>
                </div>
            </div>
        `).join('');
        
        // Add click tracking (optional)
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                console.log('Opened PDF:', this.getAttribute('href'));
            });
        });
    } else {
        console.error('Resource container not found!');
    }
});
const resources = [
    {
        id: 1,
        title: "Computer Science Textbook",
        image: "images/books/cs.jpg",  // Path to image
        pdf: "pdfs/computer-science.pdf",  // Path to PDF
        type: "E-book"
    },
    // ... other resources
];
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Debounce function to prevent rapid firing of search events
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        };
    }

    // Resource data with all images and PDFs
    function loadResources() {
        return new Promise((resolve) => {
            // Comprehensive resource data
            const resources = [
                // E-books
                {
                    id: 1,
                    title: "Computer Science Textbook",
                    image: "images/books/cs.jpg",
                    pdf: "pdfs/computer-science.pdf",
                    type: "E-book"
                },
                {
                    id: 2,
                    title: "Advanced Mathematics",
                    image: "images/books/maths.jpg",
                    pdf: "pdfs/advanced-math.pdf",
                    type: "E-book"
                },
                {
                    id: 3,
                    title: "Physics Principles",
                    image: "images/books/physics.jpg",
                    pdf: "pdfs/physics-principles.pdf",
                    type: "E-book"
                },
                {
                    id: 4,
                    title: "Chemistry Fundamentals",
                    image: "images/books/chemistry.jpg",
                    pdf: "pdfs/chemistry-fundamentals.pdf",
                    type: "E-book"
                },
                
                // Manuals
                {
                    id: 5,
                    title: "Physics Laboratory Manual",
                    image: "images/books/physics.jpg",
                    pdf: "pdfs/physics-lab.pdf",
                    type: "Manual"
                },
                {
                    id: 6,
                    title: "Chemistry Lab Procedures",
                    image: "https://images.unsplash.com/photo-1567168544648-accdf3cd8669?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    pdf: "pdfs/chemistry-lab.pdf",
                    type: "Manual"
                },
                {
                    id: 7,
                    title: "Microscope User Manual",
                    image: "images/instruments/microscope.jpg",
                    pdf: "pdfs/microscope-manual.pdf",
                    type: "Manual"
                },
                {
                    id: 8,
                    title: "Telescope Setup Guide",
                    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    pdf: "pdfs/telescope-guide.pdf",
                    type: "Manual"
                },
                
                // References
                {
                    id: 9,
                    title: "Chemistry Reference Guide",
                    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    pdf: "pdfs/chemistry-guide.pdf",
                    type: "Reference"
                },
                {
                    id: 10,
                    title: "Periodic Table Reference",
                    image: "https://images.unsplash.com/photo-1560574188-6a6774965120?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    pdf: "pdfs/periodic-table.pdf",
                    type: "Reference"
                },
                {
                    id: 11,
                    title: "Mathematical Formulas",
                    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    pdf: "pdfs/math-formulas.pdf",
                    type: "Reference"
                },
                {
                    id: 12,
                    title: "Programming Syntax Guide",
                    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    pdf: "pdfs/programming-syntax.pdf",
                    type: "Reference"
                },
                
                // Instruments
                {
                    id: 13,
                    title: "Scientific Calculator Guide",
                    image: "images/instruments/calculator.jpg",
                    pdf: "pdfs/calculator-guide.pdf",
                    type: "Instrument"
                },
                {
                    id: 14,
                    title: "Engineering Drawing Kit",
                    image: "images/instruments/drawing-kit.jpg",
                    pdf: "pdfs/drawing-kit.pdf",
                    type: "Instrument"
                },
                {
                    id: 15,
                    title: "Microscope Parts Diagram",
                    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    pdf: "pdfs/microscope-diagram.pdf",
                    type: "Instrument"
                },
                {
                    id: 16,
                    title: "Telescope Maintenance Guide",
                    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    pdf: "pdfs/telescope-maintenance.pdf",
                    type: "Instrument"
                },
                {
                    id: 17,
                    title: "Bunsen Burner Safety",
                    image: "https://images.unsplash.com/photo-1567168544648-accdf3cd8669?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    pdf: "pdfs/bunsen-burner.pdf",
                    type: "Instrument"
                },
                {
                    id: 18,
                    title: "Lab Glassware Guide",
                    image: "https://images.unsplash.com/photo-1567168544648-accdf3cd8669?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    pdf: "pdfs/glassware-guide.pdf",
                    type: "Instrument"
                }
            ];
            resolve(resources);
        });
    }

    // DOM elements
    const container = document.getElementById('resource-container');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentFilter = 'all';
    let allResources = [];

    // Render resources with loading state
    function renderResources(filteredResources) {
        if (!container) return;
        
        // Show loading state
        container.innerHTML = '<div class="no-results"><div class="loading"></div> Loading resources...</div>';
        
        // Small delay to allow DOM to update (prevents flickering)
        setTimeout(() => {
            if (filteredResources.length === 0) {
                container.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 15px;"></i>
                        <h3>No resources found</h3>
                        <p>Try adjusting your search or filter</p>
                    </div>
                `;
            } else {
                container.innerHTML = filteredResources.map(resource => `
                    <div class="resource-card" data-type="${resource.type}">
                        <img src="${resource.image}" 
                             alt="${resource.title}" 
                             class="resource-image"
                             onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'">
                        
                        <div class="resource-info">
                            <h3 class="resource-title">${resource.title}</h3>
                            <span class="resource-type" data-type="${resource.type}">${resource.type}</span>
                            
                            <a href="${resource.pdf}" 
                               target="_blank"
                               class="view-btn">
                               <i class="fas fa-file-pdf"></i> Open PDF
                            </a>
                        </div>
                    </div>
                `).join('');
            }
        }, 50);
    }

    // Filter resources based on search and filter criteria
    function filterResources() {
        const searchTerm = searchInput.value.toLowerCase();
        let filtered = allResources;
        
        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(resource => 
                resource.title.toLowerCase().includes(searchTerm) || 
                resource.type.toLowerCase().includes(searchTerm)
            );
        }
        
        // Apply type filter
        if (currentFilter !== 'all') {
            filtered = filtered.filter(resource => 
                resource.type === currentFilter
            );
        }
        
        renderResources(filtered);
    }

    // Initialize the page
    async function init() {
        try {
            allResources = await loadResources();
            renderResources(allResources);
            
            // Set up event listeners
            searchInput.addEventListener('input', debounce(filterResources, 300));
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    currentFilter = this.dataset.filter;
                    filterResources();
                });
            });
        } catch (error) {
            console.error('Error loading resources:', error);
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 15px;"></i>
                    <h3>Error loading resources</h3>
                    <p>Please try again later</p>
                </div>
            `;
        }
    }

    // Start the application
    init();
});