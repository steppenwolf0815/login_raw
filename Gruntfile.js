module.exports=function(grunt)
{
	grunt.initConfig(
	{
		copy: 
		{
		  main: 
		  {
		    files: [
		      
		      {expand: true, cwd:'bower_components/jquery/dist/', src: ['**/*.js'], dest: 'dist/js/'},
		      {expand: true, cwd:'bower_components/angular/', src: ['**/*.js'], dest: 'dist/js/'},
		      {expand: true, cwd:'bower_components/bootstrap/dist/js/', src: ['**/*.js'], dest: 'dist/js/'},
		      {expand: true, cwd:'bower_components/bootstrap/dist/fonts/', src: ['**'], dest: 'dist/fonts/'},
		      {expand: true, cwd:'bower_components/bootstrap/dist/css/', src: ['**'], dest: 'dist/css/'},
		      {expand: true, cwd:'templates/', src: ['**'], dest: 'dist/templates/'},
		      {expand: true, cwd:'js/', src: ['**'], dest: 'dist/js/'},
		      {expand: true, cwd:'css/', src: ['**'], dest: 'dist/css/'},
		      {expand: true, cwd:'images/', src: ['**'], dest: 'dist/images/'}
		    ],
		  },
		},
		sass: 
		{
			dist: 
			{
			  files: 
			  {
			    'dist/css/styles.css': 'scss/styles.scss'
			  }
			}
		},
		concat: 
		{
			dist: 
			{
			  src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
			  dest: 'dist/built.js',
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy','sass']);

}