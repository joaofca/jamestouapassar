function alertSeveralTimes() {
    alert("Hello!");
    alert("Look, we can run several messages in a row.");
    alert("Annoyed yet?");
}

function changeCanvasSize() {
	var gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = 600;
    gameCanvas.height = 800;
	
	var avatarImage = new Image();
	avatarImage.src = "http://cdn.tutsplus.com/active/uploads/legacy/tuts/342_html5AvoiderGameTutorial/tutorial/avatar.png";
	
	gameCanvas.getContext("2d").drawImage(avatarImage, Math.random() * 100, Math.random() * 100);
}

function drawAvatar() {
    var gameCanvas = document.getElementById("gameCanvas");
    var avatarImage = new Image();
     
    avatarImage.src = "http://cdn.tutsplus.com/active/uploads/legacy/tuts/342_html5AvoiderGameTutorial/tutorial/avatar.png";
    gameCanvas.getContext("2d").drawImage(avatarImage, Math.random() * 100, Math.random() * 100);
	
	gameCanvas.addEventListener("mousemove", redrawAvatar);
}

function redrawAvatar(mouseEvent) {
	var gameCanvas = document.getElementById("gameCanvas");
    var avatarImage = new Image();
	var enemyImage = new Image();
     
    avatarImage.src = "http://cdn.tutsplus.com/active/uploads/legacy/tuts/342_html5AvoiderGameTutorial/tutorial/avatar.png";
	enemyImage.src = "http://cdn.tutsplus.com/active/uploads/legacy/tuts/342_html5AvoiderGameTutorial/tutorial/enemy.png";
    gameCanvas.getContext("2d").drawImage(avatarImage, mouseEvent.offsetX, mouseEvent.offsetY);
    gameCanvas.getContext("2d").drawImage(enemyImage, 250, 150);
	// if (mouseEvent.offsetX > 150 && mouseEvent.offsetX < 250 && mouseEvent.offsetY > 100 && mouseEvent.offsetY < 200) {
        // alert("Stay out of the center!");
    //}
}