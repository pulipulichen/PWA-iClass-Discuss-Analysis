/* global ClipboardUtils */

let appMain = {
  data () {
    
    
    
    return {
      cacheKey: 'iClass-Discuss-Analysis',
      cacheAttrs: ['splitorSpace', 'splitorSlash', 'splitorColon', 'input'],
      init: false,

      splitorSpace: false,
      splitorSlash: true,
      splitorColon: true,
      
      input: ``,
      inputExample: null,
      inputExamplePath: `./assets/inputExample.txt`,

      resultRows: []
    }
  },
  mounted () {
    this.dataLoad()
    
    this.inited = true

    setTimeout(() => {
      this.setExample()
    }, 1000)
  },
  // computed: {
  // },
  watch: {
    resultRows () {
      this.setJQCloud()
    },
  },
  methods: {
    dataLoad () {
      let projectFileListData = localStorage.getItem(this.cacheKey)
      if (!projectFileListData) {
        return false
      }
      
      projectFileListData = JSON.parse(projectFileListData)
      for (let key in projectFileListData) {
        this[key] = projectFileListData[key]
      }
    },
    dataSave () {
      if (this.inited === false) {
        return false
      }
      
      let keys = this.cacheAttrs
      
      let data = {}
      keys.forEach(key => {
        data[key] = this[key]
      })
      
      data = JSON.stringify(data)
      localStorage.setItem(this.cacheKey, data)
    },
    
    setExample () {
      if (!this.inputExample) {
        $.get(this.inputExamplePath, result => {
          this.inputExample = result
          this.input = this.inputExample

          this.analysisDiscuss()
        })
        return false
      }
      else {
        this.input = this.inputExample

        this.analysisDiscuss()
      }
    },

    analysisDiscuss () {
      if (this.input.trim() === '') {
        return false
      }

      let termsCount = {}
      this.input.trim().split('\n').forEach(line => {
        let parts = line.split('\t')

        if (parts.length < 2) {
          return false
        }

        let type = parts[0]
        if (type !== '文章') {
          return false
        }

        let terms = this.splitTerms(parts[1])

        terms.forEach(t => {
          // t = t.trim()

          if (!termsCount[t]) {
            termsCount[t] = 0
          }
          termsCount[t]++
        })
      })

      let output = Object.keys(termsCount).map(t => {
        return {
          term: t,
          text: t,
          count: termsCount[t],
          weight: termsCount[t]
        }
      })

      output.sort((a, b) => {
        return b.count - a.count
      })

      this.resultRows = output
  
      // $('#jqcloud').jQCloud('update', words);
    },
    splitTerms (str) {
      let terms = [str]
      
      if (this.splitorSpace) {
        terms = this.splitTermsProcess(terms, [' ', '　'])
      }
      if (this.splitorSlash) {
        terms = this.splitTermsProcess(terms, ['|', '/', '\\', '／', '-'])
      }

      if (this.splitorColon) {
        terms = this.splitTermsProcess(terms, [',', ':', ':', '：', '、', '；', '，', '。'])
      }

      return terms
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
    setJQCloud () {

      // console.log(this.resultRows)
      // $(this.$refs.jQCloud).jQCloud(this.resultRows);
      /*
      var words = [
        {text: "Lorem", weight: 13},
        {text: "Ipsum", weight: 10.5},
        {text: "Dolor", weight: 9.4},
        {text: "Sit", weight: 8},
        {text: "Amet", weight: 6.2},
        {text: "Consectetur", weight: 5},
        {text: "Adipiscing", weight: 5},
      ];
      
      $('#jqcloud').jQCloud(words);
      console.log($('#jqcloud')[0])
      */

      // var words = [
      //   {text: "Lorem", weight: 13},
      //   {text: "Ipsum", weight: 10.5},
      //   {text: "Dolor", weight: 9.4},
      //   {text: "Sit", weight: 8},
      //   {text: "Amet", weight: 6.2},
      //   {text: "Consectetur", weight: 5},
      //   {text: "Adipiscing", weight: 5},
      // ];

      let words = []
      this.resultRows.forEach(({term, count}) => {
        words.push({
          text: term,
          weight: count,
          handlers: {
            click: function () {
              let term = this.innerText.trim()
              let element = document.getElementById(`term_${term}`)
              element.scrollIntoView({ behavior: 'smooth', block: 'start'});
              $(element).addClass('focus')
              setTimeout(() => {
                $(element).removeClass('focus')
              }, 3000)
            }
          }
        })
      })

      let options = {
        autoResize: true
      }

      if ($('#jqcloud').children().length === 0) {
        // $('#jqcloud').jQCloud(words, options)
        $('#jqcloud').jQCloud(words, options)
      }
      else {
        $('#jqcloud').jQCloud('update', words, options)
      }
      
    }
  }
}

// ----------------------------------------------------------------

appMain.data().cacheAttrs.forEach(attr => {
  if (!appMain.watch[attr]) {
    appMain.watch[attr] = function () {
      this.dataSave()
    }
  }
})


// ----------------------------------------------------------------

module.exports = appMain