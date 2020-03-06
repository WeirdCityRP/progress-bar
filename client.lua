AddEventHandler('ProgressBar', function(time, text)
	SendNUIMessage({
		type = "progressbar",
		display = true,
		time = time,
		text = text
	})
end)