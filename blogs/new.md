# 解决 iOS 设备上的 Audio 不能连续播放问题

---

### 遇到了什么问题？

有一个需求，需要在一个 Audio 播放完后，继续播放下一个 Audio，类似实现一个音频播放列表。发现
audio[0].play() 正常 work，但是 audio[1].play() 在 iOS 设备上不会被执行。

---

### 为什么会发生这个问题？

iOS 做了多媒体优化，控制不能 play 多个 Audio。

---

### 如何解决这个问题？

通过将 audio 节点的 src 重新赋值，来实现 Audio 的连续播放。

    // audio是我的React refs
    // <audio
    //     src={src[0]}
    //     hidden
    //     ref={e => {
    //         this.audio = e;
    //     }}
    // />
    audio.play();// 第一个音频
    audio.addEventListener('ended', () => handleAudioEnd());

    handleAudioEnd() {
        audio.src = '...';
        audio.load();
        audio.play();
    }

### 前端不易，且行且珍惜。
