// Creamos la configuración básica del juego
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

// Inicializamos el juego
var game = new Phaser.Game(config);

// Cargamos la imagen en el pre-cargador
function preload() {
    this.load.image('imagen', 'nft.jpg');
}

// Creamos la imagen en el centro de la pantalla
function create() {
    var imagen = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'imagen');
}
