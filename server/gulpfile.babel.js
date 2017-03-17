import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import del from 'del';
import runSequence from 'run-sequence';

const plugins = gulpLoadPlugins();

const paths = {
    js: ['./**/*.js', '!dist/**', '!node_modules/**'],
    nonJs: ['./package.json', './.gitignore', './.env'],
    tests: './app/tests/*.js'
};

// Clean up dist directory
gulp.task('clean', () =>
    del.sync(['dist/**', 'dist/.**', '!dist',])
);

// Copy non-js files to dist
gulp.task('copy', () =>
    gulp.src(paths.nonJs)
    .pipe(plugins.newer('dist'))
    .pipe(gulp.dest('dist'))
);

gulp.task('babel', () =>
    gulp.src([...paths.js, '!gulpfile.babel.js'], { base: '.'})
    .pipe(plugins.newer('dist'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel())
    .pipe(plugins.sourcemaps.write('.', {
        includeCOntent: false,
        courseRoot(file) {
            return path.relative(file.path, __dirname);
        }
    }))
    .pipe(gulp.dest('dist'))
);

// Start server with restart on file changes
gulp.task('nodemon', ['copy', 'babel'], () =>
    plugins.nodemon({
        script: path.join('dist', 'app/index.js'),
        ext: 'js',
        ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
        tasks: ['copy', 'babel']
    })
);

// gulp serve for development
gulp.task('serve', ['clean'], () => runSequence('nodemon'));

// default task: clean dist, compile js files and copy non-js files.
gulp.task('default', ['clean'], ( )=> {
    runSequence(
        ['copy', 'babel']
    );
});
