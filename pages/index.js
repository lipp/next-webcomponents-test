import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.17/webcomponents-loader.js' />
      <link rel='import' href='/static/foo-bar.html' />
    </Head>
    <h1>Hello Web-Components</h1>
    <foo-bar></foo-bar>
  </div>
)
