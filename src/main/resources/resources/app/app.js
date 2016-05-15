angular.module('app', [
    'ngResource',
    'ui.router',
    'ngStorage',
    'ui.bootstrap.showErrors',
    'authorization.services',
    'ngCookies',
    'customDirectives'
]);

angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise("/")
    $stateProvider
        .state('index', {
        	url: "/",
        	templateUrl: "app/index.tpl.html",
        	controller: 'AppCtrl'
        })
        .state('home', {
        	url: "/home",
        	templateUrl: "app/home.tpl.html",
        	controller: 'AppCtrl'
        })
        .state('blogs', {
        	url: "/blogs",
        	templateUrl: "app/blogs.tpl.html",
        	controller: 'AppCtrl'
        })
        .state('groups', {
        	url: "/groups",
        	templateUrl: "app/groups.tpl.html",
        	controller: 'AppCtrl'
        })
        .state('groups_my', {
        	url: "/groups/subscribed",
        	templateUrl: "app/groups.subscribed.tpl.html",
        	controller: 'AppCtrl'
        })
        
        .state('groups_new', {
        	url: "/groups/new",
        	templateUrl: "app/groups.new.tpl.html",
        	controller: 'AppCtrl'
        })
        .state('groups_desc', {
        	url: "/groups/desc/groupid",
        	templateUrl: "app/groups.desc.tpl.html",
        	controller: 'AppCtrl'
        })
        .state('groups_desc_tasks', {
        	url: "/groups/groupid/tasks",
        	templateUrl: "app/groups.tasks.tpl.html",
        	controller: 'AppCtrl'
        })
        .state('groups_desc_blogs', {
        	url: "/groups/groupid/blogs",
        	templateUrl: "app/groups.blogs.tpl.html",
        	controller: 'AppCtrl'
        })
        .state('groups_desc_photos', {
        	url: "/groups/groupid/photos",
        	templateUrl: "app/groups.photos.tpl.html",
        	controller: 'AppCtrl'
        })
        .state('groups_desc_crowd_funding', {
        	url: "/groups/groupid/crowd_funding",
        	templateUrl: "app/groups.crowd_funding.tpl.html",
        	controller: 'AppCtrl'
        })
        .state('campaigns', {
        	url: "/campaigns",
        	templateUrl: "app/campaigns.tpl.html",
        	controller: 'AppCtrl'
        })
        .state('settings', {
        	url: "/settings",
        	templateUrl: "app/settings.tpl.html",
        	controller: 'AppCtrl'
        })
    ;
}]);


