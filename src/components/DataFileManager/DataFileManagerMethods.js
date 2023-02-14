import XLSX from 'xlsx'

export default function (app) {

  if (!app.methods) {
    app.methods = {}
  }

  app.methods.initUtils = function () {
    this.db.file = {
      importFilesByEvent: (event) => {
        this.importFilesByEvent(event)
      },
      getDataInstance: () => {
        return this
      },
      startAnalyze: () => {
        return this.startAnalyze()
      }
    }
    // console.log(this.db.task)
  }
  
  app.methods.importFilesByEvent = async function (event) {
    if (!window.FileReader) {
      console.error(this.$t('Browser is not compatible'))
      return false // Browser is not compatible
    }
    // console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    event.preventDefault();

    let files = []
    
    if (event.dataTransfer && event.dataTransfer.items) {
      
      // Use DataTransferItemList interface to access the file(s)
      [...event.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile();
          // console.log(`… file[${i}].name = ${file.name}`);
          files.push(file)
        }
      });
    } 
    else if (event.dataTransfer && event.dataTransfer.files) {
      // Use DataTransfer interface to access the file(s)
      [...event.dataTransfer.files].forEach((file, i) => {
        // console.log(`… file[${i}].name = ${file.name}`);
        files.push(file)
      });
    }
    else {
      files = event.target.files
    }

    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        await this.importFile(files[i])
      }
    }

    event.target.value = ''
  }

  app.methods.importFile = async function (file) {
    let filename = file.name

    let workbook = await this.loadFileSheet(file)
    let data = await this.parsingWorkbookToArray(workbook)
    
    let forumInformation = this.getForumInformation(data)
    if (forumInformation) {
      filename = forumInformation
    }

    let fileItem = []
    if (Array.isArray(this.db.localConfig.files)) {
      fileItem = this.db.localConfig.files.filter(file => {
        return (file.filename === filename)
      })
    }
      
    // console.log(data)
    // console.log(fileItem)

    if (fileItem.length > 0) {
      fileItem = fileItem[0]
    }
    else {
      if (this.db.localConfig.singleFileAnalysisMode) {
        this.db.localConfig.files = []
        
        this.db.localConfig.files.push({
          filename,
          enable: true,
          content: data
        })
        // console.log(this.db.localConfig.files)
      }
      else {
        this.db.localConfig.files.push({
          filename,
          enable: true,
          content: data
        })
      }
    }

    if (this.db.localConfig.singleFileAnalysisMode || 
      this.db.localConfig.analysisResult === ``) {
      // console.log('startAnalyze')
      this.startAnalyze()
    }
  }

  app.methods.getForumInformation = function (data) {
    let sheet = data['Topic information']
    if (!sheet) {
      sheet = data['討論資訊']
    }

    if (Array.isArray(sheet) === false) {
      return false
    }

    let forumName
    let forumStartTime

    // console.log(sheet)

    for (let i = 0; i < sheet.length; i++) {
      let row = sheet[i]

      let key = row[0]
      let value = row[1]

      if (key === 'Forum' || key === '討論區') {
        forumName = value
      }
      else if (key === 'Available From' || key === '開放時間') {
        // forumStartTime = value.
        let spaceParts = value.split(' ')
        let dotParts = spaceParts[0].split('.')
        forumStartTime = dotParts[1] + '.' + dotParts[2]
      }

      if (forumName && forumStartTime) {
        break
      }
    }

    return `${forumName} (${forumStartTime})`
  }

  app.methods.loadFileSheet = async function (file) {
    let reader = new FileReader();
    return new Promise((resolve) => {
      reader.readAsArrayBuffer(file);
      reader.onload = async (e) => {
        var data = new Uint8Array(reader.result);
        var workbook = XLSX.read(data, {type: "array"})
        // resolve(await this.processXLSXData(workbook))
        resolve(workbook)
      }
    })
  } 

  app.methods.parsingWorkbookToArray = async function (workbook) {
    
    var sheet_name_list = workbook.SheetNames;

    let output = {}

    for (let j = 0; j < sheet_name_list.length; j++) {
      //console.log(url)
      //console.log(sheet_name_list)
      let name = sheet_name_list[j]

      // https://github.com/SheetJS/sheetjs/issues/574#issuecomment-1017870956
      var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[name], { header:1, defval: "" });

      xlData = await this.db.utils.DataUtils.parseNumber(xlData)

      output[name] = xlData
    }
      
    return output
  }
}