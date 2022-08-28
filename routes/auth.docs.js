
/**
 * @swagger
 * components: 
 *  schemas: 
 *    Login:
 *      type: object
 *      properties:
 *       email:
 *          type: string 
 *       password: 
 *          type: string
 *      required:
 *        - email
 *        - password
 *      example:
 *        email: admin@test.com
 *        password: 1234test
 *        
 */

//register User

/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    summary: create new user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: objet
 *            $ref: '#/components/schemas/User'
 *    responses: 
 *      201: 
 *        description: Ok
 *      500: 
 *        description: Internal Server Error     
 */

// Login user

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: login user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Login'
 *    responses: 
 *      200: 
 *        description: Succesful response
 *      401:
 *        description: Unauthorized
 *      500: 
 *        description: Internal Server Error     
 */





