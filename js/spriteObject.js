
var spriteObject =  {
	
		width: 20,
		height: 20,
		x: 0,
		y: 0,
		vx: 3,
		vy: 0,
		sourceX: 0,
		sourceY: 0,
		sourceWidth: 0,
		sourceHeight: 0,
		gravity: 2.1,
		explode: false,
		canShoot: true,
		visible: true,
		disappear: false,

		centerX: function() {
			return this.x + (this.width / 2);
		},
		centerY: function() {
			return this.y + (this.height / 2);
		},
		halfWidth: function() {
			return this.width / 2;
		},
		halfHeight: function()	{
			return this.height / 2;
		}
	};