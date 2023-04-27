migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m3y4kz8hdm4k466")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iedoqmor",
    "name": "media",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gvln0hoy",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m3y4kz8hdm4k466")

  // remove
  collection.schema.removeField("iedoqmor")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gvln0hoy",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
