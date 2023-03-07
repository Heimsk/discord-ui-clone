import { component$ } from "@builder.io/qwik";

import "./styles.sass";

interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

export const ServerButton = component$((props: Props) => {
  return (
    <>
      <div
        data-mentions={props.mentions || 0}
        class={`serverbutton${props.selected ? " active" : ""}${
          props.isHome ? " home" : ""
        }${props.mentions && props.mentions > 0 ? " mentions" : ""}${
          props.hasNotifications ? " notification" : ""
        }`}
      ></div>
    </>
  );
});
