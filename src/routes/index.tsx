import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ChannelData } from "~/components/ChannelData";
import { ChannelInfo } from "~/components/ChannelInfo";
import { ChannelList } from "~/components/ChannelList";
import { ServerList } from "~/components/ServerList";
import { ServerName } from "~/components/ServerName";
import { UserInfo } from "~/components/UserInfo";
import { UserList } from "~/components/UserList";

export default component$(() => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <ServerList />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <ServerName />
          <ChannelList />
          <UserInfo />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <ChannelInfo />
          <ChannelData />
          <div
            style={{ position: "absolute", top: "46px", right: 0, bottom: 0 }}
          >
            <UserList />
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Discordium",
  meta: [
    {
      name: "description",
      content: "Discord lightweight alternative.",
    },
  ],
};
