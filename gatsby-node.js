exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /confetti-js/,
            use: [loaders.null()]
          }
        ]
      }
    })
  }
}
