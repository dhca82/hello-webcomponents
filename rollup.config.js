import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import css from 'rollup-plugin-css-only'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve(),
    commonjs(),
    css({
      output: 'bundle.css',
    }),
  ],
}
