let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  // computed: {
  // },
  // mounted() {
    
  // },
  methods: {
    weightToRGB (weight) {
			let val = 100 - weight
      if (val > 100) {
          val = 100;
      }
      else if (val < 0) {
          val = 0;
      }
			let r, g, b
      if (val <= 50)
      {
          r = Math.floor((255 * (val / 50))/2),
          g = 255,
          b = Math.floor((255 * (val / 50))/2);
      }
      else
      {
          r = 255,
          g = Math.floor((100 - val) / 50 * 255/2),
          b = Math.floor((100 - val) / 50 * 255/2);
      }
      return "rgb(" + r + "," + g + "," + b + ") !important"
		}
  }
}

export default app