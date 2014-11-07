/**
 *
 * @authors xuhuan (xu.huan.web.master@gmail.com)
 * @date    2014-11-07 10:57:40
 * @version 1.0.3
 * @description face++ javascript sdk for angular
 *
 */
angular.module('angular.facepp', [])
	.provider('facepp', function() {
		var api = null;
		this.init = function(apiKey, apiSecret, options) {
			api = new FacePP(apiKey, apiSecret, angular.extend({
				apiURL: 'http://apicn.faceplusplus.com/v2'
			}, options));
		}
		this.$get = function() {
			return {
				request: function(apiMethod, data, callback) {
					if (!api) {
						return
					};
					api.request(apiMethod, data, callback);
				},
				requestAsync: function(apiMethod, data, callback) {
					if (!api) {
						return
					};
					api.requestAsync(apiMethod, data, callback);
				}
			};
		};
	});
