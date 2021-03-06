module.exports = app => {
  const db = require('../../util/db')(app)
  const {SHORT_ID, SHORT_RELATED_ID, TITLE, DESCRIPTION, SHORT_ORDER, MODULE} = db.column

  return app.model.define('categories', {
    id: SHORT_ID,
    parent_id: SHORT_RELATED_ID,
    title: TITLE,
    description: DESCRIPTION,
    order: SHORT_ORDER,
    module: MODULE
  })
}