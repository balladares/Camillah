module.exports = function (grunt) {
    // Configurações do projeto
    grunt.initConfig({

        // Configurações dos plugins
        less: {
            development: {
                options: {
                    paths: ["public/css"]
                },
                files: {
                    "public/css/theme-dist.css": "public/less/theme.less"
                }
            }
        }, // Less
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/css',
                    src: ['*.css'],
                    dest: 'public/css/min',
                    ext: '.min.css'
                }]
            }
        }, // Css Minifier
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'public/js',
                    src: '**/*.js',
                    dest: 'public/js',
                    ext: '.min.js'
                }, {
                    expand: true,
                    cwd: 'public/js/controllers',
                    src: '**/*.js',
                    dest: 'public/js/controllers',
                    ext: '.min.js'
                }, {
                    expand: true,
                    cwd: 'public/js/directives',
                    src: '**/*.js',
                    dest: 'public/js/directives',
                    ext: '.min.js'
                },
                 {
                    expand: true,
                    cwd: 'public/js/services',
                    src: '**/*.js',
                    dest: 'public/js/services',
                    ext: '.min.js'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['public/js/app.js', 'public/less/theme.less'],
                tasks: ['less', 'cssmin', 'uglify'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Declarando plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tarefas a serem executadas
    grunt.registerTask('default', ['less', 'cssmin', 'uglify']);
    grunt.registerTask('w', ['watch']);

};