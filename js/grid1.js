	window.onload = function() {
		var v;
		var gridCreator = function(v) {
			var destination = document.getElementById("gridSquare");
			var rowEl;
			var cell;
			for (var i = 0; i < v; i++) {
				rowEl = document.createElement("div");
				rowEl.className = "gridRow";
				var $gridSquare = $("#gridSquare");
				var heightSize = ($gridSquare.height() - v) / v;
				rowEl.style.height = heightSize + "px";

				for(var j = 1; j <= v; j++ ) {
					cell = document.createElement("div");
					cell.className = "gridCell";
					rowEl.appendChild(cell);
					cell.style.height = rowEl.style.height;
					cell.style.width = rowEl.style.height;
				}
				destination.appendChild(rowEl);
			}
		}

		gridCreator(16);

		var gridCell = document.getElementsByClassName("gridCell");
		var randomizer = function() {
			return Math.floor(Math.random() * 255);
		}

		document.getElementById("resetButton").onclick = function() {
			document.getElementById("gridSquare").innerHTML = "";
			var newGridString = window.prompt("How many squares per side should the new grid be?", "64");
			gridCreator(newGridString);
			for (var i = 0; i < gridCell.length; i++) {
				gridCell[i].onmouseover = function() {
					this.style.backgroundColor = "rgb("+randomizer()+", "+randomizer()+", "+randomizer()+")";
				}
			}
		};

		document.getElementById("bWButton").onclick = function() {
			document.getElementById("gridSquare").innerHTML = "";
			var newGridString = window.prompt("How many squares per side should the new grid be?", "64");
			gridCreator(newGridString);
			for (var i = 0; i < gridCell.length; i++) {
				gridCell[i].onmouseover = function() {
					this.css('opacity', '+=0.1');
				}
			}
		}

		for (var i = 0; i < gridCell.length; i++) {
			gridCell[i].onmouseover = function() {
				this.style.backgroundColor = "rgb("+randomizer()+", "+randomizer()+", "+randomizer()+")";
			}
		};
	}