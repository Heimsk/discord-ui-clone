import { component$ } from "@builder.io/qwik";
import { ServerButton } from "../ServerButton";

import "./styles.sass";

export const ServerList = component$(() => {
  return (
    <>
      <div id="serverlist">
        <ServerButton />
        <Separator />
        <ServerButton selected />
        <ServerButton mentions={35} />
        <ServerButton hasNotifications />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton />
      </div>
    </>
  );
});

export const Separator = component$(() => {
  return (
    <>
      <div class="separator"></div>
    </>
  );
});
