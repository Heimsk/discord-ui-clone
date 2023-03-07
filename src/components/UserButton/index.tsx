import { component$ } from "@builder.io/qwik";
import "./styles.sass";

export const UserButton = component$(() => {
  return (
    <>
      <div class="userbutton">
        <div class="avatar"></div>
        <div class="infos">
          <strong>
            Heimsk <span>BOT</span>
          </strong>
          <span>
            "O que não provoca minha morte faz com que eu fique mais forte."
          </span>
        </div>
      </div>
    </>
  );
});
