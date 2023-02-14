let localConfig = {
  files: [],
  anaylyzeContent: true,
  filterColon: true,
  filterSlash: true,
  // filterSpace: true,
  filterSegment: true,
  onlyPost: true,
  onlyStudent: true,
  targetFieldTitle: true,
  targetFieldContent: true,
  analysisResult: ``,
  singleFileAnalysisMode: true
}

// ----------------------------------------------------------------

let localConfigEnv = {
  locale: 'zh-TW'
}

for (let name in localConfigEnv) {
  localConfig[name] = localConfigEnv[name]
}

export default localConfig