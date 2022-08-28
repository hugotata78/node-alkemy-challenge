/**
 * @swagger
 * components:
 *  schemas:
 *    Gender:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the gender name
 *        image:
 *          type: string
 *          description: the gender image
 *      required:
 *        - name
 *        - image
 *      example:
 *        name: action
 *        image: https://st.depositphotos.com/1671550/4216/v/600/depositphotos_42169715-stock-illustration-taekwondo-martial-art.jpg
 */

//Create Gender

/**
 * @swagger
 * /api/genders:
 *  post:
 *    security:
 *        - bearerAuth: []
 *    summary: create new gender
 *    tags: [Gender]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: objet
 *            $ref: '#/components/schemas/Gender'
 *    responses: 
 *      201: 
 *        description: Ok 
 *      401:
 *        description: Unauthorized
 *      403:
 *        description: Forbidden
 *      500: 
 *        description: Internal Server Error     
 */

//Get all Genders

/**
 * @swagger
 * /api/genders:
 *  get:
 *     summary: Return all genders
 *     tags: [Gender]
 *     responses:
 *       200:
 *          description: Return all genders
 *          content:
 *             application/json:
 *              schemma:
 *                 type: array
 *                 $ref: '#/components/schemas/Gender'
 *       500:
 *          description: Internal server error
 */    

//Get Gender by id

/**
 * @swagger
 * /api/genders/{id}:
 *  get:
 *     summary: Return a gender
 *     tags: [Gender]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the gender id
 *     responses:
 *       200:
 *          description: gender
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/Gender'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Add movie

/**
 * @swagger
 * /api/genders/{id}:
 *  post:
 *     security:
 *        - bearerAuth: []
 *     summary: Add movie to a gender
 *     tags: [Gender]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the gender id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/MovieId'
 *     responses:
 *       201:
 *          description: Ok
 *       400:
 *         description: Bad request 
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Update Gender

/**
 * @swagger
 * /api/genders/{id}:
 *  put:
 *     security:
 *        - bearerAuth: []
 *     summary: Update a gender
 *     tags: [Gender]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the gender id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Gender'
 *     responses:
 *       205:
 *         description: Ok
 *       400:
 *         description: Bad request 
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal server error
 */

//Delete Gender

/**
 * @swagger
 * /api/genders/{id}:
 *  delete:
 *     security:
 *        - bearerAuth: []
 *     summary: Delete a gender
 *     tags: [Gender]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the gender id
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
 *     
 */
