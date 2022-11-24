/* global ClipboardUtils */

let appMain = {
  data () {
    
    
    
    return {
      cacheKey: 'iClass-Discuss-Analysis',
      cacheAttrs: ['YouTubeURL', 'iconURL', 'youtubeHorizontalPercentage', 'iconPaddingPercentage', 'iconPosition'],
      init: false,
      
      inputText: ``,
      processOutputWait: false,
      inputFilename: ``
    }
  },
  mounted () {
    this.dataLoad()
    
    this.inited = true

  },
  computed: {
  },
  watch: {
    
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
    loadInputFile(evt) {
      //console.log(1);loadInputFile
      if (!window.FileReader) {
        return false; // Browser is not compatible
      }
  
      this.processOutputWait = true
      var reader = new FileReader();
      let filename = evt.target.files[0].name
      let type = evt.target.files[0].type
      //console.log(type)
      if (filename.indexOf('.') > -1) {
        filename = filename.slice(0, filename.lastIndexOf('.'))
      }
      this.inputFilename = filename
  
      reader.onload = async (evt) => {
        // console.log(evt)
        if (evt.target.readyState !== 2) {
          this.processOutputWait = false
          return;
        }
        if (evt.target.error) {
          alert('Error while reading file');
          this.processOutputWait = false
          return;
        }
  
        let result = evt.target.result
        // console.log(type, result)
        if (type === 'application/vnd.oasis.opendocument.spreadsheet' || 
            type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'|| 
            type === 'application/wps-office.xlsx') {
          this.inputText = await this.processUploadTypeSheet(result)
        }
        // } else if (type === 'application/vnd.oasis.opendocument.text') {
        //   this.inputText = await this.processUploadTypeODT(result)
        // } else if (type === 'text/html') {
        //   this.inputText = this.processUploadTypeHTML(result)
        // } else if (type === 'text/csv') {
        //   this.inputText = await this.processUploadTypeCSV(result)
        // } else {
        //   this.inputText = result
        // }
        this.$refs.inputFileUploadTrigger.value = ''
        this.processOutputWait = false
        
        // this.initInputOptions()

        //console.log(this.config.session.inputText)
      }
  
      if (type === 'application/vnd.oasis.opendocument.spreadsheet' || 
          type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        let size = evt.target.files[0].size
        console.log('size', size)
        if (size > 25000000) {
          window.alert('ODS/XLSX檔案大小請低於2.5MB。')
          this.processOutputWait = false
          return false
        }
  
        reader.readAsBinaryString(evt.target.files[0])
      } else {
        reader.readAsText(evt.target.files[0])
      }
    },
    processUploadTypeSheet: async function (input) {
      console.log(input)
      var workbook = XLSX.read(input, {type: 'binary'});
  
      console.log(workbook)
      return workbook.SheetNames

      var result = [];
      for (let i in workbook.SheetNames) {
        let sheetName = workbook.SheetNames[i]
  
        var csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName], {
          FS: '\t',
          blankrows: false
        });
  
        //console.log(csv)
        result.push(csv.trim())
      }
  
      result = result.join('\n')
      result = result.split('\n').map(line => line.trim()).filter(line => (line !== '')).join('\n')
  
      console.log(result)
      return result
    },
  }
}

module.exports = appMain