(function(){
	self.Board = function(width,height){
		this.width = width;
		this.height = height;
		this.playing = false;
		this.gameOver = false;
		this.bars = [];
		this.ball = null;
	}

	self.Board.prototype={
		get elements(){
			var elements = this.bars;
			elements.push(this.ball);
			return elements;
		}
		
	};
})();


(function(){
	self.Bar = function(x,y,width,height,board){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.board = board;
		this.board.bars.push(this);
		this.kind = "rectangle";
	}

	self.Bar.prototype.method_name ={
		down: function(){

		},
		up: function(){

		}  
	};
})();

(function(){
	self.BoardView = function(canvas,board){
		this.canvas = canvas;
		this.canvas.width = board.width;
		this.canvas.height = board.height;
		this.board = board;
		this.ctx = canvas.getContext("2D");

	}

	self.BoardView.prototype = {
		draw: function(){
			for (var i = 0; i < this.board.elements.length; i++) {
				var actual_element = this.board.elements[i];
				draw(this.ctx,actual_element);
			}
		}
	}

	function draw(ctx,element){
		if(element !== null && element.hasOwnProperty("kind"){
			switch(element.kind){
			case "rectangle":
				ctx.fillRect(element.x,element.y,element.width,element.height);
				break;

			}
		}		
	}

	window.addEventListener("load", main);
})();


function main(){
	var board_instance = new Board(800,400);
	var canvas_instance = document.getElementById("main_canvas");
	var bar = new Bar(20,100,40,100,board_instance);
	var BoardView_instance = new BoardView(canvas_instance,board_instance);
	BoardView_instance.draw();
}
