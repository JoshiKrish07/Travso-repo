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
          u.full_name,
          u.user_name,
          u.profile_image,
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
           LIMIT 1) AS last_comment_created_at,
          (SELECT COUNT(*) 
           FROM comments_like cl 
           JOIN comments c ON cl.comment_id = c.id 
           WHERE c.post_id = p.id 
           ORDER BY c.created_at DESC 
           LIMIT 1) AS last_comment_likes_count
      FROM 
          posts p
      JOIN 
          users u ON p.user_id = u.id
      WHERE 
          p.status = 'active'
          AND p.user_id = ?
      GROUP BY 
          p.id, p.user_id, p.is_public, p.description, p.buddies_id, p.tag_id, 
          p.location_id, p.media_url, p.status, p.block_post, p.created_at, p.updated_at
          ORDER BY 
          p.created_at DESC;
      
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
    
    // function to share post
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
  
    // function to comment on post
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
        console.log("=====postId==getPostComments==>", postId)
        const [getComments] = await pool.execute(
        //   SELECT    FROM comments where post_id = ?,[postId]

       `SELECT 
                c.user_id,
                c.post_id,
                c.id,
                c.content,
                u.full_name,
                u.profile_image,
                c.created_at,
                -- Count total likes for each comment
                (SELECT COUNT(*) FROM comments_like cl WHERE cl.comment_id = c.id) AS total_likes_on_comment,
                -- Count total replies for each comment
                (SELECT COUNT(*) FROM comment_reply cr WHERE cr.comment_id = c.id) AS total_reply_on_comment
             
            FROM 
                comments c
            JOIN
                users u
            ON 
                c.user_id = u.id
            WHERE
                c.post_id = ?
            ORDER BY 
                c.created_at ASC
                `,[postId]
        );

          // Fetch all replies
          const [replies] = await pool.execute(
            `
            SELECT 
                cr.id AS reply_id,
                cr.comment_id,
                cr.user_id,
                cr.content AS reply_content,
                u.full_name AS reply_user_full_name,
                u.user_name AS reply_user_user_name,
                u.profile_image AS reply_user_profile_image,
                cr.created_at AS reply_created_at
            FROM 
                comment_reply cr
                JOIN
                users u
            ON 
                cr.user_id = u.id
            WHERE 
                cr.comment_id IN (
                    SELECT id FROM comments WHERE post_id = ?
                )
            `,
            [postId]
        );

        // Group replies by comment ID
        const groupedReplies = replies.reduce((acc, reply) => {
            if (!acc[reply.comment_id]) {
                acc[reply.comment_id] = [];
            }
            acc[reply.comment_id].push({
                reply_id: reply.reply_id,
                reply_content: reply.reply_content,
                reply_user_full_name: reply.reply_user_full_name,
                reply_user_user_name: reply.reply_user_user_name,
                reply_user_profile_image: reply.reply_user_profile_image,
                reply_created_at: reply.reply_created_at,
            });
            return acc;
        }, {});

        // Attach replies to their respective comments
        const finalComments = getComments.map((comment) => ({
            ...comment,
            replies: groupedReplies[comment.comment_id] || [],
        }));

       console.log("==data Fetched==>",finalComments)
       return res.status(200).json({
        message: "All comments of post",
        data: finalComments
       });
        

    } catch (error) {
        
        console.log(" Error to get data getPostComments function",error)
        return res.status(500).json({
            error: "Internal Server Error"
        });

    }
}

// function to like a comment
async function likeAnyComment(req , res){

    try {
            // const {comment_id, user_id} = req.body;
        const { comment_id } = req.params;
        const user_id = req.user.userId; // extrcting from token


        if(!comment_id || !user_id){
        return res.status(400).json({
            error:"All fields are required"
        });
        
        }

         // Check if the like already exists
      const [existingLike] = await pool.execute(
        `SELECT * FROM comments_like WHERE comment_id = ? AND user_id = ?`,
        [comment_id, user_id]
      );
  
      if (existingLike.length > 0) {
        // Like exists, so remove it
        await pool.execute(
          `DELETE FROM comments_like WHERE comment_id = ? AND user_id = ?`,
          [comment_id, user_id]
        );
  
        return res.status(200).json({
          message: "Like removed successfully.",
        });
      } else {
        // Like doesn't exist, so add it
        await pool.execute(
          `INSERT INTO comments_like (comment_id, user_id) VALUES (?, ?)`,
          [comment_id, user_id]
        );
  
        return res.status(200).json({
          message: "Like added successfully."
        });
      }
    } catch (error) {
        console.log(" Error likeAnyComment function",error)
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }

  }

async function replyOnComment(req , res){
    try {
    
      const { comment_id, content } = req.body;
      const user_id = req.user.userId; // extrcting from token

    
      if( !comment_id || !user_id || !content){
        return res.status(400).json({
          error:"All fields are required"
        });
      }
    
      const [data] = await pool.execute(
        `INSERT INTO comment_reply (comment_id , user_id, content) VALUE (? ,? ,?)`,
        [comment_id, user_id, content]
      );
       
      return res.status(200).json({
        message:" Comment added successfully",
      });
      
    } catch (error) {
      
      return res.status(500).json({
        error:"Internal server Error"
      });
    }
    }

    async function storePost(req, res) {
        try {
      const user_id = req.user.userId; // extrcting from token

          const {
            is_public,
            description,
            buddies_id,
            tag_id,
            location_id,
            media_url,
            status,
            block_post,
          } = req.body;
      
          // Validate required fields
          if (!user_id || !description) {
            return res.status(400).json({
              message: "Missing required fields (user_id, description).",
            });
          }
      
          // Insert the post into the database
          const [result] = await pool.execute(
            `INSERT INTO posts (
              user_id,
              is_public,
              description,
              buddies_id,
              tag_id,
              location_id,
              media_url,
              status,
              block_post,
              created_at,
              updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
            [
              user_id,
              is_public !== undefined ? is_public : 1, // Default to 1 (true) if not provided
              description || null, // Allow null for optional fields
              buddies_id || null,
              tag_id || null,
              location_id || null,
              media_url || "[]", // Default to empty JSON array
              status || "active", // Default to 'active'
              block_post !== undefined ? block_post : 0, // Default to 0 (false)
            ]
          );
      
          // Respond with success message
          return res.status(200).json({
            message: "Post created successfully.",
            post_id: result.insertId, // Return the ID of the newly created post
          });
        } catch (error) {
          console.error("Error in storing post:", error);
          return res.status(500).json({
            error: "Internal Server Error",
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
    postLike,
    likeAnyComment,
    replyOnComment,
    storePost
}