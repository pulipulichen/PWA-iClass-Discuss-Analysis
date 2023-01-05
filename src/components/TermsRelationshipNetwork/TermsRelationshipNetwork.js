/* global Node */
import $ from 'jquery'

let app = {
  props: ['db'],
  data() {
    this.$i18n.locale = this.db.config.localConfig
    return {
      postMessageAPI: null,
      graphData: null,
      cyTimer: null,
      termMaxLength: 15,
			cyReady: false
      // cy: null
    }
  },
  components: {
  },
  computed: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  watch: {
    'db.config.resultRows' (resultRows) {
			if (resultRows.length === 0) {
				this.cyReady = false
			}
		}
  },
  mounted() {
    // setTimeout(() => {
    //   this.initCytoscapeVis()
    // }, 500)
    // $(window).on('resize', () => {
    //    this.initCytoscapeVis()
    // })
    
  },
  methods: {
  }
}

import TermsRelationshipNetworkWatch from './TermsRelationshipNetworkWatch.js'
TermsRelationshipNetworkWatch(app)

import TermsRelationshipNetworkComputed from './TermsRelationshipNetworkComputed.js'
TermsRelationshipNetworkComputed(app)

import TermsRelationshipNetworkComputedCytoscape from './TermsRelationshipNetworkComputedCytoscape.js'
TermsRelationshipNetworkComputedCytoscape(app)

import TermsRelationshipNetworkMethods from './TermsRelationshipNetworkMethods.js'
TermsRelationshipNetworkMethods(app)

import TermsRelationshipNetworkMethodsCytoscape from './TermsRelationshipNetworkMethodsCytoscape.js'
TermsRelationshipNetworkMethodsCytoscape(app)

export default app