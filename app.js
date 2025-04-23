// Main JavaScript for the AI Research System

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const researchForm = document.getElementById('research-form');
    const queryInput = document.getElementById('query-input');
    const submitButton = document.getElementById('submit-button');
    const loadingSpinner = document.getElementById('loading-spinner');
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    
    // Handle research form submission
    if (researchForm) {
        researchForm.addEventListener('submit', function(e) {
            // Validate the query
            if (!queryInput.value.trim()) {
                e.preventDefault();
                showAlert('Please enter a research query', 'danger');
                return;
            }
            
            // Show loading state
            showLoading(true);
        });
    }
    
    // Function to show/hide loading state
    function showLoading(isLoading) {
        if (isLoading) {
            submitButton.disabled = true;
            loadingSpinner.classList.remove('d-none');
            submitButton.textContent = 'Researching...';
        } else {
            submitButton.disabled = false;
            loadingSpinner.classList.add('d-none');
            submitButton.textContent = 'Research';
        }
    }
    
    // Function to show alerts
    function showAlert(message, type) {
        const alertContainer = document.getElementById('alert-container');
        const alertElement = document.createElement('div');
        alertElement.className = `alert alert-${type} alert-dismissible fade show`;
        alertElement.role = 'alert';
        
        alertElement.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        
        alertContainer.appendChild(alertElement);
        
        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            const alert = new bootstrap.Alert(alertElement);
            alert.close();
        }, 5000);
    }
    
    // Result page - Show/hide research steps
    const showStepsButton = document.getElementById('show-steps-button');
    if (showStepsButton) {
        showStepsButton.addEventListener('click', function() {
            const stepsContainer = document.getElementById('research-steps-container');
            if (stepsContainer.classList.contains('d-none')) {
                stepsContainer.classList.remove('d-none');
                showStepsButton.textContent = 'Hide Research Steps';
            } else {
                stepsContainer.classList.add('d-none');
                showStepsButton.textContent = 'Show Research Steps';
            }
        });
    }
    
    // Collapsible sections
    const collapsibles = document.querySelectorAll('.research-collapsible');
    collapsibles.forEach(section => {
        const header = section.querySelector('.collapsible-header');
        const content = section.querySelector('.collapsible-content');
        
        if (header && content) {
            header.addEventListener('click', function() {
                content.classList.toggle('d-none');
                const icon = this.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                }
            });
        }
    });
});
