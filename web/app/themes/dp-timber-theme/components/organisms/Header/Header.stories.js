import "./Header.scss";
import headerTemplate from "./Header.twig";
// Get Data From Yml file
import menuData from "./menu.yml";

export default {
  title: "Organisms/Navbar",
  tags: ["autodocs"],
  argTypes: {
    siteTitle: { control: "text" },
  },
  render: ({ label, ...args }) => {
    return headerTemplate({ label, ...args });
  },
};

export const Default = {};

Default.args = {
  siteTitle: "Shayaan",
  menuData: menuData.menu,
};
