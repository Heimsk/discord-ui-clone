import { component$ } from "@builder.io/qwik";

import "./styles.sass";

export const ServerName = component$(() => {
  return (
    <>
      <div id="servername">
        <span>Ivebravo</span>
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="5"
            stroke="currentColor"
            style={{ width: "15px", height: "15px" }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </i>
      </div>
    </>
  );
});
