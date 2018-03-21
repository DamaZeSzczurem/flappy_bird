var mainState = {
	preload: function(){
		game.load.image('bird', 'bird.png');
		//wrzucanie plików z obrazkami i audio
		

	},

	create: function(){
		game.stage.backgroundColor = '#f44242'; //zmieniliśmy kolor tła
		game.physics.startSystem(Phaser.Physics.ARCADE); //włączamy fizykę


		this.bird = game.add.sprite(100, 400, 'bird');

		game.physics.arcade.enable(this.bird); //grawitacja dotyczy sprita bird

		this.bird.body.gravity.y = 1000;

	





		//ustawianie na miejscu obiektów, które mają
		//się pojawić po starcie gry

	},

	upload:function(){
		//co ma się zmieniać w czasie

	},
};
var game = new Phaser.Game(400, 500);
game.state.add('main', mainState);
game.state.start('main');


