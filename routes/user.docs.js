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
 *      required:
 *        - name
 *        - email
 *        - password
 *      example:
 *        name: juanrios
 *        email: juanrios@gmail.com
 *        password: 123456789 
 *     
 */ 

//Get all Users

/**
 * @swagger
 * /api/users:
 *  get:
 *     summary: Return all users
 *     tags: [User]
 *     responses:
 *       200:
 *          description: Return all users
 *          content:
 *             application/json:
 *              schemma:
 *                 type: array
 *                 $ref: '#/components/schemas/User'
 *       500:
 *          description: Internal server error
 */ 

//Get User by id

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the user id
 *     responses:
 *       200:
 *          description: user
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found / user not found
 *       500:
 *         description: Internal server error
 */

//Update User

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *     security:
 *        - bearerAuth: []
 *     summary: Update a user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the user id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       205:
 *         description: Ok
 *       400:
 *          description: Bad request 
 *       401:
 *          description: Unauthorized
 *       403:
 *          description: Forbidden
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal server error
 */

//Delete User

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *     security:
 *        - bearerAuth: []
 *     summary: Delete a user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the user id
 *     responses:
 *       205:
 *         description: Ok
 *       400:
 *         description: Bad request 
 *       401:
 *         description: Unauthorized
 *       403:
 *          description: Forbidden
 *       404:
 *         description: Not found 
 *       500:
 *         description: Internal server error
 *     
 */
