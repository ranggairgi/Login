// Simulasi Login
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === "admin" && password === "123") {
                alert("Login berhasil!");
                window.location.href = "dashboard.html";
            } else {
                alert("username atau password salah");
            }
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            alert("Log out berhasil");
            window.location.href = "index.html";
        });
    }

    // Chart.js initialization
    if (window.location.pathname.includes('dashboard.html')) {
        const barChart = new Chart(document.getElementById('barChart'), {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April'],
                datasets: [{ label: 'Sales', data: [65, 59, 80, 81], backgroundColor: 'rgba(75, 192, 192, 0.2)' }]
            }
        });

        const lineChart = new Chart(document.getElementById('lineChart'), {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{ label: 'Visitors', data: [30, 45, 60, 80], borderColor: 'rgba(153, 102, 255, 1)', fill: false }]
            }
        });

        const pieChart = new Chart(document.getElementById('pieChart'), {
            type: 'pie',
            data: {
                labels: ['Red', 'Blue', 'Yellow'],
                datasets: [{ data: [300, 50, 100], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }]
            }
        });

        const doughnutChart = new Chart(document.getElementById('doughnutChart'), {
            type: 'doughnut',
            data: {
                labels: ['Chrome', 'Firefox', 'Edge'],
                datasets: [{ data: [50, 30, 20], backgroundColor: ['#4BC0C0', '#FF9F40', '#9966FF'] }]
            }
        });
    }
});
