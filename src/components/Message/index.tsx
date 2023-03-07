import { component$ } from "@builder.io/qwik";
import "./styles.sass";

export interface Props {
  mention?: boolean;
}

export const Message = component$((props: Props) => {
  return (
    <>
      <div class={`message${props.mention ? " mention" : ""}`}>
        <div class="avatar"></div>
        <div class="infos">
          <div class="name">
            <strong class="name">Heimsk</strong>
            <span class="timestamp">Hoje às 14:27</span>
          </div>
          <span class="content">
            Essa é uma mensagem totalmente aleatoria usada para demonstrar esse
            componente de interface
          </span>
        </div>
      </div>
    </>
  );
});
