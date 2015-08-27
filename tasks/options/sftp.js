module.exports = {
  uploadCSS:{
  	   files:{'./': ['css/*.css' , 'sass/*.scss'] } 
  },
  uploadJS:{
       files:{'./': ['js/*.js' , 'js/*.min.js' , 'js/plugin/*.js'] } 
  },
  uploadAll:{
       files:{'./': ['js/*.js' , 'js/*.min.js' , 'js/plugin/*.js', 'css/*.css' , 'sass/*.scss', 'img/*.gitkeep', 'img/sub/*.gitkeep','img/catalog/*.gitkeep','img/template/*.gitkeep','static/email/*.gitkeep','template.html'] } 
  },
    options: {
      host: '<%= sshlogininfo.host %>',
      username: '<%= sshlogininfo.username %>',
      password: '<%= sshlogininfo.password %>',
      createDirectories: true,
      showProgress: true,
      path:'/'
    }
}

