face++ javascript sdk for angular

install
```
bower install angular-facepp --save
```

use
```
angular
	.module('app', [...,'angular.facepp'])
	.config(function(..., faceppProvider) {
		faceppProvider.init('apiKey', 'apiSecret' [,options]);
	})
	.controller('MainCtrl', function($scope, facepp) {	
		facepp.request('detection/detect', {
		  url: '...'
		}, function(err, result) {
			 ...
		});
	});
```

LICENSE

BSD