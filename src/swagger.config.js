module.exports = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Log APIs Document'
    },
    servers: [
        {
            "url": "http://localhost:{port}/{basePath}",
            "description": "The production API server",
            "variables": {
                "env": {
                    "default": "app-dev",
                    "description": "DEV Environment"
                },
                "port": {
                    "enum": [
                        "3000"
                    ],
                },
                "basePath": {
                    "default": "api"
                }
            }
        }
    ],
}