// Farm Status Chart Setup (Chart.js)
const ctx = document.getElementById('farmStatusChart').getContext('2d');
const farmStatusChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Water Usage (Liters)',
            data: [200, 210, 190, 220, 230, 250],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.raw + ' Liters';
                    }
                }
            }
        }
    }
});

// Toggle Irrigation Control Visibility
const toggleIrrigationBtn = document.getElementById('toggle-irrigation-btn');
const irrigationControl = document.getElementById('irrigation-control');

toggleIrrigationBtn.addEventListener('click', () => {
    // Toggle visibility of the irrigation control section
    if (irrigationControl.style.display === 'none') {
        irrigationControl.style.display = 'block';
    } else {
        irrigationControl.style.display = 'none';
    }
});

// Irrigation Control Logic
const manualButton = document.getElementById('manual-irrigation');
const autoButton = document.getElementById('auto-irrigation');
const irrigationStatusText = document.getElementById('irrigation-status-text');

let isIrrigating = false;

// Start manual irrigation
manualButton.addEventListener('click', () => {
    isIrrigating = true;
    updateIrrigationStatus();
});

// Start auto irrigation (mocked for now)
autoButton.addEvent
