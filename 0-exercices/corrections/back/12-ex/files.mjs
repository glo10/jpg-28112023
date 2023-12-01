import { readFile, writeFile } from 'node:fs/promises'
import { mkdirSync, statSync } from 'node:fs'
const createDir = (path) => {
  if (!isExist(path)) {
    return mkdirSync(path, { recursive: true }, (error) => {
      if (error) return false
    })
  }
}

/**
 * Create file
 * @param {string} path path of file
 * @param {chunk|string} content data
 */
const createFile = (path, content) => {
  if (!isExist(path)) {
    return writeFile(path, content, (error) => {
      if (error) return false
    })
  }
}

const isExist = (path) => {
  try {
    statSync(path, (err, stats) => {
      if (err) {
        throw new Error('not exist')
      }
    })
    return true
  } catch (e) {
    return false
  }
}

const getContent = (filename) => {
  let content = ''
  return readFile(filename, { encoding: 'utf-8' }, (err, chunk) => {
    if (err) {
      return []
    }
    content += chunk
  })
}

export {
  getContent,
  createDir,
  createFile
}
