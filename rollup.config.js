import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel'
import jsx from 'acorn-jsx'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/main.ts',
  acornInjectPlugins: [jsx()],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      plugins: [autoprefixer()]
    }),
    typescript({ jsx: 'preserve' }),
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx']
    }),
    uglify()
  ],
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      plugins: [
        getBabelOutputPlugin({
          presets: ['@babel/preset-env']
        })
      ]
    },
    {
      file: 'dist/index.js',
      format: 'cjs',
      plugins: [
        getBabelOutputPlugin({
          presets: ['@babel/preset-env']
        })
      ]
    }
  ]
  // external: ['antd', 'react', 'react-dom']
}
