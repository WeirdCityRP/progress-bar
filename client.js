on('ProgressBar', (time, text) => {
	SendNuiMessage(JSON.stringify(
	{
		type: "ui",
		display: true,
		time: time,
		text: text
	}
	));
});