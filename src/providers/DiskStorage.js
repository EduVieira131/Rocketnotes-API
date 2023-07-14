const path = require("path")
const fs = require("fs")
const uploadConfig = require("../configs/upload")

class DiskStorage {
  async saveFile(file) {
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOAD_FOLDER, file)
    )

    return file
  }

  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.UPLOAD_FOLDER, file)

    try {
      await fs.promises.stat(filePath)
    } catch {
      return
    }

    await fs.promises.unlink(filePath)
  }
}

module.exports = DiskStorage