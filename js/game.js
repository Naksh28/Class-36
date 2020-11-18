class Game{
    constructor() {

    }

    getState(){
        database.ref('gameState').on("value", (data)=>{
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({gameState: state});
    }

    start(){
        if (gameState === 0){
            var player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exist()){
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();
        }

        var car1 = createSprite(100, 200);
        var car2 = createSprite(300, 200);
        var car3 = createSprite(500, 200);
        var car4 = createSprite(700, 200);
    }

    play(){


        drawSprites();
    }

    end(){
        game.update(2);
    }
}