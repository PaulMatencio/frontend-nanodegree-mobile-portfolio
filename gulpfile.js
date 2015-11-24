var gulp = require('gulp');

gulp.task('default', function() {
    console.log("hello");
});

var gulp = require('gulp'),
    uglify = require('gulp-uglify')
    uglifycss = require('gulp-uglifycss')
    minifyHTML = require('gulp-minify-html')
    critical = require('critical')
    minifyInline = require('gulp-minify-inline');

const imagemin = require('gulp-imagemin')
    pngquant = require('imagemin-pngquant');

//                                 minify HTML
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


//                                Inline  Critical CSS resources
gulp.task('critical1', function () {
  critical.generate({
    base: 'src',
    src: 'index.html',
    css: ['src/css/style.css'],
    dimensions: [{
      width: 320,
      height: 480
    },{
      width: 768,
      height: 1024
    },{
      width: 1280,
      height: 960
    }],
    dest: 'index.html',
    minify:true,
    inline: true
  });
});

//                                  Inline critical CSS resources
//                                  source : <root>/src , destination:  <root>
gulp.task('critical2', function () {
  critical.generate({
    base: 'src',
    src: 'project-mobile.html',
    css: ['src/css/style.css'],
    dimensions: [{
      width: 320,
      height: 480
    },{
      width: 768,
      height: 1024
    },{
      width: 1280,
      height: 960
    }],
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
    dimensions: [{
      width: 320,
      height: 480
    },{
      width: 768,
      height: 1024
    },{
      width: 1280,
      height: 960
    }],
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
    dimensions: [{
      width: 320,
      height: 480
    },{
      width: 768,
      height: 1024
    },{
      width: 1280,
      height: 960
    }],
    dest: 'project-2048.html',
    minify:true,
    inline: true
  });
});

gulp.task('critical5', function () {
  critical.generate({
    base: 'src',
    src: 'views/pizza.html',
    css: ['src/views/css/style.css','src/views/css/bootstrap-grid.css'],
    dimensions: [{
      width: 320,
      height: 480
    },{
      width: 768,
      height: 1024
    },{
      width: 1280,
      height: 960
    }],
    dest: 'views/pizza.html',
    minify:true,
    inline: true
  });
});
gulp.task('critical', ['critical1', 'critical2', 'critical3', 'critical4','critical5']);


//                                     minify critical html produced by the above critical tasks
//                                     source:<root>     destination:<root>
gulp.task('minify-critical-html1', function() {
    var opts = {
        conditionals: true,
        spare: true
    };
    return gulp.src('*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest(''));
});

gulp.task('minify-critical-html2', function() {
    var opts = {
        conditionals: true,
        spare: true
    };
    return gulp.src('views/*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('views'));
});
gulp.task('minify-critical-html', ['minify-critical-html1','minify-critical-html2' ]);


//                                         minify Inline javascript
//                                         source :<root>  destination:<root>
gulp.task('minify-inline', function() {
  gulp.src('*.html')
    .pipe(minifyInline())
    .pipe(gulp.dest(''))
})


//                                          minify JS
//                                          source:<root>/src   destination:<root>
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

//                                            minify CSS
//                                            source:<root>/src   destination:<root>
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

//                                              optimize images
//                                              source:<root>/src   destination:<root>
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
gulp.task('optimize-image', ['optimize-image1', 'optimize-image2']);

//                                                 Build function
//                                                 source:<root>/src   destination:<root>
gulp.task('build', ['minify-html', 'minify.Inline', 'minify-css', 'minify-js', 'optimize-image']);

//                                                 source:<root>/src   destination:<root>
//                                                 and  source:<root>   destination:<root>
gulp.task('build-critical', ['critical', 'minify-critical-html', 'minify-inline', 'minify-css', 'minify-js', 'optimize-image']);