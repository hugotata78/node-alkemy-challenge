/**
 * @swagger
 * components: 
 *  schemas:
 *    Role:
 *      type: object
 *      properties: 
 *        name:
 *          type: string
 *          description: the role name
 *      required:
 *        - name
 *      example:
 *        name: moderator
 */ 

//Create Role

/**
 * @swagger
 * /api/roles:
 *  post:
 *    security:
 *        - bearerAuth: []
 *    summary: create new rele
 *    tags: [Role]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: objet
 *            $ref: '#/components/schemas/Role'
 *    responses: 
 *      201: 
 *        description: Ok
 *      500: 
 *        description: Internal Server Error     
 */


//Get all Roles

/**
 * @swagger
 * /api/roles:
 *  get:
 *     security:
 *        - bearerAuth: []
 *     summary: Return all roles
 *     tags: [Role]
 *     responses:
 *       200:
 *          description: Return all roles
 *          content:
 *             application/json:
 *              schemma:
 *                 type: array
 *                 $ref: '#/components/schemas/Role'
 *       500:
 *          description: Internal server error
 */ 

//Add user-role

/**
 * @swagger
 * /api/roles/{id}/{userId}:
 *  post:
 *    security:
 *        - bearerAuth: []
 *    summary: Add user-role
 *    tags: [Role]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the role id
 *       - in: path
 *         name: userId
 *         schema:
 *          type: string
 *         required: true
 *         description: the user id
 *    responses:
 *       201:
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

//Remove user-role

/**
 * @swagger
 * /api/roles/{id}/{userId}:
 *  put:
 *    security:
 *        - bearerAuth: []
 *    summary: Remove user-role
 *    tags: [Role]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the role id
 *       - in: path
 *         name: userId
 *         schema:
 *          type: string
 *         required: true
 *         description: the user id
 *    responses:
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

//Get Role by id

/**
 * @swagger
 * /api/roles/{id}:
 *  get:
 *     security:
 *        - bearerAuth: []
 *     summary: Return a role
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the role id
 *     responses:
 *       200:
 *          description: role
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/Role'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Update Role

/**
 * @swagger
 * /api/roles/{id}:
 *  put:
 *     security:
 *        - bearerAuth: []
 *     summary: Update a role
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the role id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Role'
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

//Delete Role

/**
 * @swagger
 * /api/roles/{id}:
 *  delete:
 *     security:
 *        - bearerAuth: []
 *     summary: Delete a Role
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the role id
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
