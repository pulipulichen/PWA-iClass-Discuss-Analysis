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
    importFilesByEvent (event) {
      return this.db.file.importFilesByEvent(event);
    },
    emptyFiles () {
      if (!window.confirm('Are you sure you want to clean all files?')) {
        return false
      }

      this.db.localConfig.files = this.db.localConfig.files.slice(0, 0)
    }
  }
}

export default app