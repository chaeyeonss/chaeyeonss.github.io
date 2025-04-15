module.exports = gulp => {
    gulp.task('watch', () => {
        gulp.watch('_scss/**/*.scss', gulp.series('sass'));
        gulp.watch('js/**/*.js', gulp.series('scripts'));
        // 필요 시 다른 watch 추가 가능
    });
};
