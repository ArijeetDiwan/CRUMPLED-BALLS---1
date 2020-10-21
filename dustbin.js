class Dustbin {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
     // this.body = Bodies.rectangle(x, y, width, height, options);
      //this.width = width;
      //this.height = height;
      
     // World.add(world, this.body);

    // boxPosition = width/2 + 50;
	//boxY = height-50; 
	
	leftBody = Bodies.rectangle(x, y, 20,100,{isStatic:true});
	rightBody = Bodies.rectangle(x+200, y ,100,{isStatic:true});
	baseBody = Bodies.rectangle(x+100, y+45, 200,20,{isStatic:true});
	left.shapeColor="red";
	right.shapeColor="red";
	base.shapeColor="red";
	World.add(world, leftBody);
	World.add(world, rightBody);
	World.add(world, baseBody);
    }
    display(){
        var pos=this.body.position;
         var angle = this.body.angle;
        
      push();
      translate(pos.x, pos.y);
rotate(angle);
     rectMode(CENTER);
      fill(255);
     rect(0, 0, this.width, this.height);
     pop();

 var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
rotate(angle);
    rectMode(CENTER);
     fill(255);
rect(0, 0, this.width, this.height);
      pop();

     var angle = this.body.angle;
      push();
    translate(pos.x, pos.y);
     rotate(angle);
    rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  