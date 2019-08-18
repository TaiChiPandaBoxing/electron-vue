const DBInfo = {
  name: 'DataBase',
  version: 1,
  instance: {
    name: 'user',
    keyPath: 'id'
  }
}

let indexDB = {
  DB: null,
  indexDB: window.indexedDB || window.webkitindexedDB,
  IDBKeyRange: window.IDBKeyRange || window.webkitIDBKeyRange,
  openDB: async function () {
    return new Promise((resolve, reject) => {
      const self = this
      const version = DBInfo.version || 1
      const request = this.indexDB.open(DBInfo.name, version)
      request.onerror = function (e) {
        reject(e.currentTarget.error.message)
      }
      request.onsuccess = function (e) {
        self.DB = e.target.result
        resolve(e.target.result)
      }
      request.onupgradeneeded = function (e) {
        const db = e.target.result
        if (!db.objectStoreNames.contains(DBInfo.instance.name)) {
          // 没有该对象空间时创建该对象空间
          // eslint-disable-next-line
          const store = db.createObjectStore(DBInfo.instance.name, {
            keyPath: DBInfo.instance.keyPath,
            autoIncrement: true
          })
          console.log('成功建立对象存储空间：' + DBInfo.instance.name)
          // const transaction = event.target.transaction
          // transaction.oncomplete = function (e) {
          //   // Now store is available to be populated
          //   resolve(e.target.result)
          // }
        }
      }
    })
  },
  addData: function (data, callback) {
    // 添加数据，重复添加会报错
    this.openDB().then((db) => {
      const store = db.transaction(DBInfo.instance.name, 'readwrite').objectStore(DBInfo.instance.name)
      for (let i = 0; i < data.length; i++) {
        const request = store.add(data[i])
        request.onerror = function () {
          console.log('add添加数据库中已有该数据')
          // this.putData(db, storename, data)
        }
        request.onsuccess = function () {
          console.log('add添加数据已存入数据库')
          callback()
        }
      }
    })
  }
}
export {
  indexDB
}
