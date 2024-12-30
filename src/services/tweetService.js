
//we will set a block words that should be restricted in the tweets
import { Filter } from 'bad-words';
import { createTweet as createTweetRepository } from '../repositories/tweetRepository.js'
export const createTweet = async ({body}) => {
     const filter = new Filter();
     
     if (filter.isProfane(body)){
        console.log(body);
        console.log(filter.clean(body));
         throw new Error('Tweet contains blocked words');
     }
    
     const tweet = await createTweetRepository({body});
     return tweet;
}