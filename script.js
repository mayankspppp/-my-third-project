let salesData = [12000, 19000, 30000, 25000, 40000];
let profitData = [3000, 7000, 12000, 9000, 15000];
let customers = 1250;

// KPI update
document.getElementById("sales").innerText = "₹ " + salesData.reduce((a,b)=>a+b);
document.getElementById("profit").innerText = "₹ " + profitData.reduce((a,b)=>a+b);
document.getElementById("customers").innerText = customers;

// Chart.js Graph
const ctx = document.getElementById('salesChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: salesData,
        backgroundColor: "blue"
      },
      {
        label: "Profit",
        data: profitData,
        backgroundColor: "green"
      }
    ]
  }
});
