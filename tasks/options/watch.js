module.exports = {
  options: {
    livereload: true,
  },
scripts: {
    files: ['js/*.js'],
    tasks: ['concat','uglify'],
    options: {
      spawn: false,
    }
  },
sass: {
  files: ['sass/*.scss'],
  tasks: ['sass']
},
  devWatch: {
      files: ['js/*.js', 'css/*.css'],
      tasks: ['gh-pages']
  }
}