import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'wc-icons',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    // reactOutputTarget({
    //   componentCorePackage: '@wcui/icons-react',
    //   proxiesFile: '../wc-icons/src/components.ts',
    // }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
