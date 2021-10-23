var isDetailShow = false;

function detailClick() {
	if (isDetailShow) {
		$('.portfolioLeft').animate(
			{
				width: '10%',
			},
			300,
		);

		$('.portfolioRight').animate(
			{
				width: '20%',
			},
			300,
		);

		$('.portfolioDetail').animate(
			{
				width: '70%',
			},
			{ duration: 300, easing: 'swing' },
		);

		isDetailShow = false;
	}
}

function accountTypeClick() {
	if (!isDetailShow) {
		$('.portfolioLeft').animate(
			{
				width: '40%',
			},
			300,
		);

		$('.portfolioRight').animate(
			{
				width: '60%',
			},
			300,
		);

		$('.portfolioDetail').animate(
			{
				width: '0%',
			},
			{ duration: 300, easing: 'swing' },
		);

		isDetailShow = true;
	}
}

window.onload = function () {};
