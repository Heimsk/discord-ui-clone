import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Discordium",
  meta: [
    {
      name: "description",
      content:
        "A lightweight, fast and customizable alternative to Discord official client.",
    },
  ],
};
