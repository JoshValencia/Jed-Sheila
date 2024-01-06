import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "i7adzWaAGxmrkczqheXxTw", // ID of a project you are using
      token:
        "wzv9Tc10Z50uXtXiCXFvFNPqBnTc4fVubGjrRTmr9jV6EW3k17Hh2ENV0LjbJ859GD0hPa90lzFczbYRSF4w", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
