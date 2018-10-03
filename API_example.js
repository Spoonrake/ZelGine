

//----SCENEMANAGER----
//ADD NEW SCENE
myscene = new Scene();


//ADD OBEJCT TO SCENE
// 1) when creating the object
myobject = new Object("scene_name" = myscene, perspective_mode = "lup", x = 100, y = 100, width = 100, height = 100, model_path = "./img/model.png", model_width = 100, model_height = 100, physicality = true, layer = "myFirstLayer", "static" = false, transfer = coord);
//scene_name - scene which object will be placed
//perspective_mode - origin of coordinates for width and height
//x , y - coord of object on this scene_name
//width, height - physical parametrs for computing collisions
//model_path - path of graphic model_path
//model_width, model_height - width and height for picture of model
//physicality (true | false) - does the object has collisions
//    Default: true
//static (true | false) - will the object have a static posiion (true for menu and interface element like a hitpoints of players)
//    Default: false
//transfer ("full" | "coord") - if you want add one object into two scene and for this object parallel work in two scene (for complex two and many scenes systems)  ps mb scenes layer
//    Default: coord

// 2) when object created
myobject2 = new Object(perspective_mode = "lup", width = 100, height = 100, model_path = "./img/model.png", model_width = 100, model_height = 100, physicality = true, "static" = false)
myscene.addObject(myobject2, "x" = 100, "y" = 100, "layer" = myFirstLayer, transfer = "full")


//DELETE OBJECT FROM SCENE
myscene.deleteObject(object = myobject2)
//object - object who will be deleted

//SET SOME SCENE PARAMETRS
myscene.someParam = someValue

myscene.set(someParam, someValue)   //more dificulty way