angular.module('app').controller('AppCtrl', ['$scope','$cookieStore','$location','AuthService','$rootScope',
    '$localStorage','$resource', '$window',function($scope,$cookieStore,$location,AuthService,$rootScope,$localStorage,$resource,$window) {  
	var UserResource = $resource('/user/getall');
	$scope.error = "";
	
	
	$scope.collapseDataTasks = [
	                {
	                	'id':'0001',
						'taskName':'Conduct survey on active volunteer group in Singapore',
						'taskDesc':'Search for active volunteer group, list them down in spread sheet. Make note on the size of volunteer group, location/city of group, address, founder, remarkable work done by group',
						'assignedTo':'Martin',
						'dueDate':'20th May 2016',
						'status':'Open'
	                },
	                {
	                	'id':'0002',
						'taskName':'Conduct survey on active volunteer group in Singapore',
						'taskDesc':'Search for active volunteer group, list them down in spread sheet. Make note on the size of volunteer group, location/city of group, address, founder, remarkable work done by group',
						'assignedTo':'Albert',
						'dueDate':'20th May 2016',
						'status':'Open'
	                },
	                {
	                	'id':'0003',
						'taskName':'Conduct survey on active volunteer group in Singapore',
						'taskDesc':'Search for active volunteer group, list them down in spread sheet. Make note on the size of volunteer group, location/city of group, address, founder, remarkable work done by group',
						'assignedTo':'Chris',
						'dueDate':'20th May 2016',
						'status':'Open'
	                },
	                {
	                	'id':'0004',
						'taskName':'Conduct survey on active volunteer group in Singapore',
						'taskDesc':'Search for active volunteer group, list them down in spread sheet. Make note on the size of volunteer group, location/city of group, address, founder, remarkable work done by group',
						'assignedTo':'Benzamin',
						'dueDate':'20th May 2016',
						'status':'Open'
	                }
	                ];
	
	
	$scope.groups = [
	     			{
	     				'title':'Weekly Education Program',
	     				'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	     				'created_on':'14th May 2016',
	     				'members':'250',
	     				'tags':['education','school','kids','free']
	     			},
	     			{
	     				'title':'Women Empowerment',
	     				'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	     				'created_on':'14th May 2016',
	     				'members':'100',
	     				'tags':['education','school','kids','free']
	     			},
	     			{
	     				'title':'Tech for women',
	     				'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	     				'created_on':'14th May 2016',
	     				'members':'75',
	     				'tags':['education','school','kids','free']
	     			},
	     			{
	     				'title':'Go Green',
	     				'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	     				'created_on':'14th May 2016',
	     				'members':'300',
	     				'tags':['education','school','kids','free']
	     			},
	     			{
	     				'title':'Change Makers',
	     				'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	     				'created_on':'14th May 2016',
	     				'members':'900',
	     				'tags':['education','school','kids','free']
	     			}
	     ];
	
	
	$scope.microblogs = [
					{
						'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						'writer':'Social Work Helper',
						'timestamp':'May 14th 2016'

					},
					{
						'body' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						'writer':'Rachel L. West',
						'timestamp':'May 14th 2016'
					},
					{
						'body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						'writer':'Morris David',
						'timestamp':'May 10th 2016'
					},
					{
						'body':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						'writer':'Albert',
						'timestamp':'May 9th 2016'
					}
				   ];
	
	$scope.blogs = [
					{
						'title': 'New York Community Trust Gives One Million Dollars to Help Train Social Workers',
						'body' : 'The New York Community Trust (NYCT), one of the nation’s largest community foundations, has renewed a grant through the National Association of Social Workers (NASW) and the Council on Social Work Education (CSWE) to educate and train more social workers to strengthen the delivery of health care services in the United States.',
						'writer':'Social Work Helper ',
						'timestamp':'May 14th 2016'

					},
					{
						'title': 'Is Macro Social Work at Risk?',
						'body' : 'Back in 2012 the Association of Community Organization and Social Administration (ACOSA) released a report by scholar Jack Rothman that looked into concerns that were being voiced by many macro social workers and social work students.',
						'writer':'Rachel L. West',
						'timestamp':'May 14th 2016'
					},
					{
						'title':'Know Her Truths: Why Black Women and Girls Matter',
						'body':'Recently, I had an amazing opportunity to attend the Know Her Truths: Advancing Justice for Women and Girls Conference hosted by the Anna Julia Coopr Center (AJC) at Wake Forest University.  The AJC, as it’s commonly referred to, is directed by Melissa Harris-Perry, and named for scholar, educator, and author Anna Julia Cooper, a Black Woman whose pioneering scholarship and activism laid the foundation for black American feminism and insisted on the importance of Southern voices in American politics.',
						'writer':'Morris David',
						'timestamp':'May 10th 2016'
					},
					{
						'title':'Giving Feedback to Teens',
						'body':'Research has consistently shown that the therapeutic relationship is one of the most significant factors when it comes to creating real and lasting change in our clients. Helping professionals who work with teens have a unique challenge in relating to and engaging authentically with adolescents. They aren’t kids anymore, and they’re not quite adults yet',
						'writer':'Albert',
						'timestamp':'May 9th 2016'
					}
				   ];
	
    $scope.save = function(){
    	$rootScope.login=true;
    	$location.path('/home');
   }//login
    
    $scope.groupDesc = function(){
    	$location.path('/groups/desc/groupid');
    }
    
    
    /*UserResource.query(function(result){
       $scope.collapseData = result;
 });
    */
    var loadUsers = function(){
        UserResource.query(function(result){
                   $scope.collapseData = result;
             });                
     }

}]);

angular.module('app').controller('HeaderCtrl', ['$scope','$rootScope','$location','AuthService', function($scope,$rootScope,$location,AuthService) { 
    

}]);
