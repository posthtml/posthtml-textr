module.exports = function(options, plugins) {
    options = options || {};
    plugins = [].concat(plugins) || [];

    var tr = require('textr')(options);

    plugins.forEach(function(plugin) {
        tr.use(plugin);
    });

    return function posthtmlTextr(tree) {
        tree.walk(function(node) {
            if(typeof(node) === 'string' && !/^\n\s*$/.test(node)) {
                return tr(node);
            }
            return node;
        });
        return tree;
    };
};
