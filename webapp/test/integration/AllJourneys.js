/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/offlinetest/NW_Offline/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/offlinetest/NW_Offline/test/integration/pages/Worklist",
	"com/sap/offlinetest/NW_Offline/test/integration/pages/Object",
	"com/sap/offlinetest/NW_Offline/test/integration/pages/NotFound",
	"com/sap/offlinetest/NW_Offline/test/integration/pages/Browser",
	"com/sap/offlinetest/NW_Offline/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.offlinetest.NW_Offline.view."
	});

	sap.ui.require([
		"com/sap/offlinetest/NW_Offline/test/integration/WorklistJourney",
		"com/sap/offlinetest/NW_Offline/test/integration/ObjectJourney",
		"com/sap/offlinetest/NW_Offline/test/integration/NavigationJourney",
		"com/sap/offlinetest/NW_Offline/test/integration/NotFoundJourney",
		"com/sap/offlinetest/NW_Offline/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});