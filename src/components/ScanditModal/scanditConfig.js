import * as SDCBarcode from 'scandit-web-datacapture-barcode';
import * as SDCCore from 'scandit-web-datacapture-core';

const licenseKey =
	'AdSS4R5bPSd+EY4D4gBw7bMAwyuYLIgrVTX8pLly5wOxfV404Gkb1/xlrztTSsrYvyKqftBS1NThYzHNZwL6l49cHXstQTLPgw8D+v9TIFdkWr+RYhHSUsEyYYC/Fg67MXGF8CFyWbmUWpHDxg3v62BESDgJQUgX6E7cc4ssagxAQcK+bnTBwXw1eUBDa9vyOk9FMdpdceWPbuQmUXMh6OhRPYRpaLo1sUiaFbFX5bJkIrDc+G0+Tr51tzYDPfTSRXxrmh8BedghTPXX8WI/GpQ3QHHAI8sDByEAXtpgMefvSs4fDl94HIV2G3+rJDovOC05wxVs+ViydLRYgTrTPBVIJiKWekXbR3Ath71CuRK1fEU7Wm3uCq5SrJm8Q/XxJWzTxydMETFvBBnPuVJ/FmsT5mOgce25GTOJq4llHPh8BbUTyXXtWsRZ7W3pUxVsgAoshjpkbUqvSGZlMXEXx7kOB7Zz4o9JK0+88z9of2qPCZS9J2gRNOlFnCtT1MI6NBppd8DBwBJpfdjvo439sI/x2HgIDhzSfYW+GBAFMd9j4FFQiMH9Bk1pxbGgFt49Ast9hCXUzE1idUV3wF+/z1gfBnazKcUIGyj1zp7r9raCLT8QA+WpL69yAFc6BwgDYfpjgVGYUATFl4W9IfeMeBhEfQksrqg/k96OvF25BS7DiChq1WpbJ3WX0aFeSdf0NxyAg754OOjBsRvfW8CHUxoe1Ys3EoV7F5WHdi3hEDVUAqH7BpNIQacyF5i57MW9255adsa7f+IgzkcARUfeOzzXfGtRhDzZHObevH5q8T7ta+yMCqs9clNbCm+e9yjcukutTutgoi2uB8HibeaIw8AnjzlbBHFhknBtISrQvh532tKFFZvgeRcosEvaJmGLrcMDO/p5YrP5us0jsPKpnmw1tOG619b8X53dpYEWPkz+ZaS37RTpJHCD4BswVG+IkOeRZlU1fkxrYLf+0gntOGFhskDoSormTJu2m6O3g+6+RyTjbdTrtbdLY6r/qC/ZzLMh/N7pVtuLQ0vcAXdBl6JoFoB9rrhfK9CBR/e9EsGfazyaiMuhIjc1EHRxqcsufo5YjVNONbKeSEBC1vJ52v/Mim9szcPXDA/gDgeo6erzi+JibBJsEhrm+9zr/wlyUto=';

const Scanner = () => {
	async function runScanner() {
		await SDCCore.configure({
			licenseKey: licenseKey,
			libraryLocation:
				'https://cdn.jsdelivr.net/npm/scandit-web-datacapture-barcode@6.x/build/engine/',
			moduleLoaders: [SDCBarcode.barcodeCaptureLoader()],
		});

		const context = await SDCCore.DataCaptureContext.create();

		const camera = SDCCore.Camera.default;
		await context.setFrameSource(camera);

		const settings = new SDCBarcode.BarcodeCaptureSettings();
		settings.enableSymbologies([
			SDCBarcode.Symbology.Code128,
			SDCBarcode.Symbology.Code39,
			SDCBarcode.Symbology.QR,
			SDCBarcode.Symbology.EAN8,
			SDCBarcode.Symbology.UPCE,
			SDCBarcode.Symbology.EAN13UPCA,
		]);

		const symbologySetting = settings.settingsForSymbology(
			SDCBarcode.Symbology.Code39
		);
		symbologySetting.activeSymbolCounts = [
			7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		];

		const barcodeCapture = await SDCBarcode.BarcodeCapture.forContext(
			context,
			settings
		);
		await barcodeCapture.setEnabled(false);

		barcodeCapture.addListener({
			didScan: async (barcodeCapture, session) => {
				await barcodeCapture.setEnabled(false);
				const barcode = session.newlyRecognizedBarcodes[0];
				const symbology = new SDCBarcode.SymbologyDescription(
					barcode.symbology
				);

				showResult(barcode.data, symbology.readableName);
				await barcodeCapture.setEnabled(true);
			},
		});

		const view = await SDCCore.DataCaptureView.forContext(context);
		view.connectToElement(document.getElementById('data-capture-view'));
		view.addControl(new SDCCore.CameraSwitchControl());

		const barcodeCaptureOverlay =
			await SDCBarcode.BarcodeCaptureOverlay.withBarcodeCaptureForViewWithStyle(
				barcodeCapture,
				view,
				SDCBarcode.BarcodeCaptureOverlayStyle.Frame
			);

		const viewfinder = new SDCCore.RectangularViewfinder(
			SDCCore.RectangularViewfinderStyle.Square,
			SDCCore.RectangularViewfinderLineStyle.Light
		);

		await barcodeCaptureOverlay.setViewfinder(viewfinder);

		await camera.switchToDesiredState(SDCCore.FrameSourceState.On);
		await barcodeCapture.setEnabled(true);
	}

	function showResult(data, symbology) {
		alert('Scanned: ' + data + symbology);
	}

	runScanner().catch((error) => {
		alert(error);
	});

	return <div id="data-capture-view"></div>;
};

export default Scanner;
