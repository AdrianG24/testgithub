1) render - canvas and WebGL

2) 
"visible=false" turns off everything, including transform updates of element and children.
"renderable=false" turns off render and interaction - взаэмодыя.
"alpha=0" doesnt even affect interaction.

// 3) заміна скіна спрайта
var texture01 = PIXI.Texture.fromFrame('frame01.png');var texture02 = PIXI.Texture.fromFrame('frame02.png');
var sprite = new PIXI.Sprite(texture01); - робиш дефолтний спрайт з певною картинкою
sprite.setTexture(texture02); - міняєш коли треба

// 4) `cacheAsBitmap`
`cacheAsBitmap` (temporarily) turns all of those objects into one object.
anyContainer.cacheAsBitmap = true;
But, if you set `cacheAsBitmap` back to `false`, all those objects will start moving again. 
// 5) mask 
створюєш спрайт, створюєш конструктор класу PIXI.Graphics, рендериш його і потім можеш за допомогою властивості
mask в графікс накладати його поверх спрайту
// 6) anchor and pivot
The anchor is the attachment point for a texture (normalized to the size of the sprite), 
the pivot point is the point around which an object rotates (in pixel values).
pivot affects the *transform* of the object. That means position and rotation.
// 7) Graphics
The Graphics class is primarily used to render primitive shapes such as lines, 
circles and rectangles to the display, and to color and fill them.
 However, you can also use a Graphics object to build a list of primitives to use as a mask
//  8)
Layer extends {@link PIXI.Container} можна додавати спрайти по z-індексу
// 9) If grafix over button how will change interactivity
можна спробувати збільшити hitArea property of your DisplayObject. 
// 10) PIXI aplication 
Зручний клас для створення нової програми PixiJS.
Цей клас автоматично створює рендерер, тікер і кореневий контейнер.
// 11) How to get child
getChildAt (index in PIXI.Container), getChildByName(PIXI.DisplayObject), getChildIndex(PIXI.Container)