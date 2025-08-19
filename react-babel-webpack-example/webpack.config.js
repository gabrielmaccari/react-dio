const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin")
module.exports = {
    //Ponto de entrada para o seu aplicativo
    entry: "./src/index.js",
    //Ponto de saída para o dispositivo
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                //Regra para arquivos JavaScript (tanto para js e jsx)
                test: /\.(js|jsx)$/,
                //Excluir arquivos do node_modules
                exclude: /node_modules/,
                //Usar o loader 'babel-loader'
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    //Lista de plugins do webpack
    plugins: [
        //Plugin para gerar automaticamente o arquivo HTML
        new HtmlWebPackPlugin({
            //Template HTML PARA SER USADO
            template: "./public/index.html"
        })
    ],
    //Configurações da resolução de módulos
    resolve: {
        //Extensões de arquivos a serem resolvidas automaticamente
        extensions: [".js",".jsx"]
    },
    //Configurações do Servidor de Desenvolvimento
    devServer: {
        //Configurações de arquivos estáticos a serem desenvolvidos
        static: {
            //Diretório a ser servido
            directory: path.join(__dirname,"dist")
        },
        //Porta de desenvolvimento
        port: 3000,
    }
}