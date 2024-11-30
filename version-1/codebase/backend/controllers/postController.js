const { response } = require("express");
const pool = require("../utils/db");



async function allPosts(req , res){
  try {
         const [allpost] = await pool.execute(
             "SELECT * FROM posts WHERE status = 'active'",
         );

         console.log("===allpost===>", allpost)
         return res.status(200).json({
            message: "All Posts data",
            data : allpost
         });
    
  } catch (error) {
    console.log("Error in all post.", error)
    return res.status(500).json({
        error: "Internal server Error"
    })
  }
    
}

 async function postWithlikes(req , res){
try {
    const [datawithlike] = await pool.execute(
      `SELECT 
                p.id,
                p.user_id,
                p.is_public,
                p.description,
                p.buddies_id,
                p.tag_id,
                p.location_id,
                p.media_url,
                p.status,
                p.block_post,
                u.full_name,
                u.profile_image,
                p.created_at AS post_created_at,
                p.updated_at AS post_updated_at,
                (SELECT COUNT(*) FROM likes l WHERE l.post_id = p.id) AS total_likes,
                (SELECT COUNT(*) FROM comments c WHERE c.post_id = p.id) AS total_comments,
                (SELECT COUNT(*) FROM shared_post sp WHERE sp.post_id = p.id) AS total_shared,
                (SELECT COUNT(*) FROM bucket_list bl WHERE bl.post_id = p.id) AS total_buckets
            FROM 
                posts p,
                users u,
                shared_post sp,
                bucket_list bl
            WHERE 
                p.status = 'active'
            GROUP BY 
                p.id, p.user_id, p.is_public, p.description, p.buddies_id, p.tag_id, 
                p.location_id, p.media_url, p.status, p.block_post, p.created_at, p.updated_at;`
    );
    // console.log("===alldata===>",datawithlike)
    return res.status(200).json({
        message: "data fetched done",
        data : datawithlike
    });

    
} catch (error) {
    console.log(" Error fetch data",error)
    return res.status(500).json({
        error: "Internal server Error"
    });
}


}
async function getActiveStories(req , res){
    try {
        
        const [getactivestories] = await pool.execute(
       "SELECT * FROM stories WHERE expires_at > NOW();"
        );
        console.log("===data fetched===>",getactivestories)
        return res.status(200).json({
            message:"data of active stories.",
            data: getactivestories
        });

    } catch (error) {
        console.log(" Error fetch data",error).json({
            error: "Internal server Error"
        });  
    }
}

async function getUserPosts(req , res){
    try {
        //    const { UserId } = req.params; 
           const UserId = req.user.userId; // Assuming `id` is part of the token payload
           const [allpost] = await pool.execute(
             
        //       ` SELECT 
        //     p.id,
        //     p.user_id,
        //     p.is_public,
        //     p.description,
        //     p.buddies_id,
        //     p.tag_id,
        //     p.location_id,
        //     p.media_url,
        //     p.status,
        //     p.block_post,
        //     u.full_name,
        //     u.user_name,
        //     p.created_at AS post_created_at,
        //     p.updated_at AS post_updated_at,
        //     (SELECT COUNT(*) FROM likes l WHERE l.post_id = p.id) AS total_likes,
        //     (SELECT COUNT(*) FROM comments c WHERE c.post_id = p.id) AS total_comments,
        //     (SELECT COUNT(*) FROM shared_post sp WHERE sp.post_id = p.id) AS total_shared,
        //     (SELECT COUNT(*) FROM bucket_list bl WHERE bl.post_id = p.id) AS total_buckets,
        //     (SELECT 
        //          c.content 
        //      FROM 
        //          comments c 
        //      WHERE 
        //          c.post_id = p.id 
        //      ORDER BY 
        //          c.created_at DESC 
        //      LIMIT 1) AS last_comment
        // FROM 
        //     posts p
        // JOIN 
        //     users u ON p.user_id = u.id
        // WHERE 
        //     p.status = 'active'
        //     AND p.user_id = ?
        // GROUP BY 
        //     p.id, p.user_id, p.is_public, p.description, p.buddies_id, p.tag_id, 
        //     p.location_id, p.media_url, p.status, p.block_post, p.created_at, p.updated_at;
        // `,
        ` SELECT 
          p.id,
          p.user_id,
          p.is_public,
          p.description,
          p.buddies_id,
          p.tag_id,
          p.location_id,
          p.media_url,
          p.status,
          p.block_post,
          u.full_name AS post_user_full_name,
          u.user_name AS post_user_name,
          p.created_at AS post_created_at,
          p.updated_at AS post_updated_at,
          (SELECT COUNT(*) FROM likes l WHERE l.post_id = p.id) AS total_likes,
          (SELECT COUNT(*) FROM comments c WHERE c.post_id = p.id) AS total_comments,
          (SELECT COUNT(*) FROM shared_post sp WHERE sp.post_id = p.id) AS total_shared,
          (SELECT COUNT(*) FROM bucket_list bl WHERE bl.post_id = p.id) AS total_buckets,
          (SELECT 
               c.content 
           FROM 
               comments c 
           WHERE 
               c.post_id = p.id 
           ORDER BY 
               c.created_at DESC 
           LIMIT 1) AS last_comment_content,
          (SELECT 
               uc.full_name 
           FROM 
               comments c
           JOIN 
               users uc ON c.user_id = uc.id
           WHERE 
               c.post_id = p.id 
           ORDER BY 
               c.created_at DESC 
           LIMIT 1) AS last_comment_user_full_name,
           (SELECT 
               uc.profile_image 
           FROM 
               comments c
           JOIN 
               users uc ON c.user_id = uc.id
           WHERE 
               c.post_id = p.id 
           ORDER BY 
               c.created_at DESC 
           LIMIT 1) AS last_comment_user_profile_image,
          (SELECT 
               uc.user_name 
           FROM 
               comments c
           JOIN 
               users uc ON c.user_id = uc.id
           WHERE 
               c.post_id = p.id 
           ORDER BY 
               c.created_at DESC 
           LIMIT 1) AS last_comment_user_name,
          (SELECT 
               c.created_at 
           FROM 
               comments c 
           WHERE 
               c.post_id = p.id 
           ORDER BY 
               c.created_at DESC 
           LIMIT 1) AS last_comment_created_at
      FROM 
          posts p
      JOIN 
          users u ON p.user_id = u.id
      WHERE 
          p.status = 'active'
          AND p.user_id = ?
      GROUP BY 
          p.id, p.user_id, p.is_public, p.description, p.buddies_id, p.tag_id, 
          p.location_id, p.media_url, p.status, p.block_post, p.created_at, p.updated_at;
      
      `,
        [UserId]
           );
  
           console.log("===allpost===>", allpost)
           return res.status(200).json({
              message: "All Posts data",
              data : allpost
           });
      
    } catch (error) {
      console.log("Error in all post.", error)
      return res.status(500).json({
          error: "Internal server Error"
      })
    }
      
  }
