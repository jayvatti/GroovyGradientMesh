# GroovyGradientMesh 🎨

Welcome to **GroovyGradientMesh**, a fun and dynamic repository that makes your web background more alive than ever! This interactive project changes the background color based on your mouse movement, creating a smooth and aesthetic visual experience.

## Description

Built with the intent of turning your dull static backgrounds into groovy, energetic spaces, GroovyGradientMesh uses a radial gradient to create an immersive effect. The momentum and decay parameters control the fluidity and speed of the change. With a multi-gradient feature, the color scheme creates a bounce effect when the gradient "hits" the edges of the screen. 

## Features

- **Radial Gradient**: Craft a circular pattern of colors to add depth and dynamism to your background.
- **Momentum & Decay**: Control the smoothness and responsiveness of color transitions. These crucial parameters provide the 'groove' in GroovyGradientMesh. More on these later!
- **Multi-Gradient**: Inject diversity and vibrancy into your color scheme, making it richer and more dynamic.
- **Bounce Effect**: The gradient transition doesn't have to end abruptly at the edges. Instead, the bounce effect allows a vibrant continuation. (Only for Mutli Gradient)

## Development Progress 🚧

| Technology | Status |
|:----------:|:------:|
|   React    |   🚧   |
|   jQuery   |   🚧   |
|     DOM    |   ✔️   |

The project is primarily built in **React**, **jQuery**, and regular **DOM Manipulation**. Currently, the functionality with regular DOM manipulation is fully operational, while the implementations for React and jQuery are still in progress.

## Customization

In the `colors.json` file, you'll find all the pre-set color patterns. You're encouraged to change and add colors you prefer, making your web page as personalized as it can get!

## Momentum & Decay: The Groovy Math Behind the Magic 🎩🔢

Wondering what brings the 'groove' in GroovyGradientMesh? **Momentum** and **Decay**. These parameters control the fluidity and speed of color transitions, creating the smooth and immersive effect that defines GroovyGradientMesh.

- **Momentum**: Just like in physics, 'momentum' here governs the speed and direction of the color transition based on your mouse movement. The greater the momentum, the faster the transition, providing an enhanced visual experience.

- **Decay**: Decay controls how quickly the momentum slows down, thereby affecting how long the color transition effect lasts. A higher decay value means the effect will decay slower, leading to longer-lasting transitions.

And now, let's bring in some fun math!

Imagine your current momentum as a groovy dance move. The intensity of your dance (momentum) is really high initially, but as the song progresses, you start to slow down. That's where decay comes in! If your decay value is 0.95, it's like telling your dancer-self to reserve 5% of your energy every time you move, effectively reducing the intensity by 5% each time.

```
Mathematically, here's how it works:
- Initial Momentum = M (the original intensity)
- Momentum after 1 decay cycle = M * Decay = M * 0.95 (a bit slower)
- Momentum after 2 decay cycles = M * Decay^2 = M * (0.95)^2 (slowing down a little more)
```

As the decay cycles increase, your momentum decreases

5 centers the coordinates aro
