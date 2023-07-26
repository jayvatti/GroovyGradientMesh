# GroovyGradientMesh 🎨

[GroovyGradientMesh Demo](https://jayvatti.github.io/GroovyGradientMesh/)

<span style="font-family:Papyrus; font-size: 28px;">&#x1F4D7;</span> **WORK IN PROGRESS**

Welcome to **GroovyGradientMesh**, a fun and dynamic repository that makes your web background more alive than ever! This interactive project changes the background color based on your mouse movement, creating a smooth and aesthetic visual experience.

## Description

Built with the intent of turning your dull static backgrounds into groovy, energetic spaces, GroovyGradientMesh uses a radial gradient to create an immersive effect. The momentum and decay parameters control the fluidity and speed of the change. With a multi-gradient feature, the color scheme creates a bounce effect when the gradient "hits" the edges of the screen. 

## Features

- **Radial Gradient**: Craft a circular pattern of colors to add depth and dynamism to your background.

- **Momentum & Decay**: Control the smoothness and responsiveness of color transitions. These crucial parameters provide the 'groove' in GroovyGradientMesh. More on these later!

- **Momentum Amplifier**: Modify the intensity of the color transition. This factor increases or decreases the speed of the 'groove'.

- **Multi-Gradient**: Inject diversity and vibrancy into your color scheme, making it richer and more dynamic.

- **Padding**: A cool trick in the multi-gradient setup to prevent the gradients from getting 'stuck' at the screen's edge.

- **Bounce Effect**: The gradient transition doesn't have to end abruptly at the edges. Instead, the bounce effect allows a vibrant continuation. (Only for Mutli Gradient)
  
*Note: The 'Padding' feature is specific to the multi-gradient setup.*


## Development Progress 🚧

| Technology | Status |
|:----------:|:------:|
|   React    |   🚧   |
|   jQuery   |   🚧   |
|     DOM    |   ✔️   |

The project is primarily built in **React**, **jQuery**, and regular **DOM Manipulation**. Currently, the functionality with regular DOM manipulation is fully operational, while the implementations for React and jQuery are still in progress.

## Customization

In the `colors.json` file, you'll find all the pre-set color patterns. You're encouraged to change and add colors you prefer, making your web page as personalized as it can get!

## Momentum & Decay: 

These parameters control the fluidity and speed of color transitions, creating the smooth and immersive effect that defines GroovyGradientMesh.

- **Momentum**: Just like in physics, 'momentum' here governs the speed and direction of the color transition based on your mouse movement. The greater the momentum, the faster the transition, providing an enhanced visual experience.

- **Decay**: Decay controls how quickly the momentum slows down, thereby affecting how long the color transition effect lasts. A higher decay value means the effect will decay slower, leading to longer-lasting transitions.

Imagine your current momentum as a groovy dance move. The intensity of your dance (momentum) is really high initially, but as the song progresses, you start to slow down. That's where decay comes in! If your decay value is 0.95, it's like telling your dancer-self to reserve 5% of your energy every time you move, effectively reducing the intensity by 5% each time.


Mathematically, here's how it works:
```
- Initial Momentum = M (the original dance move's intensity)
- Momentum after 1 decay cycle = M * Decay = M * 0.95 (you're dancing just a bit slower)
- Momentum after 2 decay cycles = M * Decay^2 = M * (0.95)^2 (slowing down a little more)
- Momentum after i decay cycles = M * Decay^i = M * (0.95)^i (Momentum reduces by 5% each cycle, represented by (0.95)^i)
```
As the decay cycles increase, your momentum decreases

# **Momentum Amplifier** 
Momentum Amplifier is a factor that amplifies the momentum, allowing you to control the strength of the color transitions:

```javascript
momentumX = (mouseX / windowWidth - 0.5) * momentumAmplifier;
momentumY = (mouseY / windowHeight - 0.5) * momentumAmplifier;

```
Here, mouseX and mouseY represent the mouse's current position on the X and Y axes, respectively, and windowWidth and windowHeight are the dimensions of the window. Subtracting 0.5 centers the coordinates around zero, with -0.5 at the left or top edge and 0.5 at the right or bottom. By multiplying this result by momentumAmplifier, we determine how fast the gradient will change as the mouse moves across the window.

For example, if momentumAmplifier is set to 2, the transition effect is like a groovy dance at double speed, whereas a momentumAmplifier of 0.5 would make the transition slow and smooth, like a graceful waltz.

# **Padding & the "bounce effect": Multi-Gradient**
Padding gives some extra space beyond the edges where the gradients can 'bounce' back.

If the gradient moves beyond these boundaries, it "bounces" back, creating a unique effect that keeps the movement contained within the viewport.
``` javascript
color.currentX = (color.currentX || color.startX) + momentumX;
color.currentY = (color.currentY || color.startY) + momentumY;

if (color.currentX < -padding || color.currentX > 100 + padding) {
    momentumX *= -1;
    color.currentX = color.currentX < 0 ? -padding : 100 + padding;
}
if (color.currentY < -padding || color.currentY > 100 + padding) {
    momentumY *= -1;
    color.currentY = color.currentY < 0 ? -padding : 100 + padding;
}

```
The color's current position (color.currentX or color.currentY) is updated by adding the respective momentum. If this position falls outside the range of -padding to 100 + padding (i.e., if the dancer steps off the dance floor), we reverse the direction of momentum (like a dancer bouncing off the wall), and make sure the color's current position stays within the 'dance floor' by setting it to the respective edge's padding value.

#
By understanding the dynamics of momentum, decay, the momentum amplifier, and the role of padding in multi-gradients, we can choreograph an ever-changing, interactive color dance that brings a vibrant, groovy feel to your static web backgrounds. 



