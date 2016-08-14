var comments = function(dataService) {
	var service = {
			init 		: init,
			post 		: post,
			remove 		: remove
		},
		sideComments;

	return service;
	

	/////////////////////


	function init() {
		var existingComments = [
			{
				"sectionId": "1",
				"comments": [
						{
						"id": 88,
						"authorAvatarUrl": "support/images/jon_snow.png",
						"authorName": "Jon Sno",
						"authorId": 1,
						"authorUrl": "http://en.wikipedia.org/wiki/Kit_Harington",
						"comment": "I'm Ned Stark's bastard. Related: I know nothing."
					},
					{
						"id": 112,
						"authorAvatarUrl": "support/images/donald_draper.png",
						"authorName": "Donald Draper",
						"authorId": 2,
						"comment": "I need a scotch."
					}
				]
			},
			{
				"sectionId": "3",
				"comments": [
					{
						"id": 66,
						"authorAvatarUrl": "support/images/clay_davis.png",
						"authorName": "Senator Clay Davis",
						"authorId": 3,
						"comment": "These Side Comments are incredible. Sssshhhiiiiieeeee."
					}
				]
			}
		];
		var currentUser = {
			"id": 4,
			"avatarUrl": "http://media.amandanumba.com/avatars/nan.jpg",
			"authorUrl": "http://google.com/",
			"name": "You"
		};

		$('.fr-tag').each(function(index) {
			var $this = $(this);

			$this.addClass('commentable-section');
			$this.attr('data-section-id', index);
			$this.find('span').removeAttr('style')
		});

		sideComments = new SideComments('#article', currentUser, existingComments);
		sideComments.on('commentPosted', post);
		sideComments.on('commentDeleted', remove);
	}

	function post() {

	}

	function remove() {

	}
};

module.exports = comments;