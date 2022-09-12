const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config()


const swaggerDefinition = {
    
        openapi: '3.0.2',
        info: {
            title: 'Disney API',
            description: 'API Documentation Challenge Alkemy',
            version: '1.0.0',
        },
        servers: [
            {
                url: `${process.env.SERVER}:${process.env.PORT || 4000}`,
                schemes:[http,https]
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: process.env.HTTP_VAR || 'https',
                    scheme: "bearer",
                },
            },     	
        },
      
};

const swaggerOptions = {
	swaggerDefinition,
	apis: ['./routes/*.js'],
}; 

module.exports = swaggerJSDoc(swaggerOptions);