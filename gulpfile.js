// const { src, dest, series, parallel, watch } = require("gulp");

// //任務一：print任務
// function tasks(cb) {
//   return console.log("任務一完成");
//   cb(); //任務完成
// }
// //CLI執行 gulp do
// exports.do = tasks;

// //任務二：檔案搬家
// function move() {
//   //src('來源檔')
//   //dest('輸入位置')
//   return src("style.css").pipe(dest("css/"));
// }
// //CLI執行 gulp copy
// exports.copy = move;

// // sass -> css
// const sass = require("gulp-sass")(require("sass"));
// function sassstyle() {
//   return src("./dev/sass/style.scss").pipe(sass().on("error", sass.logError)).pipe(dest("./dist/css/"));
// }
// exports.style = sassstyle;

// // html template
// const fileinclude = require("gulp-file-include");
// function html() {
//   return src("./dev/html/*.html")
//     .pipe(
//       fileinclude({
//         prefix: "@@",
//         basepath: "@file",
//       })
//     )
//     .pipe(dest("./dist/"));
// }
// exports.template = html;


// // 壓圖
// const gulp = require("gulp");
// const imagemin = require("gulp-imagemin"); // 載入 gulp-imagemin 套件

// gulp.task("imagemin", () => {
//   return gulp
//     .src("./dev/images/**")
//     .pipe(imagemin()) // 執行優化(壓縮)
//     .pipe(gulp.dest("./dist/images"));
// });

// //watch 監看 sass及html
// function watchall() {
//   //[監看第一層目錄,第二層目錄], 要執行的function
//   watch(["./dev/html/*.html", "./dev/html/**/*.html"], html); //監看html
//   watch(["./dev/sass/*.scss", "./dev/sass/**/*.scss"], sassstyle); //監看sass
//   // watch(["./dev/images/*.png", "./dev/images/**/*.png"], imagemin); //監看壓圖
// }
// exports.w = watchall;

// // live-server (如果要即時更新再開啟以下這堆程式碼，因為gulp更新會閃一下，還是原有的live-server比較好用)
// const browserSync = require("browser-sync");
// const reload = browserSync.reload;

// function browser(done) {
//   browserSync.init({
//     server: {
//       baseDir: "./dist",
//       index: "index.html",
//     },
//     port: 3000,
//   });
//   watch(["./dev/html/*.html", "./dev/html/**/*.html"], html).on("change", reload); //監看html
//   watch(["./dev/sass/*.scss", "./dev/sass/**/*.scss"], sassstyle).on("change", reload); //監看sass
//   done();
// }
// exports.webserver = browser;


const { src, dest, series, parallel, watch } = require("gulp");

//任務一：print任務
function tasks(cb) {
  return console.log("任務一完成");
  cb(); //任務完成
}
//CLI執行 gulp do
exports.do = tasks;

//任務二：檔案搬家
function move() {
  //src('來源檔')
  //dest('輸入位置')
  return src("style.css").pipe(dest("css/"));
}
//CLI執行 gulp copy
exports.copy = move;

// sass -> css
const sass = require("gulp-sass")(require("sass"));
function sassstyle() {
  return src("./dev/sass/style.scss").pipe(sass().on("error", sass.logError)).pipe(dest("./doc/css/"));
}
exports.style = sassstyle;

// html template
const fileinclude = require("gulp-file-include");
function html() {
  return src("./dev/html/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("./doc/"));
}
exports.template = html;


// 壓圖
const gulp = require("gulp");
const imagemin = require("gulp-imagemin"); // 載入 gulp-imagemin 套件

gulp.task("imagemin", () => {
  return gulp
    .src("./dev/images/**")
    .pipe(imagemin()) // 執行優化(壓縮)
    .pipe(gulp.dest("./doc/images"));
});

//watch 監看 sass及html
function watchall() {
  //[監看第一層目錄,第二層目錄], 要執行的function
  watch(["./dev/html/*.html", "./dev/html/**/*.html"], html); //監看html
  watch(["./dev/sass/*.scss", "./dev/sass/**/*.scss"], sassstyle); //監看sass
  // watch(["./dev/images/*.png", "./dev/images/**/*.png"], imagemin); //監看壓圖
}
exports.w = watchall;

// live-server (如果要即時更新再開啟以下這堆程式碼，因為gulp更新會閃一下，還是原有的live-server比較好用)
const browserSync = require("browser-sync");
const reload = browserSync.reload;

function browser(done) {
  browserSync.init({
    server: {
      baseDir: "./doc",
      index: "index.html",
    },
    port: 3000,
  });
  watch(["./dev/html/*.html", "./dev/html/**/*.html"], html).on("change", reload); //監看html
  watch(["./dev/sass/*.scss", "./dev/sass/**/*.scss"], sassstyle).on("change", reload); //監看sass
  done();
}
exports.webserver = browser;