const {
  Application,
  Sprite,
  Loader,
  Renderer
} = PIXI;

const app = new Application({
  width: 512,
  height: 512,
  backgroundColor: 0x333333,
  antialias: true
});

document.body.appendChild(app.view);

const loader = new Loader();
const renderer = new Renderer();

const resources = loader.resources;
const { stage, screen } = app;

loader
  .add('robot', 'assets/robot.json')
  .add('zombie', 'assets/zombie.json')
  .load(setup);

function setup() {
  const robotTextureMap = resources.robot.textures;
  const zombieTextureMap = resources.zombie.textures;

  const robotIdleTexture = robotTextureMap['character_robot_idle.png'];
  const zombieIdleTexture = zombieTextureMap['character_zombie_idle.png'];

  const robot = new Sprite(robotIdleTexture);
  const zombie = new Sprite(zombieIdleTexture);

  robot.x = robot.width / 3;
  robot.y = screen.height / 2;
  robot.scale.set(.3, .3);

  stage.addChild(robot);

  zombie.x = screen.width - robot.width;
  zombie.y = screen.height / 2;

  zombie.scale.set(.3, .3);
  stage.addChild(zombie);

  renderer.render(stage);
}

