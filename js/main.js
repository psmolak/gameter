$(function() {
	// Toggle bootstrap popovers and tooltips
	$('[data-toggle="popover"]').popover();
	$('[data-toggle="tooltip"]').tooltip();

	// Chart drawing
	var ctx = $("#population-chart");

	Chart.defaults.global.defaultFontFamily = 'Ubuntu';

	var data = {
		datasets: [
			{
				label: "Inactive players",
				data: [34510, 34101, 34905, 34910, 35010, 34712, 34308, 34310, 34200, 33180, 31370, 32117],
				pointHitRadius: 20
			},
			{
				label: "Banned players",
				data: [4510, 4101, 4905, 4910, 5010, 4712, 4308, 4310, 4200, 3180, 1370, 2117],
				backgroundColor: 'rgba(255, 128, 128, 0.7)',
				borderColor: 'rgba(255, 128, 128, 1)',
				pointBackgroundColor: 'rgba(255, 67, 67, 1)',
				pointHitRadius: 20
			},
			{
				label: "Active players",
				data: [26510, 26101, 25905, 25910, 26010, 24712, 24308, 24310, 24200, 24180, 24370, 24117],
				backgroundColor: 'rgba(215, 227, 244, 0.7)',
				borderColor: 'rgba(128, 179, 255, 255)',
				pointBackgroundColor: 'rgba(128, 179, 255, 255)',
				pointHitRadius: 20
			},
		],
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	};

	var chart = new Chart(ctx, {
		type: 'line',
		data: data,
		options: {}
	});


	var ctx1 = $("#research-chart");
	var data1 = {
		datasets: [
			{
				label: "Research points",
				data: [24117, 24370, 24180, 24200, 24310, 24308, 24712, 26010, 25910, 25905, 26101, 26510],
				backgroundColor: 'rgba(128, 255, 179, 1)',
				borderColor: 'rgba(55, 200, 113, 0.9)',
				pointBackgroundColor: 'rgba(55, 200, 113, 1)',
				pointHitRadius: 20
			},
		],
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	};

	var ctx2 = $("#research-chart-position")
	var data2 = {
		datasets: [
			{
				label: "Research position",
				data: [24117, 24370, 24180, 24200, 24310, 24308, 24712, 26010, 25910, 25905, 26101, 26510],
				backgroundColor: 'rgba(128, 255, 179, 0.15)',
				borderColor: 'rgba(136, 136, 136, 0.9)',
				pointBackgroundColor: 'rgba(136, 136, 136, 1)',
				pointHitRadius: 20
			},
		],
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	};

	var chart1 = new Chart(ctx1, {
		type: 'line',
		data: data1,
		options: {
			scales: {
				xAxes: [{ gridLines: { display: false } }],
				yAxes: [{ gridLines: { display: false } }]
			}
		}
	});

	var chart2 = new Chart(ctx2, {
		type: 'line',
		data: data2,
		options: {
			scales: {
				xAxes: [{ gridLines: { display: false } }],
				yAxes: [{ gridLines: { display: false } }]
			}
		}
	});
});
