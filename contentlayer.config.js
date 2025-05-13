const { defineDocumentType, makeSource } = require('contentlayer/source-files')

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.md',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: post => post._raw.sourceFileName.replace('.md', ''),
    },
  },
}))

module.exports = makeSource({ contentDirPath: 'posts', documentTypes: [Post] }) 