var gulp = require('gulp');

gulp.task('printName', function() {
    console.log('name')
})
gulp.task('printAge', function() {
    console.log('28')
})
gulp.task('default', ['printName', 'printAge'])