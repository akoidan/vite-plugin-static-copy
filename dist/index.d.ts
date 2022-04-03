import { Plugin } from 'vite';
import { WatchOptions } from 'chokidar';

declare type Target = {
    /**
     * path or glob
     */
    src: string | string[];
    /**
     * destination
     */
    dest: string;
    /**
     * rename
     */
    rename?: string;
};
declare type ViteStaticCopyOptions = {
    /**
     * Array of targets to copy.
     */
    targets: Target[];
    /**
     * Remove the directory structure.
     * @default true
     */
    flatten?: boolean;
    watch?: {
        /**
         * Watch options
         */
        options?: WatchOptions;
        /**
         * Reloads page on file change when true
         * @default false
         */
        reloadPageOnChange?: boolean;
    };
};

declare const viteStaticCopy: (options: ViteStaticCopyOptions) => Plugin[];

export { Target, ViteStaticCopyOptions, viteStaticCopy };
