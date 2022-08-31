/**
 * @swagger
 * components:
 *  schemas:
 *    Movie:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          description: the movie name
 *        image:
 *          type: string
 *          description: the movie image
 *        creationDate:
 *          type: string
 *          format: date
 *          description: the movie creation date
 *        qualification:
 *          type: number
 *          format: float
 *          description: the movie qualification
 *      required:
 *        - title
 *        - image
 *        - creationDate
 *        - qualification
 *      example:
 *        title: La Bella y la Bestia
 *        image: https://scontent.fsra4-1.fna.fbcdn.net/v/t31.18172-8/13738170_1067631666652953_5034796494994020967_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=2c4854&_nc_ohc=gnWSswYpdYIAX_a2-5M&_nc_ht=scontent.fsra4-1.fna&oh=00_AT8nMjy1yayRhjFnZVYGb9DfKnnbvMYkvSR3rk_JjRDZTQ&oe=63044D01
 *        creationDate: 2022-08-30
 *        qualification: 4.5
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    CharacterId:
 *      type: object 
 *      properties:
 *        characterId:
 *          type: integer
 *          description: The character id
 *      required:
 *        - characterId
 *      example:
 *        characterId: 1          
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    GenderId:
 *      type: object 
 *      properties:
 *        genderId:
 *          type: integer
 *          description: The gender id
 *      required:
 *        - genderId
 *      example:
 *        genderId: 1          
 */

//Create Movie

/**
 * @swagger
 * /api/movies:
 *  post:
 *    security:
 *        - bearerAuth: []
 *    summary: create new movie
 *    tags: [Movie]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: objet
 *            $ref: '#/components/schemas/Movie'
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

//Get all Movies

/**
 * @swagger
 * /api/movies:
 *  get:
 *     summary: Return all movies
 *     tags: [Movie]
 *     parameters:
 *       - in: query
 *         name: item
 *         schema:
 *          type: string
 *          default: title
 *         required: true
 *         description: sort movies by items (title,creationDate, qualification)
 *       - in: query
 *         name: order
 *         schema:
 *          type: string
 *          default: ASC
 *         required: true
 *         description: order ASC or DESC
 *     responses:
 *       200:
 *          description: Return all movies
 *          content:
 *             application/json:
 *              schemma:
 *                 type: array
 *                 $ref: '#/components/schemas/Movie'
 *       500:
 *          description: Internal server error
 */    

//Get Movie by id

/**
 * @swagger
 * /api/movies/{id}:
 *  get:
 *     summary: Return a movie
 *     tags: [Movie]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the movie id
 *     responses:
 *       200:
 *          description: movie
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/Movie'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Add Character

/**
 * @swagger
 * /api/movies/add-character/{id}:
 *  post:
 *     security:
 *        - bearerAuth: []
 *     summary: Add character to a movie
 *     tags: [Movie]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the movie id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/CharacterId'
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

//Add Gender

/**
 * @swagger
 * /api/movies/add-gender/{id}:
 *  post:
 *     security:
 *        - bearerAuth: []
 *     summary: Add gender to a movie
 *     tags: [Movie]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the movie id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/GenderId'
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

//Get Movie by title

/**
 * @swagger
 * /api/movies/search/title:
 *  get:
 *     summary: Return a movie
 *     tags: [Movie]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *          type: string
 *         required: true
 *         description: the movie title
 *     responses:
 *       200:
 *          description: Return a movie by title
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/Movie'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Get Movie by gender

/**
 * @swagger
 * /api/movies/search/gender:
 *  get:
 *     summary: Return a movies
 *     tags: [Movie]
 *     parameters:
 *       - in: query
 *         name: genderId
 *         schema:
 *          type: integer
 *         required: true
 *         description: the movie gender
 *     responses:
 *       200:
 *          description: Return a movies by gender
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/Movie'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Update Movie

/**
 * @swagger
 * /api/movies/{id}:
 *  put:
 *     security:
 *        - bearerAuth: []
 *     summary: Update a movie
 *     tags: [Movie]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the movie id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Movie'
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

//Delete Movie

/**
 * @swagger
 * /api/movies/{id}:
 *  delete:
 *     security:
 *        - bearerAuth: []
 *     summary: Delete a Movie
 *     tags: [Movie]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the movie id
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
