import express from "express"
import db from "../db/db.json"


export const postRouter = express.Router()

/**
 * @openapi
 * components:
 *   schemas:
 *     Posts:
 *       type: object
 *       properties:
 *         userId: 
 *           type: number
 *           example: 1
 *         id: 
 *           type: number
 *           example: 1 
 *         title:
 *           type: string
 *           example: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
 *         body:
 *           type: string
 *           example: quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
 */

/**
 * @openapi
{
  
  "paths": {
    "/posts": {
      "get": {
        "tags": ["Posts"],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "example": "ok"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Posts"
                      }
                    }
                  }
                }
              }
            }
          },
          "5XX": {
            "description": "FAILED",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "example": "FAILED"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "error": {
                          "type": "string",
                          "example": "Some error message"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
 */

postRouter.get("/", (req, res) => {
    res.json(db)

});

/**
 * @openapi
{
  "paths": {
    "/posts/{id}": {
      "get": {
        "tags": ["Posts"],
        "summary" : "get post by ID",
        "description" : "retrieving a post by inserting an ID. ID is an integer",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "number"
            },
            "description": "ID of the post to retrieve"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "example": "ok"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Posts"
                      }
                    }
                  }
                }
              }
            }
          },
          "5XX": {
            "description": "FAILED",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "example": "FAILED"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "error": {
                          "type": "string",
                          "example": "Some error message"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
 */


postRouter.get("/:id", (req:express.Request, res:express.Response) => {
    const post = db.find((post) => post.id === parseInt(req.params.id));
    if (!post) {
        res.sendStatus(404);
    }
    res.send(post);
});



/**
@openapi
{
  "openapi": "3.0.0",
  "paths": {
    "/posts": {
      "post": {
        "tags": ["Posts"],
        "summary": "Adding one item",
        "description": "Endpoint for adding a single item.",
        "requestBody" : {
            "content" : {
                "application/json" : {
                    "schema" : {
                        "type" : "object",
                        "properties" : {
                            "id" : {
                                "type" : "integer",
                                "example" : 1
                            },
                            "userId" : {
                                "type" : "number",
                                "example" : 1
                            },
                            "title" : {
                                "type" : "string",
                                "example" : "piertotum locomotor"
                            },
                            "body" : {
                                "type" : "string",
                                "example" : "Harray potter spell to mobilize inanimate objects"
                            }
                        }
                    }
                }
            }
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "example": "ok"
                    },
                    "data": {
                      "type": "string",
                      "example": "oke je"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

*/


postRouter.post("/", (req, res) => {
    const body = req.body

    if (!body.id || !body.userId || !body.title || !body.body){
        return res.status(500).json(
            {
                "status" : 500,
                "data" : "fail"
            }
        )
    }

    try {
        res.send("entry successfully added");
    } catch (error) {
        return res.status(500).send({
            status : 500,
            message : "failed "
        })
    }
});






