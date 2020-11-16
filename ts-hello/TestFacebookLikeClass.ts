import {FacebookLike, FacebookLikeOptmized} from './facebookLike';



let initalLikes : number = 1456;
let fb = new FacebookLike(initalLikes);

//get inital likes
console.log('Total Likes : ' + fb.getTotalLikes());

//get like button status
console.log('Is Liked : ' + fb.getLikeButtonStatus());

//Like post
fb.like();
console.log('Post Liked!!!')


//get new Total likes
console.log('Total Likes after Like button hit : ' + fb.getTotalLikes());

//get like button status
console.log('Is Liked button active after like button hit: ' + fb.getLikeButtonStatus());

//DisLike post
fb.disLike();
console.log('Post Liked!!!')


//get new Total likes
console.log('Total Likes after dislike button hit : ' + fb.getTotalLikes());

//get like button status
console.log('Is Liked button active after dislike button hit: ' + fb.getLikeButtonStatus());



// Facebok optimized.

let fbOpt = new FacebookLikeOptmized(1234, false);

fbOpt.onclick();
console.log(fbOpt.likeCounts + " : Total Likess!!");
console.log(fbOpt.isSelected);


fbOpt.onclick();
console.log(fbOpt.likeCounts + " : Total Likess");
 