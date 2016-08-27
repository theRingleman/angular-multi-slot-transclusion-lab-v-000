function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			position: 'h6',
			bio: 'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<div>',
					'<div>Name: <span ng-transclude="name"></span></div>',
					'<div>Position: <span ng-transclude="position"></span></div>',
					'<div>Description: <span ng-transclude="bio"></span></div>',
				'</div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
