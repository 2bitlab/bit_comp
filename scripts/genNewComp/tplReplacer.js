const fs = require('fs-extra')
const handlebars = require('handlebars')
const { resolve } = require('path')

const compFilesTplReplacer = meta => {
  const files = [
    'index.zh-CN.md',
    'index.en-US.md',
    'index.vue',
    'index.test.ts',
    'demo/BaseDemo.vue'
  ]

  files.forEach(fileName => {
    const fileTpl = fs.readFileSync(
      resolve(__dirname, `./.template/comp/${fileName}.tpl`),
      'utf-8'
    )
    const fileContent = handlebars.compile(fileTpl)(meta)
    fs.outputFile(
      resolve(__dirname, `../../src/${meta.compName}/${fileName}`),
      fileContent,
      err => {
        if (err) console.log(err)
      }
    )
  })
}

// 读取 src/list.json 并更新
const listJsonTplReplacer = meta => {
  const listFilePath = '../../src/list.json'
  const listFileTpl = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8')
  const listFileContent = JSON.parse(listFileTpl)
  listFileContent.push(meta)
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2)
  fs.writeFile(
    resolve(__dirname, listFilePath),
    newListFileContentFile,
    err => {
      if (err) console.log(err)
    }
  )
  return listFileContent
}

module.exports = meta => {
  compFilesTplReplacer(meta)
  const listFileContent = listJsonTplReplacer(meta)

  console.log(`组件新建完毕，请前往 src/${meta.compName} 目录进行开发`)
}
