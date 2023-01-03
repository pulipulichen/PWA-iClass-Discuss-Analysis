let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      timer: null
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
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
  },
  methods: {
    startAnalyze () {
      this.db.file.startAnalyze()
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