import cosmiconfig, { LoaderEntry } from "cosmiconfig";
import TypeScriptLoader from "@endemolshinegroup/cosmiconfig-typescript-loader";
import { resolve, parse } from "path";

export interface Config {
  config?: string;
  headers?: Record<string, string>;
  url?: string;
  outputDir?: string;
  usePost: boolean;
  noComments: boolean;
  noPrettier: boolean;
  typescript: boolean;
}

const MODULE_NAME = "gqless";
const defaultFileNames = [
  "package.json",
  `${MODULE_NAME}.config.js`,
  `${MODULE_NAME}.config.ts`
];

const loaders = {
  ".json": (cosmiconfig as any).loadJson as LoaderEntry,
  ".js": (cosmiconfig as any).loadJs as LoaderEntry,
  ".ts": {
    async: TypeScriptLoader
  }
};

export const getConfig = async ({configFileName}: {configFileName?: string} = {}): Promise<Config | null> => {
  const configPath = configFileName && parse(resolve(configFileName)).dir;
  const explorer = cosmiconfig(MODULE_NAME, {
    searchPlaces: configFileName ? [configFileName] : defaultFileNames,
    loaders
  });

  let loadedConfig;
  try {
    loadedConfig = await explorer.search(configPath);
  } catch (error) {
    throw new Error(`A config file failed to load: ${error}`);
  }

  if (configPath && !loadedConfig) {
    throw new Error(`A config file failed to load at ${configPath}. This is likely because this file is empty or malformed.`);
  }


  return loadedConfig && (loadedConfig.config as Config);
}