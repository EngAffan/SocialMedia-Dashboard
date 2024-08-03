function createCharts() {
    // Fetch the JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Update text data
            document.getElementById('followers-count').innerText = data.followers.toLocaleString();
            document.getElementById('impressions').innerText = data.latestPostPerformance.impressions.toLocaleString();
            document.getElementById('likes').innerText = data.latestPostPerformance.likes.toLocaleString();
            document.getElementById('comments').innerText = data.latestPostPerformance.comments.toLocaleString();
            document.getElementById('engagement-rate').innerText = data.latestPostPerformance.engagementRate + '%';

            // Website Traffic Chart
            const trafficCtx = document.getElementById('traffic-chart').getContext('2d');
            new Chart(trafficCtx, {
                type: 'line',
                data: {
                    labels: data.websiteTraffic.labels,
                    datasets: [{
                        label: 'Sessions',
                        data: data.websiteTraffic.data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Revenue Chart
            const revenueCtx = document.getElementById('revenue-chart').getContext('2d');
            new Chart(revenueCtx, {
                type: 'bar',
                data: {
                    labels: data.revenueByPromoCode.labels,
                    datasets: [{
                        label: 'Revenue',
                        data: data.revenueByPromoCode.data,
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error loading the JSON data:', error));
}

// Call the function to create the chart when the DOM is loaded
window.onload = createCharts;

const menuIcon = document.querySelector('#memu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
