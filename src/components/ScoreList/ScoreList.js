import dayjs from 'dayjs'

let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      scoreStartTime: null,
      scoreStartTimeManual: null,
      scoreStartTimeRecommand: null,
      scoreEndTime: null,
      scoreEndTimeManual: null,
      scoreEndTimeRecommand: null,
      scoreAvgTime: null,
      minInterval: 4 * 60 * 60 * 1000 // 四個小時
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  computed: {
    scores () {
      let scores = [
        ...this.db.config.scores
      ]

      scores.sort((a, b) => {
        return b.time - a.time
      })

      // this.scoreStartTime = null
      // this.scoreStartTimeManual = null
      // this.scoreEndTime = null
      // this.scoreEndTimeManual = null
      
      // scores = scores.map((score) => {
      //   score.score = 100

      //   return score
      // })
      this.recommendTimeSpan(scores)

      return scores
    },
    scoreStartTimeManualObject () {
      return new Date(this.scoreStartTime)
    },
    scoreEndTimeTodayObject () {
      let d = new Date(this.scoreStartTime)
      d.setHours(23)
      d.setMinutes(59)
      return d
    },
    scoreEndTimeManualObject () {
      return new Date(this.scoreEndTimeManual)
    },
    finalScores () {
      // console.log(this.scoreStartTimeManualObject)
      let finalScores = this.scores.map(scoreObject => {
        // let score = scoreObject.score
        let time = scoreObject.time
        // console.log(time, (time >= this.scoreStartTimeManualObject && time <= this.scoreEndTimeManualObject), this.scoreStartTimeManualObject, this.scoreEndTimeManualObject)
        
        if (time >= this.scoreStartTimeManualObject && time <= this.scoreEndTimeManualObject) {
          return 100
        }
        return 0
      })
      // console.log(finalScores)
      return finalScores
    },
    zeroCountEnd () {
      let count = 0
      for (let i = 0; i < this.finalScores.length; i++) {
        if (this.finalScores[i] > 0) {
          break
        }
        count++
      }
      return count
    },
    zeroCountStart () {
      let count = 0
      for (let i = this.finalScores.length - 1; i > -1; i--) {
        if (this.finalScores[i] > 0) {
          break
        }
        count++
      }
      return count
    },
    scoringScript () {
      let outputScores = []
      this.scores.forEach((score, i) => {
        outputScores.push({
          id: score.id,
          score: this.finalScores[i]
        })
      })

      let name = this.db.localConfig.files[0].filename
      name = name.slice(0, name.lastIndexOf(' ('))

      let copyScript = `// ${name}: ${this.zeroCountStart} - ${this.zeroCountEnd}
d = ${JSON.stringify(outputScores)}

$('[original-title="${name}"]').css('background-color', 'yellow').click()

setTimeout(() => {
  $('.activity-detail-tabs > span:last').click()

  setTimeout(() => {
    d.forEach(({id, score}) => {
      let span = $('span[tipsy="enrollment.student.user_no"][original-title="' + id + '"]')
      let li = span.parents('.list-item:first')
      let input = li.find('input.final-score:first')
      input[0].dispatchEvent(new Event('focus', {bubbles: true,cancelable: true,}))
      input.val(score)
      input[0].dispatchEvent(new Event('input', {bubbles: true,cancelable: true,}))
      input[0].dispatchEvent(new Event('blur', {bubbles: true,cancelable: true,}))
    })

    setTimeout(() => {
      history.go(-1)
      setTimeout(() => {
        $('[original-title="${name}"]').css('background-color', 'yellow')
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

// ${name}: ${this.zeroCountStart} - ${this.zeroCountEnd}`
      this.db.utils.ClipboardUtils.copyPlainString(copyScript)
      return copyScript
    }
  },
  mounted() {
    // console.log('ok')
  },
  methods: {
    displayTime  (time) {
      return dayjs(time).format('MM.DD HH:mm')
    },
    displayTimeYear  (time) {
      return dayjs(time).format('YYYY.MM.DD HH:mm')
    },
    recommendTimeSpan (scores) {
      let times = scores.map(s => s.time)
      if (times.length === 0) {
        return false
      }


      this.scoreStartTime = Math.min(...times)
      // this.scoreStartTimeManual = this.displayTimeYear(this.scoreStartTime)
      this.scoreEndTime = Math.max(...times)
      // this.scoreEndTimeManual = this.displayTimeYear(this.scoreEndTime)

      // console.log(times)
      // return false
      let timestampList = times.map(t => {
        if (typeof(t) === 'object') {
          return t.getTime()
        }
        return t
      })

      if (this.scoreEndTime - this.scoreStartTime < this.minInterval) {
        this.scoreStartTimeRecommand = dayjs.unix((this.scoreStartTime)/1000).format('YYYY.MM.DD HH:mm')
        this.scoreStartTimeManual = this.scoreStartTimeRecommand

        this.scoreEndTimeRecommand = dayjs.unix((this.scoreEndTime)/1000).format('YYYY.MM.DD HH:mm')
        this.scoreEndTimeManual = this.scoreEndTimeRecommand

        return true
      }

            // console.log(timestampList)
      // return false
      let mean = this.getMean(timestampList)
      let std = this.getStandardDeviation(timestampList, mean)
      // console.log(this.scoreStartTime)
      let timestampMin = mean-std
      if (timestampMin < this.scoreStartTime) {
        timestampMin = this.scoreStartTime
      }
      this.scoreStartTimeRecommand = dayjs.unix((timestampMin)/1000).format('YYYY.MM.DD HH:mm')
      this.scoreStartTimeManual = this.scoreStartTimeRecommand

      let timestampMax = mean+std

      
      if (timestampMax - timestampMin < this.minInterval) {
        timestampMax = timestampMin + this.minInterval
      }
      if (timestampMax > this.scoreEndTime) {
        timestampMax = this.scoreEndTime
      }
      this.scoreEndTimeRecommand = dayjs.unix((timestampMax)/1000).format('YYYY.MM.DD HH:mm')
      this.scoreEndTimeManual = this.scoreEndTimeRecommand

      // console.log(dayjs.unix((mean-std)/1000).format('MM.DD HH:mm'), dayjs.unix((mean+std)/1000).format('MM.DD HH:mm'))


    },
    getMean (array) {
      const n = array.length
      return array.reduce((a, b) => a + b) / n
    },
    getStandardDeviation (array, mean) {
      const n = array.length
      return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
    },
    copyScript () {
      this.db.utils.ClipboardUtils.copyPlainString(this.scoringScript)
    }
  }
}

export default app