async function getdata(req , res){
    try {

        const { postId } = req.param;
        const [ getdata ] = await pool.execute(

        );

        console.log('getdata',getdata)
        return res.status(200).json({
            message: "",

        });
        
        console.log(``)
    } catch (error) {
        
    }
}

async function addBucketList( req , res){
    try {
        const{ post_id , user_id} = req.body;
    
        if(!post_id || !user_id){
            return res.status(400).json({
                error: "Missing field - allfield are required"
    
            });
        }
        await pool.execute(
            `INSERT INTO bucket_list (post_id, user_id) VALUES(?, ?)`,
            [post_id, user_id]
              );
    
         return res.status(200).json({
            message:"Post Added to Bucket List.",
            data:{
                post_id,
                user_id
            }
         })
      
    } catch (error) {
        console.log("==Error Adding bucket===>",error);
        return res.status(500).json({
            error: "INternal Server Error"
        });
    }
    }
    
    async function sharedPost(req , res){
        try {
            const { post_id, user_id} = req.body;
            
            if(!post_id || !user_id)
                return res.status(400).json({
                 error:"All fields are required.",error
        });
    
        await pool.execute(
         `INSERT INTO shared_post(post_id, user_id) VALUES(?,?)`,
            [post_id, user_id]
        );
    
        return res.status(200).json({
            message:"Shared Post Successfully",
            data: {
                post_id,
                user_id
            }
    
        })
    
        } catch (error) {
            console.log("==Error shareding post===>",error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
    }
    
async function postComment(req , res){
try {
    const userId = req.user.userId; // extract user id from token 
    const { post_id, content } = req.body;

    if (!post_id || !userId || !content) {
    return res.status(400).json({
        error: "Missing required fields: post_id, user_id, or content",
    });
}

    const [comment] = await pool.execute(
        `Insert INTO comments ( post_id, user_id, content ) VALUES (? , ? , ?)`,
        [post_id, userId, content]
    );

    return res.status(200).json({
    message: "Comment post Successfully",
    data: {
        post_id,
        userId,
        content
    }
    })
} catch (error) {
    console.log("Error add comment",error);
    return res.status(500).json({
    error: "Internal server Error"
    })
}
}

// function to like and unlike post
  async function postLike(req, res) {
    try {
      const user_id = req.user.userId; // extract user id from token 

      const { post_id } = req.body;
      
      if (!post_id || !user_id) {
        return res.status(400).json({
          error: "Missing required fields",
        });
      }
      
      const [existingLike] = await pool.execute(
        `SELECT * FROM likes WHERE post_id = ? AND user_id = ?`,
        [post_id, user_id]
      );
  
      if (existingLike.length > 0) {
        // Like exists, so remove it
        await pool.execute(
          `DELETE FROM likes WHERE post_id = ? AND user_id = ?`,
          [post_id, user_id]
        );
  
        return res.status(200).json({
          message: "Like removed successfully.",
          data: null,
        });
      } else {
        // Like doesn't exist, so add it
        await pool.execute(
          `INSERT INTO likes (post_id, user_id) VALUES (?, ?)`,
          [post_id, user_id]
        );
  
        return res.status(200).json({
          message: "Like added successfully.",
          data: {
            post_id,
            user_id,
          },
        });
      }
    } catch (error) {
      console.error("Error toggling like:", error);
      return res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
      
  async function getPostComments(req , res){
    try {
        const { postId } = req.params;
        const [getComments] = await pool.execute(
        //   SELECT    FROM comments where post_id = ?,[postId]

        `SELECT 
              c.user_id,
              c.post_id,
              c.content,
              u.full_name,
              u.profile_image,
              u.user_name,
              c.created_at
          FROM 
               comments c
         JOIN
               users u
         ON 
              c.user_id = u.id
          WHERE
                post_id = ?`,[postId]
        );

       console.log("==data Fetched==>",getComments)
       return res.status(200).json({
        message: "All comments of post",
        data: getComments
       });
        

    } catch (error) {
        
        console.log(" Error to get data",error).json({
            error: "Internal Server Error"
        });

    }
}

module.exports = {
    allPosts,
    postWithlikes,
    getActiveStories,
    getPostComments,
    getUserPosts,
    sharedPost,
    addBucketList,
    postComment,
    postLike
}