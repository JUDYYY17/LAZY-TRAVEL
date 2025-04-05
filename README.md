# 懶人旅遊提案員 Lazy Travel Assistant

一個幫助使用者輕鬆規劃旅程的網站。

## 本地分享

1. 確保你的電腦和要分享的設備在同一個網路環境下
2. 在終端機中執行以下命令啟動本地伺服器：
   ```bash
   python3 -m http.server 8000
   ```
3. 查看你的 IP 地址（在 Mac 上可以使用 `ifconfig` 命令）
4. 讓其他人訪問 `http://你的IP地址:8000`

## 部署到網路伺服器

### 使用 GitHub Pages（免費）

1. 創建一個 GitHub 帳號
2. 創建一個新的 repository
3. 將所有檔案上傳到 repository
4. 在 repository 設定中啟用 GitHub Pages
5. 網站將可以在 `https://你的用戶名.github.io/repository名稱` 訪問

### 使用 Netlify（免費）

1. 創建一個 Netlify 帳號
2. 將網站檔案拖放到 Netlify 的部署區域
3. Netlify 會自動為你生成一個網址

### 使用傳統虛擬主機

1. 購買虛擬主機服務
2. 使用 FTP 工具將所有檔案上傳到主機
3. 網站將可以在你的域名下訪問

## 檔案結構

```
├── index.html          # 首頁
├── styles.css          # 樣式表
├── script.js           # JavaScript
├── images/             # 圖片資料夾
└── pages/              # 其他頁面
    ├── features.html
    ├── preview.html
    ├── testimonials.html
    ├── pricing.html
    └── plan.html
```

## 注意事項

- 確保所有圖片都已經上傳
- 檢查所有連結是否正確
- 測試網站在不同設備上的顯示效果 