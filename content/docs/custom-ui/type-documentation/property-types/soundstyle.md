---
title: SoundStyle
authors:
  - name: "Hypixel Studios Canada Inc."
    url: "https://hytale.com"
---

<OfficialDocumentationNotice />

# SoundStyle

指定单个声音的声音属性

## 属性

| 名称                       | 类型               | 描述                                                                                                                        |
| ------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **SoundPath**            | UI Path (String) | 要播放的声音文件。必须是 .ogg 文件                                                                                                      |
| **Volume**               | Float            | 音量，单位为分贝                                                                                                                  |
| **MinPitch**             | Float            | 如果指定，将在 MinPitch 和 MaxPitch 之间随机选取一个值作为音高。该值必须以半音为单位                                                                      |
| **MaxPitch**             | Float            | 如果指定，将在 MinPitch 和 MaxPitch 之间随机选取一个值作为音高。该值必须以半音为单位                                                                      |
| **StopExistingPlayback** | Boolean          | 如果启用，在播放此声音之前，会停止所有具有相同文件路径的现有 UI 声音播放                                                                                    |
