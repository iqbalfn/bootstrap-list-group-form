module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            docs: {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/css/',
                        src: [
                            'bootstrap-list-group-form.css',
                            'bootstrap-list-group-form.css.map'
                        ],
                        dest: 'docs/css/'
                    }
                ]
            }
        },

        run: {
            css_compile: {
                cmd: 'npm', args: ['run','css-compile']
            },
            css_minify: {
                cmd: 'npm', args: ['run','css-minify']
            },
            css_prefix: {
                cmd: 'npm', args: ['run','css-prefix']
            }
        },

        watch: {
            bootstrap: {
                files: [
                    'src/scss/*.scss'
                ],
                tasks: [
                    'run:css_compile',
                    'copy:docs'
                ]
            },
            css: {
                files: [
                    'src/scss/*.scss',
                ],
                tasks: [
                    'run:css_compile',
                    'copy:docs'
                ]
            }
        }
    })

    grunt.loadNpmTasks('grunt-run')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-watch')
}