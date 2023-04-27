migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m3y4kz8hdm4k466")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m3y4kz8hdm4k466")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
