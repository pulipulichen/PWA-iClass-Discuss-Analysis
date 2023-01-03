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
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
    removeFile (filename) {
      if (!window.confirm(`Are you sure you want to remove "${filename}"?`)) {
        return false
      }

      this.db.localConfig.files = this.db.localConfig.files.filter((file) => {
        return (file.filename !== filename)
      })

      this.db.localConfig.analysisResult = ``
    }
  }
}

export default app