

## 開發時   
```
gulp w  #即時編譯 (在CLI下指令)
```
```
./dist/index.html #對這個檔案開啟live-server
```

- dev資料夾： 開發
- dist資料夾： 上線(不要改動此資料夾內的資料)

## Git協作開發流程
切換到dev分支，把大家的程式碼同步下來。
```
-- 同步大家的程式碼
git checkout dev
git pull

-- 將最新程式碼合併到自己分支
git checkout dev_組員名
git pull
git merge dev
git add .
git commit -m "sync"
git push
```
在自己分支進行開發
```
-- 開發前
git checkout dev_組員名

--- 開始進行開發
...

--- 開發完的備份
git add .
git commit -m "你改了什麼"
git push #推到你自己的分支做remote備份
```
開發完的合併 (把自己的分支合併進dev分支並推到github)
```
git checkout dev
git merge dev_組員名
git add .
git commit -m "訊息"
git push
```

### commit訊息意義
```
add 新增了什麼     ex: add 輪播圖
fix 修正壞掉的code ex: fix 輪播圖
update 更新了什麼  ex: update header, footer
```

### 開發gulp常用功能
```
gulp w          #監看sass、監看html
gulp imagemin   #壓圖
gulp webserver  #監看sass、監看html、啟動畫面即時更新
```# 2022-portfolio
