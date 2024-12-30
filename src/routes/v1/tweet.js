import express from 'express';
import { getTweets } from '../../controllers/tweetControllers.js';
import { getTweetById } from '../../controllers/tweetControllers.js';
import { createTweet } from '../../controllers/tweetControllers.js';
// import { createTweetManualValidator } from '../../validators/tweetManualValidator.js';
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';
import {validate} from '../../validators/zodValidator.js'
const router = express.Router();

router.get('/', getTweets)

router.get('/:id', getTweetById)

router.post('/',validate(tweetZodSchema), createTweet);

export default router; //export default Router
