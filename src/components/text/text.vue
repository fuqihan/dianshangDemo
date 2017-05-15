<template>
  <md-card>
    <md-card-media>
      <div class='item' style="width: 500px">
        <div class='player'>
          <video-player :options='playerOptions'
                        @ready='playerReadied($event)'>
          </video-player>
        </div>
      </div>
    </md-card-media>
  </md-card>
</template>

<script>
  // resolution-switcher plugin
  require('videojs-resolution-switcher')
  require('videojs-resolution-switcher/lib/videojs-resolution-switcher.css')
  export default {
    data () {
      return {
        playerSources: [{
          type: 'video/mp4',
          src: 'http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_H',
          label: '1080P',
          res: 1
        }, {
          type: 'video/mp4',
          src: 'http://221.11.100.42/7xkwa7.media1.z0.glb.clouddn.com/sample_video_M?wsiphost=local',
          label: '720P',
          res: 2
        }, {
          type: 'video/mp4',
          src: 'http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L',
          label: '360P',
          res: 3
        }],
        playerOptions: {
          plugins: {
            videoJsResolutionSwitcher: {
              ui: true,
              default: 3,
              dynamicLabel: true
            }
          },
          playbackRates: [0.7, 1, 1.3, 1.5, 1.7],
          poster: '/static/images/author-3.jpg',
          height: 360
        }
      }
    },
    methods: {
      playerReadied (player) {
        if (player.updateSrc) {
          player.updateSrc(this.playerSources)
          player.on('resolutionchange', function () {
            console.log('switch the source', player.src())
          })
        }
      }
    }
  }
</script>
