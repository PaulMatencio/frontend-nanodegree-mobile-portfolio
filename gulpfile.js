var gulp = require('gulp');

gulp.task('default', function() {
    // place code for your default task here
    console.log("hello");
});

var gulp = require('gulp'),
    uglify = require('gulp-uglify')
    uglifycss = require('gulp-uglifycss')
    minifyHTML = require('gulp-minify-html')
    critical = require('critical');

const imagemin = require('gulp-imagemin')
    pngquant = require('imagemin-pngquant');
// minify HTML

gulp.task('minify-html1', function() {
    var opts = {
        conditionals: true,
        spare: true
    };
    return gulp.src('src/*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest(''));
});

gulp.task('minify-html2', function() {
    var opts = {
        conditionals: true,
        spare: true
    };
    return gulp.src('src/views/*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('views'));
});
gulp.task('minify-html', ['minify-html1', 'minify-html2']);

gulp.task('critical1', function () {
  critical.generate({
    base: 'src',
    src: 'index.html',
    css: ['src/css/style.css'],
    width: 320,
    height: 480,
    dest: 'index.html',
    minify:true,
    inline: true
  });
});
gulp.task('critical2', function () {
  critical.generate({
    base: 'src',
    src: 'project-mobile.html',
    css: ['src/css/style.css'],
    width: 320,
    height: 480,
    dest: 'project-mobile.html',
    minify:true,
    inline: true
  });
});
gulp.task('critical3', function () {
  critical.generate({
    base: 'src',
    src: 'project-webperf.html',
    css: ['src/css/style.css'],
    width: 320,
    height: 480,
    dest: 'project-webperf.html',
    minify:true,
    inline: true
  });
});

gulp.task('critical4', function () {
  critical.generate({
    base: 'src',
    src: 'project-2048.html',
    css: ['src/css/style.css'],
    width: 320,
    height: 480,
    dest: 'project-2048.html',
    minify:true,
    inline: true
  });
});


// minify critical html produced by the above critical tasks 
gulp.task('minify-critical-html', function() {
    var opts = {
        conditionals: true,
        spare: true
    };
    return gulp.src('*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest(''));
});

// minify JS
gulp.task('minjs1', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'))
});

gulp.task('minjs2', function() {
    gulp.src('src/views/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('views/js'))
});

gulp.task('minify-js', ['minjs1', 'minjs2']);

// minify CSS
gulp.task('mincss1', function() {
    gulp.src('src/css/*.css')
        .pipe(uglifycss())
        .pipe(gulp.dest('css'))
});

gulp.task('mincss2', function() {
    gulp.src('src/views/css/*.css')
        .pipe(uglifycss())
        .pipe(gulp.dest('views/css'))
});

gulp.task('minify', function() {
    gulp.src('src/*.+(js|css)')
        .pipe(uglify())
        .pipe(gulp.dest(''))
});

gulp.task('minify-css', ['mincss1', 'mincss2']);

// optimize images
gulp.task('optimize-image1', function() {
    gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('img'));
});

gulp.task('optimize-image2', function() {
    gulp.src('src/views/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('views/images'));
});


gulp.task('critical', ['critical1', 'critical2', 'critical3', 'critical4']);
gulp.task('optimize-image', ['optimize-image1', 'optimize-image2']);

// Build function
gulp.task('build', ['minify-html', 'minify-css', 'minify-js', 'optimize-image']);

gulp.task('build-critical', ['critical', 'minify-critical-html', 'minify-css', 'minify-js', 'optimize-image']);