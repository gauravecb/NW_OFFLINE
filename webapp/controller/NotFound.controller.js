sap.ui.define([
		"com/sap/offlinetest/NW_Offline/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.sap.offlinetest.NW_Offline.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);