# 羊羊相关微信小程序备份

本 repo 用于备份羊羊相关微信小程序的主程序，并量力而为地备份相关网络文件资源。

## 进度

- [x] 羊言羊语（2025 年 8 月 8 日备份）
- [x] 绵绵喜话（2025 年 8 月 9 日备份）
- [x] 火花杂物社
- [ ] 喜羊羊超能铃铛

## 微信小程序反编译工具

- [KillWxapkg](https://github.com/Ackites/KillWxapkg)

Windows 系统下。下面命令以**羊言羊语**（ID 为`wx8a1c8def35a6e32f`）为例，假设文件夹`%USERPROFILE%\Documents\WeChat Files\Applet\wx8a1c8def35a6e32f\17`存在（内包含一个或多个`.wxapkg`文件），即使用电脑版微信打开过该小程序。文件路径为微信默认路径。

```bash
KillWxapkg.exe -id="wx8a1c8def35a6e32f" -in="%USERPROFILE%\Documents\WeChat Files\Applet\wx8a1c8def35a6e32f\17" -out="./羊言羊语" -restore -pretty
```

## 有用的正则表达式

- 图片/音频/视频文件：`\.(png|jpg|jpeg|bmp|mp3|mp4|wav|gif|webp|svg)`
- 模型文件（以及动作 JSON）：`\.(glb|gltf|fbx|obj|stl|dae|json|zip)`

## 有用的 wget 下载命令

```bash
wget --no-check-certificate -e robots=off -r -l inf -k -p -E -nc -N -H -P . -i 下载列表.txt
```
