export default {
    enabledPatterns: [
        '^/node_modules/less/dist/less\.js$',
        '^/node_modules/bootstrap/less/.*\.less$',
        '^/(dist|client)/.*\.(js|less|css)$',
        '^/components/.*\.(less|png|svg|jpg)$'
    ].map(pattern => new RegExp(pattern))
};
