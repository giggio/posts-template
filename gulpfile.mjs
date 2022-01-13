import slugify from '@sindresorhus/slugify';
import gulp from 'gulp';
import debug from 'gulp-debug';
import gulpMarkdownIt from 'gulp-markdown-it-adapter';
import MarkdownIt from 'markdown-it';
import markdownitanchor from 'markdown-it-anchor';
import markdownittoc from 'markdown-it-toc-done-right';
import yargs from 'yargs';
const argv = yargs(process.argv).argv;

var md = new MarkdownIt('default', {
  xhtmlOut: true,
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    const attrs = lang ? ` class="brush: ${lang};"` : '';
    return `<pre${attrs}>${md.utils.escapeHtml(str)}</pre>`
  }
})
  .use(markdownitanchor, { slugify })
  .use(markdownittoc, { slugify });

const file = argv.file || ['posts/**/*.md', '!node_modules/**/*'];
gulp.task('build', () =>
  gulp.src(file)
    .pipe(gulpMarkdownIt(md))
    .pipe(debug({ title: 'compiled' }))
    .pipe(gulp.dest('./out/'))
);

gulp.task('watch', gulp.series('build', () => {
  return gulp.watch(file, gulp.series('build'));
}));

gulp.task('default', gulp.series('watch'));
