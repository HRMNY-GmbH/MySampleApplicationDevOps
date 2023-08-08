/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"hrmny/MySampleApplicationDevOps/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});