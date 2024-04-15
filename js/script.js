var box  = document.getElementById('box');
var down = false;


function toggleNotifi(){
	if (down) {
		box.style.height  = '0px';
		box.style.opacity = 0;
		down = false;
	}else {
		box.style.height  = '510px';
		box.style.opacity = 1;
		down = true;
	}
}

/*js thông báo */
var box  = document.getElementById('box');
    var down = false;
    function toggleNotifi(){
    	if (down) {
            box.style.height  = '0px';
            box.style.opacity = 0;
            down = false;
        }else {
            box.style.height  = '510px';
            box.style.opacity = 1;
            down = true;
        }
    }


//biểu đồ tròn
document.addEventListener('DOMContentLoaded', function() {
	var salaryBenefitsData = {
		labels: ['69% Successfully Paid', '17% Pending', '15% Unpaid'],
		datasets: [{
			data: [68, 17, 15],
			backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
		}]
	};
	var options = {
		responsive: false,
		maintainAspectRatio: false
	};
	var salaryBenefitsChart = new Chart(document.getElementById('salaryBenefitsChart'), {
		type: 'pie',
		data: salaryBenefitsData,
		options: options
	});
});

//task
function togglePayroll() {
    var payrollInfo = document.getElementById("payroll-info");
    if (payrollInfo.style.display === "none") {
        payrollInfo.style.display = "block";
    } else {
        payrollInfo.style.display = "none";
    }
}

//biểu đồ cột
document.addEventListener('DOMContentLoaded', function() {
	var ctx = document.getElementById('salaryChart').getContext('2d');

	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var salaries = [50000, 65000, 70000, 72000, 75000, 77000, 78000, 80000, 82000, 83000, 84000, 88000];
	var taxes = [10000, 12000, 14000, 14500, 15000, 15500, 16000, 16500, 17000, 17500, 18000, 18500];
	var salaries = [30000, 5000, 30000, 65000, 40000, 70000, 63000, 88000, 82000, 79000, 84000, 135000];

	var salaryChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: months,
			datasets: [{
				label: 'Gross Salary',
				data: salaries,
				backgroundColor: 'rgba(54, 162, 235, 0.5)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1
			}, {
				label: 'Taxes(15-30%)',
				data: taxes,
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1
			}, {
				label: 'Next Salary',
				data: salaries,
				backgroundColor: 'rgba(46, 204, 113, 0.5)',
				borderColor: 'rgba(46, 204, 113, 1)',
				borderWidth:1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
});
