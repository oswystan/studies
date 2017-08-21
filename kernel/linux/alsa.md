## 逻辑概念

```
include/sound/minors.h
 56 enum {
 57     SNDRV_DEVICE_TYPE_CONTROL,
 58     SNDRV_DEVICE_TYPE_SEQUENCER,
 59     SNDRV_DEVICE_TYPE_TIMER,
 60     SNDRV_DEVICE_TYPE_HWDEP,
 61     SNDRV_DEVICE_TYPE_RAWMIDI,
 62     SNDRV_DEVICE_TYPE_PCM_PLAYBACK,
 63     SNDRV_DEVICE_TYPE_PCM_CAPTURE,
 64     SNDRV_DEVICE_TYPE_COMPRESS,
 65 };
```



## 外部接口
- /dev/snd
- /proc/asound
- libasound

## 数据结构

```
include/sound/core.h:
188 struct snd_minor {
189     int type;           /* SNDRV_DEVICE_TYPE_XXX */
190     int card;           /* card number */
191     int device;         /* device number */
192     const struct file_operations *f_ops;    /* file operations */
193     void *private_data;     /* private data for f_ops->open */
194     struct device *dev;     /* device for sysfs */
195     struct snd_card *card_ptr;  /* assigned card instance */
196 };
```

- 框架代码入口：`sound/core/sound.c`
- 每个alsa设备都是一个字符设备
- `struct snd_pcm_runtime`中存放了dma buffer的地址信息

## 流程梳理

```
DMA中断处理流程：
##################################
pl330_irq_handler()->pl330_dotask()->
pl330_tasklet()->handle_cyclic_desc_list()
dmaengine_pcm_dma_complete()->
snd_pcm_period_elapsed()
```