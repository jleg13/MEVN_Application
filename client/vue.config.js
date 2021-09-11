const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")

// vue.config.js
module.exports = {
    configureWebpack: {
        plugins: [
            new GoogleFontsPlugin({
                fonts: [
                    { family: "Bitter", variants: [ "500", "700", "700bold" ] }
                ]
            })
        ]
    }
}