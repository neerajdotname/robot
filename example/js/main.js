var makeExample = function(nr, code, options) {

	var editor, example = new window.jsdares.robot.ProgramApplet($('.robot-example-' + nr), options);

	var update = function() {
		var func = null;
		try {
			func = eval('(function (robot) { ' + editor.getValue() + '});');
			if (func) {
        example.setProgram(func);
      }
		} catch(e) {}
	};

	editor = new CodeMirror($('.robot-example-' + nr + '-editor')[0], {
		value: code,
		onChange: update
	});

	update();
};

var text =  'robot.drive(1)\n' +
            'robot.turnRight()\n' +
            'robot.drive(2)\n';

//NEERAJ
//var text =  'robot.drive(1)\n' +
            //'robot.turnRight()\n' +
            //'robot.drive(2)\n'+
            //'robot.turnLeft()\n' +
            //'robot.drive(2)\n'+
            //'robot.turnLeft()\n' +
            //'robot.drive(3)' ;

var state = { "columns": 5,
              "rows":5,
              "initialX":2,
              "initialY":4,
              "initialAngle":90,
              "mazeObjects":5,
              "verticalActive":[
                [false,false,false,false,false],
                [false,false,false,false,false],
                [false,false,false,false,false],
                [false,false,false,false,false],
                [false,false,false,false,false]
              ],
              "horizontalActive":[
                [false,false,false,true,false],
                [false,false,false,true,false],
                [false,false,false,true,false],
                [false,false,false,true,false],
                [false,false,false,false,false]
              ],
              "blockGoal":[
                [false,false,false,false,false],
                [false,true,false,false,false],
                [false,false,false,false,false],
                [false,false,false,false,false],
                [false,false,false,false,false]
              ]
};

var _state = JSON.stringify(state);

makeExample(1, text, { readOnly: false, blockSize: 48, state: _state });












var state = {   "columns":8,
                "rows":8,
                "initialX":3,
                "initialY":4,
                "initialAngle":90,
                "mazeObjects":50,
                "verticalActive":[
                  [false,false,false,false,false,false,false,false],
                  [false,false,true,true,true,false,true,false],
                  [false,true,false,false,true,false,false,true],
                  [false,false,true,true,false,false,true,false],
                  [false,true,true,false,false,false,false,false],
                  [false,false,false,true,false,true,true,false],
                  [false,false,true,false,true,true,false,false],
                  [false,false,false,true,true,true,true,false]
                ],
                "horizontalActive":[
                  [false,true,false,false,true,false,false,true],
                  [false,true,false,true,false,false,true,false],
                  [false,true,true,false,true,false,true,false],
                  [false,true,false,false,true,true,true,false],
                  [false,false,true,true,false,true,false,true],
                  [false,true,false,false,true,false,false,true],
                  [false,true,true,true,false,false,false,true],
                  [false,true,true,false,false,false,false,false]
                ],
                "blockGoal":[
                  [false,false,false,true,false,false,false,false],
                  [false,false,false,false,false,false,false,false],
                  [false,false,false,false,false,false,false,false],
                  [false,false,false,false,false,false,false,false],
                  [false,false,false,false,false,false,false,false],
                  [false,false,false,false,false,false,false,false],
                  [false,false,false,false,false,false,false,false],
                  [false,false,false,false,false,false,false,false]
                ],
                "numGoals":1 };

var _state = JSON.stringify(state);

var exampleTop = new window.jsdares.robot.ProgramApplet( $('.robot-example-top'), { readOnly: false, blockSize: 64, state: _state });

exampleTop.setProgram(function (robot) {
	for (var i=0; i<400; i++) {

		if (robot.detectGoal()) break;

		robot.turnLeft();

		if (robot.detectWall()) {
			robot.turnRight();
		}

		if (robot.detectWall()) {
			robot.turnRight();
		}

		if (robot.detectWall()) {
			robot.turnRight();
		}

		if (robot.detectWall()) {
			break;
		}

    //NEERAJ
		//robot.drive(1);
	}
});


