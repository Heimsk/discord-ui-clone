import { component$ } from "@builder.io/qwik";
import { UserButton } from "../UserButton";
import "./styles.sass";

export const UserList = component$(() => {
  return (
    <>
      <div id="userlist">
        <Role />
        <Role />
      </div>
    </>
  );
});

export const Role = component$(() => {
  return (
    <>
      <div class="role">
        <div class="header">
          <span>disponivel</span>
        </div>

        <UserButton />
        <UserButton />
      </div>
    </>
  );
});
