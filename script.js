// Tab switching functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
    });
});

// Search functionality
document.querySelector('.search-bar input').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    console.log('Searching for:', query);
    // Add search logic here
});

// Connect Wallet button
document.querySelector('.btn-connect').addEventListener('click', function() {
    alert('Connect Wallet functionality would be implemented here');
});

// Copy address to clipboard
document.querySelector('.address').addEventListener('click', function() {
    const address = this.textContent;
    navigator.clipboard.writeText(address);
    
    // Show temporary feedback
    const originalText = this.textContent;
    this.textContent = 'Copied!';
    setTimeout(() => {
        this.textContent = originalText;
    }, 2000);
});

// Transaction row interactions
document.querySelectorAll('.transaction-item').forEach(item => {
    item.addEventListener('click', function() {
        const hash = this.querySelector('.tx-hash code')?.textContent;
        if (hash) {
            console.log('Transaction hash:', hash);
        }
    });
});

// Filter transactions
document.querySelectorAll('.select-filter').forEach(select => {
    select.addEventListener('change', function() {
        const filterType = this.previousElementSibling?.textContent || 'Unknown';
        const value = this.value;
        console.log(`Filtering by ${filterType}: ${value}`);
        // Add filter logic here
    });
});

// Animate transaction items on page load
window.addEventListener('load', function() {
    const items = document.querySelectorAll('.transaction-item');
    items.forEach((item, index) => {
        item.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.05}s forwards`;
        item.style.opacity = '0';
    });
});

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Make transaction hashes copyable
document.querySelectorAll('.tx-hash code').forEach(code => {
    code.style.cursor = 'pointer';
    code.addEventListener('click', function(e) {
        e.stopPropagation();
        navigator.clipboard.writeText(this.textContent);
        
        const originalText = this.textContent;
        this.textContent = 'Copied!';
        setTimeout(() => {
            this.textContent = originalText;
        }, 1500);
    });
});

console.log('Tonviewer UI loaded successfully');
