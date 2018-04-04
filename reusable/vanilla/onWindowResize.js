		function onWindowResize(callbacks: any[]): void {
			window.addEventListener("resize", resizeThrottler, false);

			let resizeTimeout;
			function resizeThrottler() {
				if (!resizeTimeout) {
					resizeTimeout = setTimeout(function () {
						resizeTimeout = null;
						actualResizeHandler();
					}, 66);
				}
			}

			function actualResizeHandler() {
				callbacks.forEach(fn => fn())
			}
		}