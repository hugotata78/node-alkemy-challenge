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

/**
 * @swagger
 * components: 
 *  schemas:
 *    User:
 *      type: object
 *      properties: 
 *        name:
 *          type: string
 *          description: the user name
 *        email:
 *          type: string
 *          description: the user email
 *        password:
 *          type: string
 *          description: the user password
 *        roleId:
 *          type: integer
 *          description: the user role
 *      required:
 *        - name
 *        - email
 *        - password
 *      example:
 *        name: juanrios
 *        email: juanrios@gmail.com
 *        password: 123456789 
 *        roleId: 1 
 *     
 */ 

//register User

/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    summary: create new user
 *    tags: [User]
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
 *    tags: [User]
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





