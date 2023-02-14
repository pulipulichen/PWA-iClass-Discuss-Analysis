export default function (app) {

  app.watch['db.config.inited'] = function () {
    if (this.db.config.inited === false) {
      return false
    }

    // setTimeout(() => {
    if (this.db.localConfig.anaylyzeContent) {
      this.initCytoscapeVis()
    }
    // }, 100)
  }

  app.watch['db.localConfig.analysisResult'] = function () {
    if (this.db.config.inited === false) {
      return false
    }

    // setTimeout(() => {
    if (this.db.localConfig.anaylyzeContent) {
      this.initCytoscapeVis()
    }
      
  }
}