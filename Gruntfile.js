module.exports = function (grunt) {

  
  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    //configured a tasks 
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          // 'destination': 'source'
          'src/css/style.css' : 'src/css/sass/style.css.scss'
        }
      }
    },
    ngAnnotate: {
      options: {
          singleQuotes: true
      },
      app: {
          files: {
              './public/min-safe/js/appFactory.js': ['./public/js/appFactory.js'],
              './public/min-safe/js/FormController.js': ['./public/js/FormController.js'],
              './public/min-safe/app.js': ['./public/js/app.js']
          }
      }
  },
    concat : {
      js: {
        src : [ "app/lib/jquery/dist/jquery.js",
        "app/lib/angular/angular.js",
        "app/lib/angular-animate/angular-animate.js",
        "app/lib/angular-resource/angular-resource.js",
        "app/lib/marked/angular-md.min.js",
        "app/lib/marked/highlight.min.js",
        "app/lib/marked/marked.js",
        "app/lib/angular-route/angular-route.js",
        "app/app.module.js",
        "app/app.config.js",
        "app/bower_components/angular/angular.min.js",
        "app/bower_components/angular-sanitize/angular-sanitize.min.js",
        "app/bower_components/showdown/compressed/Showdown.js",
        "app/bower_components/angular-markdown-directive/markdown.js",
        
        "app/core/core.module.js",
        "app/core/utility/utility-directive.js",
        "app/core/utility/utility.module.js",
        "app/core/repo/repo.module.js",
        "app/core/repo/repo.service.js",
        "app/home-page/home-page.module.js",
        "app/home-page/home-page.component.js",
        "app/repo-list/repo-list.module.js",
        "app/repo-list/repo-list.component.js",
        "app/repo-detail/repo-detail.module.js",
        "app/repo-detail/repo-detail.component.js"
              ],
        dest : "app/dist/app.js"
      },
      css: {
        src : [ "app/lib/bootstrap/dist/css/bootstrap.css",
                "app/app.css","app/common.css",
                "app/app.animations.css"
              ],
        dest : "app/dist/app.css"
      }
    },
    uglify : {
        tasks :{
          files : {
            'app/dist/all.app.min.js' : ["app/dist/app.js"]
          }
        }
    }
  });
  
  //load grunt tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate'); 

  //register grunt default task
  grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify']);

};
