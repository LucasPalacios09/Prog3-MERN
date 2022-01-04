import React from "react";
import GameCard from "../Games/GameCard";
import "./MainPage.scss";

export default function MainPage() {
  return (
    <div>
      <h1>BIENVENIDXS a PlayGround!!!</h1>
      <p>
        En nuestra pagina podras tener acceso y jugar a una gran cantidad de
        juegos. Cuenta con un registro de usuarios y un ranking con el puntaje
        acumulado por cada usuario
      </p>
      <div id="cards-container">
        <GameCard
          img="https://www.google.com/logos/fnbx/snake_arcade/cta_alt.png"
          title="Snake Game"
          description="El Snake es un videojuego lanzado a mediados de la década del 70 que ha mantenido su popularidad desde entonces, convirtiéndose en un clásico. En 1998, el Snake obtuvo una audiencia masiva tras convertirse en un juego estándar pre-grabado en los teléfonos Nokia."
        ></GameCard>
        <GameCard
          img="https://w7.pngwing.com/pngs/540/994/png-transparent-3d-tic-tac-toe-multiplayer-tictactoe-invincible-tic-tac-toe-game-tac-angle-leaf-text.png"
          title="Tres en linea"
          description="El tres en línea, también conocido como ceros y cruces, tres en raya, cerito cruz, michi, triqui, cuadritos, juego del gato, gato, tatetí, totito, triqui traka, equis cero, tic-tac-toe o la vieja es un juego de lápiz y papel entre dos jugadores: O y X, que marcan los espacios de un tablero de 3×3 alternadamente."
        ></GameCard>
        <GameCard img="https://www.google.com/logos/fnbx/snake_arcade/cta_alt.png"></GameCard>
        <GameCard img="https://www.google.com/logos/fnbx/snake_arcade/cta_alt.png"></GameCard>
      </div>
    </div>
  );
}
