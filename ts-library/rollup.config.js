import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import versionInjector from 'rollup-plugin-version-injector';
import del from 'rollup-plugin-delete'
import pkg from './package.json';

const globals = {
};

export default {
    input: 'src/index.ts',
    output: [
        {
            file: path.resolve(__dirname, pkg.main),
            format: 'cjs',
            globals,
            exports: 'named',
        },
        {
            file: path.resolve(__dirname, pkg.module),
            format: 'es',
            globals,
            exports: 'named',
        },
        {
            file: path.resolve(__dirname, pkg.unpkg),
            format: 'umd',
            name: pkg.name, // 全局变量名称
            globals,
            exports: 'named',
        },
        {
            file: path.resolve(__dirname, pkg.browser),
            format: 'umd',
            name: pkg.name,
            plugins: [terser()],
            globals,
            exports: 'named',
        }
    ],
    external: [], // 屏蔽要打入的包
    plugins: [
        versionInjector(),
        typescript(),
        resolve({
            browser: true,
            preferBuiltins: true,
            mainFields: ['browser']
        }),
        json(),
        commonjs(),
        babel({ 
            exclude: 'node_modules/**',
            babelHelpers: 'bundled', 
            extensions: [".ts", ".js", ".tsx"],
        }),
        del({ 
            targets: [`${pkg.main.split('/')[0]}/*`, `${pkg.module.split('/')[0]}/*`, `${pkg.browser.split('/')[0]}/*`]
        })
    ]
};
