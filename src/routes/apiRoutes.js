import express from 'express'
import v1Router from './v1/v1Routes.js';
import v2Router from './v2/v2Routes.js'

 const router = express.Router();

router.use('/v1', v1Router);
router.use('/v2', v2Router);
//   router.use('/tweets', tweetRouter)//if the remaining req url starts with the /tweets . use the tweetRouter.
//   router.use('/comments', commentRouter); //if the remaining req url starts with /comments, us the commentRouter.

 export default router;