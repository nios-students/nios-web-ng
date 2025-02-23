import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
// Used this as reference: https://github.com/FOSSonTop/website/tree/main/docs/.vitepress/config.mts
function genSidebarConfig(doc: string){
  return {
    documentRootPath: 'docs',
    scanStartPath: doc,
    resolvePath: `/${doc}/`,
    collapsed: false,
    hyphenToSpace: true,
    capitalizeEachWords: true,
    underscoreToSpace: true,
    includeEmptyFolder: false,
    sortMenusByName: false,
    excludePattern: ['README**'],
    sortMenusByFrontmatterOrder: true,
    includeFolderIndexFile: true,
    useTitleFromFrontmatter: true
  }
};

const vitePressSidebarOptions = [genSidebarConfig("wiki")]

const vitePressOptions = {
  title: "NIOS Students",
  description: "Simple Guides made by NIOS Students for NIOS Students.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/home/start/' },
      { text: 'How To', link: '/home/how-to/' },
      { text: 'Chat Groups', link: '/wiki/chat/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nios-students' }
    ],
    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: [
      /^mailto:/,
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    ],
    math: true,
    editLink: {
      pattern: ({ filePath }) => {
      	const rest = filePath.split("/").slice(1).join("/")
        return `https://github.dev/nios-students/docs/blob/contents/${rest}`
      }
    },
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            fuzzy: 0.3
          }
        }
      }
    }
  }
}

const config = defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
const configWithMermaid = withMermaid(config)

export default configWithMermaid
