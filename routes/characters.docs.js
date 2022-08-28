/**
 * @swagger
 * components:
 *  schemas:
 *    Character:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the character name
 *        age:
 *          type: integer
 *          description: the character age
 *        image:
 *          type: string
 *          description: the character image
 *        weight:
 *          type: number
 *          format: float
 *          description: the character weight
 *        history:
 *          type: string
 *          description: the character history
 *      required:
 *        - name
 *        - age
 *        - image
 *        - weight
 *        - history
 *      example:
 *        name: Mikey Mouse
 *        age: 94
 *        image: https://static.wikia.nocookie.net/disney/images/6/6f/Donald_Duck.png/revision/latest/scale-to-width-down/350?cb=20140427112158&path-prefix=es
 *        weight: 25
 *        history: Historia de Mikey Mouse
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    MovieId:
 *      type: object 
 *      properties:
 *        movieId:
 *          type: integer
 *          description: The movie id
 *      required:
 *        - movieId
 *      example:
 *        movieId: 1          
 */

//Create Character

/**
 * @swagger
 * /api/characters:
 *  post:
 *    security:
 *        - bearerAuth: []
 *    summary: create new character
 *    tags: [Character]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: objet
 *            $ref: '#/components/schemas/Character'
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

//Get all Characters

/**
 * @swagger
 * /api/characters:
 *  get:
 *     summary: Return all characters
 *     tags: [Character]
 *     responses:
 *       200:
 *          description: Return all characters
 *          content:
 *             application/json:
 *              schemma:
 *                 type: array
 *                 $ref: '#/components/schemas/Character'
 *       500:
 *          description: Internal server error
 */    

//Get Character by id

/**
 * @swagger
 * /api/characters/{id}:
 *  get:
 *     summary: Return a character
 *     tags: [Character]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the character id
 *     responses:
 *       200:
 *          description: character
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/Character'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Add Movie

/**
 * @swagger
 * /api/characters/{id}:
 *  post:
 *     security:
 *        - bearerAuth: []
 *     summary: Add movie to a character
 *     tags: [Character]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the character id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/MovieId'
 *     responses:
 *       201:
 *          description: Succesful response
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

//Get Character by name

/**
 * @swagger
 * /api/characters/search/name:
 *  get:
 *     summary: Return a character
 *     tags: [Character]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *          type: string
 *         required: true
 *         description: the character name
 *     responses:
 *       200:
 *          description: character
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/Character'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Get Character by age

/**
 * @swagger
 * /api/characters/search/age:
 *  get:
 *     summary: Return a character
 *     tags: [Character]
 *     parameters:
 *       - in: query
 *         name: age
 *         schema:
 *          type: string
 *         required: true
 *         description: the character age
 *     responses:
 *       200:
 *          description: character
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/Character'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Get Characters by movieId

/**
 * @swagger
 * /api/characters/search/movieId:
 *  get:
 *     summary: Return characters by movieId
 *     tags: [Character]
 *     parameters:
 *       - in: query
 *         name: movieId
 *         schema:
 *          type: string
 *         required: true
 *         description: the character id
 *     responses:
 *       200:
 *          description: Return characters by movieId
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/Character'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Update Character

/**
 * @swagger
 * /api/characters/{id}:
 *  put:
 *     security:
 *        - bearerAuth: []
 *     summary: Update a character
 *     tags: [Character]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the character id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Character'
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

//Delete Character

/**
 * @swagger
 * /api/characters/{id}:
 *  delete:
 *     security:
 *        - bearerAuth: []
 *     summary: Delete a Character
 *     tags: [Character]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the character id
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
 *     
 */
