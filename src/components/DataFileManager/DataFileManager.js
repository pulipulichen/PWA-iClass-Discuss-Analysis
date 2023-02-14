let app = {
  props: ['db'],
  components: {},
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
    'db.localConfig.analysisResult'() {
      this.parseAnalysisResult()
    },
    'db.config.inited' (inited) {
      // if (inited === true) {
      this.initAnalyze()
      // }
    },
  },
  computed: {},
  mounted() {
    this.initUtils()
  },
  methods: {
    
    initAnalyze: async function () {
      // return false
      
      await this.db.utils.AsyncUtils.sleep(3000)
      // console.log('go')
      if (this.db.localConfig.analysisResult === ``) {
        // console.log('go?')
        await this.startAnalyze()
      }
      else {
        this.parseAnalysisResult()
      }
    },
    startAnalyze: async function () {
      
      if (this.db.localConfig.files.length === 0) {
        return false
      }

      this.db.config.isAnalyzing = true
      this.db.config.resultRows = []
      
      let output = []
      // let scores = []

      // let scoreDateStart = null
      // let scoreDateEnd = null
      let students = {}

      for (let i = 0; i < this.db.localConfig.files.length; i++) {
        let file = this.db.localConfig.files[i]
        if (file.enable === false) {
          continue
        }
        let content = file.content
        // console.log(content)
        let record = content['回覆紀錄']
        if (!record) {
          record = content.Replies
        }

        // console.log(record)

        for (let j = 1; j < record.length; j++) {
          let row = record[j]

          // console.log({row})

          let rowOutput = []
          // row = this.filterRow(row)
          let type = row[2]
          let role = row[8]

          let title = row[3]
          if (typeof(title) === 'string') {
            title = title.trim()
          }
          let content = row[9]
          if (typeof(content) === 'string') {
            content = content.trim()
          }

          let time = new Date(row[4])
          // if (!scoreDateStart || time < scoreDateStart) {
          //   scoreDateStart = time
          // }
          // if (!scoreDateEnd || time > scoreDateEnd) {
          //   scoreDateEnd = time
          // }

          let id = Number(row[7])

          // console.log({type, role, title, content})

          // console.log(row)
          if (this.db.localConfig.onlyPost && 
             !(type === 'Topic' || type === 'Topics' || type === '文章') ) {
            continue
          }

          if (this.db.localConfig.onlyStudent && 
              !(role == '學生' || role === 'Student')) {
            continue
          }

          if (this.db.localConfig.anaylyzeContent) {
            if (this.db.localConfig.targetFieldTitle) {
              rowOutput.push(await this.filterText(title))
            }

            if (this.db.localConfig.targetFieldContent) {
              rowOutput.push(await this.filterText(content))
            }

            output.push(rowOutput)
          }

          // scores.push({
          //   id,
          //   time,
          //   title,
          //   content
          // })
          if (!students[id]) {
            students[id] = {
              time,
              title,
              content
            }
          }
          else {
            let before = students[id]
            students[id] = {
              time: Math.min(time, before.time),
              title: (title + ' ' + before.title).trim(),
              content: (content + ' ' + before.content).trim(),
            }
          }
        }
      }

      // console.log({output}, this.db.localConfig.files.length)

      this.db.localConfig.analysisResult = output.map(row => row.join('\t')).join('\n')

      let idList = Object.keys(students)
      idList.sort()
      
      this.db.config.scores = idList.map(id => {
        let s = students[id]
        return {
          id,
          time: s.time,
          title: s.title,
          content: s.content,
        }
      })
      // console.log(this.db.config.scores)

      // console.log(this.db.localConfig.analysisResult)

    },
    parseAnalysisResult () {
      this.db.config.isAnalyzing = true
      let analysisResult = this.db.localConfig.analysisResult
      analysisResult = analysisResult.trim()

      if (analysisResult === '') {
        this.db.config.resultRows = []
        return false
      }
      // console.log(analysisResult)
      clearTimeout(this.timer)

      this.timer = setTimeout(() => {
        analysisResult = analysisResult.replace(/\n/g, ' ')
        analysisResult = analysisResult.replace(/\t/g, ' ')
        let parts = analysisResult.split(' ')

        let countMap = {}

        parts.forEach((part) => {
          if (part === '') {
            return false
          }

          if (!countMap[part]) {
            countMap[part] = 0
          }
          countMap[part]++
        })

        let resultRows = Object.keys(countMap).map((key) => {
          return {
            term: key,
            count: countMap[key]
          }
        })

        resultRows.sort((a, b) => {
          return (b.count - a.count)
        })

        this.db.config.resultRows = resultRows
        this.db.config.isAnalyzing = false
      }, 300)
    },
    filterText: async function (text) {
      text = text.trim().split(' ')
      if (this.db.localConfig.filterColon) {
        text = this.splitTermsProcess(text, [',', ':', ':', '：', '、', '；', '，', '。', '（', '(', ')', '）', '.', '「', '」', ';', ' ', '?', '？', '《', '》', '=', '-'])
      }

      if (this.db.localConfig.filterSlash) {
        text = this.splitTermsProcess(text, ['|', '/', '\\', '／', '-'])
      }

      if (this.db.localConfig.filterSegment) {
        text = await this.db.utils.TokenizeUtils.tokenize(text, {
          removeEnglish: false,
          removeNumber: false,
          removeHTML: true,
          usePorterStemmer: false,
          configStopWords: `[BASIC]`
        })
        // console.log(text)
        // console.error('@TODO')
      }

      text = this.splitTermsProcess(text, ' ')
      // text = text.trim()

      // if (text.length > 0) {
      //   console.log(text)
      // }

      return text.join(' ')
    },
    splitTermsProcess (terms, splitor) {
      if (Array.isArray(splitor)) {
        for (let i = 0; i < splitor.length; i++) {
          terms = this.splitTermsProcess(terms, splitor[i])
        }
        return terms
      }

      let tmp = []

      terms.forEach(term => {
        term.split(splitor).forEach(term => {
          term = term.trim()
          term = term.toLowerCase()

          if (term !== '') {
            tmp.push(term)
          }
        })
      })

      return tmp
    },
  }
}

import DataFileManagerMethods from './DataFileManagerMethods.js';
DataFileManagerMethods(app)

export default app