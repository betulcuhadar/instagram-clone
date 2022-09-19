import { USERS } from "./users";

export const POSTS =[
     {
          imageUrl: 'https://i.pinimg.com/originals/ff/f0/6b/fff06bc90a78d05e980c7495f0ac248b.jpg',
          user: USERS[0].user,
          likes: 1000,
          caption: 'helloo',
          profilePicture: USERS[0].image,
          comments: [
               {
                    user: 'vangogh',
                    comment: 'hii',
               }
          ]
     }
]