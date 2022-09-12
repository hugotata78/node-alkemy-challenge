const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config()

console.log(process.env.SCHEME,process.env.HOST)
const swaggerDefinition = {
    
        openapi: '3.0.2',
        info: {
            title: 'Disney API',
            description: 'API Documentation Challenge Alkemy',
            version: '1.0.0',
        },

        servers: [
            {
                url: `${process.env.SCHEME}://${process.env.HOST}:${process.env.PORT || 4000}`,
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: process.env.SCHEME,
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