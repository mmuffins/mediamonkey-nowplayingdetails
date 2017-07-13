var nowPlayingData = {
  getTracklist: function() {
    return app.player.getSongList().getTracklist()
  }
}

nodeHandlers.root.override({
  getChildren: function($super, node) {
    return new Promise(function(resolve, reject) {
      $super(node).then(function() {
        node.addChild(nowPlayingData, 'npview')
        resolve()
      })
    })
  }
})

nodeHandlers.npview.override({
	viewAs: ['nowplaying','tracklist','simpleTracklist','albumlist']
})

viewHandlers.nowplaying.override({
  title: function() {
    return _('Now Playing View')
  }
})
