let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      timer: null,
      demoList: ['library'],
      demoSelect: ''
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
    demoSelect () {
      if (this.demoSelect === '') {
        return false
      }
      this.loadDemo()
      this.demoSelect = ''
    }
  },
  computed: {
    disableAnalyze () {
      if (this.db.localConfig.files.length === 0) {
        return true
      }

      if (this.db.config.isAnalyzing) {
        return true
      }

      return false
    }
  },
  mounted() {
    this.initDemo()
  },
  methods: {
    startAnalyze () {
      this.db.file.startAnalyze()
    },
    loadDemo: async function () {
      let file = this.demoSelect
      if (this.db.localConfig.analysisResult.trim() !== '') {
        if (!window.confirm(this.$t(`Load demo will replace your current data. Are you sure you want to do it?`))) {
          return false
        }
      }

      this.db.localConfig.analysisResult = await this.db.utils.AxiosUtils.get(`./assets/demo/${file}.txt`)
    },
    initDemo: async function () {
      await this.db.utils.AsyncUtils.sleep(3000)
      if (this.db.localConfig.files.length === 0 && 
          this.db.localConfig.analysisResult === '') {
        this.demoSelect = this.demoList[0]
      }
    }
    // filterRow (row) {
    //   if (row['類型']) {
    //     if (row['類型'] === '文章') {
    //       row.Type = 'Topic'
    //     }
    //     else {
    //       row.Type = 'Reply'
    //     }
    //   }

    //   if (row['課程角色']) {
    //     if (row['課程角色'] === '學生') {
    //       row.Role = 'Student'
    //     }
    //     else {
    //       row.Role = 'Instructor'
    //     }
    //   }

    //   if (row['標題']) {
    //     row.Title = row['標題']
    //   }

    //   if (row['內容']) {
    //     row.Content = row['內容']
    //   }

    //   return row
    // }
  }
}

export default app