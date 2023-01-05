export default function (app) {

  app.methods.scrollToTermFocus = function (term) {
    // console.log(this.config.inited, this.localConfig.view)
    if (this.db.config.inited === false) {
      return false
    }
    // console.log('go')
    // this.$parent.$refs.ListIndex.scrollToTermFocus()
    // this.$parent.$refs.ListThesaurus.scrollToTermFocus()

    let element = document.getElementById(`term_${term}`)
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
    $(element).addClass('focus')
    setTimeout(() => {
      $(element).removeClass('focus')
    }, 3000)
  }

  let locatorSizeLimit = 8
  app.methods.displayLocator = function (loc) {
    if (loc.length < locatorSizeLimit) {
      return loc
    }

    let half = Math.ceil(locatorSizeLimit / 2) - 1
    return loc.slice(0, half) + '...' + loc.slice(half * -1)
  }
}