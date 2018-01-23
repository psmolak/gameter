$(function() {
	// Toggle bootstrap popovers and tooltips
	$('[data-toggle="popover"]').popover();
	$('[data-toggle="tooltip"]').tooltip();

	// Chart drawing
	var ctx = $("#population-chart");

	var data = {
		datasets: [
			{
				label: "Inactive players",
				data: [34510, 34101, 34905, 34910, 35010, 34712, 34308, 34310, 34200, 33180, 31370, 32117],
			},
			{
				label: "Banned players",
				data: [4510, 4101, 4905, 4910, 5010, 4712, 4308, 4310, 4200, 3180, 1370, 2117],
				backgroundColor: 'rgba(255, 128, 128, 0.7)',
				borderColor: 'rgba(255, 128, 128, 1)',
				pointBackgroundColor: 'rgba(255, 67, 67, 1)'
			},
			{
				label: "Active players",
				data: [26510, 26101, 25905, 25910, 26010, 24712, 24308, 24310, 24200, 24180, 24370, 24117],
				backgroundColor: 'rgba(215, 227, 244, 0.7)',
				borderColor: 'rgba(128, 179, 255, 255)',
				pointBackgroundColor: 'rgba(128, 179, 255, 255)'
			},
		],
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	};

	var chart = new Chart(ctx, {
		type: 'line',
		data: data,
		options: {}
	});
});
