
const { readFileSync, writeFileSync, existsSync, mkdirSync } = require('fs')
const { globbySync } = require('globby')
const regex = require('./regex')
const path = require('path')
const { dirname } = require('path')

for (let file of globbySync('src/**/*.erb', { caseSensitiveMatch: false })) {
  const content = readFileSync(file, 'utf-8')
    .slice(1) // strip bom
    .split(/\r?\n/) // remove line break
  let result = []
  for (let [i, line] of content.entries()) {
    let match
    if (regex.text.some(regex => !!(match = line.match(regex)))) {
      if (match[1].trim().length === 0)
        continue
      result.push({
        key: `${file}_L${i + 1}`,
        original: match[1],
        context: `文件名: ${file}\n代码: https://github.com/EraTranz/tohoYMAEM/blob/origin/${encodeURI(file)}#L${i + 1}`,
      })
    }
  }
  if (!result.length)
    continue
  // console.log(result)
  const dest = `paratranz/${file.slice(4)}.json`
  if (!existsSync(dirname(dest))) {
    mkdirSync(dirname(dest), { recursive: true })
  }
  writeFileSync(
    dest,
    JSON.stringify(result, null, 2),
    { encoding: 'utf-8' })
}
