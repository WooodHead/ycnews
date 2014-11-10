var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var react = require('gulp-react');

gulp.task('dev', ['default'], function() {
  nodemon({script: 'server.js', ext: 'jsx html css'}).
    on('restart', function() {
      console.log('node restarted');
      return gulp.src('src/js/components/*.jsx').
          pipe(react({harmony: true})).
          pipe(gulp.dest('public/assets/js'));
      });
});

gulp.task('html', function() {
  return gulp.src('src/*.html').
      pipe(gulp.dest('public'));
});

gulp.task('css', function() {
  return gulp.src('src/css/*.css').
      pipe(gulp.dest('public/assets/css'));
});

gulp.task('js', function() {
  return gulp.src('src/js/utils/*.js').
      pipe(gulp.dest('public/assets/js'));
});

gulp.task('react', function() {
  return gulp.src('src/js/components/*.jsx').
      pipe(react({harmony: true})).
      pipe(gulp.dest('public/assets/js'));
});

gulp.task('default', ['html', 'css', 'js', 'react']);
