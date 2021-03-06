var gulp = require('gulp');

module.exports = function(options) {
  options.src = options.src || 'src/app/**/*.+(ttf|woff|woff2)';
  options.dest = options.dest || 'www/build/fonts';

  return gulp.src(options.src)
    .pipe(gulp.dest(options.dest));
}