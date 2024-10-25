import { defineThemeConfig } from "vuepress-theme-plume";
import { navbar } from "./navbar";
import { notes } from "./notes";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  //   logo: "https://theme-plume.vuejs.press/plume.png",
  logo: "https://tse2-mm.cn.bing.net/th/id/OIP-C.9G5zpkH0ofiXdX21TjTpfgHaHa?pid=ImgDet&w=60&h=60&c=7&dpr=1.5&rs=1",
  // your git repo url
  docsRepo: "",
  docsDir: "docs",
  home: "/", //首页的路径，默认是根目录
  appearance: "dark",

  profile: {
    avatar:
      "https://tse3-mm.cn.bing.net/th/id/OIP-C.fIuv1OoksFyYE3c_THBCAAAAAA?rs=1&pid=ImgDetMain",
    name: "Tubao Blog",
    description: "我自为我",
    circle: true,
    location: "zhejiang, China",
    organization: "杭州 tubao",
  },

  navbar,
  notes,
  social: [
    { icon: "github", link: "/" },
    { icon: "twitter", link: "/" },
    { icon: "qq", link: "/" },
  ],

  autoFrontmatter: {
    permalink: true,
    createTime: true,
    title: true,
  },
});
